/**
 * Image Cache Manager
 * 
 * A reusable utility for managing browser image cache.
 * Provides methods to check cache status and manage cached images.
 * 
 * @module ImageCache
 * @category Utilities
 * @reusable true
 * 
 * @example
 * import { isCached, getCacheSize, clearCache } from './imageCache';
 * 
 * if (isCached('/image.jpg')) {
 *   console.log('Image is cached!');
 * }
 */

/**
 * Check if an image is likely cached in browser
 * Note: This is a best-effort check, not 100% accurate
 * @param {string} url - Image URL to check
 * @returns {Promise<boolean>} True if image appears to be cached
 */
export const isCached = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'HEAD',
      cache: 'only-if-cached',
      mode: 'same-origin'
    });
    return response.ok;
  } catch {
    return false;
  }
};

/**
 * Preload a single image and add to browser cache
 * @param {string} url - Image URL to cache
 * @param {Object} options - Fetch options
 * @returns {Promise<boolean>} True if successfully cached
 */
export const cacheImage = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      cache: 'force-cache',
      ...options
    });
    
    if (response.ok) {
      // Force browser to cache by creating an image element
      const img = new Image();
      img.src = url;
      return true;
    }
    return false;
  } catch (error) {
    console.error(`[ImageCache] Failed to cache ${url}:`, error);
    return false;
  }
};

/**
 * Preload multiple images and add to browser cache
 * @param {string[]} urls - Array of image URLs to cache
 * @param {Function} onProgress - Progress callback (loaded, total)
 * @returns {Promise<Object>} Results object with success/failure counts
 */
export const cacheImages = async (urls, onProgress = null) => {
  const results = {
    success: 0,
    failed: 0,
    total: urls.length
  };

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const cached = await cacheImage(url);
    
    if (cached) {
      results.success++;
    } else {
      results.failed++;
    }

    if (onProgress) {
      onProgress(i + 1, urls.length);
    }
  }

  return results;
};

/**
 * Get estimated cache size (if Cache API is available)
 * @returns {Promise<number|null>} Cache size in bytes, or null if unavailable
 */
export const getCacheSize = async () => {
  if ('storage' in navigator && 'estimate' in navigator.storage) {
    try {
      const estimate = await navigator.storage.estimate();
      return estimate.usage || null;
    } catch (error) {
      console.error('[ImageCache] Failed to get cache size:', error);
      return null;
    }
  }
  return null;
};

/**
 * Get cache quota (if available)
 * @returns {Promise<Object|null>} Object with usage and quota, or null
 */
export const getCacheQuota = async () => {
  if ('storage' in navigator && 'estimate' in navigator.storage) {
    try {
      const estimate = await navigator.storage.estimate();
      return {
        usage: estimate.usage || 0,
        quota: estimate.quota || 0,
        usagePercent: estimate.quota 
          ? Math.round((estimate.usage / estimate.quota) * 100) 
          : 0
      };
    } catch (error) {
      console.error('[ImageCache] Failed to get cache quota:', error);
      return null;
    }
  }
  return null;
};

/**
 * Clear browser cache (requires Cache API)
 * Note: This only clears caches created via Cache API, not browser's HTTP cache
 * @param {string} cacheName - Name of cache to clear (default: 'images')
 * @returns {Promise<boolean>} True if successfully cleared
 */
export const clearCache = async (cacheName = 'images') => {
  if ('caches' in window) {
    try {
      const deleted = await caches.delete(cacheName);
      console.log(`[ImageCache] Cache "${cacheName}" cleared:`, deleted);
      return deleted;
    } catch (error) {
      console.error('[ImageCache] Failed to clear cache:', error);
      return false;
    }
  }
  return false;
};

/**
 * Get all cache names
 * @returns {Promise<string[]>} Array of cache names
 */
export const getCacheNames = async () => {
  if ('caches' in window) {
    try {
      return await caches.keys();
    } catch (error) {
      console.error('[ImageCache] Failed to get cache names:', error);
      return [];
    }
  }
  return [];
};

