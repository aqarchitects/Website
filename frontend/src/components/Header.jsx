import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import DecorativeLine from "./DecorativeLine";
import {
  // TwitterIcon,
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
} from "./SocialMediaIcons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Disable scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Header - Transparent with logo and hamburger */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo - Left Side */}
          <Link to="/" className="z-50">
            <img
              src="/logo/logo.svg"
              alt="AG Design Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Hamburger Menu - Right Side */}
          <button
            onClick={toggleMenu}
            className="z-50 p-2 hover:opacity-80 transition-opacity cursor-pointer"
            aria-label="Toggle menu"
          >
            <img src="/menu.svg" alt="Menu" className="h-8 w-8" />
          </button>
        </div>
      </header>

      {/* Backdrop Blur Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Sidebar Menu - Slides from right */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[60%] md:w-[50%] lg:w-[40%] bg-neutral-950 z-50"
          >
            <nav className="flex flex-col h-full p-6 sm:p-8 md:p-10 lg:p-12">
              {/* Close Button - Top Right */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="flex justify-end mb-12 sm:mb-16"
              >
                <button
                  onClick={closeMenu}
                  className="p-2 hover:opacity-80 transition-opacity cursor-pointer"
                  aria-label="Close menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </motion.div>

              {/* Title - AQ */}
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight tracking-tighter mb-8 sm:mb-10 md:mb-12"
              >
                AQ
              </motion.h2>

              {/* Navigation Links */}
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.3,
                    },
                  },
                }}
                className="flex flex-col gap-3 mb-6 sm:mb-10"
              >
                <motion.li
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    to="/"
                    onClick={closeMenu}
                    className={`text-2xl  font-medium leading-tight tracking-tight transition-colors ${
                      location.pathname === "/"
                        ? "text-primary font-semibold"
                        : "text-white hover:text-primary"
                    }`}
                  >
                    Home
                  </Link>
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    to="/about"
                    onClick={closeMenu}
                    className={`text-2xl   font-medium leading-tight tracking-tight transition-colors ${
                      location.pathname === "/about"
                        ? "text-primary font-semibold"
                        : "text-white hover:text-primary"
                    }`}
                  >
                    About AQ Architects
                  </Link>
                </motion.li>
                {/* <motion.li
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    to="/terms-of-service#services"
                    onClick={closeMenu}
                    className={`text-2xl   font-medium leading-tight tracking-tight transition-colors ${
                      location.hash === "#services"
                        ? "text-primary font-semibold"
                        : "text-white hover:text-primary"
                    }`}
                  >
                    Services
                  </Link>
                </motion.li> */}
                <motion.li
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    to="/projects"
                    onClick={closeMenu}
                    className={`text-2xl   font-medium leading-tight tracking-tight transition-colors ${
                      location.pathname === "/projects"
                        ? "text-primary font-semibold"
                        : "text-white hover:text-primary"
                    }`}
                  >
                    Projects
                  </Link>
                </motion.li>
                {/* <motion.li
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    to="/news"
                    onClick={closeMenu}
                    className={`text-2xl   font-medium leading-tight tracking-tight transition-colors ${
                      location.pathname === "/news"
                        ? "text-primary font-semibold"
                        : "text-white hover:text-primary"
                    }`}
                  >
                    News
                  </Link>
                </motion.li> */}
                <motion.li
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    to="/contact"
                    onClick={closeMenu}
                    className={`text-2xl   font-medium leading-tight tracking-tight transition-colors ${
                      location.pathname === "/contact"
                        ? "text-primary font-semibold"
                        : "text-white hover:text-primary"
                    }`}
                  >
                    Contact Us
                  </Link>
                </motion.li>
              </motion.ul>

              {/* Careers Link - Smaller */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="mb-auto"
              >
                <Link
                  to="/contact#contact-form"
                  onClick={closeMenu}
                  className={`text-lg font-medium leading-tight tracking-tight transition-colors ${
                    location.pathname === "/contact#contact-form"
                      ? "text-primary font-semibold"
                      : "text-white hover:text-primary"
                  }`}
                >
                  Careers
                </Link>
              </motion.div>

              {/* Footer Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="mt-auto flex flex-col items-left gap-4 sm:gap-5 md:gap-6"
              >
                {/* Line */}
                <DecorativeLine />

                {/* Copyright */}
                <p className="text-xs sm:text-sm text-gray-medium font-medium text-left mb-0">
                  Registered Trademark in Dubai, UAE.
                </p>
                <p className="text-xs sm:text-sm text-gray-medium font-medium text-left">
                  © 2024 AQ Architects. All rights reserved.
                </p>

                {/* Line */}
                <DecorativeLine />

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
              </motion.div>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
