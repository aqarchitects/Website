/**
 * Image Preloader Module
 *
 * A complete, reusable image preloading system for React applications.
 * Includes utilities for network detection, caching, and progress tracking.
 *
 * @module ImagePreloader
 * @category Reusable
 * @version 1.0.0
 *
 * @example
 * // Basic usage with hook
 * import { useImagePreloader } from './reusable/imagePreloader';
 *
 * function MyComponent() {
 *   const { preload, stats } = useImagePreloader({ debug: true });
 *
 *   useEffect(() => {
 *     preload(['/img1.jpg', '/img2.jpg'], 'high');
 *   }, []);
 *
 *   return <div>Progress: {stats.progress}%</div>;
 * }
 *
 * @example
 * // Global preloading with Provider
 * import { PreloadProvider, usePreload } from './reusable/imagePreloader';
 *
 * // In App.jsx
 * <PreloadProvider
 *   config={{ debug: true }}
 *   autoStart={true}
 *   initialUrls={imageUrls}
 * >
 *   <App />
 * </PreloadProvider>
 *
 * // In any component
 * function MyComponent() {
 *   const { stats } = usePreload();
 *   return <div>{stats.loaded} images loaded</div>;
 * }
 *
 * @example
 * // Direct class usage
 * import ImagePreloader from './reusable/imagePreloader';
 *
 * const preloader = new ImagePreloader({
 *   onProgress: (loaded, total) => console.log(`${loaded}/${total}`),
 *   onComplete: () => console.log('Done!')
 * });
 *
 * preloader.preload(['/img1.jpg', '/img2.jpg'], 'high');
 */

// Core preloader
export { default as ImagePreloader } from "./imagePreloader.js";

// React hook
export { default as useImagePreloader } from "./useImagePreloader.js";

// Context provider
export { PreloadProvider, usePreload } from "./PreloadProvider.jsx";

// UI Components
export { default as PreloadIndicator } from "./PreloadIndicator.jsx";

// Network utilities
export {
  getConnectionType,
  getDownlinkSpeed,
  isMeteredConnection,
  isDataSaverEnabled,
  getConnectionSpeed,
  isSlowConnection,
  isFastConnection,
  shouldPreload,
  getNetworkInfo,
} from "./networkMonitor.js";

// Cache utilities
export {
  isCached,
  cacheImage,
  cacheImages,
  getCacheSize,
  getCacheQuota,
  clearCache,
  getCacheNames,
} from "./imageCache.js";

// Image extraction utilities
export {
  extractImagesFromObject,
  extractImagesFromArray,
  isValidImageUrl,
  filterBySize,
  deduplicateUrls,
  sortByPriority,
  extractAllImages,
} from "./imageExtractor.js";
