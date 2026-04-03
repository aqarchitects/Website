import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Button Component
 * 
 * A reusable button component with pill shape and primary styling.
 * Supports both internal page navigation and smooth scroll to sections.
 * 
 * @component
 * @example
 * // Basic button with scroll to section
 * <Button text="Learn More" scrollTo="#about" />
 * 
 * @example
 * // Button with page navigation
 * <Button text="View Projects" href="/projects" />
 * 
 * @example
 * // Button with custom click handler
 * <Button text="Contact Us" onClick={() => console.log('Clicked!')} />
 * 
 * @param {Object} props - Component props
 * @param {string} props.text - The button text. Required.
 * @param {string} [props.href] - URL for navigation between pages (e.g., "/about"). Uses React Router Link.
 * @param {string} [props.scrollTo] - CSS selector of element to scroll to (e.g., "#services"). Enables smooth scroll.
 * @param {Function} [props.onClick] - Custom click handler. Receives event object.
 * @param {string} [props.className] - Additional CSS classes to apply to the button
 * 
 * @returns {JSX.Element} Button component
 * 
 * @dependencies
 * - react-router-dom (for Link component when using href prop)
 * - prop-types (for prop validation)
 * 
 * @styling
 * - Border radius: 99px (pill shape)
 * - Background: #CD914F (primary color)
 * - Text color: black
 * - Hover: Darker primary shade + text-white
 * - Responsive padding
 * 
 * @accessibility
 * - Uses semantic button/link elements
 * - Keyboard accessible
 * - Screen reader friendly
 * 
 * @notes
 * - If both href and scrollTo are provided, href takes precedence
 * - Smooth scroll uses native scrollIntoView API
 * 
 * @version 1.0.0
 */
const Button = ({ text, href, scrollTo, onClick, className = "" }) => {
  /**
   * Handles click events for the button
   * Priority: onClick > scrollTo > default link behavior
   * 
   * @param {Event} e - Click event object
   */
  const handleClick = (e) => {
    // If custom onClick is provided, use it
    if (onClick) {
      onClick(e);
      return;
    }

    // If scrollTo is provided, scroll to that element
    if (scrollTo) {
      e.preventDefault();
      const element = document.querySelector(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // Base CSS classes
  const baseClasses = `px-5 py-1 sm:px-6 sm:py-2 bg-primary text-black font-semibold text-base sm:text-lg rounded-full hover:bg-primary-600 hover:text-white hover:scale-105 transition-colors duration-300 ${className}`;

  // If href is provided, use Link component for navigation
  if (href) {
    return (
      <Link to={href} className={baseClasses} onClick={handleClick}>
        {text}
      </Link>
    );
  }

  // Otherwise, use button element
  return (
    <button className={baseClasses} onClick={handleClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  scrollTo: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;

