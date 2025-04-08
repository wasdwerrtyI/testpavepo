import React, { useState, Suspense } from "react";
import styled from "styled-components";
import { Container, Heading, Grid, Flex } from "../styles/components";
import { theme } from "../styles/theme";
import { useUsers, useCities, useCompanies } from "../hooks/useUsers";
import { UserFilters } from "../types/user";
import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const UserListPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<UserFilters>({});

  const {
    data: users,
    isLoading,
    isError,
    error,
    refetch,
  } = useUsers(searchTerm, filters);

  const cities = useCities();
  const companies = useCompanies();

  const handleResetFilters = () => {
    setSearchTerm("");
    setFilters({});
  };

  return (
    <PageContainer>
      <Container>
        <PageHeader>
          <Heading>User Management</Heading>
          <SearchFilterContainer>
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <FilterBar
              filters={filters}
              onFilterChange={setFilters}
              cities={cities}
              companies={companies}
              onReset={handleResetFilters}
            />
          </SearchFilterContainer>
        </PageHeader>

        <Suspense fallback={<Loading />}>
          {isLoading ? (
            <Loading />
          ) : isError ? (
            <ErrorMessage
              message={`Error loading users: ${
                error instanceof Error ? error.message : "Unknown error"
              }`}
              onRetry={refetch}
            />
          ) : users && users.length > 0 ? (
            <>
              <ResultCount>
                Showing {users.length} {users.length === 1 ? "user" : "users"}
              </ResultCount>
              <Grid>
                {users.map((user) => (
                  <UserCard key={user.id} user={user} />
                ))}
              </Grid>
            </>
          ) : (
            <NoResults>
              <NoResultsText>
                No users found matching your criteria
              </NoResultsText>
              <ResetButton onClick={handleResetFilters}>
                Reset Filters
              </ResetButton>
            </NoResults>
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

const PageHeader = styled.div`
  margin-bottom: ${theme.spacing.xl};
`;

const SearchFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.lg};
`;

const ResultCount = styled.div`
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.md};
`;

const NoResults = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  padding: ${theme.spacing.xl};
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.default};
`;

const NoResultsText = styled.p`
  font-size: ${theme.fontSizes.large};
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.lg};
`;

const ResetButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.borderRadius.small};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  font-size: ${theme.fontSizes.medium};
  cursor: pointer;
  transition: background-color ${theme.transitions.fast};

  &:hover {
    background-color: ${theme.colors.primaryHover};
  }
`;

export default UserListPage;
