import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaIndustry, FaCogs, FaUsers, FaChartLine } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const AboutSection = styled.section`
  padding: 8rem 2rem;
  background: #000;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #f5f5f7;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  color: #a1a1aa;
`;

const AboutText = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #a1a1aa;
  font-weight: 400;
  letter-spacing: -0.01em;
`;

const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const HighlightCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.08);
  padding: 2.5rem;
  border-radius: 24px;
  color: #f5f5f7;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-12px) scale(1.03);
    background: rgba(255, 255, 255, 0.12);
    box-shadow: 0 32px 80px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.18);
  }
`;

const HighlightIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const HighlightTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const HighlightDescription = styled.p`
  font-size: 0.9rem;
  opacity: 0.9;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-8px) scale(1.02);
    background: rgba(255, 255, 255, 0.12);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.18);
  }
`;

const StatNumber = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  color: #0071e3;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
`;

const StatLabel = styled.p`
  color: #e5e7eb;
  font-weight: 500;
`;

const About = () => {
  const { t } = useLanguage();
  
  const highlights = [
    {
      icon: <FaIndustry />,
      title: t("Industry 4.0", "工业4.0"),
      description: t("Leading digital transformation in manufacturing", "引领制造业数字化转型")
    },
    {
      icon: <FaCogs />,
      title: t("Smart Manufacturing", "智能制造"),
      description: t("Expert in MES and automation systems", "MES和自动化系统专家")
    },
    {
      icon: <FaUsers />,
      title: t("Team Leadership", "团队领导"),
      description: t("Experienced in leading cross-functional teams", "拥有丰富的跨职能团队领导经验")
    },
    {
      icon: <FaChartLine />,
      title: t("Product Management", "产品管理"),
      description: t("Strategic product portfolio management", "战略产品组合管理")
    }
  ];

  const stats = [
    { number: "15+", label: t("Years Experience", "年工作经验") },
    { number: "50+", label: t("Teams Led", "团队管理") },
    { number: "3", label: t("Leadership Roles", "领导职位") }
  ];

  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
{t('About Me', '关于我')}
        </SectionTitle>

        <AboutContent>
          <TextContent>
            <AboutText
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
{t('I\'m a passionate Industry 4.0 leader with over 15 years of experience in manufacturing execution systems (MES), smart manufacturing, and digital transformation. Currently serving as Head of Industry 4.0 at Ericsson, driving innovation in industrial digitalization.', '我是一位充满激情的工业4.0领导者，在制造执行系统(MES)、智能制造和数字化转型方面拥有超过15年的经验。目前担任爱立信工业4.0负责人，推动工业数字化创新。')}
            </AboutText>

            <AboutText
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
{t('My expertise includes product portfolio management, smart manufacturing solutions, and leading cross-functional teams to deliver cutting-edge industrial automation systems that transform traditional manufacturing processes.', '我的专业领域包括产品组合管理、智能制造解决方案，以及领导跨职能团队交付前沿的工业自动化系统，改变传统制造流程。')}
            </AboutText>

            <StatsGrid>
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </StatsGrid>
          </TextContent>

          <HighlightGrid>
            {highlights.map((highlight, index) => (
              <HighlightCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <HighlightIcon>{highlight.icon}</HighlightIcon>
                <HighlightTitle>{highlight.title}</HighlightTitle>
                <HighlightDescription>{highlight.description}</HighlightDescription>
              </HighlightCard>
            ))}
          </HighlightGrid>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;