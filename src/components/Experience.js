import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #e8f1fc;
  text-align: center;
  margin-bottom: 2rem;
`;

const ExperienceCard = styled.div`
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

const CompanyName = styled.h3`
  color: #e8f1fc;
  margin-bottom: 0.5rem;
`;

const JobTitle = styled.h4`
  color: #e8f1fc;
  margin-bottom: 0.5rem;
`;

const DateRange = styled.p`
  color: #e8f1fc;
  font-style: italic;
  margin-bottom: 1rem;
`;

const ResponsibilitiesList = styled.ul`
  color: #e8f1fc;
  padding-left: 1.5rem;
`;

function Experience() {
  const experiences = [
    {
      company: 'Tech Mahindra',
      title: 'Associate Software Engineer',
      date: 'May 2021 - October 2022',
      responsibilities: [
        'Led data migration for 15 SAP MDG systems with zero down time, enhancing accessibility and reliability',
        'Developed PL/SQL procedures on Oracle servers, improving connectivity by 30% and streamlining integration',
        'Achieved 98% uptime by monitoring and optimizing SAP MDG systems, swiftly resolving issues',
        'Improved efficiency with Oracle PL/SQL packages, procedures, and triggers, increasing productivity by 20%',
        'Implemented Oracle database changes to meet business needs, boosting productivity by 20%',
        'Cut database issue resolution time by 40% through cross-functional collaboration',
        'Supported SAP MDG data migration, ensuring minimal downtime and continuous operations'
      ]
    },
    {
      company: 'Mindlotics Technologies',
      title: 'Software Engineer',
      date: 'December 2019 - May 2020',
      responsibilities: [
        'Optimized SQL and Python data pipelines, enhancing ETL efficiency and data integrity',
        'Created dynamic webpages with React.js, HTML, CSS, and JavaScript for better stakeholder access',
        'Boosted webpage load speed by 20% and improved usability by 30\% through responsive design',
        'Collaborated with teams and stakeholders to deliver aligned, data-driven solutions',
        'Reduced bug resolution time by 25% and ensured front-end development best practices',
        'Redesigned websites to improve navigation, user engagement, and experience'
      ]
    },
  ];

  return (
    <ExperienceContainer>
      <Title>Work Experience</Title>
      {experiences.map((exp, index) => (
        <ExperienceCard key={index}>
          <CompanyName>{exp.company}</CompanyName>
          <JobTitle>{exp.title}</JobTitle>
          <DateRange>{exp.date}</DateRange>
          <ResponsibilitiesList>
            {exp.responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ResponsibilitiesList>
        </ExperienceCard>
      ))}
    </ExperienceContainer>
  );
}

export default Experience;