import React from 'react';
import { Route, Routes } from 'react-router';
import HomePage from '../../pages/HomePage';
import InitPage from '../../pages/InitPage';
import LoginPage from '../../pages/LoginPage';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<InitPage />} />
      <Route path="home" element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
};

export default Routing;
