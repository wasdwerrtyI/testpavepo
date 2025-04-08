import { useQuery } from "@tanstack/react-query";
import { fetchUsers, fetchUserById } from "../api/userApi";
import { User, UserFilters } from "../types/user";

export const useUsers = (
  searchTerm: string = "",
  filters: UserFilters = {}
) => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    select: (users: User[]) => {
      return users.filter((user) => {
        const matchesSearch = searchTerm
          ? user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
          : true;

        const matchesCity = filters.city
          ? user.address.city.toLowerCase() === filters.city.toLowerCase()
          : true;

        const matchesCompany = filters.company
          ? user.company.name.toLowerCase() === filters.company.toLowerCase()
          : true;

        return matchesSearch && matchesCity && matchesCompany;
      });
    },
  });
};

export const useUser = (id: number) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUserById(id),
    enabled: !!id,
  });
};

export const useCities = () => {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  if (!users) return [];
  const cities = [...new Set(users.map((user) => user.address.city))];
  return cities.sort();
};

export const useCompanies = () => {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  if (!users) return [];
  const companies = [...new Set(users.map((user) => user.company.name))];
  return companies.sort();
};
