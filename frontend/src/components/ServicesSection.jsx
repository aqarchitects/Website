import Button from "./Button";
import ScrollReveal from "./ScrollReveal";
import ServicesSlider from "./ServicesSlider";
import { homeSliderData } from "../config/homeSlider";

/**
 * ServicesSection Component
 *
 * Displays the services section with title, description, button, and services slider.
 *
 * @component
 */
const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative py-16 md:py-24 lg:py-32 bg-black"
    >
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-10 lg:space-y-12">
          {/* 1. Section Title */}
          <ScrollReveal direction="bottom" distance={120} duration={1.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight tracking-tighter">
              Our Services
            </h2>
          </ScrollReveal>

          {/* 2. Section Description */}
          <ScrollReveal
            direction="left"
            distance={150}
            duration={1.2}
            delay={0.2}
          >
            <p className="text-sm sm:text-base md:text-md lg:text-lg font-semibold text-gray-dark leading-relaxed tracking-tight max-w-3xl">
              We offer a wide range of architectural services designed to
              support every stage of your project, from concept to
              completion...!
            </p>
          </ScrollReveal>

          {/* 3. Section Button */}
          <ScrollReveal
            direction="bottom"
            distance={100}
            duration={1}
            delay={0.3}
          >
            <Button text="View AQ Services" href="/services" />
          </ScrollReveal>

          {/* 4. Services Slider */}
          <div className="w-full mt-8 md:mt-12 lg:mt-16">
            <ServicesSlider services={homeSliderData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
