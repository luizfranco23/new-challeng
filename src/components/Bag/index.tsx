import React, { useContext, useState } from "react";
import * as S from './styles'
import bagImg from '../../img/bag.png'
import { BagContext } from "../../context/cartOpenContext";


export function Bag() {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [quantity, setQuantity] = useState(0);

    const { isOpen, setIsOpen } = useContext(BagContext);

    const handleBagClick = () => {
        setIsOpen(!isOpen)
        console.log(isOpen);

    }

    return (
        <S.BagContainer>
            <img src={bagImg} alt="Sacola de Produtos" onClick={handleBagClick} />
            <S.QuantityItems>{quantity}</S.QuantityItems>
        </S.BagContainer>
    );
}
