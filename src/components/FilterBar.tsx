import React from 'react';
import styled from 'styled-components';
import { Select, Flex, Button } from '../styles/components';
import { theme } from '../styles/theme';
import { UserFilters } from '../types/user';

interface FilterBarProps {
  filters: UserFilters;
  onFilterChange: (filters: UserFilters) => void;
  cities: string[];
  companies: string[];
  onReset: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  filters, 
  onFilterChange, 
  cities, 
  companies,
  onReset
}) => {
  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filters, city: e.target.value || undefined });
  };

  const handleCompanyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filters, company: e.target.value || undefined });
  };

  return (
    <FilterContainer>
      <FilterGroup>
        <FilterLabel>Filter by:</FilterLabel>
        <SelectWrapper>
          <StyledSelect
            value={filters.city || ''}
            onChange={handleCityChange}
          >
            <option value="">All Cities</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </StyledSelect>
        </SelectWrapper>
        
        <SelectWrapper>
          <StyledSelect
            value={filters.company || ''}
            onChange={handleCompanyChange}
          >
            <option value="">All Companies</option>
            {companies.map(company => (
              <option key={company} value={company}>{company}</option>
            ))}
          </StyledSelect>
        </SelectWrapper>
        
        <ResetButton variant="outline" onClick={onReset}>
          Reset Filters
        </ResetButton>
      </FilterGroup>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  margin-bottom: ${theme.spacing.lg};
`;

const FilterGroup = styled(Flex)`
  flex-wrap: wrap;
  gap: ${theme.spacing.md};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FilterLabel = styled.span`
  font-weight: 500;
  color: ${theme.colors.text};
`;

const SelectWrapper = styled.div`
  min-width: 200px;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

const StyledSelect = styled(Select)`
  width: 100%;
`;

const ResetButton = styled(Button)`
  @media (max-width: ${theme.breakpoints.tablet}) {
    align-self: flex-start;
  }
`;

export default FilterBar;
