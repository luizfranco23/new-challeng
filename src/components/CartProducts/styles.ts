import { keyframes, styled } from "styled-components";

export const ConteinerCart = styled.div`
width: 100%;
height: 100%;
position: fixed;
top: 0;
display: flex;
align-items: center;
justify-content: center;
z-index: 1;

`;

const slideInFromRight = keyframes`
  0% {
    right: -400px; 
  }
  100% {
    right: 0;
  }
`;

export const Cart = styled.div`
 position: fixed;
 background: #fff;
 width: 400px;
 background: var(--white-primary);
 z-index: 1;
 right: 0;
 top: 0;
 height: 100%;
 box-shadow: -10px 0px 15px -5px rgba(0, 0, 0, 0.2);
 animation: ${slideInFromRight} 0.5s forwards;
`;

export const Overlay = styled.div`
 position: fixed;
 width: 100%;
 height: 100%;
 background: rgba(0, 0, 0, 0.3);
 z-index: -3;
`;

