import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const TextContent = styled.div`
  color: white;
`;

const Greeting = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  opacity: 0.9;
`;

const Name = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 2rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
`;

const PrimaryButton = styled(Button)`
  background: white;
  color: #667eea;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

const SecondaryButton = styled(Button)`
  background: transparent;
  color: white;
  border: 2px solid white;

  &:hover {
    background: white;
    color: #667eea;
    transform: translateY(-2px);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    opacity: 0.8;
  }
`;

const ImageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled(motion.div)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-image: url('/images/avatar.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  border: 3px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection>
      <HeroContent>
        <TextContent>
          <Greeting
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
你好，我是
          </Greeting>
          
          <Name
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
王晋
          </Name>
          
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
工业4.0与智能制造专家
          </Title>
          
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
致力于通过创新的工业4.0解决方案推动制造业数字化转型。在MES、智能制造和产品组合管理方面拥有超过15年的经验。
          </Description>
          
          <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <PrimaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
            >
              <FaEnvelope />
联系我
            </PrimaryButton>
            
            <SecondaryButton
              as="a"
              href="/Luke_Wang_CV.pdf"
              download="Luke_Wang_CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
下载简历
            </SecondaryButton>
          </ButtonGroup>
          
          <SocialLinks
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
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
          </SocialLinks>
        </TextContent>
        
        <ImageContainer>
          <ProfileImage
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          />
        </ImageContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;