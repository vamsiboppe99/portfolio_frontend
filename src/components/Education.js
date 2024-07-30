import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #e8f1fc;
  text-align: center;
  margin-bottom: 2rem;
`;

const EducationCard = styled.div`
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

const SchoolName = styled.h3`
  color: #e8f1fc;
  margin-bottom: 0.5rem;
`;

const Degree = styled.h4`
  color: #e8f1fc;
  margin-bottom: 0.5rem;
`;

const DateRange = styled.p`
  color: #e8f1fc;
  font-style: italic;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #e8f1fc;
`;

function Education() {
  const educations = [
    {
      school: 'University of Illinois Springfield',
      degree: 'Master of Science in Management Information Systems',
      date: 'January 2023 - May 2024',
      description: 'Specialized in Data Analysis and Data Mining. Hands on Project of Predicting the Heart Stroke of patients record from Kaggle DataSet'
    },
    {
      school: 'GITAM University',
      degree: 'Bachelor of Technology in Electronics and Communication Engineering',
      date: 'June 2016 - June 2020',
      description: 'Graduated with honors. Participated in multiple hackathons and led the colleges programming club.'
    },
  ];

  return (
    <EducationContainer>
      <Title>Education</Title>
      {educations.map((edu, index) => (
        <EducationCard key={index}>
          <SchoolName>{edu.school}</SchoolName>
          <Degree>{edu.degree}</Degree>
          <DateRange>{edu.date}</DateRange>
          <Description>{edu.description}</Description>
        </EducationCard>
      ))}
    </EducationContainer>
  );
}

export default Education;