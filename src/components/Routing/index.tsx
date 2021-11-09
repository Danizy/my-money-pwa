import React from 'react';
import { Route, Routes } from 'react-router';
import { useUserContext } from '../../contexts/UserContext';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';

const Routing = () => {
  const { isSignedIn } = useUserContext();

  if (!isSignedIn)
    return (
      <Routes>
        <Route path="*" element={<LoginPage />} />
      </Routes>
    );

  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default Routing;
