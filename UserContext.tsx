// UserContext.tsx
import { createContext } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  // Add more user-related properties here if needed
}

export interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});
