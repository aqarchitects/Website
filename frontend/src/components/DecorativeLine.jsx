import GradientLine from "../reusable/GradientLine";
import PropTypes from "prop-types";

/**
 * DecorativeLine Component
 *
 * Project-specific wrapper for GradientLine with AQ-Design styling.
 * Uses the generic GradientLine component from reusable folder.
 *
 * @component
 * @example
 * <DecorativeLine />
 * <DecorativeLine className="max-w-2xl" />
 *
 * @param {Object} props
 * @param {string} props.className - Optional additional CSS classes
 * @param {string} props.id - Optional unique ID for gradient (auto-generated if not provided)
 */
const DecorativeLine = ({ className = "", id }) => {
  return (
    <GradientLine
      className={className}
      id={id}
      startColor="#C0C0C0"
      endColor="#C0C0C0"
      endOpacity={0}
    />
  );
};

DecorativeLine.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
};

export default DecorativeLine;
