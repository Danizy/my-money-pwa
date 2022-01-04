import styled from 'styled-components';
import { ReactComponent as MoneyIcon } from 'assets/icons/money-icon.svg';
import { ReactComponent as CategoryIcon } from 'assets/icons/category-icon.svg';
import { Link } from 'react-router-dom';

export const BottomBarWrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: #333864;
  display: flex;
  align-items: center;
`;

export const StyledMoneyIcon = styled(MoneyIcon)`
  width: 50px;
  height: 50px;
`;

export const StyledCategoryIcon = styled(CategoryIcon)`
  width: 50px;
  height: 50px;
`;

interface NavLink {
  active: boolean;
}

export const BottomBarButton = styled(Link)<NavLink>`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-decoration: none;
  background-color: ${({ active }) => (active ? 'red' : 'blue')};
  :visited {
    color: inherit;
  }
`;
