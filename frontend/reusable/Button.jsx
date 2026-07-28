/**
 * Button Component
 * 
 * A reusable button component with pill shape and primary styling.
 * Supports both internal page navigation and smooth scroll to sections.
 * 
 * @component
 * @description
 * This is a versatile button component that can be used for:
 * - Page navigation (using React Router Link)
 * - Smooth scrolling to sections on the same page
 * - Custom click handlers
 * - Standard button actions
 * 
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
 * @example
 * // Button with additional classes
 * <Button text="Submit" className="mt-4" onClick={handleSubmit} />
 * 
 * @param {Object} props - Component props
 * @param {string} props.text - The button text. Required.
 * @param {string} [props.href] - URL for navigation between pages (e.g., "/about"). Uses React Router Link.
 * @param {string} [props.scrollTo] - CSS selector of element to scroll to (e.g., "#services"). Enables smooth scroll.
 * @param {Function} [props.onClick] - Custom click handler. Receives event object.
 * @param {string} [props.className=""] - Additional CSS classes to apply to the button
 * 
 * @returns {JSX.Element} Button component
 * 
 * @dependencies
 * - react-router-dom: For Link component when using href prop
 * - Tailwind CSS: For styling utilities
 * 
 * @styling
 * - Border radius: `rounded-full` (99px pill shape)
 * - Background: `bg-primary` (#CD914F - should be defined in your Tailwind config)
 * - Text color: `text-white`
 * - Hover: `hover:bg-primary-600` (darker primary shade)
 * - Responsive padding: `px-8 py-3 sm:px-10 sm:py-4`
 * - Font: `font-semibold text-base sm:text-lg`
 * - Transition: `transition-colors duration-300`
 * 
 * @accessibility
 * - Uses semantic button/link elements
 * - Keyboard accessible (native button/link behavior)
 * - Screen reader friendly
 * - Focus states handled by browser defaults
 * 
 * @notes
 * - If both href and scrollTo are provided, href takes precedence
 * - Smooth scroll uses native scrollIntoView API with smooth behavior
 * - Custom onClick handler has highest priority
 * - Requires Tailwind CSS with primary color defined in config
 * - Requires react-router-dom if using href prop
 * 
 * @version 1.0.0
 * @author AQA Design Team
 * @license MIT
 */

import { Link } from "react-router-dom";

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
  const baseClasses = `px-8 py-3 sm:px-10 sm:py-4 bg-primary text-white font-semibold text-base sm:text-lg rounded-full hover:bg-primary-600 transition-colors duration-300 ${className}`;

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

export default Button;

