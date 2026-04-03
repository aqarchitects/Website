/**
 * Typography Utility Classes
 *
 * This file provides pre-configured typography styles based on design tokens.
 * Use these class name strings in your components for consistent typography.
 *
 * Usage:
 * import { typographyStyles } from '@/styles/typography';
 * <h1 className={typographyStyles.sidebarTitle}>Title</h1>
 */

export const typographyStyles = {
  // Sidebar Typography
  sidebarTitle:
    "text-7xl font-semibold text-white leading-tight tracking-tight",
  sidebarLink: "text-4xl font-medium text-white leading-tight tracking-tight",
  sidebarLinkActive:
    "text-4xl font-semibold text-primary leading-tight tracking-tight",
  sidebarSmallText:
    "text-xl font-medium text-white leading-normal tracking-normal",
  sidebarFooterText:
    "text-xs font-medium text-neutral-400 leading-loose tracking-tight",

  // Landing Page Typography
  landingTitle1:
    "text-8xl font-medium text-white text-center text-shadow leading-[4.875rem] tracking-tighter",
  landingTitle2:
    "text-8xl font-semibold text-white leading-[4.875rem] tracking-tighter",
  landingDescription:
    "text-md font-medium text-gray-lightest text-center leading-normal tracking-tight",

  // Learn More
  learnMoreNormal:
    "text-base font-normal text-text-dark text-center leading-relaxed tracking-tight",
  learnMoreBold:
    "text-base font-semibold text-text-dark leading-relaxed tracking-tight",

  // Section Typography
  sectionTitle:
    "text-7xl font-medium text-white text-center leading-tight tracking-tight",
  sectionDescription:
    "text-md font-semibold text-gray-dark text-center leading-normal tracking-tight",

  // Button Typography
  buttonText:
    "text-xl font-semibold text-black text-center leading-normal tracking-tight",

  // Card Typography
  cardTitle:
    "text-5xl font-semibold text-white text-shadow-sm leading-snug tracking-tight",
  cardDescription:
    "text-base font-medium text-white leading-normal tracking-tight",

  // About Us Typography
  titleText:
    "text-7xl font-medium text-white text-center leading-tight tracking-tight",
  titleTextBrand:
    "text-7xl font-semibold text-primary leading-tight tracking-tight",
  titleTextLarge:
    "text-6xl font-medium text-primary leading-[2.8125rem] tracking-tight",

  // Generic Text Styles
  textLarge: "text-3xl font-bold text-gray leading-[2rem] tracking-tight",
  textMedium:
    "text-2xl font-semibold text-primary leading-[1.625rem] tracking-tight",
  textSmall:
    "text-base font-medium text-gray-medium leading-relaxed tracking-tight",
  textXSmall: "text-xs font-medium text-gray leading-loose tracking-tight",

  // Description Styles
  descriptionPrimary:
    "text-md font-semibold text-neutral-500 text-center leading-normal tracking-tight",
  descriptionSecondary:
    "text-md font-normal text-gray-dark leading-[1.375rem] tracking-tight",
  descriptionTertiary: "text-lg font-normal text-text-dark leading-[1.625rem]",
};

/**
 * Component-specific style configurations
 * Use these for building complete components
 */
export const componentStyles = {
  button: {
    primary:
      "rounded-button bg-primary text-black text-xl font-semibold text-center px-8 py-3 hover:opacity-90 transition-opacity",
    secondary:
      "rounded-button border-2 border-primary text-primary text-xl font-semibold text-center px-8 py-3 hover:bg-primary hover:text-black transition-all",
  },

  sidebar: {
    container: "bg-background-primary",
    title: typographyStyles.sidebarTitle,
    link: typographyStyles.sidebarLink,
    linkActive: typographyStyles.sidebarLinkActive,
    footer: typographyStyles.sidebarFooterText,
  },

  card: {
    container: "rounded-lg overflow-hidden shadow-md",
    dark: "rounded-lg p-6 bg-neutral-900 shadow-card",
    primary: "rounded-lg p-6 bg-primary shadow-card",
    title: typographyStyles.cardTitle,
    description: typographyStyles.cardDescription,
  },

  slider: {
    image: "rounded-slider overflow-hidden",
    container: "rounded-slider",
  },

  section: {
    container: "py-16 px-4",
    title: typographyStyles.sectionTitle,
    description: typographyStyles.sectionDescription,
  },
};

/**
 * Utility function to combine class names
 * @param  {...string} classes - Class names to combine
 * @returns {string} Combined class names
 */
export const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export default typographyStyles;
