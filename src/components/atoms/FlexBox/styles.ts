import styled from 'styled-components';
import { FlexBoxProps } from '.';

export const StyledFlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex: ${({ flex }) => flex};
`;
