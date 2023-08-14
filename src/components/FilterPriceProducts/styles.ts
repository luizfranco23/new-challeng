import styled from "styled-components";

export const FilterContainer = styled.div`
  width: 200px;
  height: 250px;
  flex-direction: column;
  p {
    padding-top: 32px;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;

  input {
    margin-right: 10px;
    margin-top: 14px;
  }
`;
