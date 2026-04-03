import PropTypes from "prop-types";
import SectionAmbientLayer from "./SectionAmbientLayer";
import ScrollReveal from "./ScrollReveal";
import Button from "./Button";

/**
 * CareerSection Component
 *
 * A full-width section with overlapping image and text card design.
 * Similar to ProjectCard but:
 * - Full width layout
 * - Image always on right (right=0)
 * - Text card always on left
 * - Additional text line below the card
 * - Button component instead of arrow link
 * - Includes SectionAmbientLayer for animated background
 *
 * @component
 * @example
 * <CareerSection
 *   title="Join Our Team"
 *   description="We're looking for talented individuals..."
 *   additionalText="Explore opportunities"
 *   image="/images/career.jpg"
 *   buttonText="View Positions"
 *   buttonHref="/careers"
 * />
 *
 * @param {Object} props
 * @param {string} props.title - Career section title
 * @param {string} props.description - Career section description
 * @param {string} props.additionalText - Additional text line below the card
 * @param {string} props.image - Career image URL
 * @param {string} props.buttonText - Button text
 * @param {string} props.buttonHref - Button link URL
 * @param {Array} props.svgConfig - SectionAmbientLayer SVG configuration
 */
const CareerSection = ({
  title = "Want to Get On-Board?",
  description = "Fill out a request form  & our HR team will contact you in case off any opening position. ",
  additionalText = "2026, All Rights reserved for AQ Architects, Registered Trademark in Doha, Qatar",
  image = "/images/career.jpg",
  buttonText = "Fill out Entry form",
  buttonHref = "/contact#contact-form",
}) => {
  // Same SVG configuration as AboutSection
  const svgConfig = [
    {
      src: "/images/logo_vector.svg",
      position: { top: "-20%", left: "0" },
      width: "400px",
      opacity: 1,
      drift: {
        x: [-15, 0, -15],
        y: [-15, 0, -15],
        duration: 10,
      },
      hideOnMobile: true,
    },
  ];

  return (
    <section
      id="career"
      className="relative mt-[40%] lg:mt-[25%] bg-black overflow-visible"
    >
      {/* Content Container */}
      <div className="relative z-10  pl-12 sm:pl-24 lg:pl-48">
        {/* Full Width Card Container */}
        <ScrollReveal direction="left" distance={150} duration={1.2}>
          <div className="relative w-full h-100 md:h-125 lg:h-150">
            {/* Desktop Layout - Image Right, Text Left */}
            <div className="hidden md:flex relative w-full h-full items-center">
              {/* Image Container - Desktop: 75% width, positioned right */}
              <div className="absolute right-0 w-[75%] h-full overflow-hidden">
                <img
                  src={image}
                  alt="Career"
                  className="w-full h-full object-cover"
                />
                {/* Optional dark overlay for better contrast */}
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Text Container - Desktop: 35% width, positioned left, overlaps image */}
              <div
                className="absolute left-0 w-[35%] bg-neutral-900 rounded-lg  p-6 lg:p-10 flex flex-col justify-center items-start min-h-75 lg:min-h-87 z-10 transition-all duration-300 hover:scale-105 group"
                style={{
                  boxShadow: "12px 12px 16px 0 rgba(0, 0, 0, 0.25)",
                }}
              >
                {/* Title */}
                <h3 className="text-2xl lg:text-4xl font-semibold text-white text-shadow-sm mb-4 leading-tight tracking-tight text-left transition-colors duration-300 group-hover:text-primary">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-sm lg:text-base text-white font-medium mb-6 leading-relaxed tracking-tight text-left transition-colors duration-300 group-hover:text-primary">
                  {description}
                </p>

                {/* Button */}
                <Button text={buttonText} href={buttonHref} />
              </div>
            </div>

            {/* Mobile Layout - Vertical Stack with Overlap */}
            <div className="md:hidden relative w-full h-full flex flex-col items-center justify-start">
              {/* Image Container - Mobile: 70% height, centered */}
              <div className="absolute top-0 right-0 w-[90%] h-[70%] overflow-hidden">
                <img
                  src={image}
                  alt="Career"
                  className="w-full h-full object-cover"
                />
                {/* Optional dark overlay for better contrast */}
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Text Container - Mobile: 40% height, bottom, overlaps image */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-2/3 w-[85%] h-auto bg-neutral-900 rounded-lg p-6 flex flex-col justify-center items-start z-10 transition-all duration-300 hover:scale-105 group"
                style={{
                  boxShadow: "12px 12px 16px 0 rgba(0, 0, 0, 0.25)",
                }}
              >
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-white text-shadow-sm mb-3 leading-tight tracking-tight text-left transition-colors duration-300 group-hover:text-neutral-900">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white font-medium mb-4 leading-relaxed tracking-tight text-left transition-colors duration-300 group-hover:text-neutral-900">
                  {description}
                </p>

                {/* Button */}
                <Button
                  text={buttonText}
                  href={buttonHref}
                  className="text-sm"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Additional Text Line - Below the card */}
        <ScrollReveal
          direction="right"
          distance={150}
          duration={1.2}
          delay={0.2}
        >
          <div className="mt-8 md:mt-12 text-left">
            <p className="text-xs sm:text-xs md:text-xs text-gray font-medium leading-relaxed tracking-tight">
              {additionalText}
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Ambient Layer - Animated Background SVG (same as AboutSection) - Below content */}
      <SectionAmbientLayer svgConfig={svgConfig} containerZIndex={5} />
    </section>
  );
};

CareerSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  additionalText: PropTypes.string,
  image: PropTypes.string,
  buttonText: PropTypes.string,
  buttonHref: PropTypes.string,
};

export default CareerSection;
