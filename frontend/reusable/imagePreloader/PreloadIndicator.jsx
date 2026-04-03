/**
 * PreloadIndicator Component
 * 
 * A reusable, non-intrusive progress indicator for image preloading.
 * Shows loading progress in a small corner badge that can be dismissed.
 * 
 * @module PreloadIndicator
 * @category Components
 * @reusable true
 * 
 * @example
 * import { PreloadIndicator } from './reusable/imagePreloader';
 * 
 * function App() {
 *   return (
 *     <>
 *       <PreloadIndicator position="bottom-right" />
 *       <YourApp />
 *     </>
 *   );
 * }
 */

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { usePreload } from './PreloadProvider';

/**
 * PreloadIndicator component
 * @param {Object} props - Component props
 * @param {string} props.position - Position: 'top-left', 'top-right', 'bottom-left', 'bottom-right'
 * @param {boolean} props.showPercentage - Show percentage (default: true)
 * @param {boolean} props.dismissible - Allow user to dismiss (default: true)
 * @param {boolean} props.autoHide - Auto-hide when complete (default: true)
 * @param {number} props.autoHideDelay - Delay before auto-hide in ms (default: 3000)
 * @param {string} props.theme - Theme: 'light', 'dark' (default: 'dark')
 */
const PreloadIndicator = ({
  position = 'bottom-right',
  showPercentage = true,
  dismissible = true,
  autoHide = true,
  autoHideDelay = 3000,
  theme = 'dark'
}) => {
  const { stats, isLoading, isComplete } = usePreload();
  const [isDismissed, setIsDismissed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show indicator when loading starts
  useEffect(() => {
    if (isLoading && !isDismissed) {
      setIsVisible(true);
    }
  }, [isLoading, isDismissed]);

  // Auto-hide when complete
  useEffect(() => {
    if (isComplete && autoHide && !isDismissed) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, autoHideDelay);

      return () => clearTimeout(timer);
    }
  }, [isComplete, autoHide, autoHideDelay, isDismissed]);

  // Don't render if dismissed or not visible
  if (isDismissed || !isVisible) {
    return null;
  }

  // Position classes
  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4'
  };

  // Theme classes
  const themeClasses = {
    light: 'bg-white text-gray-800 border border-gray-300',
    dark: 'bg-gray-900 text-white border border-gray-700'
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <div
      className={`
        fixed ${positionClasses[position]} 
        ${themeClasses[theme]}
        px-4 py-2 rounded-lg shadow-lg
        flex items-center gap-3
        transition-all duration-300 ease-in-out
        z-50
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
      `}
      style={{
        fontSize: '0.875rem',
        minWidth: '200px'
      }}
    >
      {/* Loading Spinner */}
      {isLoading && (
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
      )}

      {/* Checkmark when complete */}
      {isComplete && (
        <div className="text-green-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}

      {/* Progress Text */}
      <div className="flex-1">
        {isLoading && (
          <div>
            <div className="font-medium">Loading images...</div>
            {showPercentage && (
              <div className="text-xs opacity-75">
                {stats.loaded}/{stats.total} ({stats.progress}%)
              </div>
            )}
          </div>
        )}
        {isComplete && (
          <div className="font-medium">Images ready!</div>
        )}
      </div>

      {/* Dismiss Button */}
      {dismissible && (
        <button
          onClick={handleDismiss}
          className="opacity-50 hover:opacity-100 transition-opacity"
          aria-label="Dismiss"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

PreloadIndicator.propTypes = {
  position: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']),
  showPercentage: PropTypes.bool,
  dismissible: PropTypes.bool,
  autoHide: PropTypes.bool,
  autoHideDelay: PropTypes.number,
  theme: PropTypes.oneOf(['light', 'dark'])
};

export default PreloadIndicator;

