import PropTypes from "prop-types";
import ScrollReveal from "./ScrollReveal";

/**
 * StatisticSection Component
 *
 * A reusable section component for displaying statistics with a background image.
 * Can be used across different pages with different background images.
 *
 * @component
 * @example
 * <StatisticSection
 *   backgroundImage="/images/statistic_1.png"
 *   statistics={[
 *     { number: "150+", text: "Projects Completed" },
 *     { number: "25+", text: "Years of Experience" },
 *     { number: "50+", text: "Awards Won" }
 *   ]}
 * />
 *
 * @param {Object} props - Component props
 * @param {string} props.backgroundImage - Path to background image
 * @param {Array<Object>} props.statistics - Array of statistic objects
 * @param {string} props.statistics[].number - The statistic number (e.g., "150+")
 * @param {string} props.statistics[].text - The statistic description
 * @param {string} [props.className] - Additional CSS classes
 */
const StatisticSection = ({
  backgroundImage,
  statistics = [],
  className = "",
}) => {
  return (
    <section
      className={`relative min-h-100 sm:min-h-125 md:min-h-150 overflow-hidden ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Statistics background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Optional: Dark overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-black/40" /> */}
      </div>

      {/* Content Container */}
      {/* <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-full flex items-start justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 w-full">
          {statistics.map((stat, index) => (
            <ScrollReveal
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
              distance={120}
              duration={1.2}
              delay={index * 0.1}
            >
              <div className="flex flex-col items-center text-center space-y-2 md:space-y-3">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-primary leading-none tracking-tight">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base md:text-lg font-medium text-gray-muted leading-normal tracking-tight">
                  {stat.text}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div> */}
    </section>
  );
};

StatisticSection.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  className: PropTypes.string,
};

export default StatisticSection;
