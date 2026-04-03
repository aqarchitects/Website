/**
 * RTL/LTR Utility Functions
 * 
 * Helper functions for handling bidirectional text and layout
 */

/**
 * Get directional class names based on current direction
 * @param {string} direction - 'ltr' or 'rtl'
 * @param {object} classes - Object with ltr and rtl class names
 * @returns {string} - Appropriate class name
 */
export const getDirectionalClass = (direction, classes) => {
  return direction === 'rtl' ? classes.rtl : classes.ltr;
};

/**
 * Get margin/padding directional utilities
 * Converts logical properties to physical ones based on direction
 * 
 * Example:
 * - 'ms-4' (margin-start) becomes 'mr-4' in LTR and 'ml-4' in RTL
 * - 'pe-4' (padding-end) becomes 'pr-4' in LTR and 'pl-4' in RTL
 */
export const rtlUtils = {
  // Margin Start
  ms: (value, isRTL) => (isRTL ? `ml-${value}` : `mr-${value}`),
  // Margin End
  me: (value, isRTL) => (isRTL ? `mr-${value}` : `ml-${value}`),
  // Padding Start
  ps: (value, isRTL) => (isRTL ? `pl-${value}` : `pr-${value}`),
  // Padding End
  pe: (value, isRTL) => (isRTL ? `pr-${value}` : `pl-${value}`),
  // Text Align
  textStart: (isRTL) => (isRTL ? 'text-right' : 'text-left'),
  textEnd: (isRTL) => (isRTL ? 'text-left' : 'text-right'),
  // Float
  floatStart: (isRTL) => (isRTL ? 'float-right' : 'float-left'),
  floatEnd: (isRTL) => (isRTL ? 'float-left' : 'float-right'),
};

/**
 * Combine class names conditionally
 * @param  {...any} classes - Class names to combine
 * @returns {string} - Combined class names
 */
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

