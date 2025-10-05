import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  color: white;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled(motion.div)`
  color: white;
`;

const ContactTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const ContactDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
`;

const ContactIcon = styled.div`
  font-size: 1.2rem;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled(motion.a)`
  color: white;
  font-size: 1.5rem;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-3px);
  }
`;

const ContactForm = styled(motion.form)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: white;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.6);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.6);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 0.75rem 1.5rem;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      text: "luke_wang1987@163.com"
    },
    {
      icon: <FaMapMarkerAlt />,
      text: "中国江苏南京"
    }
  ];

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
联系我
        </SectionTitle>

        <ContactContent>
          <ContactInfo
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactTitle>让我们合作</ContactTitle>
            <ContactDescription>
我始终对工业4.0和智能制造领域的新机遇和激动人心的项目感兴趣。无论您有问题还是想讨论合作，我都会尽力回复您！
            </ContactDescription>

            <ContactList>
              {contactInfo.map((item, index) => (
                <ContactItem
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ContactIcon>{item.icon}</ContactIcon>
                  <span>{item.text}</span>
                </ContactItem>
              ))}
            </ContactList>

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
          </ContactInfo>

          <ContactForm
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <Label htmlFor="name">姓名</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="您的姓名"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">邮箱</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="您的邮箱@example.com"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="subject">主题</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="主题"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">消息</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="您的消息..."
                required
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
发送消息
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactSection>
  );
};

export default Contact;