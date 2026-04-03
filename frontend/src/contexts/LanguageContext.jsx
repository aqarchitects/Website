import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [direction, setDirection] = useState('ltr');

  useEffect(() => {
    // Update document direction and lang attribute
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
  }, [language, direction]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    // Set direction based on language
    setDirection(lang === 'ar' ? 'rtl' : 'ltr');
  };

  const value = {
    language,
    direction,
    changeLanguage,
    isRTL: direction === 'rtl',
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

