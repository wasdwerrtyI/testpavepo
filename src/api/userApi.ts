import { User } from "../types/user";

const API_URL = "https://jsonplaceholder.typicode.com";

/**
 * Базовая функция для выполнения API-запросов
 * @param endpoint - конечная точка API
 * @returns результат запроса в формате JSON
 */
async function apiRequest<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${API_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error(
        `API запрос не удался: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error(`Ошибка при выполнении запроса к ${endpoint}:`, error);
    throw error;
  }
}

export const fetchUsers = (): Promise<User[]> => {
  return apiRequest<User[]>("/users");
};

export const fetchUserById = (id: number): Promise<User> => {
  return apiRequest<User>(`/users/${id}`);
};
