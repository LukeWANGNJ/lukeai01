import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background: #000;
  color: #f5f5f7;
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
    background: radial-gradient(circle at 50% 50%, rgba(0, 113, 227, 0.1) 0%, transparent 70%);
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
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  padding: 3rem;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.18);
  }
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
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: #f5f5f7;
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    border-color: #0071e3;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 20px rgba(0, 113, 227, 0.3);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: #f5f5f7;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    border-color: #0071e3;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 20px rgba(0, 113, 227, 0.3);
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 12px 24px;
  background: #0071e3;
  color: white;
  border: none;
  border-radius: 24px;
  font-size: 17px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  letter-spacing: -0.01em;
  box-shadow: 0 4px 20px rgba(0, 113, 227, 0.3);

  &:hover {
    background: #0077ed;
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 113, 227, 0.4);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Contact = () => {
  const { t } = useLanguage();
  
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
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:luke_wang1987@163.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    window.location.href = mailtoLink;
    
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
      icon: <FaMapMarkerAlt />,
      text: t("Nanjing, Jiangsu, China", "中国江苏南京")
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
{t('Get In Touch', '联系我')}
        </SectionTitle>

        <ContactContent>
          <ContactInfo
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactTitle>{t('Let\'s Work Together', '让我们合作')}</ContactTitle>
            <ContactDescription>
{t('I\'m always interested in new opportunities and exciting projects in Industry 4.0 and smart manufacturing. Whether you have a question or want to discuss collaboration, I\'ll try my best to get back to you!', '我始终对工业4.0和智能制造领域的新机遇和激动人心的项目感兴趣。无论您有问题还是想讨论合作，我都会尽力回复您！')}
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
                title="Send Email"
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
              <Label htmlFor="name">{t('Name', '姓名')}</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('Your Name', '您的姓名')}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">{t('Email', '邮箱')}</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('your.email@example.com', '您的邮箱@example.com')}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="subject">{t('Subject', '主题')}</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t('Subject', '主题')}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">{t('Message', '消息')}</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('Your message...', '您的消息...')}
                required
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
{t('Send Message', '发送消息')}
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactSection>
  );
};

export default Contact;