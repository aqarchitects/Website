import SectionAmbientLayer from "./SectionAmbientLayer";
import ScrollReveal from "./ScrollReveal";

/**
 * StorySection Component
 *
 * Displays the story section with logo, title, and description.
 * Includes animated ambient layer similar to AboutSection.
 *
 * @component
 */
const StorySection = () => {
  return (
    <section
      id="story"
      className="relative min-h-150 sm:min-h-175 md:min-h-225 py-8 md:py-8 lg:py-16 overflow-visible"
    >
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

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-10 lg:space-y-12">
          {/* 1. Logo */}
          <ScrollReveal direction="bottom" distance={100} duration={1}>
            <div className="w-24 sm:w-28 md:w-32 lg:w-36">
              <img
                src="/logo/logo.svg"
                alt="AQ Architects Logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </ScrollReveal>

          {/* 2. Section Title */}
          <ScrollReveal
            direction="left"
            distance={150}
            duration={1.2}
            delay={0.2}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight tracking-tighter">
              Our Story
            </h2>
          </ScrollReveal>

          {/* 3. Section Description */}
          <ScrollReveal
            direction="right"
            distance={150}
            duration={1.2}
            delay={0.3}
          >
            <p className="text-sm sm:text-base md:text-md lg:text-lg font-semibold text-gray-dark leading-relaxed tracking-tight max-w-3xl">
              AQ Architects was established following years of professional
              experience delivering projects across a wide range of scales and
              typologies. We built our foundation on hands-on involvement in
              complex design processes, multidisciplinary coordination, and the
              successful realization of projects from concept through
              construction. We believe that strong architecture begins with
              strong process: structured workflows, careful coordination, and
              adherence to the highest industry standards.
            </p>
            <p className="text-sm sm:text-base md:text-md lg:text-lg font-semibold text-gray-dark leading-relaxed tracking-tight max-w-3xl">
              Having worked within dynamic and fast-paced environments, our
              practice is rooted in precision and accountability. Attention to
              detail, proactive problem-solving, and rigorous quality control
              form the backbone of our work. We anticipate challenges before
              they arise, ensuring smooth project progression from concept to
              completion. Our background across diverse project scales has
              strengthened our capacity to think strategically while resolving
              details meticulously, ensuring that each design is both visionary
              and buildable.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
