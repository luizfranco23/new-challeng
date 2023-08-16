import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './style';
import Arrow from "../../../src/img/arrow.svg";
import Star from "../../../src/img/star.png";
import { ProductContext } from "../../context/ApiContext";
import { useCart } from "../../context/cartContext";

export default function CardDescription() {
  const [quantity, setQuantity] = useState(1); // Default quantity is 1


  const { originalProducts } = useContext(ProductContext);
  const { id } = useParams();
  const selectedProductId = Number(id);



  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

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
              <div
                onClick={decreaseQuantity}
              >-</div>
              <p>{quantity}</p>
              <div
                onClick={increaseQuantity}
              >+</div>
            </S.AmountProduct>
            <S.Feature />
            <S.AddProduct
              onClick={() => {
                addToCart(selectedProduct, quantity);
              }}
            >
              Adicionar
            </S.AddProduct>
          </S.ButtonAddProduct>
        </S.InformationCatalog>
      </S.Catalog>

      <S.ContainerMobile>
        <S.CatalogContainer>
          <S.InformationCatalogMobile>
            <S.InformationContainer>
              <S.RegionWine>
                <span className='pinkText'>Vinhos</span>
                <span> <img src={Arrow} alt="" /></span>
                <span className='pinkText' >{selectedProduct?.country}</span>
                <span> <img src={Arrow} alt="" /></span>
                <span>{selectedProduct?.region}</span>
              </S.RegionWine>
              <S.NameProduct>
                <h1>{selectedProduct?.name}</h1>
              </S.NameProduct>
              <S.ClassificationWine>
                <img src={selectedProduct?.flag} alt="" />
                <span>{selectedProduct?.country}</span>
                <span>{selectedProduct?.type}</span>
                <span>{selectedProduct?.size}</span>
              </S.ClassificationWine>
            </S.InformationContainer>
            <S.ImageWine>
              <img src={selectedProduct?.image} alt="" />
            </S.ImageWine>
            <S.ComentSommelierMobile>
              <h3>Comentário do Sommelier</h3>
              <p>{selectedProduct?.sommelierComment}</p>
            </S.ComentSommelierMobile>
          </S.InformationCatalogMobile>
        </S.CatalogContainer>
        <S.Button>
          <div className='Off'>{selectedProduct?.discount}%OFF</div>
          <S.Price>
            <p className='price'>R$ {selectedProduct?.price}</p>
            <div className='priceTextPink'>
              <p>R$</p>
              <p className='bigText'>{selectedProduct?.priceMember}</p>
            </div>
            <S.noMemberMobile>PREÇO NÃO SÓCIO R${selectedProduct?.priceNonMember}</S.noMemberMobile>
          </S.Price>
          <button
            onClick={() => {
              addToCart(selectedProduct, 1);
            }}
          >Adicionar</button>
        </S.Button>
      </S.ContainerMobile>
    </S.ContainerCatalog>
  )
}
