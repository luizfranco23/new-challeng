import React, { useState } from "react";
import * as S from './styles'
import bagImg from '../../img/bag.png'

export function Bag() {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [quantity, setQuantity] = useState(0);
    const [isOpen, setIsOpen] = useState(false)

    const handleBagClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <S.BagContainer>
            <img src={bagImg} alt="Sacola de Produtos" onClick={handleBagClick} />
            <S.QuantityItems>{quantity}</S.QuantityItems>
            {
                isOpen && (
                    <h1>v</h1>
                )
            }
        </S.BagContainer>
    );
}