import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppContainer = styled.div`
  min-height: 100vh;
  background: #000;
  color: #f5f5f7;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

function App() {
  return (
    <LanguageProvider>
      <AppContainer>
        <ContentWrapper>
          <Header />
          <Hero />
          <About />
          <Experience />
          <Contact />
          <Footer />
        </ContentWrapper>
      </AppContainer>
    </LanguageProvider>
  );
}

export default App;