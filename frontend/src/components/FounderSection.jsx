import DecorativeLine from "./DecorativeLine";
import ScrollReveal from "./ScrollReveal";

/**
 * FounderSection Component
 *
 * Displays the founder section with a 2-column layout:
 * - Left: Founder image (50% width, edge-to-edge)
 * - Right: Logo, decorative line, description, and additional text
 *
 * @component
 */
const FounderSection = () => {
  return (
    <section id="founder" className="relative bg-black ">
      <div className="flex flex-col lg:flex-row">
        {/* Left Column - Founder Image */}
        <ScrollReveal direction="left" distance={150} duration={1.2}>
          <div className="w-full lg:w-1/2 flex items-center justify-left bg-black min-h-[600px] lg:min-h-[700px]">
            <img
              src="/images/founder.jpg"
              alt="Founder"
              className="w-auto h-full max-h-[600px] lg:max-h-[1700px] object-contain"
              style={{
                borderRadius: "0 40px 0 0",
              }}
            />
          </div>
        </ScrollReveal>

        {/* Right Column - Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-12 md:py-16 lg:py-20">
          {/* Row 1: Small Logo */}
          <ScrollReveal
            direction="right"
            distance={100}
            duration={1}
            delay={0.2}
          >
            <div className="mb-3 md:mb-6">
              <img
                src="/logo/logo.svg"
                alt="AQ Architects Logo"
                className="w-16 h-auto object-contain"
              />
            </div>
          </ScrollReveal>

          {/* Row 2: Title */}
          <ScrollReveal
            direction="right"
            distance={150}
            duration={1.2}
            delay={0.3}
          >
            <div className="my-3 md:my-6">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight tracking-tight"
                style={{ color: "#CD914F" }}
              >
                Founder's Note:
              </h2>
            </div>
          </ScrollReveal>

          {/* Row 3: Decorative Line */}
          <ScrollReveal
            direction="right"
            distance={150}
            duration={1.2}
            delay={0.4}
          >
            <DecorativeLine />
          </ScrollReveal>

          {/* Row 4: Description */}
          <ScrollReveal
            direction="right"
            distance={150}
            duration={1.2}
            delay={0.5}
          >
            <div className="my-6 md:mb-8">
              <p className="text-sm sm:text-base font-normal leading-relaxed text-gray-light">
                Since the founding of <strong>AQ Architects</strong> , our
                vision has been clear: to contribute meaningfully to the built
                environment through architecture that is thoughtful,
                responsible, and enduring. In a city defined by ambition and
                rapid transformation, we believe architecture must go beyond
                appearance—it must create lasting value for people and
                communities.
              </p>
              <p className="text-sm sm:text-base font-normal leading-relaxed text-gray-light">
                At AQ Architects, we approach every project with discipline,
                creativity, and integrity. Our commitment to precision and
                quality is matched by a deep understanding of human experience
                and environmental responsibility.
              </p>
              <p className="text-sm sm:text-base font-normal leading-relaxed text-gray-light">
                As we continue to grow, our focus remains steadfast: to uphold
                excellence in design, strengthen trusted partnerships, and shape
                a future built on thoughtful and enduring architecture.
              </p>
            </div>
          </ScrollReveal>

          {/* Row 5: Additional Text */}
          <ScrollReveal
            direction="right"
            distance={100}
            duration={1}
            delay={0.6}
          >
            <div>
              <p className="text-sm sm:text-base font-medium leading-normal tracking-tight text-white">
                Mr. Abdelqader Hazem <br />
                Founder
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
