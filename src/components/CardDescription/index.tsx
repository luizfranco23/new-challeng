import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './style';
import Arrow from "../../../src/img/arrow.svg";
import Star from "../../../src/img/star.png";
import { ProductContext } from "../../context/ApiContext";
import { useCart } from "../../context/cartContext";

export default function CardDescription() {
  const { originalProducts } = useContext(ProductContext);
  const { id } = useParams();
  const selectedProductId = Number(id);

  const { addToCart } = useCart();

  const selectedProduct = originalProducts.find(product => product.id === selectedProductId);

  if (selectedProduct == null) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <S.ContainerCatalog>
      <S.Catalog>
        <S.ImageProduct>
          <img src={selectedProduct.image} alt="" />
        </S.ImageProduct>
        <S.InformationCatalog>
          <S.NameProduct>
            <S.RegionProduct>
              <S.Region>
                <S.RegionProducText>Vinhos</S.RegionProducText>
                <img src={Arrow} alt="Arrow" />
                <S.RegionProducText>{selectedProduct?.country}</S.RegionProducText>
                <img src={Arrow} alt="Arrow" />
                <p>{selectedProduct?.region}</p>
              </S.Region>
              <S.TitleProduct>{selectedProduct?.name}</S.TitleProduct>
              <S.Country>
                <img src={selectedProduct?.flag} alt="" />
                <p>{selectedProduct?.country}</p>
                <p>{selectedProduct?.type}</p>
                <p>{selectedProduct?.classification}</p>
                <p>{selectedProduct?.size}</p>
                <S.Star>
                  {Array.from({ length: selectedProduct?.rating }, (_, index) => (
                    <img key={index} src={Star} alt="Avaliação" />
                  ))}
                </S.Star>
                <p>({selectedProduct?.avaliations})</p>
              </S.Country>
            </S.RegionProduct>
          </S.NameProduct>
          <S.PriceProduct>
            <S.PriceMember>
              <p>R$</p>
              <div>{selectedProduct?.priceMember}</div>
            </S.PriceMember>
            <S.NoMember>NÃO SÓCIO R$ {selectedProduct?.priceNonMember}/UN</S.NoMember>
          </S.PriceProduct>
          <S.ComenterSommelier>
            <S.ComentTitle>Comentário do Sommelier</S.ComentTitle>
            <S.ComentSommelier>{selectedProduct?.sommelierComment}</S.ComentSommelier>
          </S.ComenterSommelier>
          <S.ButtonAddProduct>
            <S.AmountProduct>
              <div>-</div>
              <p>1</p>
              <div>+</div>
            </S.AmountProduct>
            <S.Feature />
            <S.AddProduct onClick={() => { addToCart(selectedProduct); }}>
              Adicionar
            </S.AddProduct>
          </S.ButtonAddProduct>
        </S.InformationCatalog>
      </S.Catalog>
    </S.ContainerCatalog>
  )
}
