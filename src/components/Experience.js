import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBuilding, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const ExperienceSection = styled.section`
  padding: 6rem 2rem;
  background: #f7fafc;
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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #667eea, #764ba2);
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;

  &:nth-child(odd) {
    flex-direction: row;
    
    @media (max-width: 768px) {
      flex-direction: row;
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
    
    @media (max-width: 768px) {
      flex-direction: row;
    }
  }

  @media (max-width: 768px) {
    margin-left: 40px;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  width: 16px;
  height: 16px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 2;
  border: 4px solid white;
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.2);

  @media (max-width: 768px) {
    left: 20px;
  }
`;

const ExperienceCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: calc(50% - 2rem);
  position: relative;
  border: 1px solid #e2e8f0;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 0;
    height: 0;
    border: 10px solid transparent;
  }

  ${TimelineItem}:nth-child(odd) & {
    margin-right: 2rem;
    
    &::before {
      right: -20px;
      border-left-color: white;
      transform: translateY(-50%);
    }
  }

  ${TimelineItem}:nth-child(even) & {
    margin-left: 2rem;
    
    &::before {
      left: -20px;
      border-right-color: white;
      transform: translateY(-50%);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 !important;
    
    &::before {
      display: none;
    }
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: #667eea;
  font-weight: 600;
`;

const JobTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 0.5rem;
`;

const JobMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #718096;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const JobDescription = styled.p`
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const Experience = () => {
  const experiences = [
    {
      company: "NIO Inc.",
      title: "Senior Software Engineer",
      period: "2021 - Present",
      location: "Shanghai, China",
      description: "Leading development of electric vehicle software systems and autonomous driving features. Architecting scalable microservices and implementing real-time data processing solutions.",
      technologies: ["React", "Node.js", "Python", "AWS", "Kubernetes", "MongoDB"]
    },
    {
      company: "Ford Motor Company",
      title: "Software Engineer",
      period: "2019 - 2021",
      location: "Dearborn, MI",
      description: "Developed connected vehicle applications and infotainment systems. Collaborated with cross-functional teams to deliver innovative automotive software solutions.",
      technologies: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Docker", "Jenkins"]
    },
    {
      company: "Ericsson",
      title: "Software Developer",
      period: "2017 - 2019",
      location: "Plano, TX",
      description: "Built telecommunications network management systems and 5G infrastructure software. Optimized system performance and implemented automated testing frameworks.",
      technologies: ["C++", "Linux", "REST APIs", "MySQL", "Git", "Agile"]
    },
    {
      company: "Compal Communications",
      title: "Junior Developer",
      period: "2015 - 2017",
      location: "Taipei, Taiwan",
      description: "Developed embedded software for networking equipment and IoT devices. Gained experience in hardware-software integration and real-time systems.",
      technologies: ["C", "Embedded Systems", "RTOS", "TCP/IP", "Hardware Integration"]
    }
  ];

  return (
    <ExperienceSection id="experience">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </SectionTitle>

        <Timeline>
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineDot />
              <ExperienceCard
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <CompanyInfo>
                  <FaBuilding />
                  {exp.company}
                </CompanyInfo>
                
                <JobTitle>{exp.title}</JobTitle>
                
                <JobMeta>
                  <MetaItem>
                    <FaCalendar />
                    {exp.period}
                  </MetaItem>
                  <MetaItem>
                    <FaMapMarkerAlt />
                    {exp.location}
                  </MetaItem>
                </JobMeta>
                
                <JobDescription>{exp.description}</JobDescription>
                
                <TechStack>
                  {exp.technologies.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </TechStack>
              </ExperienceCard>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;