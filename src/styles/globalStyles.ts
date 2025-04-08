import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', 'Segoe UI', 'Arial', sans-serif;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.primary};
    transition: color ${theme.transitions.fast};
    
    &:hover {
      color: ${theme.colors.primaryHover};
    }
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: ${theme.spacing.md};
    font-weight: 500;
  }

  p {
    margin-bottom: ${theme.spacing.md};
  }

  input, select, textarea {
    font-family: inherit;
    font-size: ${theme.fontSizes.medium};
  }
`;
