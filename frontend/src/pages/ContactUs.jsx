import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import FormSection from "../components/FormSection";
import ContactSection from "../components/ContactSection";
import MapSection from "../components/MapSection";

const ContactUs = () => {
  const location = useLocation();

  // Handle scroll to hash on page load
  useEffect(() => {
    if (location.hash) {
      // Wait for the page to render
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <SEO
        title="Contact Us - AQ Architects"
        description="Get in touch with AQ Architects team"
      />
      <Header />

      {/* Hero Section */}
      <PageHero
        backgroundImage="/images/contactus.jpg"
        logo="/logo/logo.svg"
        logoAlt="AQ Architects Logo"
        logoWidth="w-20 md:w-24"
        title="Contact Us"
        description="Have a project in mind? We'd love to hear from you. Reach out to our team and let's create something amazing together."
      />

      {/* Form Section */}
      <FormSection />

      {/* Map Section */}
      <MapSection />

      {/* Contact Section */}
      {/* <ContactSection /> */}

      <Footer />
    </>
  );
};

export default ContactUs;
