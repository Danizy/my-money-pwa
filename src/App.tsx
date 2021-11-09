import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppContent from './components/AppContent';
import { UserContextProvider } from './contexts/UserContext';

function App() {
  return (
    <BrowserRouter basename="my-money-pwa">
      <UserContextProvider>
        <AppContent />
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
