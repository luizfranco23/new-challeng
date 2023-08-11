import React, { useContext } from "react";
import * as S from './styles'
import bagImg from '../../img/bag.png'
import { BagContext } from "../../context/cartOpenContext";
import { useCart } from "../../context/cartContext";



export function Bag() {

    const { isOpen, setIsOpen } = useContext(BagContext);
    const { quantityProducts } = useCart();

    const handleBagClick = () => {
        setIsOpen(!isOpen)
        console.log(isOpen);

    }
    return (
        <S.BagContainer>
            <img src={bagImg} alt="Sacola de Produtos" onClick={handleBagClick} />
            <S.QuantityItems>{quantityProducts}</S.QuantityItems>
        </S.BagContainer>
    );
}
