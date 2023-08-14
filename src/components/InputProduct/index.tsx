import React from "react";
import * as S from './styles'
import input from '../../img/search.svg'
import inputMoba from '../../img/searchMobile.svg'

export function InputProduct() {
    return (
        <S.ContainerInput>
            <S.InputMobile>
                <img src={inputMoba} alt="" />
            </S.InputMobile>
            <S.Input>
                <img src={input} alt="Procurar produto" />
            </S.Input>
        </S.ContainerInput>
    )
}