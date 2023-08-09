import React from "react";
import * as S from './styles'
import logoImg from '../../img/logo.svg'
import { InputProduct } from "../InputProduct";

export function Header() {

    return (
        <S.HeaderContainer>
            <S.Logo>
                <a href="/"><img src={logoImg} alt="Logo Wine" /></a>
            </S.Logo>
            <S.Links>
                <ul>
                    <li><a href="/">Clube</a></li>
                    <li><a href="/">Loja</a></li>
                    <li><a href="/">Produtores</a></li>
                    <li><a href="/">Ofertas</a></li>
                    <li><a href="/">Eventos</a></li>
                </ul>
            </S.Links>
            <S.Icons>
                <InputProduct />
            </S.Icons>
        </S.HeaderContainer>
    );
}
