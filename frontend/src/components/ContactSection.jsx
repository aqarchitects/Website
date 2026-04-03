import DecorativeLine from "./DecorativeLine";
import ScrollReveal from "./ScrollReveal";
import {
  // TwitterIcon,
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
} from "./SocialMediaIcons";

/**
 * ContactSection Component
 *
 * Displays the contact section with title, decorative line, and contact information.
 * Desktop: 2 columns layout
 * Mobile: 1 column layout
 *
 * @component
 */
const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 lg:py-32 bg-black z-5 overflow-hidden"
    >
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-left text-left space-y-4 md:space-y-5 lg:space-y-6">
          {/* 1. Section Title */}
          <ScrollReveal direction="left" distance={150} duration={1.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight tracking-tighter">
              Stay Connected:
            </h2>
          </ScrollReveal>

          {/* 2. Decorative Line */}
          <ScrollReveal
            direction="right"
            distance={150}
            duration={1.2}
            delay={0.1}
          >
            <DecorativeLine className="max-w-4xl" id="contact_main_line" />
          </ScrollReveal>

          {/* 3. Contact Container - 2 columns on desktop, 1 column on mobile */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 mt-8 md:mt-12">
            {/* Column 1 - Contact Info */}
            <ScrollReveal
              direction="left"
              distance={150}
              duration={1.2}
              delay={0.2}
            >
              <div className="flex flex-col space-y-3 md:space-y-4 text-left">
                {/* Small Title 1 */}
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-light tracking-tight">
                  Contact Us:
                </h3>

                {/* Line 1 */}
                <DecorativeLine id="col1_line1" />

                {/* Description 1 */}
                <p className="text-sm sm:text-sm md:text-base text-gray-medium font-medium leading-relaxed tracking-tight">
                  Business Avenue Building, 206 <br />
                  P.O. Box 20373 <br />
                  Dubai, UAE
                </p>

                {/* Small Title 2 */}
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-light tracking-tight pt-4">
                  Connect on social media:
                </h3>

                {/* Line 2 */}
                <DecorativeLine id="col1_line2" />

                {/* Social Media Icons */}
                <div className="flex gap-4 md:gap-6 items-center">
                  {/* <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    aria-label="Twitter"
                  >
                    <TwitterIcon />
                  </a> */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    aria-label="Instagram"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    aria-label="Facebook"
                  >
                    <FacebookIcon />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Column 2 - Additional Info */}
            <ScrollReveal
              direction="right"
              distance={150}
              duration={1.2}
              delay={0.3}
            >
              <div className="flex flex-col space-y-3 md:space-y-4 text-left">
                {/* Small Title 1 */}
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-light tracking-tight">
                  Office Lines:
                </h3>

                {/* Line 1 */}
                <DecorativeLine id="col2_line1" />

                {/* Description 2 */}
                <a
                  href="tel:+97143478728"
                  className="text-sm sm:text-sm md:text-base text-gray-medium hover:text-primary transition-colors font-medium leading-relaxed tracking-tight inline-block"
                >
                  +971 43478728
                </a>

                {/* Small Title 2 */}
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-light tracking-tight pt-4">
                  E-mail:
                </h3>

                {/* Line 2 */}
                <DecorativeLine id="col2_line2" />

                {/* Email Address */}
                <a
                  href="mailto:info@aq-architects.com"
                  className="text-lg sm:text-xl md:text-[1.3125rem] font-semibold text-primary hover:text-primary-600 transition-colors leading-relaxed tracking-tight"
                >
                  info@aq-architects.com
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
