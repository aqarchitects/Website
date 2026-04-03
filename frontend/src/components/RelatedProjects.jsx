import { motion } from "framer-motion";
import PropTypes from "prop-types";

const RelatedProjects = ({ projects, title = "Related Projects" }) => {
  // Don't render if no related projects
  if (!projects || projects.length === 0) {
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
      className="bg-black py-16 md:py-24"
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
          {title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group block"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              {project.category && (
                <p className="text-gray-400 text-sm md:text-base">
                  {project.category}
                </p>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

RelatedProjects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      category: PropTypes.string,
    })
  ),
  title: PropTypes.string,
};

export default RelatedProjects;

