import React from 'react';
import { StyledFlexBox } from './styles';

export interface FlexBoxProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  alignItems?: 'normal' | 'stretch';
  justifyContent?: 'normal';
  flex?: 'none' | number;
}

const FlexBox: React.FC<FlexBoxProps> = ({ children, ...rest }) => {
  return <StyledFlexBox {...rest}>{children}</StyledFlexBox>;
};

export default FlexBox;
