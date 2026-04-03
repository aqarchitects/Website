/**
 * PreloadProvider Component
 * 
 * A reusable React Context Provider for managing global image preloading state.
 * Provides preload functionality to all child components via context.
 * 
 * @module PreloadProvider
 * @category Components
 * @reusable true
 * 
 * @example
 * import { PreloadProvider, usePreload } from './PreloadProvider';
 * 
 * // Wrap your app
 * <PreloadProvider config={{ debug: true }}>
 *   <App />
 * </PreloadProvider>
 * 
 * // Use in any component
 * function MyComponent() {
 *   const { preload, stats } = usePreload();
 *   return <div>Progress: {stats.progress}%</div>;
 * }
 */

import { createContext, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import useImagePreloader from './useImagePreloader';
import { shouldPreload, getNetworkInfo } from './networkMonitor';

// Create context
const PreloadContext = createContext(null);

/**
 * PreloadProvider component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {Object} props.config - Preloader configuration
 * @param {boolean} props.config.debug - Enable debug logging
 * @param {number} props.config.concurrency - Max concurrent loads
 * @param {number} props.config.timeout - Timeout per image
 * @param {Function} props.config.onProgress - Global progress callback
 * @param {Function} props.config.onComplete - Global completion callback
 * @param {Function} props.config.onError - Global error callback
 * @param {boolean} props.autoStart - Auto-start preloading on mount (default: false)
 * @param {string[]} props.initialUrls - URLs to preload on mount
 * @param {string} props.initialPriority - Priority for initial URLs
 * @param {Object} props.networkOptions - Network check options
 */
export const PreloadProvider = ({
  children,
  config = {},
  autoStart = false,
  initialUrls = [],
  initialPriority = 'medium',
  networkOptions = {}
}) => {
  const preloader = useImagePreloader(config);
  const { preload } = preloader;

  // Auto-start preloading if enabled
  useEffect(() => {
    if (autoStart && initialUrls.length > 0) {
      // Check network conditions before starting
      const canPreload = shouldPreload(networkOptions);
      
      if (canPreload) {
        const networkInfo = getNetworkInfo();
        
        if (config.debug) {
          console.log('[PreloadProvider] Network info:', networkInfo);
          console.log('[PreloadProvider] Starting auto-preload:', initialUrls.length, 'images');
        }

        // Use requestIdleCallback if available, otherwise setTimeout
        if ('requestIdleCallback' in window) {
          requestIdleCallback(() => {
            preload(initialUrls, initialPriority);
          }, { timeout: 2000 });
        } else {
          setTimeout(() => {
            preload(initialUrls, initialPriority);
          }, 2000);
        }
      } else {
        if (config.debug) {
          console.log('[PreloadProvider] Auto-preload skipped due to network conditions');
        }
      }
    }
  }, [autoStart, initialUrls, initialPriority, preload, config.debug, networkOptions]);

  return (
    <PreloadContext.Provider value={preloader}>
      {children}
    </PreloadContext.Provider>
  );
};

PreloadProvider.propTypes = {
  children: PropTypes.node.isRequired,
  config: PropTypes.shape({
    debug: PropTypes.bool,
    concurrency: PropTypes.number,
    timeout: PropTypes.number,
    onProgress: PropTypes.func,
    onComplete: PropTypes.func,
    onError: PropTypes.func
  }),
  autoStart: PropTypes.bool,
  initialUrls: PropTypes.arrayOf(PropTypes.string),
  initialPriority: PropTypes.oneOf(['critical', 'high', 'medium', 'low']),
  networkOptions: PropTypes.shape({
    respectDataSaver: PropTypes.bool,
    requireFastConnection: PropTypes.bool,
    allowedConnectionTypes: PropTypes.arrayOf(PropTypes.string)
  })
};

/**
 * Hook to access preload context
 * @returns {Object} Preloader interface
 * @throws {Error} If used outside PreloadProvider
 */
export const usePreload = () => {
  const context = useContext(PreloadContext);
  
  if (!context) {
    throw new Error('usePreload must be used within a PreloadProvider');
  }
  
  return context;
};

export default PreloadProvider;

