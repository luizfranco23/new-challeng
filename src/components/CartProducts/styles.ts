import { keyframes, styled } from "styled-components";

export const ConteinerCart = styled.div`
  position: relative;
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
  background: var(--gray-secondary);

  z-index: 1;
  right: 0;
  height: 100%;
  box-shadow: -10px 0px 15px -5px rgba(0, 0, 0, 0.2);
  animation: ${slideInFromRight} 0.5s forwards;
`;

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

export const WineBox = styled.div`
  display: flex;
  width: 100%;
  background: var(--white-primary);
  padding: 20px 20px;
  align-items: center;
  gap: 10px;

  img {
    width: 40px;
    cursor: pointer;
  }

  p {
    font-size: 20px;
  }
`;

export const ContainerBox = styled.div`
  display: flex;
  padding: 20px 10px;
  position: relative;
  width: 100%;
  background: var(--gray-secondary);
  border-bottom: 0.5px solid var(--gray-primary);
`;

export const BoxImg = styled.div`
  img {
    width: 60px;
  }
`;

export const ContainerNameQuantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-size: 13px;
  }
`;

export const BoxQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 3px;
  border: 0.3px solid var(--gray-primary);
  width: 73px;
  height: 35px;
`;

export const RemovoItem = styled.div`
  color: var(--gray-primary);
  cursor: pointer;
`;

export const AddItem = styled.div`
  color: var(--gray-primary);
  cursor: pointer;
`;

export const RemoveAllProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--gray-primary);
  border: 1px solid var(--gray-primary);
  border-radius: 50%;
  position: absolute;
  margin-left: 345px;

  img {
    width: 20px;
  }
`;

export const Price = styled.div`
  position: relative;
  margin-top: 80px;
  margin-left: 30px;

  p {
    color: var(--pink-secondary);
    font-weight: 800;
    font-size: 18px;
  }
`;

export const totalPriceProducts = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  flex-direction: column;
  background: var(--white-primary);
`;

export const TotalPrice = styled.div`
  padding: 10px 30px;
  display: flex;
  gap: 170px;
  span {
    font-size: 20px;
    color: var(--black-primary);
  }

  p {
    font-size: 24px;
    color: var(--pink-secondary);
  }
`;

export const ButtonPurchase = styled.button`
  height: 50px;
  width: 370px;
  border-radius: 3px;
  border: none;
  background: var(--green-primary);
  color: var(--white-primary);
  font-size: 15px;
`;
