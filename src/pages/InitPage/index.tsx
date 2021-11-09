import React from 'react';
import Loader from '../../components/Loader';
import { InitPageWrapper } from './styles';

const InitPage = () => {
  return (
    <InitPageWrapper>
      <h1>My money</h1>
      <Loader />
    </InitPageWrapper>
  );
};

export default InitPage;
