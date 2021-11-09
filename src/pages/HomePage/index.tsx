import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h2>home</h2>
      <Link to="login">To login</Link>
    </div>
  );
};

export default HomePage;
