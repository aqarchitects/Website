/**
 * Image URL Extractor Utility
 * 
 * A reusable utility for extracting image URLs from various data structures.
 * Useful for gathering all images that need to be preloaded.
 * 
 * @module ImageExtractor
 * @category Utilities
 * @reusable true
 * 
 * @example
 * import { extractImagesFromObject, extractAllImages } from './imageExtractor';
 * 
 * const urls = extractImagesFromObject(project, ['thumbnail', 'hero', 'gallery']);
 */

/**
 * Extract image URLs from a nested object
 * @param {Object} obj - Object to extract from
 * @param {string[]} keys - Keys to look for (e.g., ['image', 'thumbnail', 'src'])
 * @param {number} maxDepth - Maximum recursion depth (default: 5)
 * @returns {string[]} Array of unique image URLs
 */
export const extractImagesFromObject = (obj, keys = ['image', 'src', 'url'], maxDepth = 5) => {
  const urls = new Set();

  const extract = (current, depth = 0) => {
    if (depth > maxDepth || !current || typeof current !== 'object') {
      return;
    }

    // Check if current object has any of the target keys
    keys.forEach(key => {
      if (current[key]) {
        const value = current[key];
        
        // Handle string URLs
        if (typeof value === 'string' && isValidImageUrl(value)) {
          urls.add(value);
        }
        
        // Handle objects with nested URLs (e.g., { small: '...', large: '...' })
        if (typeof value === 'object') {
          extract(value, depth + 1);
        }
      }
    });

    // Recursively check all properties
    Object.values(current).forEach(value => {
      if (Array.isArray(value)) {
        value.forEach(item => extract(item, depth + 1));
      } else if (typeof value === 'object' && value !== null) {
        extract(value, depth + 1);
      }
    });
  };

  extract(obj);
  return Array.from(urls);
};

/**
 * Extract images from an array of objects
 * @param {Array} items - Array of objects
 * @param {string[]} keys - Keys to look for
 * @returns {string[]} Array of unique image URLs
 */
export const extractImagesFromArray = (items, keys = ['image', 'src', 'url']) => {
  const urls = new Set();
  
  items.forEach(item => {
    const itemUrls = extractImagesFromObject(item, keys);
    itemUrls.forEach(url => urls.add(url));
  });
  
  return Array.from(urls);
};

/**
 * Check if a string is a valid image URL
 * @param {string} url - URL to check
 * @returns {boolean} True if valid image URL
 */
export const isValidImageUrl = (url) => {
  if (typeof url !== 'string' || url.length === 0) {
    return false;
  }

  // Check if it's a valid URL format
  const urlPattern = /^(https?:\/\/|\/)/i;
  if (!urlPattern.test(url)) {
    return false;
  }

  // Check if it has an image extension
  const imageExtensions = /\.(jpg|jpeg|png|gif|webp|svg|bmp|ico)(\?.*)?$/i;
  return imageExtensions.test(url);
};

/**
 * Filter URLs by image size preference
 * @param {string[]} urls - Array of URLs
 * @param {string} sizePreference - Size preference: 'small', 'medium', 'large', 'all'
 * @returns {string[]} Filtered URLs
 */
export const filterBySize = (urls, sizePreference = 'all') => {
  if (sizePreference === 'all') {
    return urls;
  }

  const sizePatterns = {
    small: /small|400|thumbnail/i,
    medium: /medium|800/i,
    large: /large|1200|1920/i
  };

  const pattern = sizePatterns[sizePreference];
  if (!pattern) {
    return urls;
  }

  return urls.filter(url => pattern.test(url));
};

/**
 * Deduplicate URLs
 * @param {string[]} urls - Array of URLs
 * @returns {string[]} Deduplicated URLs
 */
export const deduplicateUrls = (urls) => {
  return Array.from(new Set(urls));
};

/**
 * Sort URLs by priority (critical images first)
 * @param {string[]} urls - Array of URLs
 * @param {string[]} priorityPatterns - Patterns for high-priority images
 * @returns {string[]} Sorted URLs
 */
export const sortByPriority = (urls, priorityPatterns = ['hero', 'thumbnail', 'featured']) => {
  return urls.sort((a, b) => {
    const aPriority = priorityPatterns.some(pattern => a.includes(pattern));
    const bPriority = priorityPatterns.some(pattern => b.includes(pattern));
    
    if (aPriority && !bPriority) return -1;
    if (!aPriority && bPriority) return 1;
    return 0;
  });
};

/**
 * Extract all images from a complex data structure
 * @param {Object|Array} data - Data to extract from
 * @param {Object} options - Extraction options
 * @param {string[]} options.keys - Keys to look for
 * @param {string} options.sizePreference - Size preference
 * @param {boolean} options.deduplicate - Remove duplicates
 * @param {boolean} options.sort - Sort by priority
 * @returns {string[]} Array of image URLs
 */
export const extractAllImages = (data, options = {}) => {
  const {
    keys = ['image', 'src', 'url', 'thumbnail', 'hero', 'gallery'],
    sizePreference = 'all',
    deduplicate = true,
    sort = false
  } = options;

  let urls = [];

  if (Array.isArray(data)) {
    urls = extractImagesFromArray(data, keys);
  } else if (typeof data === 'object') {
    urls = extractImagesFromObject(data, keys);
  }

  if (sizePreference !== 'all') {
    urls = filterBySize(urls, sizePreference);
  }

  if (deduplicate) {
    urls = deduplicateUrls(urls);
  }

  if (sort) {
    urls = sortByPriority(urls);
  }

  return urls;
};

