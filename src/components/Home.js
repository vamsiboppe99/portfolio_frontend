import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  text-align: center;
  animation: fadeIn 1s ease-out;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #f7f9fa;
  margin-bottom: 1rem;
  animation: slideIn 1s ease-out;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #f7f9fa;
  margin-bottom: 2rem;
  animation: slideIn 1s ease-out 0.5s both;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const NavItem = styled.li`
  margin: 0.5rem;
  animation: fadeIn 0.5s ease-out ${props => props.delay}s both;
`;

const NavLink = styled(Link)`
  color: #f7f9fa;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: 2px solid #f7f9fa;
  border-radius: 25px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #5a8ed8;
    color: #ffffff;
  }
`;

function Home() {
  return (
    <HomeContainer>
      <Title>Hello!! This is Vamsi Krishna Boppe</Title>
      <Subtitle>Associate Software Engineer with 3 years of Professional Experience</Subtitle>
      <nav>
        <NavList>
          {['About', 'Skills', 'Experience', 'Education', 'Projects', 'Contact'].map((item, index) => (
            <NavItem key={item} delay={(index + 1) * 0.2}>
              <NavLink to={`/${item.toLowerCase()}`}>{item}</NavLink>
            </NavItem>
          ))}
        </NavList>
      </nav>
    </HomeContainer>
  );
}

export default Home;