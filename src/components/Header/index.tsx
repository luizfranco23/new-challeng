import React, { useContext } from "react";
import * as S from './styles'
import logoImg from '../../img/logo.svg'
import { InputProduct } from "../InputProduct";
import acount from '../../img/account.svg';
import { Bag } from "../Bag";
import { CartProducst } from "../CartProducts";
import { BagContext } from "../../context/cartOpenContext";
import Menu from '../../img/menu.png'

export function Header() {

    const { isOpen } = useContext(BagContext);

    return (
        <S.HeaderContainer>
            {isOpen && <CartProducst />}
            <S.LogoContainer>
                <S.MenuLinks>
                    <img src={Menu} alt="Menu" />
                </S.MenuLinks>
                <S.Logo>
                    <a href="/"><img src={logoImg} alt="Logo Wine" /></a>
                </S.Logo>
            </S.LogoContainer>
            <S.Links>
                <ul>
                    <li><a href="#">Clube</a></li>
                    <li><a href="/">Loja</a></li>
                    <li><a href="#">Produtores</a></li>
                    <li><a href="#">Ofertas</a></li>
                    <li><a href="#">Eventos</a></li>
                </ul>
            </S.Links>
            <S.Icons>
                <InputProduct />
                <S.Acount>
                    <a href="#"><img src={acount} alt="Informações do Usuário" /></a>
                </S.Acount>
                <Bag />
            </S.Icons>
        </S.HeaderContainer>
    );
}
