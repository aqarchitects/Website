import PropTypes from "prop-types";
import SectionAmbientLayer from "./SectionAmbientLayer";
import ScrollReveal from "./ScrollReveal";

const ProjectDescription = ({ descriptionBlocks }) => {
  // Don't render if no description
  if (!descriptionBlocks || descriptionBlocks.length === 0) {
    return null;
  }

  // Alternate directions for variety
  const getDirection = (index) => {
    const directions = ["left", "right", "bottom", "left"];
    return directions[index % directions.length];
  };

  return (
    <section className="relative bg-black py-16 md:py-24 overflow-visible">
      {/* Ambient Layer with Logo Vector */}
      <SectionAmbientLayer
        svgConfig={[
          {
            src: "/images/logo_vector.svg",
            position: { top: "-30%", left: "0" },
            width: "600px",
            opacity: 1,
            drift: {
              x: [-15, 0, -15],
              y: [-15, 0, -15],
              duration: 10,
            },
            hideOnMobile: true,
          },
        ]}
        containerZIndex={5}
      />

      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        <div className="prose prose-invert prose-lg md:prose-xl max-w-none">
          {descriptionBlocks.map((block, index) => {
            if (block.type === "title") {
              return (
                <ScrollReveal
                  key={index}
                  direction={getDirection(index)}
                  distance={150}
                  duration={1.2}
                  delay={index * 0.1}
                >
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                    {block.content}
                  </h2>
                </ScrollReveal>
              );
            }
            if (block.type === "paragraph") {
              return (
                <ScrollReveal
                  key={index}
                  direction={getDirection(index)}
                  distance={150}
                  duration={1.2}
                  delay={index * 0.1}
                >
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                    {block.content}
                  </p>
                </ScrollReveal>
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
};

ProjectDescription.propTypes = {
  descriptionBlocks: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["title", "paragraph"]).isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

export default ProjectDescription;

