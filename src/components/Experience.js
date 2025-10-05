import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBuilding, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const ExperienceSection = styled.section`
  padding: 6rem 2rem;
  background: #000;
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
  color: #f5f5f7;

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
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  width: calc(50% - 2rem);
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(30px);

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
      border-left-color: rgba(255, 255, 255, 0.1);
      transform: translateY(-50%);
    }
  }

  ${TimelineItem}:nth-child(even) & {
    margin-left: 2rem;
    
    &::before {
      left: -20px;
      border-right-color: rgba(255, 255, 255, 0.1);
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
  color: #f5f5f7;
  margin-bottom: 0.5rem;
`;

const JobMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #d1d5db;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const JobDescription = styled.p`
  color: #e5e7eb;
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
      company: "Ericsson",
      title: "工业4.0负责人",
      period: "2024年7月 - 至今",
      location: "中国江苏南京",
      description: "领导工业4.0倡议和数字化转型战略。推动智能制造解决方案创新，监督下一代工业自动化平台的开发。",
      technologies: ["Industry 4.0", "IoT", "AI/ML", "Digital Twin", "5G"]
    },
    {
      company: "Ericsson",
      title: "产品组合经理",
      period: "2022年9月 - 2024年6月",
      location: "中国江苏南京",
      description: "管理全面的产品组合战略和路线图。领导跨职能团队交付创新制造解决方案，推动市场扩张计划。",
      technologies: ["Product Strategy", "Roadmap Planning", "Market Analysis", "Agile"]
    },
    {
      company: "Ericsson",
      title: "智能制造产品经理",
      period: "2019年1月 - 2022年8月",
      location: "中国江苏南京",
      description: "开发并推出智能制造产品。与工程团队合作设计MES解决方案，为制造业客户实施数字化转型计划。",
      technologies: ["MES", "Smart Manufacturing", "Product Development", "Client Solutions"]
    },
    {
      company: "Compal Communications, Inc.",
      title: "高级MES工程师",
      period: "2013年5月 - 2015年4月",
      location: "中国江苏南京",
      description: "领导MES系统实施和优化项目。为电子制造业设计和部署制造执行系统，提高生产效率和质量控制。",
      technologies: ["MES Systems", "Manufacturing", "Quality Control", "Process Optimization"]
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
工作经历
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