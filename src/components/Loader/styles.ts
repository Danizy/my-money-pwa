import styled, { keyframes } from 'styled-components';

const elipsisKeyframes1 = keyframes`
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
`;

const elipsisKeyframes2 = keyframes`
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(48px, 0);
    }
`;

const elipsisKeyframes3 = keyframes`
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
`;

export const StyledLoader = styled.div`
  display: inline-block;
  position: relative;
  width: 160px;
  height: 66px;

  & > div {
    position: absolute;
    top: 20px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: red;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  & > div:nth-child(1) {
    left: 16px;
    animation: ${elipsisKeyframes1} 0.6s infinite;
  }

  & > div:nth-child(2) {
    left: 16px;
    animation: ${elipsisKeyframes2} 0.6s infinite;
  }

  & > div:nth-child(3) {
    left: 64px;
    animation: ${elipsisKeyframes2} 0.6s infinite;
  }

  & > div:nth-child(4) {
    left: 112px;
    animation: ${elipsisKeyframes3} 0.6s infinite;
  }
`;
