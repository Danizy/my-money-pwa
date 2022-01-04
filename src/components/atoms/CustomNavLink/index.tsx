import React from 'react';
import { LinkProps, useMatch, useResolvedPath } from 'react-router-dom';
import { StyledCustomNavLink } from './styles';

const CustomNavLink: React.FC<LinkProps> = ({ children, to, ...rest }) => {
  const resolved = useResolvedPath(to);
  const active = !!useMatch({ path: resolved.pathname });

  return (
    <StyledCustomNavLink {...{ to, ...rest, active }}>
      {children}
    </StyledCustomNavLink>
  );
};

export default CustomNavLink;
