import styled from 'styled-components';

export interface CustomNavLinkProps {
  active: boolean;
}

export const StyledCustomNavLink = styled.div<CustomNavLinkProps>`
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
