import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

/**
 * SectionAmbientLayer - A decorative background/overlay layer component for adding animated SVG/image elements to sections.
 *
 * @component
 * @description
 * This component creates an absolute-positioned overlay layer that displays animated decorative elements (SVGs/images).
 * It's designed to be used as a sibling to your content, not as a wrapper. The parent container must have `position: relative`.
 *
 * @example
 * // Basic usage with animated decorative elements
 * <section style={{ position: 'relative', minHeight: '500px' }}>
 *   <h2>Your Content</h2>
 *   <p>Some text here...</p>
 *
 *   <SectionAmbientLayer
 *     svgConfig={[
 *       {
 *         src: '/blob1.svg',
 *         position: { top: '20%', left: '10%' },
 *         width: '300px',
 *         opacity: 0.5,
 *         drift: { x: [0, 20], y: [0, -10], duration: 15 }
 *       },
 *       {
 *         src: '/blob2.svg',
 *         position: { bottom: '10%', right: '5%' },
 *         width: '200px',
 *         blendMode: 'multiply',
 *         hideOnMobile: true
 *       }
 *     ]}
 *   />
 * </section>
 *
 * @param {Object} props - Component props
 * @param {Array<Object>} [props.svgConfig=[]] - Array of SVG/image configuration objects
 * @param {string} props.svgConfig[].src - Required. Path to the SVG/image file
 * @param {Object} [props.svgConfig[].position] - Position of the element
 * @param {string} [props.svgConfig[].position.top] - Top position (e.g., '20%', '100px')
 * @param {string} [props.svgConfig[].position.left] - Left position (e.g., '10%', '50px')
 * @param {string} [props.svgConfig[].position.bottom] - Bottom position (e.g., '10%', '20px')
 * @param {string} [props.svgConfig[].position.right] - Right position (e.g., '5%', '30px')
 * @param {string} [props.svgConfig[].width] - Width of the element (e.g., '300px', '50%')
 * @param {string} [props.svgConfig[].height] - Height of the element (e.g., '200px', 'auto')
 * @param {string} [props.svgConfig[].blendMode] - CSS mix-blend-mode (e.g., 'multiply', 'screen', 'overlay')
 * @param {number} [props.svgConfig[].opacity=1] - Opacity value between 0 and 1
 * @param {number} [props.svgConfig[].zIndex] - Custom z-index for this specific element
 * @param {boolean} [props.svgConfig[].hideOnMobile=false] - Hide this element on mobile devices (< 768px)
 * @param {Object} [props.svgConfig[].drift] - Drift animation configuration
 * @param {Array<number>} [props.svgConfig[].drift.x] - Horizontal drift range (e.g., [0, 20])
 * @param {Array<number>} [props.svgConfig[].drift.y] - Vertical drift range (e.g., [0, -10])
 * @param {Array<number>} [props.svgConfig[].drift.scale] - Scale animation range (e.g., [1, 1.1])
 * @param {number} [props.svgConfig[].drift.duration=20] - Animation duration in seconds
 * @param {string} [props.svgConfig[].drift.ease='easeInOut'] - Animation easing function
 * @param {Object} [props.svgConfig[].rotate] - Rotation animation configuration
 * @param {Array<number>} [props.svgConfig[].rotate.degrees] - Rotation range (e.g., [0, 360])
 * @param {number} [props.svgConfig[].rotate.duration] - Rotation duration in seconds
 * @param {string} [props.svgConfig[].rotate.ease] - Rotation easing function
 * @param {Object} [props.svgConfig[].scaleAnimation] - Scale animation configuration
 * @param {Array<number>} [props.svgConfig[].scaleAnimation.values] - Scale values (e.g., [1, 1.2, 1])
 * @param {number} [props.svgConfig[].scaleAnimation.duration] - Scale animation duration
 * @param {string} [props.svgConfig[].scaleAnimation.ease] - Scale easing function
 * @param {Object} [props.svgConfig[].opacityAnimation] - Opacity animation configuration
 * @param {Array<number>} [props.svgConfig[].opacityAnimation.values] - Opacity values (e.g., [0.5, 1, 0.5])
 * @param {number} [props.svgConfig[].opacityAnimation.duration] - Opacity animation duration
 * @param {string} [props.svgConfig[].opacityAnimation.ease] - Opacity easing function
 * @param {Object} [props.svgConfig[].style] - Additional inline styles for the image element
 * @param {Object} [props.svgConfig[].containerStyle] - Additional inline styles for the container div
 * @param {Object} [props.svgConfig[].hoverEffect] - Hover effect configuration
 * @param {boolean} [props.svgConfig[].hoverEffect.enabled=false] - Enable hover effects for this element
 * @param {boolean} [props.svgConfig[].hoverEffect.blockClicks=false] - If true, layer blocks clicks; if false, clicks pass through to elements below
 * @param {string} [props.svgConfig[].hoverEffect.shadow] - CSS filter drop-shadow on hover (e.g., '0 10px 40px rgba(0,0,0,0.3)')
 * @param {number} [props.svgConfig[].hoverEffect.scale=1] - Scale multiplier on hover (e.g., 1.05)
 * @param {number} [props.svgConfig[].hoverEffect.brightness=1] - Brightness multiplier on hover (e.g., 1.1)
 * @param {number} [props.svgConfig[].hoverEffect.transition=0.3] - Transition duration in seconds
 * @param {boolean} [props.showGrid=false] - Show debug grid border around the layer
 * @param {string} [props.containerHeight='100%'] - Height of the ambient layer container
 * @param {boolean} [props.overflow=true] - Whether to allow overflow (visible) or clip it (hidden)
 * @param {number} [props.containerZIndex=100] - Z-index for the entire ambient layer container
 *
 * @returns {JSX.Element} The ambient layer component
 *
 * @dependencies
 * - framer-motion: For animations
 * - react: For hooks (useState, useEffect, useRef)
 * - prop-types: For prop validation
 *
 * @notes
 * - The component uses `position: absolute` and requires a parent with `position: relative`
 * - Has `pointerEvents: 'none'` so it won't interfere with user interactions
 * - Automatically adapts to parent container dimensions using ResizeObserver
 * - Uses IntersectionObserver to only animate elements when visible in viewport
 * - Mobile breakpoint is set at 768px
 */
