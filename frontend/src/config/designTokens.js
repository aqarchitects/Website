/**
 * Design Tokens Configuration
 * Extracted from typography.css and Figma design
 *
 * These tokens are integrated with Tailwind CSS configuration
 * to create a consistent design system across the application.
 */

export const designTokens = {
  // ============================================
  // COLORS
  // ============================================
  colors: {
    // Primary Brand Color
    primary: {
      DEFAULT: "#CD914F",
      50: "#F9F3EC",
      100: "#F3E7D9",
      200: "#E8CFB3",
      300: "#DCB78D",
      400: "#D19F67",
      500: "#CD914F", // Main brand color
      600: "#B87A3A",
      700: "#8F5F2D",
      800: "#66441F",
      900: "#3D2912",
    },

    // Neutral Colors (Grays, Whites, Blacks)
    neutral: {
      white: "#FFFFFF",
      black: "#000000",
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#E5E5E5",
      300: "#D5D5D5",
      400: "#C8C8C8",
      500: "#A7A7A7",
      600: "#8D8D8D",
      700: "#6B6B6B",
      800: "#4B5254",
      900: "#2C2C2C",
      950: "#090909",
    },

    // Semantic Grays (from design)
    gray: {
      lightest: "#CACACA",
      lighter: "#C4C4C4",
      light: "#C2C2C2",
      DEFAULT: "#A3A3A3",
      medium: "#929292",
      dark: "#878787",
      darker: "#616161",
      darkest: "#5A5A5A",
    },

    // Text Colors (semantic naming)
    text: {
      primary: "#FFFFFF",
      secondary: "#D5D5D5",
      tertiary: "#C8C8C8",
      muted: "#A7A7A7",
      disabled: "#878787",
      dark: "#4B5254",
      darker: "#2C2C2C",
      brand: "#CD914F",
    },

    // Background Colors
    background: {
      primary: "#000000",
      secondary: "#090909",
      tertiary: "#2C2C2C",
      light: "#FFFFFF",
    },
  },

  // ============================================
  // TYPOGRAPHY
  // ============================================
  typography: {
    // Font Families
    fontFamily: {
      primary: ["Montserrat", "system-ui", "-apple-system", "sans-serif"],
      sans: ["Montserrat", "system-ui", "-apple-system", "sans-serif"],
    },

    // Font Sizes (extracted from typography.css)
    fontSize: {
      // Small sizes
      xs: ["0.75rem", { lineHeight: "1.25rem", letterSpacing: "-0.0225rem" }], // 12px
      sm: [
        "0.8125rem",
        { lineHeight: "1.375rem", letterSpacing: "-0.02438rem" },
      ], // 13px
      base: [
        "0.875rem",
        { lineHeight: "1.3125rem", letterSpacing: "-0.02625rem" },
      ], // 14px

      // Medium sizes
      md: [
        "0.9375rem",
        { lineHeight: "1.1875rem", letterSpacing: "-0.02813rem" },
      ], // 15px
      lg: ["1rem", { lineHeight: "1.5rem", letterSpacing: "-0.03rem" }], // 16px
      xl: ["1.125rem", { lineHeight: "1.5rem", letterSpacing: "-0.03375rem" }], // 18px

      // Large sizes
      "2xl": [
        "1.3125rem",
        { lineHeight: "1.625rem", letterSpacing: "-0.02625rem" },
      ], // 21px
      "3xl": ["1.375rem", { lineHeight: "2rem", letterSpacing: "-0.04125rem" }], // 22px
      "4xl": [
        "1.75rem",
        { lineHeight: "2.75rem", letterSpacing: "-0.0525rem" },
      ], // 28px

      // Display sizes
      "5xl": [
        "2.25rem",
        { lineHeight: "2.25rem", letterSpacing: "-0.0675rem" },
      ], // 36px
      "6xl": [
        "2.5rem",
        { lineHeight: "2.8125rem", letterSpacing: "-0.075rem" },
      ], // 40px
      "7xl": ["3rem", { lineHeight: "2.75rem", letterSpacing: "-0.09rem" }], // 48px
      "8xl": [
        "3.75rem",
        { lineHeight: "4.875rem", letterSpacing: "-0.1125rem" },
      ], // 60px
    },

    // Font Weights
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },

    // Line Heights (semantic naming)
    lineHeight: {
      tight: "91.667%",
      snug: "100%",
      normal: "126.667%",
      relaxed: "150%",
      loose: "166.667%",
    },

    // Letter Spacing (already included in fontSize configs above)
    letterSpacing: {
      tighter: "-0.1125rem",
      tight: "-0.09rem",
      normal: "-0.03rem",
      wide: "0",
    },
  },

  // ============================================
  // SPACING
  // ============================================
  spacing: {
    // Will be extended based on design needs
    // Tailwind's default spacing scale works well
  },

  // ============================================
  // BORDER RADIUS
  // ============================================
  borderRadius: {
    none: "0",
    sm: "0.25rem", // 4px
    DEFAULT: "0.375rem", // 6px
    md: "0.5rem", // 8px
    lg: "0.75rem", // 12px
    xl: "1rem", // 16px
    "2xl": "1.5rem", // 24px
    "3xl": "2rem", // 32px
    full: "9999px",
    button: "6.1875rem", // Specific button radius from design
    slider: "0.375rem 2.125rem", // Slider/image specific radius (6px 34px)
  },

  // ============================================
  // SHADOWS
  // ============================================
  shadows: {
    // Text Shadows
    text: {
      sm: "0 4px 4px rgba(0, 0, 0, 0.15)",
      DEFAULT: "10px 10px 5px rgba(0, 0, 0, 0.6)",
    },

    // Box Shadows (can be extended as needed)
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",

    // Card Shadows (from design)
    card: "12px 12px 16px 0 rgba(0, 0, 0, 0.25)",
  },

  // ============================================
  // BREAKPOINTS
  // ============================================
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  // ============================================
  // COMPONENT-SPECIFIC TOKENS
  // ============================================
  components: {
    button: {
      borderRadius: "6.1875rem",
      background: "#CD914F",
      textColor: "#000000",
    },
    sidebar: {
      titleColor: "#FFFFFF",
      linkColor: "#FFFFFF",
      linkActiveColor: "#CD914F",
      footerTextColor: "#C8C8C8",
    },
    card: {
      titleColor: "#FFFFFF",
      descriptionColor: "#FFFFFF",
      shadow: "12px 12px 16px 0 rgba(0, 0, 0, 0.25)",
      // Card variants
      dark: {
        background: "#2C2C2C",
        shadow: "12px 12px 16px 0 rgba(0, 0, 0, 0.25)",
      },
      primary: {
        background: "#CD914F",
        shadow: "12px 12px 16px 0 rgba(0, 0, 0, 0.25)",
      },
    },
    slider: {
      borderRadius: "0.375rem 2.125rem",
      imageBorderRadius: "0.375rem 2.125rem",
    },
  },
};

export default designTokens;
