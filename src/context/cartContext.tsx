import React, { createContext, useContext, useState, useEffect } from "react";
import type { Wine } from "../types/products";

interface CartContextType {
    cart: Wine[];
    addToCart: (product: Wine) => void;
    removeFromCart: (productId: number) => void;
    quantityProducts: number;
}

export const CartContext = createContext<CartContextType | undefined>(
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

    const addToCart = (product: Wine) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const removeFromCart = (productId: number) => {
        const updatedCart = cart.filter((product) => product.id !== productId);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const contextValue: CartContextType = {
        cart,
        addToCart,
        removeFromCart,
        quantityProducts: cart.length,
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
