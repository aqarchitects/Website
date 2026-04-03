import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ServicesSlider from "../components/ServicesSlider";
import { homeSliderData } from "../config/homeSlider";

/**
 * Services Page Component
 * 
 * Displays all services offered by AQ Architects
 */
const Services = () => {
  return (
    <>
      <SEO
        title="Services - AQ Architects"
        description="Explore our comprehensive range of architectural services"
      />
      <Header />

      {/* Hero Section */}
      <PageHero
        backgroundImage="/images/homepagebg.png"
        logo="/logo/logo.svg"
        logoAlt="AQ Architects Logo"
        logoWidth="w-20 md:w-24 lg:w-28"
        customTitle={
          <>
            Our <span className="text-primary">Services</span>
          </>
        }
        description="We offer a wide range of architectural services designed to support every stage of your project, from concept to completion."
        height="h-[85vh]"
        showLearnMore={true}
        learnMoreText="Our Services"
        learnMoreScrollTo="#services-section"
      />

      {/* Services Section */}
      <section
        id="services-section"
        className="relative py-16 md:py-24 lg:py-32 bg-black"
      >
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center text-center space-y-8 md:space-y-10 lg:space-y-12">
            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight tracking-tighter">
              What We Offer
            </h2>

            {/* Section Description */}
            <p className="text-sm sm:text-base md:text-md lg:text-lg font-semibold text-gray-dark leading-relaxed tracking-tight max-w-3xl">
              From initial concept to final construction, our team of experts provides comprehensive architectural solutions tailored to your unique needs.
            </p>

            {/* Services Slider */}
            <div className="w-full mt-8 md:mt-12 lg:mt-16">
              <ServicesSlider services={homeSliderData} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;

