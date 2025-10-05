import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJava, 
  FaAws, 
  FaDocker, 
  FaGitAlt,
  FaDatabase
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiKubernetes, 
  SiMongodb, 
  SiPostgresql,
  SiRedis,
  SiGraphql
} from 'react-icons/si';

const SkillsSection = styled.section`
  padding: 6rem 2rem;
  background: white;
  min-height: 100vh;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-bottom: 4rem;
`;

const SkillCategory = styled(motion.div)`
  background: #f7fafc;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
`;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  min-width: 80px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
  }
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  color: #667eea;
`;

const SkillName = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  color: #4a5568;
  text-align: center;
`;

const ProgressSection = styled.div`
  margin-top: 3rem;
`;

const ProgressTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 2rem;
  text-align: center;
`;

const ProgressGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProgressItem = styled(motion.div)`
  background: #f7fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
`;

const ProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const ProgressName = styled.span`
  font-weight: 500;
  color: #2d3748;
`;

const ProgressPercentage = styled.span`
  font-weight: 600;
  color: #667eea;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 4px;
`;

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript", icon: <FaReact /> },
        { name: "HTML/CSS", icon: <FaReact /> }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "GraphQL", icon: <SiGraphql /> }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Redis", icon: <SiRedis /> },
        { name: "MySQL", icon: <FaDatabase /> }
      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "AWS", icon: <FaAws /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
        { name: "Git", icon: <FaGitAlt /> }
      ]
    }
  ];

  const progressSkills = [
    { name: "React/Frontend", percentage: 95 },
    { name: "Node.js/Backend", percentage: 90 },
    { name: "Python", percentage: 85 },
    { name: "AWS/Cloud", percentage: 80 },
    { name: "Docker/Kubernetes", percentage: 75 },
    { name: "Team Leadership", percentage: 88 }
  ];

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </SectionTitle>

        <SkillsGrid>
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <CategoryTitle>{category.title}</CategoryTitle>
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skillIndex}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SkillIcon>{skill.icon}</SkillIcon>
                    <SkillName>{skill.name}</SkillName>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>

        <ProgressSection>
          <ProgressTitle>Proficiency Levels</ProgressTitle>
          <ProgressGrid>
            {progressSkills.map((skill, index) => (
              <ProgressItem
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProgressLabel>
                  <ProgressName>{skill.name}</ProgressName>
                  <ProgressPercentage>{skill.percentage}%</ProgressPercentage>
                </ProgressLabel>
                <ProgressBar>
                  <ProgressFill
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  />
                </ProgressBar>
              </ProgressItem>
            ))}
          </ProgressGrid>
        </ProgressSection>
      </Container>
    </SkillsSection>
  );
};

export default Skills;