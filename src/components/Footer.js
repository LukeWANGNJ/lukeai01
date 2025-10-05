import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHeart, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #000;
  color: #a1a1aa;
  padding: 4rem 2rem 2rem;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;











const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const SocialLink = styled(motion.a)`
  color: white;
  font-size: 1.5rem;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.06);

  &:hover {
    background: rgba(255, 255, 255, 0.12);
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
          <SocialLinks>
            <SocialLink
              href="https://www.linkedin.com/in/luke-wang-b38b4088/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </SocialLink>
            <SocialLink
              href="mailto:luke_wang1987@163.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </SocialLink>
          </SocialLinks>
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