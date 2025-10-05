import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaUsers, FaRocket, FaLightbulb } from 'react-icons/fa';

const AboutSection = styled.section`
  padding: 6rem 2rem;
  background: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
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
  color: #2d3748;

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
  color: #4a5568;
`;

const AboutText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  border-radius: 12px;
  color: white;
  text-align: center;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
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
  padding: 1.5rem;
  background: #f7fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
`;

const StatNumber = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.p`
  color: #4a5568;
  font-weight: 500;
`;

const About = () => {
  const highlights = [
    {
      icon: <FaCode />,
      title: "Full-Stack Development",
      description: "Expert in modern web technologies and frameworks"
    },
    {
      icon: <FaUsers />,
      title: "Team Leadership",
      description: "Experienced in leading and mentoring development teams"
    },
    {
      icon: <FaRocket />,
      title: "Innovation",
      description: "Passionate about implementing cutting-edge solutions"
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solving",
      description: "Strong analytical skills and creative thinking"
    }
  ];

  const stats = [
    { number: "8+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "15+", label: "Team Members Led" }
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
          About Me
        </SectionTitle>

        <AboutContent>
          <TextContent>
            <AboutText
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I'm a passionate software engineer with over 8 years of experience in building 
              scalable web applications and leading development teams. My expertise spans across 
              full-stack development, cloud technologies, and agile methodologies.
            </AboutText>

            <AboutText
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              I believe in writing clean, maintainable code and fostering collaborative 
              environments where teams can thrive. My goal is to create innovative solutions 
              that make a real impact on users and businesses.
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