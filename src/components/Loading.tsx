import React from 'react';
import styled from 'styled-components';
import { Spinner, Text, Flex } from '../styles/components';

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = 'Loading...' }) => {
  return (
    <LoadingContainer>
      <Spinner />
      <LoadingText>{message}</LoadingText>
    </LoadingContainer>
  );
};

const LoadingContainer = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  width: 100%;
`;

const LoadingText = styled(Text)`
  margin-top: 1rem;
  text-align: center;
`;

export default Loading;
