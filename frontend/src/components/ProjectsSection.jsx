import Button from "./Button";
import SectionAmbientLayer from "./SectionAmbientLayer";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";
import { homeProjectsData } from "../config/homeProjects";

/**
 * ProjectsSection Component
 *
 * Displays the projects section with title, description, button, and project cards.
 *
 * @component
 */
const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen py-16 md:py-24 lg:py-32 mb-0 bg-black overflow-visible"
    >
      {/* Background Image - Positioned at bottom */}
      <div
        className="absolute bottom-[-5%] sm:bottom-[-10%] md:bottom-[-15%] left-0 right-0 h-1/2 bg-no-repeat bg-bottom bg-contain  z-0"
        style={{
          backgroundImage: "url('/images/projectsbackground.jpg')",
        }}
      />

      {/* Ambient Layer with Logo Vector */}
      {/* <SectionAmbientLayer
        svgConfig={[
          {
            src: "/images/logo_vector.svg",
            position: { top: "10%", right: "-10%" },
            width: "500px",
            opacity: 0.15,
            drift: {
              x: [0, 20],
              y: [0, -20],
              duration: 30,
              ease: "easeInOut",
            },
            hideOnMobile: true,
          },
        ]}
        containerZIndex={50}
      /> */}

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-10 lg:space-y-12">
          {/* 1. Section Title - Two Lines */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight tracking-tighter">
            <div className="mb-1 md:mb-2">One Brand!</div>
            <div>Many Success Stories!</div>
          </h2>

          {/* 2. Section Description */}
          <p className="text-sm sm:text-base md:text-md lg:text-lg font-semibold text-gray-dark leading-relaxed tracking-tight max-w-3xl">
            Each project at AQ Architects is more than a structure, it is a
            success story shaped by vision, precision, and purpose. From concept
            to completion, we approach every design as an opportunity to create
            lasting impact, transforming ideas into spaces that perform,
            inspire, and endure.
          </p>

          {/* 3. Section Button */}
          <Button text="View All Projects" href="/projects" />

          {/* 4. Project Cards Container */}
          <div className="w-full mt-8 md:mt-12 lg:mt-16">
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
              {homeProjectsData.map((project, index) => (
                <ScrollReveal
                  key={project.id}
                  direction={index % 2 === 0 ? "left" : "right"}
                  distance={180}
                  duration={1.6}
                  delay={0}
                  toggleActions="play none none reset"
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    href={project.href}
                    index={index}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
