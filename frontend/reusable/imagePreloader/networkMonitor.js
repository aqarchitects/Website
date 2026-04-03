/**
 * Network Monitor Utility
 * 
 * A reusable utility for detecting network conditions and connection quality.
 * Helps make intelligent decisions about resource loading based on user's connection.
 * 
 * @module NetworkMonitor
 * @category Utilities
 * @reusable true
 * 
 * @example
 * import { getConnectionSpeed, isSlowConnection, shouldPreload } from './networkMonitor';
 * 
 * if (shouldPreload()) {
 *   // Start preloading images
 * }
 */

/**
 * Get effective connection type from Network Information API
 * @returns {string} Connection type: '4g', '3g', '2g', 'slow-2g', or 'unknown'
 */
export const getConnectionType = () => {
  if ('connection' in navigator) {
    return navigator.connection?.effectiveType || 'unknown';
  }
  return 'unknown';
};

/**
 * Get downlink speed in Mbps
 * @returns {number|null} Downlink speed in Mbps, or null if unavailable
 */
export const getDownlinkSpeed = () => {
  if ('connection' in navigator) {
    return navigator.connection?.downlink || null;
  }
  return null;
};

/**
 * Check if connection is metered (user pays per MB)
 * @returns {boolean} True if connection is metered (save data mode)
 */
export const isMeteredConnection = () => {
  if ('connection' in navigator) {
    return navigator.connection?.saveData || false;
  }
  return false;
};

/**
 * Check if user has enabled data saver mode
 * @returns {boolean} True if data saver is enabled
 */
export const isDataSaverEnabled = () => {
  return isMeteredConnection();
};

/**
 * Determine connection speed category
 * @returns {'fast'|'medium'|'slow'|'unknown'} Connection speed category
 */
export const getConnectionSpeed = () => {
  const type = getConnectionType();
  const downlink = getDownlinkSpeed();

  // Use downlink speed if available (more accurate)
  if (downlink !== null) {
    if (downlink >= 5) return 'fast';      // >= 5 Mbps
    if (downlink >= 1.5) return 'medium';  // >= 1.5 Mbps
    return 'slow';                          // < 1.5 Mbps
  }

  // Fallback to connection type
  switch (type) {
    case '4g':
      return 'fast';
    case '3g':
      return 'medium';
    case '2g':
    case 'slow-2g':
      return 'slow';
    default:
      return 'unknown';
  }
};

/**
 * Check if connection is considered slow
 * @returns {boolean} True if connection is slow
 */
export const isSlowConnection = () => {
  const speed = getConnectionSpeed();
  return speed === 'slow';
};

/**
 * Check if connection is considered fast
 * @returns {boolean} True if connection is fast
 */
export const isFastConnection = () => {
  const speed = getConnectionSpeed();
  return speed === 'fast';
};

/**
 * Determine if preloading should be enabled based on network conditions
 * @param {Object} options - Configuration options
 * @param {boolean} options.respectDataSaver - Skip preload if data saver enabled (default: true)
 * @param {boolean} options.requireFastConnection - Only preload on fast connections (default: false)
 * @param {string[]} options.allowedConnectionTypes - Allowed connection types (default: ['4g', '3g'])
 * @returns {boolean} True if preloading should proceed
 */
export const shouldPreload = (options = {}) => {
  const {
    respectDataSaver = true,
    requireFastConnection = false,
    allowedConnectionTypes = ['4g', '3g', 'unknown']
  } = options;

  // Check data saver mode
  if (respectDataSaver && isDataSaverEnabled()) {
    console.log('[NetworkMonitor] Preload skipped: Data saver enabled');
    return false;
  }

  // Check connection speed requirement
  if (requireFastConnection && !isFastConnection()) {
    console.log('[NetworkMonitor] Preload skipped: Connection not fast enough');
    return false;
  }

  // Check connection type
  const connectionType = getConnectionType();
  if (!allowedConnectionTypes.includes(connectionType)) {
    console.log(`[NetworkMonitor] Preload skipped: Connection type ${connectionType} not allowed`);
    return false;
  }

  return true;
};

/**
 * Get network information summary
 * @returns {Object} Network information object
 */
export const getNetworkInfo = () => {
  return {
    connectionType: getConnectionType(),
    downlinkSpeed: getDownlinkSpeed(),
    isMetered: isMeteredConnection(),
    dataSaverEnabled: isDataSaverEnabled(),
    speedCategory: getConnectionSpeed(),
    isSlow: isSlowConnection(),
    isFast: isFastConnection(),
    shouldPreload: shouldPreload()
  };
};

