/**
 * Image Preloader Module - Project Wrapper
 * 
 * This module re-exports the reusable imagePreloader components.
 * When the reusable directory is removed, copy the actual implementation here.
 * 
 * @module ImagePreloader
 */

// Re-export everything from the reusable module
export {
  ImagePreloader,
  useImagePreloader,
  PreloadProvider,
  usePreload,
  PreloadIndicator,
  getConnectionType,
  getDownlinkSpeed,
  isMeteredConnection,
  isDataSaverEnabled,
  getConnectionSpeed,
  isSlowConnection,
  isFastConnection,
  shouldPreload,
  getNetworkInfo,
  isCached,
  cacheImage,
  cacheImages,
  getCacheSize,
  getCacheQuota,
  clearCache,
  getCacheNames,
  extractImagesFromObject,
  extractAllImages,
  filterBySize,
} from "../../../reusable/imagePreloader";

