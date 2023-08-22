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

  @media (max-width: 1300px) {
    display: none;
  }
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
  text-align: start;
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

export const NameProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
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
    cursor: pointer;
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

// AQUI É O MOBILE

export const InformationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`;

export const ContainerMobile = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  display: none;

  @media (max-width: 1300px) {
    display: block;
    padding: 1% 1%;
  }
`;

export const CatalogContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 3%;
  margin-bottom: 150px;

  img {
    width: 40%;
  }
`;

export const InformationCatalogMobile = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 100%;
    justify-content: center;
  }
`;

export const RegionWine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  .material-symbols-outlined {
    font-size: 120%;
    font-weight: lighter;
    color: #888888;
  }

  .pinkText {
    font-size: 100%;
    font-weight: bold;
    color: #c81a78;
  }

  span {
    font-size: 110%;
    font-weight: normal;
    color: #888888;
  }

  img {
    width: 11px;
  }
`;

export const ClassificationWine = styled.div`
  display: flex;
  align-items: center;
  gap: 2%;
  justify-content: center;
  padding-top: 1%;
  white-space: nowrap;

  img {
    width: 4%;
  }

  span {
    font-size: 100%;
    font-weight: normal;
    color: #888888;
  }

  .star {
    display: flex;
    align-items: center;
    img {
      width: 10%;
    }
  }
`;

export const ImageWine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 60%;
  }
`;

export const ComentSommelierMobile = styled.div`
  width: 80%;
  white-space: wrap;
  padding: 5% 10%;
  flex-direction: column;

  p {
    padding-top: 3%;
    font-size: 100%;
    text-align: justify;
    font-weight: normal;
    color: #888888;
  }
`;

export const Button = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  justify-content: space-around;
  display: flex;
  width: 100%;
  height: 15%;
  align-items: center;
  background: #fff;
  box-shadow: 0px -5px 5px 0px rgba(0, 0, 0, 0.06);

  .Off {
    border-radius: 4px;
    top: -10px;
    left: 15px;
    position: absolute;
    background: #f26649;
    color: #fff;
    padding: 4px;
    font-weight: 400px;
    width: 80px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .price {
    font-size: 17px;
    color: #555555;
    font-weight: 400;
    text-decoration: line-through;
  }

  .priceTextPink {
    display: flex;
    font-weight: bold;
    align-items: end;
    color: #c81a78;

    .bigText {
      font-size: 45px;
      margin: 0;
    }
  }

  button {
    align-items: center;
    background: #7ebc43;
    border: none;
    font-size: 130%;
    border-radius: 4px;
    color: #fff;
    width: 45%;
    height: 40%;
  }
`;
export const Price = styled.div`
  padding-left: 15px;
  display: flex;
  align-items: start;
  flex-direction: column;
`;

export const noMemberMobile = styled.p`
  font-size: 13px;
  color: var(--gray-primary);
  font-weight: 700;
`;
