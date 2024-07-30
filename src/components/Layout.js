import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer';

const LayoutWrapper = styled.div`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const NavBar = styled.nav`
  background-color: rgba(10, 25, 47, 0.8);
  padding: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
  &:hover {
    color: #5a8ed8;
  }
`;

const Content = styled.div`
  flex: 1;
  max-width: 1200px;
  margin: 80px auto 0;
  padding: 2rem;
  background-color: rgba(10, 25, 47, 0.7);
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  color: #e6f1ff;
`;

function Layout({ children }) {
  const location = useLocation();

  return (
    <LayoutWrapper>
      {location.pathname !== '/' && (
        <NavBar>
          <NavList>
            <NavItem><NavLink to="/">Home</NavLink></NavItem>
            <NavItem><NavLink to="/about">About</NavLink></NavItem>
            <NavItem><NavLink to="/skills">Skills</NavLink></NavItem>
            <NavItem><NavLink to="/experience">Experience</NavLink></NavItem>
            <NavItem><NavLink to="/education">Education</NavLink></NavItem>
            <NavItem><NavLink to="/projects">Projects</NavLink></NavItem>
            <NavItem><NavLink to="/contact">Contact</NavLink></NavItem>
          </NavList>
        </NavBar>
      )}
      <Content>
        {children}
      </Content>
      <Footer />
    </LayoutWrapper>
  );
}

export default Layout;