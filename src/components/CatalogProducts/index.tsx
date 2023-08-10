import React, { useContext } from "react";
import * as S from './styles'
import { ProductContext } from "../../context/ApiContext";
import type { Wine } from "../../types/products";

export function CatalogProducts() {

    const { products } = useContext(ProductContext)

    return (
        <S.ProductsContainer>
            <S.QuantityProducts>
                <strong>49</strong>
                <p>produtos encontrados</p>
            </S.QuantityProducts>

            <S.CardContainer>
                {products.map((item: Wine) => (
                    <S.InvolvedProduct key={item.id}>
                        <S.CardProduct>
                            <img src={item.image} alt="imagem do produto" />
                            <S.NameProduct>{item.name}</S.NameProduct>
                            <S.DiscountProduct>
                                <span>R${item.priceNonMember}</span>
                                <S.Discount>{item.discount}%OFF</S.Discount>
                            </S.DiscountProduct>
                            <S.MemberWine>
                                <span>SÓCIO WINE</span>
                                <S.PriceMember>
                                    <S.Cipher>
                                        <p>R$</p>
                                    </S.Cipher>
                                    <S.Price>
                                        <p>{item.priceMember}</p>
                                    </S.Price>
                                </S.PriceMember>
                            </S.MemberWine>
                            <S.NoMember>NÃO SÓCIO R${item.priceNonMember}</S.NoMember>
                        </S.CardProduct>
                        <S.Button>ADICIONAR</S.Button>
                    </S.InvolvedProduct>
                ))}
            </S.CardContainer>
        </S.ProductsContainer>
    );
}

