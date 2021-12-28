import React from 'react';
import { useUserContext } from '../../contexts/UserContext';
import InitPage from '../../pages/InitPage';
import BottomBar from '../BottomBar';
import Routing from '../Routing';

const AppContent = () => {
  const { isInitialized } = useUserContext();

  if (!isInitialized) return <InitPage />;

  return (
    <div>
      <Routing />
      <BottomBar />
    </div>
  );
};

export default AppContent;
