import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

function App() {
  return (
    <AppContainer>
      <ContentWrapper>
        <Header />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </ContentWrapper>
    </AppContainer>
  );
}

export default App;