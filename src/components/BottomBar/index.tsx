import CustomNavLink from 'components/atoms/CustomNavLink';
import React from 'react';
import {
  BottomBarWrapper,
  StyledCategoryIcon,
  StyledMoneyIcon,
} from './styles';

const BottomBar = () => {
  return (
    <BottomBarWrapper>
      <CustomNavLink to={'/expenses'}>
        <StyledMoneyIcon />
        <div>element 1</div>
      </CustomNavLink>
      <CustomNavLink to="/categories">
        <StyledCategoryIcon />
        <div>element 2</div>
      </CustomNavLink>
    </BottomBarWrapper>
  );
};

export default BottomBar;
