import React, { useContext } from "react";
import * as S from './styles'
import { ProductContext } from "../../context/ApiContext";
import type { Wine } from "../../types/products";

export function CatalogProducts() {

    const { products } = useContext(ProductContext)

    return (
        <S.ProductsContainer>
            <h1>produtos</h1>
            {products.map((items: Wine) => (
                <h1 key={items.id}>
                    {items.priceMember}
                </h1>
            ))}
        </S.ProductsContainer>
    );
}