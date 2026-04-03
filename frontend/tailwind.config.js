/** @type {import('tailwindcss').Config} */
import designTokens from "./src/config/designTokens.js";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Colors from design tokens
      colors: {
        primary: designTokens.colors.primary,
        neutral: designTokens.colors.neutral,
        gray: designTokens.colors.gray,
        text: designTokens.colors.text,
        background: designTokens.colors.background,
      },

      // Typography
      fontFamily: designTokens.typography.fontFamily,
      fontSize: designTokens.typography.fontSize,
      fontWeight: designTokens.typography.fontWeight,
      lineHeight: designTokens.typography.lineHeight,
      letterSpacing: designTokens.typography.letterSpacing,

      // Border Radius
      borderRadius: designTokens.borderRadius,

      // Shadows
      boxShadow: {
        ...designTokens.shadows,
      },
      textShadow: designTokens.shadows.text,

      // Breakpoints (screens)
      screens: designTokens.breakpoints,
    },
  },
  plugins: [
    // Custom plugin for text-shadow utility
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    },
  ],
};
