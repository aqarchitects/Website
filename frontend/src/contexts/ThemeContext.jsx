import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

/**
 * Theme Provider
 * 
 * Manages theme state (dark/light mode)
 * Default: Dark mode
 * Structure ready for light mode implementation in the future
 */
export const ThemeProvider = ({ children }) => {
  // Default to dark mode - light mode will be implemented later
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Apply theme class to body for future light mode support
    if (theme === "light") {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const value = {
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === "dark",
    isLight: theme === "light",
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

/**
 * useTheme Hook
 * 
 * Access theme state and controls
 * 
 * @returns {Object} { theme, setTheme, toggleTheme, isDark, isLight }
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};

