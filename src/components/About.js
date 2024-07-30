import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #e8f1fc;
  text-align: center;
  margin-bottom: 2rem;
`;

const AboutCard = styled.div`
  background-color: rgba(11, 46, 91, 0.7);
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Paragraph = styled.p`
  color: #e8f1fc;
  margin-bottom: 1rem;
`;

function About() {
  return (
    <AboutContainer>
      <Title>About Me</Title>
      <AboutCard>
        <Paragraph>
          <ul>
            <li>Associate Software Engineer with 3 years of experience, skilled in SQL, Python, and data visualization with Tableau.</li>
            <li>Proven ability to deliver actionable insights through advanced data visualization techniques in Tableau, leading to a 20\% improvement in decision-making processes.</li>
            <li>Strong track record in solving complex business problems, evidenced by a 30\% enhancement in predictive model accuracy for healthcare analytics.</li>
            <li>Adept at translating technical data findings into clear, impactful business recommendations for cross-functional teams.</li>
            <li>When I'm not coding, you can find me exploring new technologies, or enjoying outdoor activities.</li>
          </ul>
        </Paragraph>
      </AboutCard>
    </AboutContainer>
  );
}

export default About;