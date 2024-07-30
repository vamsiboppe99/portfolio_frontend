import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #ffffff;
  text-align: center;
  margin-bottom: 2rem;
`;

const ProjectCard = styled.div`
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

const ProjectTitle = styled.h3`
  color: #e8f1fc;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #e8f1fc;
  margin-bottom: 1rem;
`;

const TechList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechItem = styled.li`
  background-color: rgba(232, 241, 252, 0.1);
  color: #e8f1fc;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

function Projects() {
  const projects = [
    {
      title: 'Heart Stroke Prediction',
      description: [<ul>
        <li>Analyzed stroke dataset with advanced cleaning and transformation in MS Excel, ensuring data accuracy</li>
        <li>Created visualizations and dashboards in Tableau, improving stakeholder understanding of stroke risk by 40%</li>
        <li>Utilized cluster analysis in SAS EM to identify unique patient risk profiles, providing targeted insights for healthcare interventions</li>
        <li>Developed and evaluated predictive models in SAS EM, enhancing stroke risk prediction accuracy by 30%</li>
      </ul>
      ],
      technologies: ['SAS EM', 'Tableau', 'MS Excel', 'Cluster Analysis', 'Predictive Analysis']
    },
    {
      title: 'Heart Stroke Prediction',
      description: [<ul>
        <li>Developed a responsive portfolio website using React.js, featuring personal details, resume, and projects; deployed on AWS S3</li>
        <li>Utilized React hooks for state management and Git for version control, ensuring seamless user experience and efficient code management</li>
      </ul>
      ],
      technologies: ['React', 'Django', 'SQLite', 'AWS EC2', 'AWS S3', 'Styled Components', 'GIT']
    },
    // Add more projects as needed
  ];

  return (
    <ProjectsContainer>
      <Title>My Projects</Title>
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <TechList>
            {project.technologies.map(tech => (
              <TechItem key={tech}>{tech}</TechItem>
            ))}
          </TechList>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
}

export default Projects;