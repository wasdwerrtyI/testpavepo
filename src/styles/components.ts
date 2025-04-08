import styled from 'styled-components';
import { theme } from './theme';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.md};
  }
`;

export const Card = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.default};
  transition: box-shadow ${theme.transitions.default};
  
  &:hover {
    box-shadow: ${theme.shadows.hover};
  }
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'outline' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.small};
  font-weight: 500;
  transition: all ${theme.transitions.fast};
  
  ${({ variant = 'primary' }) => {
    switch (variant) {
      case 'primary':
        return `
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
          
          &:hover {
            background-color: ${theme.colors.primaryHover};
          }
        `;
      case 'secondary':
        return `
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.white};
          
          &:hover {
            opacity: 0.9;
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: ${theme.colors.primary};
          border: 1px solid ${theme.colors.primary};
          
          &:hover {
            background-color: ${theme.colors.primaryLight};
          }
        `;
      default:
        return '';
    }
  }}
`;

export const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.small};
  font-size: ${theme.fontSizes.medium};
  transition: border-color ${theme.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 2px ${theme.colors.primaryLight};
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.small};
  font-size: ${theme.fontSizes.medium};
  background-color: ${theme.colors.white};
  transition: border-color ${theme.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 2px ${theme.colors.primaryLight};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const Flex = styled.div<{ direction?: string; align?: string; justify?: string; gap?: string }>`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  align-items: ${({ align = 'center' }) => align};
  justify-content: ${({ justify = 'flex-start' }) => justify};
  gap: ${({ gap = theme.spacing.md }) => gap};
`;

export const StyledLink = styled(Link)`
  color: ${theme.colors.primary};
  text-decoration: none;
  transition: color ${theme.transitions.fast};
  
  &:hover {
    color: ${theme.colors.primaryHover};
    text-decoration: underline;
  }
`;

export const Badge = styled.span<{ variant?: 'primary' | 'secondary' | 'outline' }>`
  display: inline-block;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.small};
  font-size: ${theme.fontSizes.small};
  font-weight: 500;
  
  ${({ variant = 'primary' }) => {
    switch (variant) {
      case 'primary':
        return `
          background-color: ${theme.colors.primaryLight};
          color: ${theme.colors.primary};
        `;
      case 'secondary':
        return `
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.white};
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: ${theme.colors.primary};
          border: 1px solid ${theme.colors.primary};
        `;
      default:
        return '';
    }
  }}
`;

export const Heading = styled.h1`
  font-size: ${theme.fontSizes.xxlarge};
  font-weight: 600;
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.text};
`;

export const Subheading = styled.h2`
  font-size: ${theme.fontSizes.xlarge};
  font-weight: 500;
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.text};
`;

export const Text = styled.p`
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.md};
`;

export const Spinner = styled.div`
  border: 4px solid ${theme.colors.primaryLight};
  border-top: 4px solid ${theme.colors.primary};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
  margin: ${theme.spacing.lg} auto;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
