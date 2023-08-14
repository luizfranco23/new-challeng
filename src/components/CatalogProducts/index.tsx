import React, { useState, useContext } from "react";
import * as S from './styles';
import { ProductContext } from "../../context/ApiContext";
import type { Wine } from "../../types/products";
import { useCart } from "../../context/cartContext";

export function CatalogProducts() {
    const { products } = useContext(ProductContext);
    const { addToCart } = useCart();
    const itemsPerPage = 8;

    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const handlePageChange = (pageNumber: React.SetStateAction<number>) => {
        setCurrentPage(pageNumber);
    };

    const pageButtonsToShow = [];
    const maxButtonsToShow = 3;
    const middleButton = Math.ceil(maxButtonsToShow / 2);
    let firstPageToShow = currentPage - middleButton + 1;
    let lastPageToShow = currentPage + middleButton - 1;

    if (firstPageToShow < 1) {
        lastPageToShow += Math.abs(firstPageToShow) + 1;
        firstPageToShow = 1;
    }

    if (lastPageToShow > totalPages) {
        firstPageToShow -= lastPageToShow - totalPages;
        lastPageToShow = totalPages;
    }

    for (let i = firstPageToShow; i <= lastPageToShow; i++) {
        pageButtonsToShow.push(
            <S.ButtonNumberPage
                key={i}
                onClick={() => { handlePageChange(i); }}
                className={currentPage === i ? "active" : ""}
            >
                {i}
            </S.ButtonNumberPage>
        );
    }

    return (
        <S.ProductsContainer>
            <S.QuantityProducts>
                <strong>{products.length}</strong>
                <p>produtos encontrados</p>
            </S.QuantityProducts>
            <S.CardContainer>
                {currentProducts.map((item: Wine) => (
                    <S.InvolvedProduct key={item.id}>
                        <S.CardProduct to={`/produto/${item.id}`} >
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
                        <S.Button onClick={() => { addToCart(item); }}>ADICIONAR</S.Button>
                    </S.InvolvedProduct>
                ))}
            </S.CardContainer>
            <S.PaginationContainer>
                <S.PaginationButtons>
                    <S.ButtonPagination
                        onClick={() => { handlePageChange(currentPage - 1); }}
                        disabled={currentPage === 1}
                    >
                        Anterior
                    </S.ButtonPagination>
                    {pageButtonsToShow}
                    <S.ButtonPagination
                        onClick={() => { handlePageChange(currentPage + 2); }}
                        disabled={currentPage === totalPages}
                    >
                        Próxima
                    </S.ButtonPagination>
                </S.PaginationButtons>
            </S.PaginationContainer>
        </S.ProductsContainer>
    );
}