const SectionAmbientLayer = ({
  svgConfig = [],
  showGrid = false,
  containerHeight = "100%",
  overflow = true,
  containerZIndex = 100, // Default z-index for the container
}) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      const viewportWidth = window.innerWidth;
      const isMobileView = viewportWidth < 768;
      setIsMobile(isMobileView);

      if (containerRef.current) {
        const parent = containerRef.current.parentElement;
        if (parent) {
          setDimensions({
            width: parent.offsetWidth,
            height: parent.offsetHeight,
          });
        }
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    const resizeObserver = new ResizeObserver(updateDimensions);
    if (containerRef.current?.parentElement) {
      resizeObserver.observe(containerRef.current.parentElement);
    }

    return () => {
      window.removeEventListener("resize", updateDimensions);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="section-ambient-layer"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: containerHeight,
        pointerEvents: "none",
        zIndex: containerZIndex,
        overflow: overflow ? "visible" : "hidden",
      }}
      aria-hidden="true"
    >
      {showGrid && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "2px dashed rgba(255, 0, 255, 0.5)",
            boxSizing: "border-box",
          }}
        />
      )}

      {svgConfig.map((svg, index) => {
        if (svg.hideOnMobile && isMobile) return null;

        return (
          <SVGElement
            key={`section-svg-${index}`}
            svg={svg}
            containerWidth={dimensions.width}
            containerHeight={dimensions.height}
          />
        );
      })}
    </div>
  );
};

