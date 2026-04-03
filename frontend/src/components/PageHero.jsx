import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import LearnMore from "./LearnMore";
import SplitType from "split-type";
import gsap from "gsap";

/**
 * PageHero Component
 *
 * A dynamic, reusable hero section component for all pages.
 * Supports customizable background image, logo, title, description, buttons, and overlay.
 *
 * @component
 * @example
 * // Basic usage with title and description
 * <PageHero
 *   backgroundImage="/images/about-hero.jpg"
 *   title="About Us"
 *   description="Learn more about our company and team"
 * />
 *
 * @example
 * // With logo
 * <PageHero
 *   backgroundImage="/images/hero.jpg"
 *   logo="/logo/logo.svg"
 *   logoAlt="Company Logo"
 *   logoWidth="w-24"
 *   title="About Us"
 * />
 *
 * @example
 * // With multi-line title
 * <PageHero
 *   backgroundImage="/images/projects-hero.jpg"
 *   titleLine1="Our Amazing"
 *   titleLine2="Projects"
 *   description="Explore our portfolio of innovative designs"
 * />
 *
 * @example
 * // With button
 * <PageHero
 *   backgroundImage="/images/contact-hero.jpg"
 *   title="Contact Us"
 *   description="Get in touch with our team"
 *   buttonText="Send Message"
 *   buttonHref="/contact#form"
 * />
 *
 * @example
 * // With LearnMore component
 * <PageHero
 *   backgroundImage="/images/services-hero.jpg"
 *   title="Our Services"
 *   description="Discover what we can do for you"
 *   showLearnMore={true}
 *   learnMoreText="Our Services"
 *   learnMoreScrollTo="#services"
 * />
 *
 * @param {Object} props - Component props
 * @param {string} props.backgroundImage - URL of the background image. Required.
 * @param {string} [props.logo] - URL of the logo image
 * @param {string} [props.logoAlt="Logo"] - Alt text for logo
 * @param {string} [props.logoWidth="w-20"] - Width of logo (Tailwind class)
 * @param {string} [props.logoHeight="h-auto"] - Height of logo (Tailwind class)
 * @param {string} [props.title] - Single-line title text
 * @param {JSX.Element} [props.customTitle] - Custom JSX title with full control over styling
 * @param {string} [props.titleLine1] - First line of multi-line title
 * @param {string} [props.titleLine2] - Second line of multi-line title
 * @param {string} [props.description] - Hero description text
 * @param {string} [props.buttonText] - Text for the button
 * @param {string} [props.buttonHref] - URL for button navigation
 * @param {string} [props.buttonScrollTo] - Element ID to scroll to on button click
 * @param {boolean} [props.showLearnMore=false] - Whether to show LearnMore component
 * @param {string} [props.learnMoreText] - Text for LearnMore component
 * @param {string} [props.learnMorePrefix="Learn more about"] - Prefix text for LearnMore
 * @param {string} [props.learnMoreHref] - URL for LearnMore navigation
 * @param {string} [props.learnMoreScrollTo] - Element ID to scroll to on LearnMore click
 * @param {boolean} [props.showOverlay=true] - Whether to show dark overlay on background
 * @param {string} [props.overlayOpacity="20"] - Opacity of overlay (0-100)
 * @param {string} [props.height="h-screen"] - Height of hero section (Tailwind class)
 * @param {string} [props.contentAlignment="items-end"] - Vertical alignment of content (Tailwind class)
 * @param {string} [props.textAlignment="text-center"] - Text alignment (Tailwind class)
 * @param {boolean} [props.grayscale=false] - Whether to apply grayscale filter to background image
 * @param {boolean} [props.showBottomGradient=false] - Whether to show gradient from bottom (black) to top (transparent)
 * @param {string} [props.className] - Additional CSS classes
 *
 * @returns {JSX.Element} PageHero component
 */
