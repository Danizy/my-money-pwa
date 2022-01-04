import React from 'react';
import { useUserContext } from '../../contexts/UserContext';
import InitPage from '../../pages/InitPage';
import BottomBar from '../BottomBar';
import Routing from '../Routing';
import { AppWrapper, ContentWrapper } from './style';

const AppContent = () => {
  const { isInitialized } = useUserContext();

  if (!isInitialized) return <InitPage />;

  return (
    <AppWrapper>
      <ContentWrapper>
        <Routing />
      </ContentWrapper>
      <BottomBar />
    </AppWrapper>
  );
};

export default AppContent;
