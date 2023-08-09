import React from "react";
import * as S from './styles'
import input from '../../img/search.svg'

export function InputProduct() {
    return (
        <S.Input>
            <img src={input} alt="Procurar produto" />
        </S.Input>
    )
}