import React, { useContext } from "react";
import * as S from './styles'
import { BagContext } from "../../context/cartOpenContext";


export function CartProducst() {

    const { isOpen, setIsOpen } = useContext(BagContext);

    const handleBagClick = () => {
        setIsOpen(!isOpen)
        console.log(isOpen);
    }

    return (
        <S.ConteinerCart>
            <S.Cart>
                <div>
                    <h1></h1>
                </div>
            </S.Cart>
            <S.Overlay onClick={handleBagClick} />
        </S.ConteinerCart>
    )
}