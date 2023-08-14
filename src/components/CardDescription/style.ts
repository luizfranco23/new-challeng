import { styled } from "styled-components";

export const ContainerCatalog = styled.div`
  margin-top: 5%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
`;

export const Catalog = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const ImageProduct = styled.div`
  img {
    width: 400px;
  }
`;

export const InformationCatalog = styled.div`
  width: 40%;
  flex-direction: column;
  display: flex;
  gap: 48px;
  align-items: flex-start;
`;

export const RegionProduct = styled.div`
  display: flex;
  font-size: 20px;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  img {
    width: 12px;
  }
`;
export const Region = styled.div`
  display: flex;
  gap: 5px;
  font-size: 18px;
`;

export const RegionProducText = styled.div`
  color: var(--pink-primary);
`;

export const TitleProduct = styled.div`
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;
export const Country = styled.div`
  gap: 15px;
  font-size: 17px;
  color: var(--gray-primary);
  display: flex;
`;
export const Star = styled.div`
  display: flex;
  gap: 3px;

  img {
    width: 17px;
    height: 17px;
  }
`;

export const NameProduct = styled.div``;
export const PriceProduct = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;
export const PriceMember = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: end;
  font-weight: bold;

  p {
    font-size: 20px;
    color: var(--pink-primary);
  }

  div {
    font-size: 50px;
    color: var(--pink-primary);
  }
`;
export const NoMember = styled.div`
  color: var(--gray-primary);
  font-size: 20px;
`;

export const ComenterSommelier = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const ComentTitle = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 530;
  line-height: 24px;
`;
export const ComentSommelier = styled.div`
  text-align: justify;
  color: var(--gray-primary);
`;

export const ButtonAddProduct = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  border-radius: 3px;
  align-items: center;
  background: var(--green-primary);
  width: 330px;
  height: 56px;
`;

export const AmountProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: #fff;

  div {
    border: 1px solid #fff;
    border-radius: 25px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
  }
`;

export const Feature = styled.div`
  width: 2px;
  height: 70%;
  background: #fff;
  opacity: 0.2;
`;
export const AddProduct = styled.div`
  color: #fff;
  align-items: center;
  justify-content: center;
  display: flex;
`;
