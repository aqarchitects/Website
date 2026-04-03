import PropTypes from "prop-types";

/**
 * Social Media Icon Components
 *
 * Fully customizable SVG icons for social media platforms.
 * Generic version for use across different applications.
 *
 * @component
 * @example
 * // Basic usage with default color
 * <TwitterIcon />
 *
 * @example
 * // Custom color and size
 * <TwitterIcon color="#CD914F" className="w-8 h-8" />
 *
 * @example
 * // Use currentColor to inherit from parent
 * <div className="text-primary">
 *   <TwitterIcon color="currentColor" />
 * </div>
 */

// Twitter/X Icon
export const TwitterIcon = ({ color = "currentColor", className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    className={className}
  >
    <path
      d="M17.8519 12.4293L29.0198 0H26.3712L16.6736 10.7877L8.93639 0H0L11.7101 16.314L0 29.3551H2.64859L12.8884 17.9556L21.0636 29.3551H30M3.5975 1.9067H7.66423L26.3712 27.5401H22.3045"
      fill={color}
    />
  </svg>
);

TwitterIcon.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

// LinkedIn Icon
export const LinkedInIcon = ({ color = "currentColor", className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="31"
    viewBox="0 0 33 31"
    fill="none"
    className={className}
  >
    <path
      d="M28.0087 0H4.99131C2.23748 0 0 2.18509 0 4.87444V25.4591C0 28.1485 2.23748 30.3336 4.99131 30.3336H28.0087C30.7625 30.3336 33 28.1485 33 25.4591V4.87444C33 2.18509 30.7625 0 28.0087 0ZM9.87935 26.3444H4.94541V11.172H9.86787V26.3332L9.87935 26.3444ZM7.30911 8.95328C5.72566 8.95328 4.44054 7.69825 4.44054 6.15188C4.44054 4.6055 5.72566 3.35048 7.30911 3.35048C8.89256 3.35048 10.1777 4.6055 10.1777 6.15188C10.1777 7.69825 8.89256 8.95328 7.30911 8.95328ZM28.112 18.2651V26.3444H22.96V18.2651C22.96 15.7103 22.0076 15.0043 20.6652 15.0043C19.3227 15.0043 17.7507 15.643 17.7507 18.2651V26.3444H12.5414V11.172H17.4638V13.2562C17.8425 12.6287 19.1735 10.8919 22.1912 10.8919C25.886 10.8919 28.112 12.5503 28.112 16.8196V18.2539V18.2651Z"
      fill={color}
    />
  </svg>
);

LinkedInIcon.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

// Instagram Icon
export const InstagramIcon = ({ color = "currentColor", className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    className={className}
  >
    <path
      d="M15.2503 7.39551H14.7391C10.6814 7.39551 7.38516 10.6918 7.38516 14.7495V15.2606C7.38516 19.3183 10.6814 22.6146 14.7391 22.6146H15.2503C19.308 22.6146 22.6042 19.3183 22.6042 15.2606V14.7495C22.6042 10.6918 19.308 7.39551 15.2503 7.39551ZM19.7669 14.9998C19.7669 17.6389 17.6286 19.7773 14.9895 19.7773C12.3504 19.7773 10.212 17.6389 10.212 14.9998C10.212 12.3607 12.3504 10.2224 14.9895 10.2224C17.6286 10.2224 19.7669 12.3607 19.7669 14.9998Z"
      fill={color}
    />
    <path
      d="M20.7789 0H9.22114C4.13074 0 0 4.13074 0 9.22114V20.7789C0 25.8693 4.13074 30 9.22114 30H20.7789C25.8693 30 30 25.8693 30 20.7789V9.22114C30 4.13074 25.8693 0 20.7789 0ZM27.2044 20.9771C27.2044 24.4193 24.4193 27.2044 20.9771 27.2044H9.02295C5.58067 27.2044 2.79555 24.4193 2.79555 20.9771V9.02295C2.79555 5.58067 5.58067 2.79555 9.02295 2.79555H20.9771C24.4193 2.79555 27.2044 5.58067 27.2044 9.02295V20.9771Z"
      fill={color}
    />
    <path
      d="M22.7921 8.76135C23.7541 8.76135 24.5341 7.98143 24.5341 7.01935C24.5341 6.05727 23.7541 5.27734 22.7921 5.27734C21.83 5.27734 21.05 6.05727 21.05 7.01935C21.05 7.98143 21.83 8.76135 22.7921 8.76135Z"
      fill={color}
    />
  </svg>
);

InstagramIcon.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

// Facebook Icon
export const FacebookIcon = ({ color = "currentColor", className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    className={className}
  >
    <path
      d="M30 14.7648C30 6.61234 23.2823 0 15 0C6.71766 0 0 6.61234 0 14.7648C0 22.137 5.48679 28.2462 12.653 29.3551V19.0361H8.84562V14.7648H12.653V11.51C12.653 7.81365 14.8957 5.76013 18.3171 5.76013C19.9548 5.76013 21.6759 6.04762 21.6759 6.04762V9.68235H19.7879C17.9207 9.68235 17.347 10.8221 17.347 11.9926V14.7648H21.509L20.8414 19.0361H17.347V29.3551C24.5236 28.2462 30 22.137 30 14.7648Z"
      fill={color}
    />
  </svg>
);

FacebookIcon.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

