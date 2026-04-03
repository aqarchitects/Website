import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ProjectAnalysis = ({ analysis }) => {
  // Don't render if no analysis data
  if (!analysis || analysis.length === 0) {
    return null;
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      className="bg-black py-16 md:py-24 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Project Details
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {analysis.map((item, index) => (
            <motion.div
              key={index}
              className="border-l-4 border-primary pl-6"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <dt className="text-gray-400 text-sm md:text-base uppercase tracking-wider mb-2">
                {item.label}
              </dt>
              <dd className="text-white text-xl md:text-2xl font-semibold">
                {item.value}
              </dd>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

ProjectAnalysis.propTypes = {
  analysis: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ),
};

export default ProjectAnalysis;

