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
      // description="We Are AQ Architects ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      showLearnMore={true}
      learnMoreText="AQ Architects"
      learnMoreScrollTo="#about"
      showOverlay={true}
      overlayOpacity="20"
    />
  );
};

export default HeroSection;
