import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  align-items: start;
  width: 80%;
  margin-left: 8%;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 800px) {
    align-items: center;
    justify-content: center;
    justify-content: center;
  }
`;

export const QuantityProducts = styled.div`
  display: flex;
  gap: 5px;
  align-items: start;
`;

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 32px;
  width: 100%;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export const CardProduct = styled(Link)`
  display: flex;
  text-decoration: none;
  gap: 6px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 256px;
  height: 350px;
  box-shadow: 0px 9.733839988708496px 14.600760459899902px 0px
    rgba(0, 0, 0, 0.1);

  @media (max-width: 800px) {
    justify-content: center;
    width: 200px;
    height: 300px;
  }

  img {
    width: 130px;
    @media (max-width: 800px) {
      width: 90px;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 39px;
  border: none;
  padding: 11.681px 23.361px;
  border-radius: 3.894px;
  background: var(--green-primary);
  color: var(--white-primary);
`;

export const InvolvedProduct = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;
`;

export const NameProduct = styled.span`
  text-align: center;
  color: var(--black-primary);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.222px;
`;

export const DiscountProduct = styled.div`
  display: flex;
  gap: 5.35px;
  align-items: center;

  span {
    font-size: 13px;
    color: var(--gray-primary);
    font-style: normal;
    font-weight: 700;
    line-height: 15.574px;
    text-decoration: line-through;
  }
`;

export const Discount = styled.div`
  display: flex;
  width: 48px;
  height: 14px;
  align-items: center;
  justify-content: center;
  background: var(--orange-primary);
  color: var(--white-primary);
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-radius: 2px;
`;

export const MemberWine = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;

  span {
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: 9.734px;
  }
`;

export const PriceMember = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  justify-content: center;
  height: 30px;

  color: var(--pink-secondary);
`;

export const Price = styled.div`
  p {
    font-size: 23px;
    margin-bottom: 10px;
  }
`;

export const Cipher = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 11px;
  }
`;

export const NoMember = styled.div`
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  color: var(--gray-primary);
  line-height: normal;
`;

export const PaginationButtons = styled.div`
  display: flex;
  gap: 8px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ButtonPagination = styled.button`
  background: none;
  border: none;
  color: var(--pink-secondary);
`;

export const ButtonNumberPage = styled.button`
  border: 2px solid var(--pink-secondary);
  background: transparent;
  color: var(--pink-secondary);
  width: 38px;
  height: 38px;
  border-radius: 3px;

  &.active:hover {
    background-color: var(--pink-primary);
    color: var(--white-primary);
    border: none;
  }

  &:hover {
    background-color: var(--pink-primary);
    color: var(--white-primary);
    border: none;
  }

  &.active {
    background: var(--pink-secondary);
    color: var(--white-primary);
    border: none;
  }
`;
