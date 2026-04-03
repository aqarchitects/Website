import { useId } from "react";
import PropTypes from "prop-types";

/**
 * GradientLine Component
 *
 * A fully customizable SVG line with gradient effect.
 * Generic version for use across different applications.
 *
 * @component
 * @example
 * // Basic usage with default gray gradient
 * <GradientLine />
 *
 * @example
 * // Custom colors and width
 * <GradientLine
 *   startColor="#CD914F"
 *   endColor="#CD914F"
 *   endOpacity={0}
 *   className="max-w-2xl"
 * />
 *
 * @example
 * // Custom gradient stops
 * <GradientLine
 *   gradientStops={[
 *     { offset: 0, color: "#FF0000", opacity: 1 },
 *     { offset: 0.5, color: "#00FF00", opacity: 1 },
 *     { offset: 1, color: "#0000FF", opacity: 0 }
 *   ]}
 * />
 *
 * @param {Object} props
 * @param {string} props.className - Optional additional CSS classes
 * @param {string} props.id - Optional unique ID for gradient (auto-generated if not provided)
 * @param {string} props.startColor - Start color of gradient (default: "#C0C0C0")
 * @param {string} props.endColor - End color of gradient (default: "#C0C0C0")
 * @param {number} props.endOpacity - Opacity at the end of gradient (default: 0)
 * @param {Array} props.gradientStops - Custom gradient stops array (overrides startColor/endColor)
 * @param {number} props.strokeWidth - Width of the line stroke (default: 1)
 */
const GradientLine = ({
  className = "",
  id,
  startColor = "#C0C0C0",
  endColor = "#C0C0C0",
  endOpacity = 0,
  gradientStops,
  strokeWidth = 1,
}) => {
  // Generate unique ID if not provided using React's useId hook
  const autoId = useId();
  const gradientId = id || `gradient_${autoId}`;

  // Use custom gradient stops if provided, otherwise create default stops
  const stops = gradientStops || [
    { offset: 0, color: startColor, opacity: 1 },
    { offset: 0.8125, color: endColor, opacity: 1 },
    { offset: 0.980769, color: endColor, opacity: endOpacity },
  ];

  return (
    <div className={`w-full ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 844 1"
        fill="none"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0.5 0.5H843.5"
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={gradientId}
            x1="0.5"
            y1="1"
            x2="843.5"
            y2="1"
            gradientUnits="userSpaceOnUse"
          >
            {stops.map((stop, index) => (
              <stop
                key={index}
                offset={stop.offset}
                stopColor={stop.color}
                stopOpacity={stop.opacity !== undefined ? stop.opacity : 1}
              />
            ))}
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

GradientLine.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  startColor: PropTypes.string,
  endColor: PropTypes.string,
  endOpacity: PropTypes.number,
  gradientStops: PropTypes.arrayOf(
    PropTypes.shape({
      offset: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      opacity: PropTypes.number,
    })
  ),
  strokeWidth: PropTypes.number,
};

export default GradientLine;

