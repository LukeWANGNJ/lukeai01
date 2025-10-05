import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1rem 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Logo = styled.div`
  position: absolute;
  left: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #f5f5f7;
  letter-spacing: -0.02em;
`;

const NavCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 0;
  list-style: none;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 8px;
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavIndicator = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  width: calc(33.33% - 4px);
  height: calc(100% - 16px);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
  opacity: 0;
  transform: translateX(0);
`;

const NavItem = styled.li`
  position: relative;
  z-index: 1;

  &:hover ~ ${NavIndicator} {
    opacity: 1;
  }

  &:nth-child(1):hover ~ ${NavIndicator} {
    transform: translateX(0);
  }

  &:nth-child(2):hover ~ ${NavIndicator} {
    transform: translateX(calc(100% + 4px));
  }

  &:nth-child(3):hover ~ ${NavIndicator} {
    transform: translateX(calc(200% + 8px));
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #f5f5f7;
  font-weight: 400;
  font-size: 17px;
  padding: 12px 20px;
  display: block;
  transition: all 0.3s ease;
  opacity: 0.8;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  z-index: 2;

  &:hover {
    opacity: 1;
  }
`;

const LangButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #f5f5f7;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px) rotate(180deg);
  }
`;

const Header = () => {
  const { currentLang, toggleLanguage, t } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo>{t('Luke Wang', '王晋')}</Logo>
        <NavCenter>
          <NavLinks>
            <NavItem>
              <NavLink onClick={() => scrollToSection('about')}>
                {t('About', '关于我')}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => scrollToSection('experience')}>
                {t('Experience', '工作经历')}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => scrollToSection('contact')}>
                {t('Contact', '联系我')}
              </NavLink>
            </NavItem>
            <NavIndicator />
          </NavLinks>
        </NavCenter>
        <LangButton onClick={toggleLanguage}>
          <FaGlobe />
        </LangButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;