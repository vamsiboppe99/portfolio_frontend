import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #0b2e5b;
    color: #e8f1fc;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  * {
    box-sizing: border-box;
  }

  #tsparticles {
    position: fixed !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0 !important;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #e8f1fc;
  }

  p {
    color: #e8f1fc;
  }

  a {
    color: #e8f1fc;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideIn {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`;

export default GlobalStyles;