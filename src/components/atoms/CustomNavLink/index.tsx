import React from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { StyledCustomNavLink } from './styles';

interface CustomNavLinkProps {
  to: string;
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({ children, to }) => {
  const resolved = useResolvedPath(to);
  const active = !!useMatch({ path: resolved.pathname });
  const navigate = useNavigate();

  return (
    <StyledCustomNavLink {...{ active }} onClick={() => navigate(to)}>
      {children}
    </StyledCustomNavLink>
  );
};

export default CustomNavLink;
