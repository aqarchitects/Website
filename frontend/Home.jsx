import { useEffect } from "react";
import SEO from "../components/SEO";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import StatisticSection from "../components/StatisticSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import CareerSection from "../components/CareerSection";
import Footer from "../components/Footer";
import { usePreload } from "../components/imagePreloader";
import { getPreloadStrategy } from "../utils/preloadImages";

const Home = () => {
  const { preload } = usePreload();

  // Start preloading AFTER the home page has loaded
  useEffect(() => {
    // Wait for the page to be fully loaded and idle
    const startPreload = () => {
      try {
        const preloadImages = getPreloadStrategy("moderate");
        const _allImages = [
          ...preloadImages.critical,
          ...preloadImages.high,
          ...preloadImages.medium,
          ...preloadImages.low,
        ];

        // console.log(
        //   "[Home] Starting background preload:",
        //   _allImages.length,
        //   "images",
        // );

        // Start with high priority images first
        preload(preloadImages.critical, "critical");
        preload(preloadImages.high, "high");

        // Delay medium and low priority to avoid bandwidth competition
        setTimeout(() => {
          preload(preloadImages.medium, "medium");
        }, 3000);

        setTimeout(() => {
          preload(preloadImages.low, "low");
        }, 6000);
      } catch (error) {
        console.error("[Home] Preload error:", error);
      }
    };

    // Use requestIdleCallback to ensure we don't block the main thread
    if ("requestIdleCallback" in window) {
      requestIdleCallback(startPreload, { timeout: 3000 });
    } else {
      setTimeout(startPreload, 3000);
    }
  }, [preload]);
  // Statistics data
  const statistics = [
    { number: "+12", text: "International Clients" },
    { number: "+57", text: "Successful Constructions" },
    { number: "+12,000,000", text: "Hours of Constructions" },
    { number: "+1,500", text: "Professional Technicians & Designers" },
  ];

  return (
    <>
      <SEO
        title="Home - AQ Architects"
        description="Welcome to AQ Architects - Your creative design partner"
      />

      {/* Header with transparent background and hamburger menu */}
      <Header />

      {/* Hero Section with fullscreen background */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Statistics Section */}
      <StatisticSection
        backgroundImage="/images/statistic_1.png"
        statistics={statistics}
      />

      {/* Services Section */}
      <ServicesSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      {/* <ContactSection /> */}

      {/* Career Section */}
      <CareerSection />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
