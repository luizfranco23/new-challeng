import React, { useContext } from "react";
import * as S from './styles'
import { BagContext } from "../../context/cartOpenContext";
import { useCart } from "../../context/cartContext";
import type { Wine } from "../../types/products";
import leftArrow from '../../img/left-arrow.png'
import closeImg from '../../img/icon_close.svg'
import { useCartContext } from "../../context/ModifyQuantityProductCart";


export function CartProducst() {


    const { isOpen, setIsOpen } = useContext(BagContext);
    const { cart, removeFromCart, quantityProducts, totalPrice } = useCart()

    const { addItemToCart, removeItemFromCart } = useCartContext();

    const handleAddItem = (itemId: number) => {
        const selectedItem = cart.find((item) => item.id === itemId);
        if (selectedItem != null) {
            addItemToCart(selectedItem);
        }
        console.log(cart);

    };

    const handleRemoveItem = (itemId: number) => {
        const itemToRemove = cart.find((item) => item.id === itemId);

        if (itemToRemove != null) {
            removeItemFromCart(itemToRemove);
        }
    };
    const handleBagClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <S.ConteinerCart>
            <S.Cart>
                <S.WineBox>
                    <a href="#" onClick={handleBagClick}><img src={leftArrow} alt="voltar" /></a>
                    <p>WineBox ({quantityProducts})</p>
                </S.WineBox>
                {cart.map((item: Wine) => (
                    <S.ContainerBox key={item.id}>
                        <S.BoxImg>
                            <img src={item.image} alt="" />
                        </S.BoxImg>
                        <S.ContainerNameQuantity>
                            <p>{item.name}</p>
                            <S.BoxQuantity>
                                <S.RemovoItem
                                    onClick={() => { handleRemoveItem(item.id); }}
                                >-</S.RemovoItem>
                                <p>{item.quantity}</p>
                                <S.AddItem
                                    onClick={() => { handleAddItem(item.id); }}
                                >+</S.AddItem>
                            </S.BoxQuantity>
                        </S.ContainerNameQuantity>
                        <S.RemoveAllProduct onClick={() => { removeFromCart(item.id); }}>
                            <img src={closeImg} alt="Fechar" />
                        </S.RemoveAllProduct >
                        <S.Price>
                            <p>R${(item.priceMember * item.quantity).toFixed(2)}</p>
                        </S.Price>
                    </S.ContainerBox>
                ))}
                {totalPrice > 0 ? (
                    <S.totalPriceProducts>
                        <S.TotalPrice>
                            <span>Total</span>
                            <p>R${totalPrice.toFixed(2)}</p>
                        </S.TotalPrice>
                        <S.ButtonPurchase>
                            Finalizar pedido
                        </S.ButtonPurchase>
                    </S.totalPriceProducts>
                ) : null}
            </S.Cart>
            <S.Overlay onClick={handleBagClick} />
        </S.ConteinerCart >
    )
}