/**
 * LearnMore Component
 * 
 * A reusable "Learn more" button with animated down arrow icon.
 * Supports both internal page navigation and smooth scroll to sections.
 * 
 * @component
 * @example
 * // Scroll to section on same page
 * <LearnMore text="AQ Architects" scrollTo="#about" />
 * 
 * @example
 * // Navigate to another page
 * <LearnMore text="Our Services" href="/services" />
 * 
 * @example
 * // Custom prefix text
 * <LearnMore text="Our Work" prefix="Discover more about" scrollTo="#projects" />
 * 
 * @example
 * // Custom click handler
 * <LearnMore text="Contact Us" onClick={(e) => console.log('Clicked!')} />
 * 
 * @param {Object} props - Component props
 * @param {string} props.text - The main text to display (will be bold). Required.
 * @param {string} [props.prefix="Learn more about"] - Text before the main text (normal weight)
 * @param {string} [props.href] - URL for navigation between pages (e.g., "/about"). Uses React Router Link.
 * @param {string} [props.scrollTo] - CSS selector of element to scroll to (e.g., "#services"). Enables smooth scroll.
 * @param {Function} [props.onClick] - Custom click handler. Receives event object.
 * @param {string} [props.className=""] - Additional CSS classes to apply to the component
 * 
 * @returns {JSX.Element} LearnMore button component
 * 
 * @dependencies
 * - react-router-dom (for Link component when using href prop)
 * 
 * @styling
 * - Base: Flexbox column layout, centered items, white text
 * - Hover: Text changes to primary color, arrow translates down
 * - Transitions: Smooth color and transform transitions
 * - Arrow: SVG chevron-down icon with hover animation
 * 
 * @accessibility
 * - Uses semantic button/link elements
 * - Keyboard accessible
 * - Screen reader friendly
 * 
 * @notes
 * - If both href and scrollTo are provided, href takes precedence
 * - Smooth scroll uses native scrollIntoView API
 * - Arrow animation uses Tailwind's group-hover utility
 * - Primary color should be defined in your Tailwind config
 * 
 * @version 1.0.0
 * @author AQA Design Team
 * @license MIT
 */

import { Link } from "react-router-dom";

const LearnMore = ({
  text,
  prefix = "Learn more about",
  href,
  scrollTo,
  onClick,
  className = "",
}) => {
  /**
   * Handles click events for the component
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

  // Button content (shared between Link and button variants)
  const buttonContent = (
    <>
      <span className="text-base font-normal">
        {prefix} <span className="font-semibold">{text}</span>
      </span>
      {/* Down Arrow Icon */}
      <svg
        className="w-6 h-6 group-hover:translate-y-1 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </>
  );

  // Base CSS classes
  const baseClasses = `flex flex-col items-center gap-2 mx-auto text-neutral-800 hover:text-primary-500 transition-colors group ${className}`;

  // If href is provided, use Link component for navigation
  if (href) {
    return (
      <Link to={href} className={baseClasses} onClick={handleClick}>
        {buttonContent}
      </Link>
    );
  }

  // Otherwise, use button element
  return (
    <button className={baseClasses} onClick={handleClick}>
      {buttonContent}
    </button>
  );
};

export default LearnMore;

