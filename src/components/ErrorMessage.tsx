import React from 'react';
import styled from 'styled-components';
import { Flex, Text, Button } from '../styles/components';
import { theme } from '../styles/theme';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <ErrorContainer>
      <ErrorIcon>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      </ErrorIcon>
      <ErrorText>{message}</ErrorText>
      {onRetry && (
        <RetryButton variant="primary" onClick={onRetry}>
          Try Again
        </RetryButton>
      )}
    </ErrorContainer>
  );
};

const ErrorContainer = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  width: 100%;
  padding: ${theme.spacing.lg};
`;

const ErrorIcon = styled.div`
  color: ${theme.colors.secondary};
  margin-bottom: ${theme.spacing.md};
`;

const ErrorText = styled(Text)`
  color: ${theme.colors.text};
  font-weight: 500;
  text-align: center;
  margin-bottom: ${theme.spacing.lg};
`;

const RetryButton = styled(Button)`
  min-width: 120px;
`;

export default ErrorMessage;
