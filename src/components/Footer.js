import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHeart, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #2d3748;
  color: white;
  padding: 3rem 2rem 1rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled(motion.div)``;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #667eea;
`;

const SectionText = styled.p`
  line-height: 1.6;
  opacity: 0.8;
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const QuickLink = styled.a`
  color: white;
  text-decoration: none;
  opacity: 0.8;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 1;
    color: #667eea;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  color: white;
  font-size: 1.5rem;
  opacity: 0.8;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    color: #667eea;
    transform: translateY(-3px);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #4a5568;
  padding-top: 2rem;
  text-align: center;
`;

const Copyright = styled.p`
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const HeartIcon = styled(motion.span)`
  color: #e53e3e;
`;

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Luke Wang</SectionTitle>
            <SectionText>
              Software Engineer passionate about creating innovative solutions 
              and building exceptional user experiences. Always learning and 
              growing in the ever-evolving world of technology.
            </SectionText>
          </FooterSection>

          <FooterSection
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Quick Links</SectionTitle>
            <QuickLinks>
              <QuickLink onClick={scrollToTop}>Home</QuickLink>
              <QuickLink onClick={() => scrollToSection('about')}>About</QuickLink>
              <QuickLink onClick={() => scrollToSection('experience')}>Experience</QuickLink>
              <QuickLink onClick={() => scrollToSection('skills')}>Skills</QuickLink>
              <QuickLink onClick={() => scrollToSection('contact')}>Contact</QuickLink>
            </QuickLinks>
          </FooterSection>

          <FooterSection
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Connect</SectionTitle>
            <SectionText style={{ marginBottom: '1rem' }}>
              Let's connect and explore opportunities together.
            </SectionText>
            <SocialLinks>
              <SocialLink
                href="https://www.linkedin.com/in/luke-wang-b38b4088/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </SocialLink>
              <SocialLink
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </SocialLink>
              <SocialLink
                href="mailto:luke.wang@example.com"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope />
              </SocialLink>
            </SocialLinks>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            © 2025 王晋. 用
            <HeartIcon
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart />
            </HeartIcon>
            和 Claude 制作。
          </Copyright>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;