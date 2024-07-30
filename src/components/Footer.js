import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: rgba(10, 25, 47, 0.8);
  color: #e8f1fc;
  padding: 1rem 0;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Copyright = styled.p`
  margin: 0 0 0.5rem 0;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: #e8f1fc;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Copyright>© {currentYear} Your Name. All rights reserved.</Copyright>
      <SocialLinks>
        <SocialLink href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialLink>
        <SocialLink href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialLink>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;