/**
 * Image Preloader Utility
 *
 * A reusable, high-performance image preloader with priority queue support.
 * Preloads images in the background without blocking the main thread.
 *
 * @module ImagePreloader
 * @category Utilities
 * @reusable true
 *
 * @example
 * import ImagePreloader from './imagePreloader';
 *
 * const preloader = new ImagePreloader({
 *   onProgress: (loaded, total) => console.log(`${loaded}/${total}`),
 *   onComplete: () => console.log('All images loaded!')
 * });
 *
 * preloader.preload(['/img1.jpg', '/img2.jpg'], 'high');
 */

class ImagePreloader {
  /**
   * Create an ImagePreloader instance
   * @param {Object} options - Configuration options
   * @param {Function} options.onProgress - Callback for progress updates (loaded, total, url)
   * @param {Function} options.onComplete - Callback when all images are loaded
   * @param {Function} options.onError - Callback for individual image errors (url, error)
   * @param {number} options.concurrency - Max concurrent image loads (default: 6)
   * @param {number} options.timeout - Timeout per image in ms (default: 30000)
   * @param {boolean} options.debug - Enable debug logging (default: false)
   */
  constructor(options = {}) {
    this.options = {
      onProgress: options.onProgress || (() => {}),
      onComplete: options.onComplete || (() => {}),
      onError: options.onError || (() => {}),
      concurrency: options.concurrency || 6,
      timeout: options.timeout || 30000,
      debug: options.debug || false,
    };

    // Priority queues
    this.queues = {
      critical: [], // Must load immediately
      high: [], // Important, load soon
      medium: [], // Normal priority
      low: [], // Load when idle
    };

    // State tracking
    this.loading = new Set(); // Currently loading URLs
    this.loaded = new Set(); // Successfully loaded URLs
    this.failed = new Set(); // Failed URLs
    this.cache = new Map(); // Image cache (URL -> Image object)
    this.active = 0; // Active concurrent loads
    this.paused = false; // Pause state
    this.aborted = false; // Abort state
  }

  /**
   * Add images to preload queue
   * @param {string|string[]} urls - Image URL(s) to preload
   * @param {string} priority - Priority level: 'critical', 'high', 'medium', 'low' (default: 'medium')
   * @returns {ImagePreloader} Returns this for chaining
   */
  preload(urls, priority = "medium") {
    const urlArray = Array.isArray(urls) ? urls : [urls];
    const validPriority = ["critical", "high", "medium", "low"].includes(
      priority,
    )
      ? priority
      : "medium";

    urlArray.forEach((url) => {
      // Skip if already loaded, loading, or failed
      if (
        this.loaded.has(url) ||
        this.loading.has(url) ||
        this.failed.has(url)
      ) {
        return;
      }

      // Add to appropriate queue
      if (!this.queues[validPriority].includes(url)) {
        this.queues[validPriority].push(url);
        this.log(`Added to ${validPriority} queue: ${url}`);
      }
    });

    // Start processing if not already running
    this.processQueue();

    return this;
  }

  /**
   * Process the queue and load images
   * @private
   */
  processQueue() {
    if (this.paused || this.aborted) return;

    // Process queues in priority order
    const priorities = ["critical", "high", "medium", "low"];

    for (const priority of priorities) {
      while (
        this.active < this.options.concurrency &&
        this.queues[priority].length > 0
      ) {
        const url = this.queues[priority].shift();
        this.loadImage(url);
      }

      // If we've filled our concurrency limit, stop
      if (this.active >= this.options.concurrency) break;
    }

    // Check if all done
    if (this.active === 0 && this.getTotalQueued() === 0) {
      this.onAllComplete();
    }
  }

  /**
   * Load a single image
   * @private
   * @param {string} url - Image URL to load
   */
  loadImage(url) {
    this.active++;
    this.loading.add(url);

    const img = new Image();
    let timeoutId;

    const cleanup = () => {
      clearTimeout(timeoutId);
      this.loading.delete(url);
      this.active--;
    };

    const onSuccess = () => {
      cleanup();
      this.loaded.add(url);
      this.cache.set(url, img);
      this.log(`✓ Loaded: ${url}`);
      this.options.onProgress(this.loaded.size, this.getTotalImages(), url);
      this.processQueue();
    };

    const onFailure = (error) => {
      cleanup();
      this.failed.add(url);
      this.log(`✗ Failed: ${url}`, error);
      this.options.onError(url, error);
      this.processQueue();
    };

    // Set timeout
    timeoutId = setTimeout(() => {
      onFailure(new Error("Timeout"));
    }, this.options.timeout);

    // Load image
    img.onload = onSuccess;
    img.onerror = () => onFailure(new Error("Load error"));
    img.src = url;
  }

  /**
   * Get total number of images (queued + loading + loaded + failed)
   * @returns {number} Total image count
   */
  getTotalImages() {
    return (
      this.getTotalQueued() +
      this.loading.size +
      this.loaded.size +
      this.failed.size
    );
  }

  /**
   * Get total queued images
   * @private
   */
  getTotalQueued() {
    return Object.values(this.queues).reduce(
      (sum, queue) => sum + queue.length,
      0,
    );
  }

  /**
   * Called when all images are processed
   * @private
   */
  onAllComplete() {
    if (!this.aborted) {
      this.log(
        `Complete! Loaded: ${this.loaded.size}, Failed: ${this.failed.size}`,
      );
      this.options.onComplete({
        loaded: this.loaded.size,
        failed: this.failed.size,
        total: this.getTotalImages(),
      });
    }
  }

  /**
   * Pause preloading
   */
  pause() {
    this.paused = true;
    this.log("Preloading paused");
  }

  /**
   * Resume preloading
   */
  resume() {
    this.paused = false;
    this.log("Preloading resumed");
    this.processQueue();
  }

  /**
   * Abort all preloading
   */
  abort() {
    this.aborted = true;
    this.queues = { critical: [], high: [], medium: [], low: [] };
    this.loading.clear();
    this.log("Preloading aborted");
  }

  /**
   * Clear all queues
   */
  clearQueues() {
    this.queues = { critical: [], high: [], medium: [], low: [] };
    this.log("Queues cleared");
  }

  /**
   * Get preloader statistics
   * @returns {Object} Statistics object
   */
  getStats() {
    return {
      queued: this.getTotalQueued(),
      loading: this.loading.size,
      loaded: this.loaded.size,
      failed: this.failed.size,
      total: this.getTotalImages(),
      active: this.active,
      paused: this.paused,
      aborted: this.aborted,
      progress:
        this.getTotalImages() > 0
          ? Math.round((this.loaded.size / this.getTotalImages()) * 100)
          : 0,
    };
  }

  /**
   * Check if a URL is loaded
   * @param {string} url - Image URL
   * @returns {boolean} True if loaded
   */
  isLoaded(url) {
    return this.loaded.has(url);
  }

  /**
   * Get cached image
   * @param {string} url - Image URL
   * @returns {Image|null} Cached image or null
   */
  getCachedImage(url) {
    return this.cache.get(url) || null;
  }

  /**
   * Debug logging
   * @private
   */
  log(...args) {
    if (this.options.debug) {
      console.log("[ImagePreloader]", ...args);
    }
  }

  /**
   * Reset preloader to initial state
   */
  reset() {
    this.abort();
    this.loaded.clear();
    this.failed.clear();
    this.cache.clear();
    this.aborted = false;
    this.paused = false;
    this.log("Preloader reset");
  }
}

export default ImagePreloader;
