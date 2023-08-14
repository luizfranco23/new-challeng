import styled from "styled-components";

export const Input = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;

  @media (max-width: 1300px) {
    display: none;
  }
`;
export const ContainerInput = styled.div`
  display: flex;
`;

export const InputMobile = styled.button`
  border: none;
  background: transparent;
  display: none;

  @media (max-width: 1300px) {
    display: block;
  }
`;
