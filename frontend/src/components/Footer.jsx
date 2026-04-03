import { Link } from "react-router-dom";
import DecorativeLine from "./DecorativeLine";
import ScrollReveal from "./ScrollReveal";
import {
  // TwitterIcon,
  LinkedInIcon,
  InstagramIcon,
  // FacebookIcon,
} from "./SocialMediaIcons";

/**
 * Footer Component
 *
 * Desktop: 3 columns layout, each with 6 rows
 * Mobile: Stacked layout
 *
 * Column 1: Navigation Links (About Us, Projects, Services, Join Our Team)
 * Column 2: Contact Info (Address, Phone Numbers)
 * Column 3: Social Media & Email
 *
 * @component
 */
const Footer = () => {
  return (
    <footer className="relative pb-2 pt-16 md:pt-20 lg:pt-24 bg-neutral-950">
      {/* Content Container */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* 3 Columns Grid - Desktop: 3 columns, Mobile: 1 column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
          {/* Column 1 - Navigation Links */}
          <ScrollReveal
            direction="left"
            distance={150}
            duration={1.2}
            delay={0}
          >
            <div className="flex flex-col space-y-4">
              {/* Row 1: Title */}
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-light tracking-tight">
                <strong className="font-bold">AQ </strong>ARCHITECTS
              </h3>

              {/* Row 2: Line */}
              <DecorativeLine id="footer_col1_line" />

              {/* Rows 3-6: Links */}
              <div className="flex flex-col space-y-3 pt-2">
                <Link
                  to="/"
                  className="text-sm sm:text-base text-gray-medium hover:text-primary transition-colors font-medium tracking-tight"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-sm sm:text-base text-gray-medium hover:text-primary transition-colors font-medium tracking-tight"
                >
                  About Us
                </Link>
                <Link
                  to="/projects"
                  className="text-sm sm:text-base text-gray-medium hover:text-primary transition-colors font-medium tracking-tight"
                >
                  Projects
                </Link>
                {/* <Link
                  to="/#services"
                  className="text-sm sm:text-base text-gray-medium hover:text-primary transition-colors font-medium tracking-tight"
                >
                  Services
                </Link> */}
                <Link
                  to="/contact#contact-form"
                  className="text-sm sm:text-base text-gray-medium hover:text-primary transition-colors font-medium tracking-tight"
                >
                  Join Our Team
                </Link>
                <Link
                  to="/faq"
                  className="text-sm  text-gray-medium hover:text-primary transition-colors font-medium tracking-tight"
                >
                  FAQs
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Column 2 - Contact Information */}
          <ScrollReveal
            direction="left"
            distance={150}
            duration={1.2}
            delay={0.1}
          >
            <div className="flex flex-col space-y-4">
              {/* Row 1: Title */}
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-light tracking-tight">
                Contact Us:
              </h3>

              {/* Row 2: Line */}
              <DecorativeLine id="footer_col2_line" />

              {/* Rows 3-4: Address */}
              <div className="pt-2">
                <p className="text-sm sm:text-base text-gray-medium font-medium leading-relaxed tracking-tight">
                  Business Avenue Building, 206
                  <br />
                  P.O. Box 20373
                  <br />
                  Dubai, UAE
                </p>
              </div>

              {/* Rows 5-6: Phone Numbers */}
              <div>
                <a
                  href="tel:+97143478728"
                  className="text-sm sm:text-base text-gray-medium hover:text-primary transition-colors font-medium leading-relaxed tracking-tight inline-block"
                >
                  +971 43478728
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Column 3 - Social Media & Email */}
          <ScrollReveal
            direction="left"
            distance={150}
            duration={1.2}
            delay={0.2}
          >
            <div className="flex flex-col space-y-4">
              {/* Row 1: Title */}
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-light tracking-tight">
                Connect on Social Media:
              </h3>

              {/* Row 2: Line */}
              <DecorativeLine id="footer_col3_line" />

              {/* Rows 3-4: Social Media Icons */}
              <div className="flex gap-4 md:gap-6 items-center pt-2">
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
                  href="https://www.linkedin.com/company/aq-architects/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://www.instagram.com/aq_architects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
                {/* <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a> */}
              </div>

              {/* Rows 5-6: Email */}
              <div>
                <h3 className="pt-1 md:pt-2 lg:pt-4 text-base sm:text-lg md:text-xl font-semibold text-gray-light tracking-tight">
                  Email:
                </h3>
                <a
                  href="mailto:info@aq-architects.com"
                  className="text-lg sm:text-xl md:text-[1.3125rem] font-semibold text-primary hover:text-primary-600 transition-colors leading-relaxed tracking-tight"
                >
                  info@aq-architects.com
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* legal section */}

        <div className="flex gap-2 md:gap-4 items-center justify-center">
          <Link
            to="/terms-of-service"
            className="text-sm  text-gray-medium hover:text-primary transition-colors font-medium tracking-tight"
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy-policy"
            className="text-sm  text-gray-medium hover:text-primary transition-colors font-medium tracking-tight"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
      {/* Copyright */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-center text-center gap-2 md:gap-4">
          <p className="text-xs sm:text-sm text-gray-medium font-medium text-center mb-0">
            Registered Trademark in Dubai, UAE.
          </p>
          <p className="text-xs sm:text-sm text-gray-medium font-medium text-center mb-0">
            © 2024 AQ Architects. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
