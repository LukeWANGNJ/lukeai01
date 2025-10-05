import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('zh');

  const toggleLanguage = () => {
    setCurrentLang(prev => prev === 'en' ? 'zh' : 'en');
  };

  const t = (enText, zhText) => {
    return currentLang === 'zh' ? zhText : enText;
  };

  return (
    <LanguageContext.Provider value={{ currentLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};