const SVGElement = ({ svg, containerWidth, containerHeight }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getPosition = () => {
    const position = {
      top: svg.position?.top || "50%",
      left: svg.position?.left || "50%",
      right: svg.position?.right,
      bottom: svg.position?.bottom,
      transform: "translate(-50%, -50%)",
    };

    if (svg.position?.right !== undefined) {
      delete position.left;
      delete position.transform;
      position.transform = "translateY(-50%)";
    }
    if (svg.position?.bottom !== undefined) {
      delete position.top;
      if (position.transform === "translateY(-50%)") {
        position.transform = "translateX(-50%)";
      } else {
        position.transform = "translate(-50%, 0)";
      }
    }
    if (
      svg.position?.right !== undefined &&
      svg.position?.bottom !== undefined
    ) {
      position.transform = "none";
    }

    return position;
  };

  // Hover effect configuration
  const hoverEnabled = svg.hoverEffect?.enabled || false;
  const blockClicks = svg.hoverEffect?.blockClicks || false;
  const hoverTransition = svg.hoverEffect?.transition || 0.3;
  const useJSHover = hoverEnabled && blockClicks; // Use JS hover only if blocking clicks
  const useCSSHover = hoverEnabled && !blockClicks; // Use CSS hover if not blocking clicks

  // Build filter string for hover effect
  const getFilterStyle = (isHover) => {
    if (!hoverEnabled || !isHover) return svg.style?.filter || "none";

    const filters = [];
    if (svg.hoverEffect?.shadow) {
      filters.push(`drop-shadow(${svg.hoverEffect.shadow})`);
    }
    if (svg.hoverEffect?.brightness && svg.hoverEffect.brightness !== 1) {
      filters.push(`brightness(${svg.hoverEffect.brightness})`);
    }

    return filters.length > 0 ? filters.join(" ") : svg.style?.filter || "none";
  };

  // Build hover filter for CSS-based hover
  const getCSSHoverFilter = () => {
    if (!useCSSHover) return undefined;

    const filters = [];
    if (svg.hoverEffect?.shadow) {
      filters.push(`drop-shadow(${svg.hoverEffect.shadow})`);
    }
    if (svg.hoverEffect?.brightness && svg.hoverEffect.brightness !== 1) {
      filters.push(`brightness(${svg.hoverEffect.brightness})`);
    }

    return filters.length > 0 ? filters.join(" ") : undefined;
  };

  // Generate unique class name for CSS hover
  const hoverClassName = useCSSHover
    ? `svg-hover-${Math.random().toString(36).substr(2, 9)}`
    : undefined;

  return (
    <>
      {/* Inject CSS for hover effects when using CSS-based hover */}
      {useCSSHover && hoverClassName && (
        <style>
          {`
            .${hoverClassName}:hover {
              ${svg.hoverEffect?.shadow ? `filter: drop-shadow(${svg.hoverEffect.shadow})${svg.hoverEffect?.brightness ? ` brightness(${svg.hoverEffect.brightness})` : ""} !important;` : ""}
              ${svg.hoverEffect?.scale ? `transform: scale(${svg.hoverEffect.scale}) !important;` : ""}
            }
          `}
        </style>
      )}

      <motion.div
        ref={elementRef}
        style={{
          position: "absolute",
          ...getPosition(),
          width: svg.width || "auto",
          height: svg.height || "auto",
          zIndex: svg.zIndex !== undefined ? svg.zIndex : "auto", // Support custom z-index per SVG
          pointerEvents: blockClicks ? "auto" : "none", // Enable pointer events only if blocking clicks
          ...svg.containerStyle,
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
        }
        transition={{ duration: 0.6, ease: "easeOut" }}
        onMouseEnter={blockClicks ? () => setIsHovered(true) : undefined}
        onMouseLeave={blockClicks ? () => setIsHovered(false) : undefined}
      >
        <motion.img
          src={svg.src}
          alt=""
          className={hoverClassName}
          style={{
            width: svg.width || "100%",
            height: svg.height || "auto",
            maxWidth: "none",
            mixBlendMode: svg.blendMode || "normal",
            opacity: svg.opacity || 1,
            ...svg.style,
            filter: blockClicks
              ? getFilterStyle(isHovered)
              : svg.style?.filter || "none",
            transition: hoverEnabled
              ? `all ${hoverTransition}s ease`
              : undefined,
          }}
          animate={
            isVisible
              ? {
                  x: svg.drift?.x || [0, 0],
                  y: svg.drift?.y || [0, 0],
                  scale:
                    isHovered && blockClicks && svg.hoverEffect?.scale
                      ? svg.hoverEffect.scale
                      : svg.scaleAnimation?.values ||
                        svg.drift?.scale || [1, 1],
                  rotate: svg.rotate?.degrees || 0,
                  opacity: svg.opacityAnimation?.values || svg.opacity || 1,
                }
              : {}
          }
          transition={{
            duration:
              svg.scaleAnimation?.duration ||
              svg.drift?.duration ||
              svg.rotate?.duration ||
              svg.opacityAnimation?.duration ||
              20,
            repeat: Infinity,
            ease:
              svg.scaleAnimation?.ease ||
              svg.drift?.ease ||
              svg.rotate?.ease ||
              svg.opacityAnimation?.ease ||
              "easeInOut",
          }}
        />
      </motion.div>
    </>
  );
};

SVGElement.propTypes = {
  svg: PropTypes.object.isRequired,
  containerWidth: PropTypes.number.isRequired,
  containerHeight: PropTypes.number.isRequired,
};

SectionAmbientLayer.propTypes = {
  svgConfig: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      position: PropTypes.shape({
        top: PropTypes.string,
        left: PropTypes.string,
        bottom: PropTypes.string,
        right: PropTypes.string,
      }),
      width: PropTypes.string,
      height: PropTypes.string,
      blendMode: PropTypes.string,
      opacity: PropTypes.number,
      hideOnMobile: PropTypes.bool,
      drift: PropTypes.shape({
        x: PropTypes.array,
        y: PropTypes.array,
        scale: PropTypes.array,
        duration: PropTypes.number,
        ease: PropTypes.string,
      }),
      rotate: PropTypes.shape({
        degrees: PropTypes.array,
        duration: PropTypes.number,
        ease: PropTypes.string,
      }),
      opacityAnimation: PropTypes.shape({
        values: PropTypes.array,
        duration: PropTypes.number,
        ease: PropTypes.string,
      }),
      hoverEffect: PropTypes.shape({
        enabled: PropTypes.bool,
        blockClicks: PropTypes.bool,
        shadow: PropTypes.string,
        scale: PropTypes.number,
        brightness: PropTypes.number,
        transition: PropTypes.number,
      }),
      style: PropTypes.object,
      containerStyle: PropTypes.object,
    }),
  ),
  showGrid: PropTypes.bool,
  containerHeight: PropTypes.string,
  overflow: PropTypes.bool,
};

export default SectionAmbientLayer;
