import React from 'react';
import { useUserContext } from '../../contexts/UserContext';
import InitPage from '../../pages/InitPage';
import Routing from '../Routing';

const AppContent = () => {
  const { isInitialized } = useUserContext();

  if (!isInitialized) return <InitPage />;

  return <Routing />;
};

export default AppContent;
