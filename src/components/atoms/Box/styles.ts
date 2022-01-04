import styled from 'styled-components';
import { BoxProps } from '.';

export const StyledBox = styled.div<BoxProps>`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;
