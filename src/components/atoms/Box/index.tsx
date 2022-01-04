import React from 'react';
import { StyledBox } from './styles';

export interface BoxProps {
  margin?: string;
  padding?: string;
}

const Box: React.FC<BoxProps> = ({ children, ...rest }) => {
  return <StyledBox {...rest}>{children}</StyledBox>;
};

export default Box;
