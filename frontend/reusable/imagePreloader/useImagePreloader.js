/**
 * useImagePreloader Hook
 * 
 * A reusable React hook for preloading images with progress tracking.
 * Provides an easy-to-use interface for the ImagePreloader utility.
 * 
 * @module useImagePreloader
 * @category Hooks
 * @reusable true
 * 
 * @example
 * import useImagePreloader from './useImagePreloader';
 * 
 * function MyComponent() {
 *   const { preload, stats, isLoading, isComplete } = useImagePreloader({
 *     debug: true
 *   });
 * 
 *   useEffect(() => {
 *     preload(['/img1.jpg', '/img2.jpg'], 'high');
 *   }, []);
 * 
 *   return <div>Progress: {stats.progress}%</div>;
 * }
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import ImagePreloader from './imagePreloader';

/**
 * Hook for preloading images
 * @param {Object} options - Configuration options
 * @param {Function} options.onProgress - Progress callback
 * @param {Function} options.onComplete - Completion callback
 * @param {Function} options.onError - Error callback
 * @param {number} options.concurrency - Max concurrent loads
 * @param {number} options.timeout - Timeout per image
 * @param {boolean} options.debug - Enable debug mode
 * @returns {Object} Preloader interface
 */
const useImagePreloader = (options = {}) => {
  const [stats, setStats] = useState({
    queued: 0,
    loading: 0,
    loaded: 0,
    failed: 0,
    total: 0,
    progress: 0,
    active: 0,
    paused: false,
    aborted: false
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const preloaderRef = useRef(null);

  // Initialize preloader
  useEffect(() => {
    preloaderRef.current = new ImagePreloader({
      ...options,
      onProgress: (loaded, total, url) => {
        const currentStats = preloaderRef.current.getStats();
        setStats(currentStats);
        setIsLoading(currentStats.loading > 0 || currentStats.queued > 0);
        
        if (options.onProgress) {
          options.onProgress(loaded, total, url);
        }
      },
      onComplete: (result) => {
        const currentStats = preloaderRef.current.getStats();
        setStats(currentStats);
        setIsLoading(false);
        setIsComplete(true);
        
        if (options.onComplete) {
          options.onComplete(result);
        }
      },
      onError: (url, error) => {
        if (options.onError) {
          options.onError(url, error);
        }
      }
    });

    return () => {
      if (preloaderRef.current) {
        preloaderRef.current.abort();
      }
    };
  }, []);

  /**
   * Preload images
   */
  const preload = useCallback((urls, priority = 'medium') => {
    if (preloaderRef.current) {
      setIsComplete(false);
      preloaderRef.current.preload(urls, priority);
      const currentStats = preloaderRef.current.getStats();
      setStats(currentStats);
      setIsLoading(true);
    }
  }, []);

  /**
   * Pause preloading
   */
  const pause = useCallback(() => {
    if (preloaderRef.current) {
      preloaderRef.current.pause();
      setStats(preloaderRef.current.getStats());
    }
  }, []);

  /**
   * Resume preloading
   */
  const resume = useCallback(() => {
    if (preloaderRef.current) {
      preloaderRef.current.resume();
      setStats(preloaderRef.current.getStats());
    }
  }, []);

  /**
   * Abort preloading
   */
  const abort = useCallback(() => {
    if (preloaderRef.current) {
      preloaderRef.current.abort();
      setStats(preloaderRef.current.getStats());
      setIsLoading(false);
    }
  }, []);

  /**
   * Clear queues
   */
  const clearQueues = useCallback(() => {
    if (preloaderRef.current) {
      preloaderRef.current.clearQueues();
      setStats(preloaderRef.current.getStats());
    }
  }, []);

  /**
   * Reset preloader
   */
  const reset = useCallback(() => {
    if (preloaderRef.current) {
      preloaderRef.current.reset();
      setStats(preloaderRef.current.getStats());
      setIsLoading(false);
      setIsComplete(false);
    }
  }, []);

  /**
   * Check if URL is loaded
   */
  const isLoaded = useCallback((url) => {
    return preloaderRef.current ? preloaderRef.current.isLoaded(url) : false;
  }, []);

  return {
    preload,
    pause,
    resume,
    abort,
    clearQueues,
    reset,
    isLoaded,
    stats,
    isLoading,
    isComplete
  };
};

export default useImagePreloader;

