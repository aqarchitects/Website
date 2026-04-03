import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollReveal Component
 *
 * A wrapper component that adds GSAP scroll-based animations to its children.
 * Elements slide in from off-canvas when scrolling down and slide out when scrolling up.
 *
 * @component
 * @example
 * <ScrollReveal direction="left" delay={0.2}>
 *   <div>Your content here</div>
 * </ScrollReveal>
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The content to animate
 * @param {string} [props.direction="bottom"] - Direction from which element enters ("left", "right", "top", "bottom")
 * @param {number} [props.distance=300] - Distance in pixels the element travels during animation
 * @param {number} [props.duration=1] - Animation duration in seconds
 * @param {number} [props.delay=0] - Delay before animation starts in seconds
 * @param {string} [props.ease="power3.out"] - GSAP easing function
 * @param {number} [props.start="top 80%"] - ScrollTrigger start position
 * @param {number} [props.end="top 40%"] - ScrollTrigger end position
 * @param {boolean} [props.scrub=false] - Whether to scrub animation with scroll position
 * @param {string} [props.toggleActions="play reverse play reverse"] - ScrollTrigger toggle actions (onEnter, onLeave, onEnterBack, onLeaveBack)
 */
const ScrollReveal = ({
  children,
  direction = "bottom",
  distance = 150,
  duration = 1,
  delay = 0,
  ease = "power3.out",
  start = "top 80%",
  end = "top 20%",
  scrub = false,
  toggleActions = "play none none reverse",
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Determine initial position based on direction
    const getInitialPosition = () => {
      switch (direction) {
        case "left":
          return { x: -distance, y: 0 };
        case "right":
          return { x: distance, y: 0 };
        case "top":
          return { x: 0, y: -distance };
        case "bottom":
        default:
          return { x: 0, y: distance };
      }
    };

    const initialPos = getInitialPosition();

    // Set initial state
    gsap.set(element, {
      x: initialPos.x,
      y: initialPos.y,
      opacity: 0,
    });

    // Create scroll-triggered animation
    const animation = gsap.to(element, {
      x: 0,
      y: 0,
      opacity: 1,
      duration: duration,
      delay: delay,
      ease: ease,
      scrollTrigger: {
        trigger: element,
        start: start, // When to start the animation
        end: end, // When animation should complete
        toggleActions: toggleActions, // onEnter, onLeave, onEnterBack, onLeaveBack
        // markers: true, // Uncomment for debugging
      },
    });

    // Cleanup
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [direction, distance, duration, delay, ease, start, end, scrub, toggleActions]);

  return <div ref={elementRef}>{children}</div>;
};

ScrollReveal.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  distance: PropTypes.number,
  duration: PropTypes.number,
  delay: PropTypes.number,
  ease: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
  scrub: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  toggleActions: PropTypes.string,
};

export default ScrollReveal;

