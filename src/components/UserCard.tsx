import React from 'react';
import styled from 'styled-components';
import { User } from '../types/user';
import { Card, Badge, StyledLink, Text } from '../styles/components';
import { theme } from '../styles/theme';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <StyledCard>
      <StyledLink to={`/user/${user.id}`}>
        <UserName>{user.name}</UserName>
      </StyledLink>
      <UserInfo>
        <InfoItem>
          <InfoLabel>Username:</InfoLabel>
          <Text>{user.username}</Text>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Email:</InfoLabel>
          <Text>{user.email}</Text>
        </InfoItem>
        <InfoItem>
          <InfoLabel>City:</InfoLabel>
          <Badge variant="primary">{user.address.city}</Badge>
        </InfoItem>
        <InfoItem>
          <InfoLabel>Company:</InfoLabel>
          <Badge variant="outline">{user.company.name}</Badge>
        </InfoItem>
      </UserInfo>
      <ViewDetailsLink to={`/user/${user.id}`}>View Details</ViewDetailsLink>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform ${theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const UserName = styled.h3`
  font-size: ${theme.fontSizes.large};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.sm};
`;

const UserInfo = styled.div`
  flex: 1;
  margin-bottom: ${theme.spacing.md};
`;

const InfoItem = styled.div`
  margin-bottom: ${theme.spacing.sm};
`;

const InfoLabel = styled.span`
  font-weight: 500;
  margin-right: ${theme.spacing.xs};
  color: ${theme.colors.text};
`;

const ViewDetailsLink = styled(StyledLink)`
  align-self: flex-end;
  font-weight: 500;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.small};
  background-color: ${theme.colors.primaryLight};
  transition: background-color ${theme.transitions.fast};
  
  &:hover {
    background-color: ${theme.colors.primaryHover};
    text-decoration: none;
  }
`;

export default UserCard;
