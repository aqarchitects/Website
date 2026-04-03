import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

/**
 * LearnMore Component
 *
 * A reusable "Learn more" button with down arrow
 * Supports both internal page navigation and scroll to section
 *
 * @param {Object} props
 * @param {string} props.text - The main text (e.g., "AQ Architects")
 * @param {string} props.prefix - Text before the main text (default: "Learn more about")
 * @param {string} props.href - URL for navigation between pages (e.g., "/about")
 * @param {string} props.scrollTo - ID of element to scroll to (e.g., "#services")
 * @param {Function} props.onClick - Custom click handler
 * @param {string} props.className - Additional CSS classes
 */
const LearnMore = ({
  text,
  prefix = "Learn more about",
  href,
  scrollTo,
  onClick,
  className = "",
}) => {
  const arrowRef = useRef(null);

  // Smooth up/down animation for arrow
  useEffect(() => {
    if (!arrowRef.current) return;

    const animation = gsap.to(arrowRef.current, {
      y: 10,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    return () => {
      animation.kill();
    };
  }, []);

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

  const buttonContent = (
    <>
      <span className="text-base font-normal">
        {prefix} <span className="font-semibold">{text}</span>
      </span>
      {/* Down Arrow Icon */}
      <svg
        ref={arrowRef}
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
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
