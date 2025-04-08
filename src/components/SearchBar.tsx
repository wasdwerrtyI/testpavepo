import React from 'react';
import styled from 'styled-components';
import { Input } from '../styles/components';
import { theme } from '../styles/theme';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <SearchContainer>
      <SearchIcon>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </SearchIcon>
      <StyledInput
        type="text"
        placeholder="Search by name or email..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
`;

const SearchIcon = styled.div`
  position: absolute;
  left: ${theme.spacing.sm};
  top: 50%;
  transform: translateY(-50%);
  color: ${theme.colors.textLight};
`;

const StyledInput = styled(Input)`
  padding-left: ${theme.spacing.xl};
`;

export default SearchBar;
