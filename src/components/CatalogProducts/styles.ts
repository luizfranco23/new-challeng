import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-left: 130px;
`;

export const QuantityProducts = styled.div`
  display: flex;
  gap: 5px;
  align-items: start;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  display: grid;
  max-width: 800px;
`;

export const CardProduct = styled.div`
  display: flex;
  gap: 6px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 350px;
  box-shadow: 0px 9.733839988708496px 14.600760459899902px 0px
    rgba(0, 0, 0, 0.1);

  img {
    width: 130px;
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
