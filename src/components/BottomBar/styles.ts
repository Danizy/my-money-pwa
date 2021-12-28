import styled from 'styled-components';
import { ReactComponent as MoneyIcon } from 'assets/icons/money-icon.svg';
import { ReactComponent as CategoryIcon } from 'assets/icons/category-icon.svg';

export const BottomBarWrapper = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0px;
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

export const BottomBarButton = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
