import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ProjectInfo = ({ category, services, scopes }) => {
  // Don't render if no data
  if (!category && (!services || services.length === 0) && (!scopes || scopes.length === 0)) {
    return null;
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="bg-black py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Category */}
          {category && (
            <motion.div variants={fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <h3 className="text-primary text-sm md:text-base font-semibold mb-3 uppercase tracking-wider">
                Category
              </h3>
              <p className="text-white text-lg md:text-xl">
                {category.name}
              </p>
            </motion.div>
          )}

          {/* Services */}
          {services && services.length > 0 && (
            <motion.div variants={fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <h3 className="text-primary text-sm md:text-base font-semibold mb-3 uppercase tracking-wider">
                Services
              </h3>
              <ul className="text-white text-lg md:text-xl space-y-2">
                {services.map((service) => (
                  <li key={service.id}>{service.name}</li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Scopes */}
          {scopes && scopes.length > 0 && (
            <motion.div variants={fadeInUp} transition={{ duration: 0.6, delay: 0.3 }}>
              <h3 className="text-primary text-sm md:text-base font-semibold mb-3 uppercase tracking-wider">
                Scope
              </h3>
              <ul className="text-white text-lg md:text-xl space-y-2">
                {scopes.map((scope) => (
                  <li key={scope.id}>{scope.name}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

ProjectInfo.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slug: PropTypes.string,
  }),
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string,
    })
  ),
  scopes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string,
    })
  ),
};

export default ProjectInfo;

