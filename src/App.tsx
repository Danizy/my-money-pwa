import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import InitPage from './pages/InitPage';

function App() {
  return (
    <BrowserRouter basename="my-money-pwa">
      <InitPage />
      {/* <Routing /> */}
    </BrowserRouter>
  );
}

export default App;