const PageHero = ({
  backgroundImage,
  logo,
  logoAlt = "Logo",
  logoWidth = "w-20",
  logoHeight = "h-auto",
  title,
  customTitle,
  titleLine1,
  titleLine2,
  description,
  buttonText,
  buttonHref,
  buttonScrollTo,
  showLearnMore = false,
  learnMoreText,
  learnMorePrefix = "Learn more about",
  learnMoreHref,
  learnMoreScrollTo,
  showOverlay = true,
  overlayOpacity = "20",
  height = "h-screen",
  contentAlignment = "items-end",
  textAlignment = "text-center",
  grayscale = false,
  showBottomGradient = false,
  className = "",
}) => {
  const titleRef = useRef(null);

  // Text splitting animation
  useEffect(() => {
    if (!titleRef.current) return;

    // Split text into lines
    const split = new SplitType(titleRef.current, {
      types: "lines",
      lineClass: "line-wrapper",
    });

    // Wrap each line in a div for overflow hidden
    split.lines.forEach((line) => {
      const wrapper = document.createElement("div");
      wrapper.style.overflow = "hidden";
      line.parentNode.insertBefore(wrapper, line);
      wrapper.appendChild(line);
    });

    // Animate lines
    gsap.fromTo(
      split.lines,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.3,
      },
    );

    // Cleanup
    return () => {
      if (split) split.revert();
    };
  }, [title, customTitle, titleLine1, titleLine2]);
  return (
    <section
      className={`relative w-full ${height} overflow-hidden ${className}`}
    >
      {/* Fullscreen Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Hero background"
          className={`w-full h-full object-cover ${grayscale ? "grayscale" : ""}`}
        />
        {/* Optional: Dark overlay for better text readability */}
        {showOverlay && (
          <div className={`absolute inset-0 bg-black/${overlayOpacity}`} />
        )}
        {/* Optional: Bottom to top gradient overlay (for ProjectDetail) */}
        {showBottomGradient && (
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        )}
      </div>

      {/* Hero Content */}
      <div
        className={`relative z-10 h-full flex ${contentAlignment} justify-center pb-12 sm:pb-16 md:pb-20 lg:pb-24`}
      >
        <div
          className={`container mx-auto px-4 sm:px-6 lg:px-8 ${textAlignment} max-w-7xl`}
        >
          {/* Logo - Above Title */}
          {logo && (
            <div className="mb-6 md:mb-8 flex justify-center">
              <img
                src={logo}
                alt={logoAlt}
                className={`${logoWidth} ${logoHeight} object-contain`}
              />
            </div>
          )}

          {/* Hero Title */}
          {(customTitle || title || (titleLine1 && titleLine2)) && (
            <h1 ref={titleRef} className="text-white items-end pb-4 md:pb-6">
              {customTitle ? (
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tighter text-shadow">
                  {customTitle}
                </div>
              ) : title ? (
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tighter text-shadow">
                  {title}
                </div>
              ) : (
                <>
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tighter mb-1 md:mb-2 text-shadow">
                    {titleLine1}
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tighter text-shadow">
                    {titleLine2}
                  </div>
                </>
              )}
            </h1>
          )}

          {/* Hero Description */}
          {description && (
            <p className="text-sm sm:text-base md:text-md lg:text-lg font-medium leading-relaxed tracking-tight text-gray-lightest text-center max-w-4xl mx-auto mb-8 md:mb-10 lg:mb-12 px-4">
              {description}
            </p>
          )}

          {/* Button */}
          {buttonText && (
            <div className="mb-4">
              <Button
                text={buttonText}
                href={buttonHref}
                scrollTo={buttonScrollTo}
              />
            </div>
          )}

          {/* Learn More Component */}
          {showLearnMore && learnMoreText && (
            <LearnMore
              text={learnMoreText}
              prefix={learnMorePrefix}
              href={learnMoreHref}
              scrollTo={learnMoreScrollTo}
            />
          )}
        </div>
      </div>
    </section>
  );
};

PageHero.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  logo: PropTypes.string,
  logoAlt: PropTypes.string,
  logoWidth: PropTypes.string,
  logoHeight: PropTypes.string,
  title: PropTypes.string,
  customTitle: PropTypes.node,
  titleLine1: PropTypes.string,
  titleLine2: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  buttonHref: PropTypes.string,
  buttonScrollTo: PropTypes.string,
  showLearnMore: PropTypes.bool,
  learnMoreText: PropTypes.string,
  learnMorePrefix: PropTypes.string,
  learnMoreHref: PropTypes.string,
  learnMoreScrollTo: PropTypes.string,
  showOverlay: PropTypes.bool,
  overlayOpacity: PropTypes.string,
  height: PropTypes.string,
  contentAlignment: PropTypes.string,
  textAlignment: PropTypes.string,
  grayscale: PropTypes.bool,
  showBottomGradient: PropTypes.bool,
  className: PropTypes.string,
};

export default PageHero;
