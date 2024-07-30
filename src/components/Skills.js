import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #e8f1fc;
  text-align: center;
  margin-bottom: 2rem;
`;

const SkillCard = styled.div`
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

const CategoryTitle = styled.h3`
  color: #e8f1fc;
  margin-bottom: 1rem;
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillItem = styled.li`
  background-color: rgba(232, 241, 252, 0.1);
  color: #e8f1fc;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
`;

function Skills() {
  const skills = {
    'Languages': ['C', 'JavaScript', 'HTML', 'CSS', 'Python','R','SQL(PL/SQL,MS SQL, MySQL)','XML','JSON'],
    'Cloud and Security Tools': ['SQL Server','Linux(Configuring and Managing)','Azure Fundamentals'],
    'Software Tools': ['MS Office', 'MS Visio','Postman','Tableau','Power BI','Oracle 13C','SAP','SAS EM','Jira','Git','VS Code','Chat GPT','VW Ware','AWS(S3,EC2)'],
  };

  return (
    <SkillsContainer>
      <Title>My Skills</Title>
      {Object.entries(skills).map(([category, skillList]) => (
        <SkillCard key={category}>
          <CategoryTitle>{category}</CategoryTitle>
          <SkillList>
            {skillList.map(skill => (
              <SkillItem key={skill}>{skill}</SkillItem>
            ))}
          </SkillList>
        </SkillCard>
      ))}
    </SkillsContainer>
  );
}

export default Skills;