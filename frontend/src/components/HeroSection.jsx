import PageHero from "./PageHero";

/**
 * HeroSection Component (Homepage)
 *
 * Homepage-specific hero section using the PageHero component.
 * This component maintains the original homepage hero design.
 *
 * @component
 */
const HeroSection = () => {
  return (
    <PageHero
      backgroundImage="/images/homepagebg.png"
      titleLine1="Think. Design. Build."
      titleLine2="Turning Ideas Into Landmarks"
      // description="We Are AQ Architects ..."
      showLearnMore={true}
      learnMoreText="AQ Architects"
      learnMoreScrollTo="#about"
      showOverlay={true}
      overlayOpacity="20"
    />
  );
};

export default HeroSection;
