import React from 'react';
import {
  BottomBarButton,
  BottomBarWrapper,
  StyledCategoryIcon,
  StyledMoneyIcon,
} from './styles';

const BottomBar = () => {
  return (
    <BottomBarWrapper>
      <BottomBarButton>
        <StyledMoneyIcon />
        <div>element 1</div>
      </BottomBarButton>
      <BottomBarButton>
        <StyledCategoryIcon />
        <div>element 2</div>
      </BottomBarButton>
    </BottomBarWrapper>
  );
};

export default BottomBar;
