import React, { createContext, useContext, useState, useEffect } from "react";
import type { Wine } from "../types/products";

interface CartContextType {
    cart: Wine[];
    setCart: React.Dispatch<React.SetStateAction<Wine[]>>;
    addToCart: (product: Wine, quantity: number) => void; // Update the type here
    removeFromCart: (productId: number) => void;
    quantityProducts: number;
    totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(
    undefined
);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<Wine[]>([]);

    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart != null) {
            setCart(JSON.parse(savedCart));
        }
    }, []);


    const addToCart = (product: Wine, quantity: number) => {
        const existingProduct = cart.find(item => item.id === product.id);

        if (existingProduct != null) {
            const updatedCart = cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
            );
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        } else {
            const updatedCart = [...cart, { ...product, quantity: quantity }];
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        }
    };


    const removeFromCart = (productId: number) => {
        const updatedCart = cart.filter((product) => product.id !== productId);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);
    const totalPrice = cart.reduce((total, product) => total + (product.priceMember * product.quantity), 0)


    const contextValue: CartContextType = {
        cart,
        setCart,
        addToCart,
        removeFromCart,
        quantityProducts: totalQuantity,
        totalPrice,

    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context == null) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
