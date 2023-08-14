import React, { createContext, useContext, type ReactNode, useEffect } from "react";
import { type Wine } from "../types/products";
import { useCart } from "./cartContext";

interface CartContextData {
    cart: Wine[];
    addItemToCart: (item: Wine) => void;
    removeItemFromCart: (item: Wine) => void;
}

const CartContext = createContext<CartContextData | undefined>(undefined);

interface CartProductProviderProps {
    children: ReactNode;
}

export function CartProductProvider({ children }: CartProductProviderProps) {
    const { cart, setCart } = useCart();

    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart != null) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    const addItemToCart = (item: Wine) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

            if (existingItem != null) {
                const updatedCart = prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
                localStorage.setItem("cart", JSON.stringify(updatedCart));
                return updatedCart;
            } else {
                const updatedCart = [...prevCart, { ...item, quantity: 1 }];
                localStorage.setItem("cart", JSON.stringify(updatedCart));
                return updatedCart;
            }
        });
    };

    const removeItemFromCart = (item: Wine) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

            if (existingItem != null) {
                if (existingItem.quantity > 1) {
                    const updatedCart = prevCart.map((cartItem) =>
                        cartItem.id === item.id
                            ? { ...cartItem, quantity: cartItem.quantity - 1 }
                            : cartItem
                    );
                    localStorage.setItem("cart", JSON.stringify(updatedCart));
                    return updatedCart;
                } else {
                    const updatedCart = prevCart.filter((cartItem) => cartItem.id !== item.id);
                    localStorage.setItem("cart", JSON.stringify(updatedCart));
                    return updatedCart;
                }
            }

            return prevCart;
        });
    };

    return (
        <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCartContext() {
    const context = useContext(CartContext);
    if (context == null) {
        throw new Error("useCartContext must be used within a CartProductProvider");
    }
    return context;
}
