import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import StorySection from "../components/StorySection";
import StatisticSection from "../components/StatisticSection";
import FounderSection from "../components/FounderSection";
import TeamSection from "../components/TeamSection";
// import { teamMembers } from "../config/teamData";
import CareerSection from "../components/CareerSection";
//adding some temp content you can remove it later
const AboutUs = () => {
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
        title="About Us - AQ Architects"
        description="Learn more about AQ Architects and our team"
      />
      <Header />

      {/* Hero Section */}
      <PageHero
        backgroundImage="/images/aboutus.jpg"
        logo="/logo/logo.svg"
        logoAlt="AQ Architects Logo"
        logoWidth="w-24 md:w-28 lg:w-32"
        customTitle={
          <>
            Where Vision <span className="text-primary"> Meets Structure</span>
          </>
        }
        description=""
        height="h-[85vh]"
        showLearnMore={true}
        learnMoreText="Our Story"
        learnMoreScrollTo="#story"
      />
      {/* add extra paragraph here */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-10 lg:space-y-12">
          <p className="text-sm sm:text-base md:text-md lg:text-lg font-semibold text-gray-dark leading-relaxed tracking-tight max-w-3xl">
            AQ Architects is an architectural consultancy based in Dubai, UAE,
            founded in 2026. We specialize in architectural design, complemented
            by expertise in masterplanning, interiors, and landscape design.
          </p>
          <p className="text-sm sm:text-base md:text-md lg:text-lg font-semibold text-gray-dark leading-relaxed tracking-tight max-w-3xl">
            Our work spans multiple sectors, including residential, hospitality,
            and commercial projects, each approached with precision, creativity,
            and a commitment to quality.
          </p>
          <p className="text-sm sm:text-base md:text-md lg:text-lg font-semibold text-gray-dark leading-relaxed tracking-tight max-w-3xl">
            At AQ Architects, we aim to create innovative and enduring
            architecture that resonates with people and communities. Every
            project is guided by a deep understanding of context, place, and
            human experience, ensuring designs that are functional, timeless,
            and meaningful.
          </p>
          <p className="text-sm sm:text-base md:text-md lg:text-lg font-semibold text-gray-dark leading-relaxed tracking-tight max-w-3xl">
            Through collaboration with clients, consultants, and stakeholders,
            we craft spaces that enhance the built environment, balancing
            aesthetic refinement, innovation, and a passion for design that
            drives every aspect of our practice.
          </p>
        </div>
      </div>
      {/* Story Section */}
      <StorySection />

      {/* statistics Section */}
      <StatisticSection
        backgroundImage="/images/statistic_1.jpg"
        statistics={statistics}
      />

      {/* Founder Section */}
      <FounderSection />

      {/* Team Section */}
      {/* <TeamSection teamMembers={teamMembers} /> */}

      {/* Career Section */}
      <CareerSection />

      <Footer />
    </>
  );
};

export default AboutUs;
