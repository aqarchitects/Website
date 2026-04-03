import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * ProjectCard Component
 *
 * A two-layer overlapping card with alternating left/right layout.
 * - Layer 1: Large image container (75% width)
 * - Layer 2: Colored text container (35% width, overlaps image by ~80px)
 *
 * @component
 * @example
 * <ProjectCard
 *   title="Modern Villa"
 *   description="A stunning modern villa with contemporary design"
 *   image="/images/project1.jpg"
 *   href="/projects/modern-villa"
 *   index={0}
 * />
 *
 * @param {Object} props
 * @param {string} props.title - Project title
 * @param {string} props.description - Project description
 * @param {string} props.image - Project image URL
 * @param {string} props.href - Link to project details page
 * @param {number} props.index - Card index for alternating layout (even = left, odd = right)
 */
const ProjectCard = ({ title, description, image, href, index = 0 }) => {
  const isLeft = index % 2 === 0;
  // Alternating background: index 0,2,4... = #2C2C2C, index 1,3,5... = #CD914F
  const isPrimaryBg = index % 2 !== 0;

  const imageRef = useRef(null);
  const textRef = useRef(null);
  const navigate = useNavigate();

  // Click handler to navigate to project page
  const handleCardClick = () => {
    navigate(href);
  };

  // Different animations for image and text on desktop
  useEffect(() => {
    if (!imageRef.current || !textRef.current) return;

    // Image animation - fade in with scale
    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 0.95,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reset",
        },
      },
    );

    // Text animation - fade in with slide from left only
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        x: isLeft ? -80 : 80,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reset",
        },
      },
    );
  }, [isLeft]);

  return (
    <div className="relative w-full h-[500px] md:h-[450px] lg:h-[500px] mb-8 md:mb-12 lg:mb-16">
      {/* Desktop Layout - Side by Side */}
      <div
        className="hidden md:flex relative w-full h-full items-center cursor-pointer transition-transform duration-300 hover:scale-[1.02] group/card"
        onClick={handleCardClick}
      >
        {/* Image Container - Desktop: 75% width, side by side */}
        <div
          ref={imageRef}
          className={`
            absolute
            ${isLeft ? "right-0" : "left-0"}
            w-[75%]
            h-full
            rounded-lg
            overflow-hidden
          `}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-300 group-hover/card:scale-105 grayscale group-hover/card:grayscale-0"
            loading="lazy"
          />
          {/* Optional dark overlay for better contrast - removed on hover */}
          <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover/card:opacity-0" />
        </div>

        {/* Text Container - Desktop: 35% width, overlaps image horizontally */}
        <div
          ref={textRef}
          className={`
            absolute
            ${isLeft ? "left-0" : "right-0"}
            w-[35%]
            ${isPrimaryBg ? "bg-primary" : "bg-neutral-900"}
            rounded-lg
            p-6 lg:p-10
            flex flex-col justify-center items-start
            min-h-[300px] lg:min-h-[350px]
            z-10
            transition-all duration-300
            hover:scale-105
            group
          `}
          style={{
            boxShadow: "12px 12px 16px 0 rgba(0, 0, 0, 0.25)",
          }}
        >
          {/* Title */}
          <h3
            className={`
            text-2xl lg:text-4xl font-semibold text-white text-shadow-sm mb-4 leading-tight tracking-tight text-left transition-colors duration-300
            ${isPrimaryBg ? "group-hover:text-neutral-900" : "group-hover:text-primary"}
          `}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className={`
            text-sm lg:text-base text-white font-medium mb-6 leading-relaxed tracking-tight text-left transition-colors duration-300
            ${isPrimaryBg ? "group-hover:text-neutral-900" : "group-hover:text-primary"}
          `}
          >
            {description}
          </p>

          {/* Arrow Link */}
          <Link
            to={href}
            className="inline-flex items-center gap-2 text-white transition-colors group/link"
          >
            <span className="text-base lg:text-lg font-medium">
              View Project
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 lg:h-6 lg:w-6 transform group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Mobile Layout - Vertical Stack with Overlap */}
      <div
        className="md:hidden relative w-full h-full flex flex-col items-center justify-start cursor-pointer transition-transform duration-300 hover:scale-[1.02] group/card"
        onClick={handleCardClick}
      >
        {/* Image Container - Mobile: 70% height, centered, full width */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[70%] rounded-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-300 group-hover/card:scale-105 grayscale group-hover/card:grayscale-0"
            loading="lazy"
          />
          {/* Optional dark overlay for better contrast - removed on hover */}
          <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover/card:opacity-0" />
        </div>

        {/* Text Container - Mobile: 40% height, bottom, overlaps image vertically */}
        <div
          className={`
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            w-[85%]
            h-[40%]
            ${isPrimaryBg ? "bg-primary" : "bg-neutral-900"}
            rounded-lg
            p-6
            flex flex-col justify-center items-start
            z-10
            transition-all duration-300
            hover:scale-105
            group
          `}
          style={{
            boxShadow: "12px 12px 16px 0 rgba(0, 0, 0, 0.25)",
          }}
        >
          {/* Title */}
          <h3
            className={`
            text-xl sm:text-2xl font-semibold text-white text-shadow-sm mb-3 leading-tight tracking-tight text-left transition-colors duration-300
            ${isPrimaryBg ? "group-hover:text-neutral-900" : "group-hover:text-primary"}
          `}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className={`
            text-sm text-white font-medium mb-4 leading-relaxed tracking-tight text-left transition-colors duration-300
            ${isPrimaryBg ? "group-hover:text-neutral-900" : "group-hover:text-primary"}
          `}
          >
            {description}
          </p>

          {/* Arrow Link */}
          <Link
            to={href}
            className="inline-flex items-center gap-2 text-white transition-colors group/link"
          >
            <span className="text-sm font-medium">View Project</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transform group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  index: PropTypes.number,
};

export default ProjectCard;
