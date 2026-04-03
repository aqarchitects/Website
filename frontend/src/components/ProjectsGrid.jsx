import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionAmbientLayer from "./SectionAmbientLayer";

/**
 * ProjectCard Component
 *
 * Individual project card with flip effect on hover.
 * Front: Image
 * Back: Description with link
 * Below card: Title and Location
 */
const ProjectCard = ({ project, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  // Click handler to navigate to project page
  const handleCardClick = () => {
    navigate(`/projects/${project.slug}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group z-10 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={handleCardClick}
      style={{
        transform: "scale(1)",
        transition: "transform 0.3s ease-out",
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {/* Row 1: Flip Card Container */}
      <div
        className="w-full aspect-[4/3] mb-4 relative"
        style={{
          perspective: "1000px",
        }}
      >
        {/* Flip Card Inner */}
        <div
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.6s",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front Side - Image */}
          <div
            className="absolute w-full h-full overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              borderRadius: "2.25rem",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Back Side - Description */}
          <div
            className="absolute w-full h-full bg-primary flex flex-col items-center justify-center p-6 sm:p-8"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              borderRadius: "2.25rem",
            }}
          >
            <p className="text-white text-sm sm:text-base md:text-lg font-medium text-center mb-6 leading-relaxed">
              {/* {project.description || `Explore our ${project.category.toLowerCase()} project in ${project.location}. Click to view full details.`} */}
              {`Click to view full details.`}
            </p>

            <div className="flex items-center gap-2 text-white font-semibold text-base sm:text-lg">
              <span>View Project</span>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Title */}
      <h3
        className="text-xl sm:text-2xl font-semibold mb-2 text-center leading-normal transition-colors duration-300"
        style={{
          color: isFlipped ? "#CD914F" : "#888",
          letterSpacing: "-0.03rem",
        }}
      >
        {project.title}
      </h3>

      {/* Row 3: Location */}
      <p
        className="text-sm font-medium text-center leading-snug"
        style={{
          color: "#5E5E5E",
          letterSpacing: "-0.0175rem",
        }}
      >
        {project.location}
      </p>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    status: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  index: PropTypes.number,
};

/**
 * ProjectsGrid Component
 *
 * Displays projects in a responsive grid layout.
 * Desktop: 3 columns, Mobile: 1 column
 *
 * @component
 */
const ProjectsGrid = ({ projects = [] }) => {
  if (projects.length === 0) {
    return (
      <section className="relative bg-black py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <p
              className="text-lg sm:text-xl font-medium"
              style={{ color: "#A2A5A9" }}
            >
              No projects found matching your criteria.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects-grid"
      className="relative bg-black py-16 md:py-24 lg:py-32"
    >
      {/* Ambient Layer with Logo Vector - Below Content */}
      <SectionAmbientLayer
        svgConfig={[
          {
            src: "/images/logo_vector.svg",
            position: { top: "-450px", left: "0" },
            width: "600px",
            opacity: 1,
            drift: { x: [-15, 0, -15], y: [-15, 0, -15], duration: 10 },
            rotate: { angle: [0, 5, 0], duration: 8 },
            hideOnMobile: true,
          },
        ]}
        containerZIndex={5}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Projects Grid - 1 column mobile, 3 columns desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Projects Count */}
        <div className="mt-12 md:mt-16 text-center">
          <p
            className="text-sm sm:text-base font-medium"
            style={{ color: "#A2A5A9" }}
          >
            Showing {projects.length}{" "}
            {projects.length === 1 ? "project" : "projects"}
          </p>
        </div>
      </div>
    </section>
  );
};

ProjectsGrid.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      status: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
};

export default ProjectsGrid;
