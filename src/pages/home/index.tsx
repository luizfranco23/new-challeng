import React from "react";
import * as S from './styles'
import { Header } from "../../components/Header";
import FilterPrice from "../../components/FilterPriceProducts";
import { CatalogProducts } from "../../components/CatalogProducts";

export default function Home() {


    return (
        <S.Home>
            <Header />
            <S.ContainerHome>
                <FilterPrice />
                <CatalogProducts />
            </S.ContainerHome>
        </S.Home>
    )
}