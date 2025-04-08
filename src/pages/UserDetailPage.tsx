import React, { Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUsers";

import styled from "styled-components";
import {
  Container,
  Card,
  Heading,
  Subheading,
  Text,
  Button,
  Flex,
  Badge,
} from "../styles/components";

import { theme } from "../styles/theme";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const UserDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const userId = id ? parseInt(id, 10) : 0;

  const { data: user, isLoading, isError, error } = useUser(userId);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <PageContainer>
      <Container>
        <BackButton onClick={handleBack}>
          <BackIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </BackIcon>
          Back to Users
        </BackButton>

        <Suspense fallback={<Loading />}>
          {isLoading ? (
            <Loading />
          ) : isError ? (
            <ErrorMessage
              message={`Error loading user details: ${
                error instanceof Error ? error.message : "Unknown error"
              }`}
            />
          ) : user ? (
            <DetailCard>
              <UserHeader>
                <Heading>{user.name}</Heading>
                <UserUsername>@{user.username}</UserUsername>
              </UserHeader>

              <Section>
                <Subheading>Contact Information</Subheading>
                <InfoGrid>
                  <InfoItem>
                    <InfoLabel>Email</InfoLabel>
                    <InfoValue>
                      <a href={`mailto:${user.email}`}>{user.email}</a>
                    </InfoValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel>Phone</InfoLabel>
                    <InfoValue>
                      <a href={`tel:${user.phone}`}>{user.phone}</a>
                    </InfoValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel>Website</InfoLabel>
                    <InfoValue>
                      <a
                        href={`https://${user.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {user.website}
                      </a>
                    </InfoValue>
                  </InfoItem>
                </InfoGrid>
              </Section>

              <Section>
                <Subheading>Address</Subheading>
                <AddressCard>
                  <Text>
                    {user.address.street}, {user.address.suite}
                    <br />
                    {user.address.city}, {user.address.zipcode}
                  </Text>
                  <GeoInfo>
                    <Badge variant="outline">Lat: {user.address.geo.lat}</Badge>
                    <Badge variant="outline">Lng: {user.address.geo.lng}</Badge>
                  </GeoInfo>
                </AddressCard>
              </Section>

              <Section>
                <Subheading>Company</Subheading>
                <CompanyCard>
                  <CompanyName>{user.company.name}</CompanyName>
                  <Text>"{user.company.catchPhrase}"</Text>
                  <CompanyBs>{user.company.bs}</CompanyBs>
                </CompanyCard>
              </Section>
            </DetailCard>
          ) : (
            <ErrorMessage message="User not found" />
          )}
        </Suspense>
      </Container>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  min-height: 100vh;
  padding: ${theme.spacing.lg} 0;
`;

const BackButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  background: none;
  color: ${theme.colors.primary};
  padding: ${theme.spacing.sm} 0;
  margin-bottom: ${theme.spacing.lg};

  &:hover {
    background: none;
    color: ${theme.colors.primaryHover};
  }
`;

const BackIcon = styled.span`
  margin-right: ${theme.spacing.xs};
  display: inline-flex;
`;

const DetailCard = styled(Card)`
  margin-bottom: ${theme.spacing.xl};
`;

const UserHeader = styled.div`
  margin-bottom: ${theme.spacing.xl};
  padding-bottom: ${theme.spacing.lg};
  border-bottom: 1px solid ${theme.colors.border};
`;

const UserUsername = styled(Text)`
  color: ${theme.colors.textLight};
  font-size: ${theme.fontSizes.large};
  margin-top: -${theme.spacing.md};
`;

const Section = styled.section`
  margin-bottom: ${theme.spacing.xl};
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const InfoItem = styled.div`
  margin-bottom: ${theme.spacing.md};
`;

const InfoLabel = styled.h4`
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.xs};
`;

const InfoValue = styled.div`
  font-size: ${theme.fontSizes.medium};
`;

const AddressCard = styled.div`
  background-color: ${theme.colors.background};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.medium};
  border: 1px solid ${theme.colors.border};
`;

const GeoInfo = styled(Flex)`
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.sm};
`;

const CompanyCard = styled.div`
  background-color: ${theme.colors.background};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.medium};
  border: 1px solid ${theme.colors.border};
`;

const CompanyName = styled.h3`
  font-size: ${theme.fontSizes.large};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.sm};
`;

const CompanyBs = styled.div`
  font-style: italic;
  color: ${theme.colors.textLight};
  margin-top: ${theme.spacing.sm};
`;

export default UserDetailPage;
