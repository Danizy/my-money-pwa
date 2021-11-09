import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserContextContent } from './types';

const UserContext = createContext<UserContextContent>({
  isSignedIn: false,
  isInitialized: false,
});

export const UserContextProvider: React.FC = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsInitialized(true), 1000);
  }, []);

  return (
    <UserContext.Provider value={{ isSignedIn: false, isInitialized }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
