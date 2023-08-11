import React, { createContext, useEffect, useState } from 'react';
import { fetchProductsFromAPI } from '../services/apiServices';
import type { Wine } from '../types/products';

interface ProductContextProps {
    products: Wine[];
    setProducts: React.Dispatch<React.SetStateAction<Wine[]>>;
    originalProducts: Wine[];
}

export const ProductContext = createContext<ProductContextProps>({
    products: [],
    setProducts: () => { },
    originalProducts: [],
});

export function ProductProvider({ children }: { children: React.ReactNode }) {
    const [originalProducts, setOriginalProducts] = useState<Wine[]>([]);
    const [products, setProducts] = useState<Wine[]>([])

    useEffect(() => {
        async function fetchProducts() {
            try {
                const fetchedProducts = await fetchProductsFromAPI();
                setOriginalProducts(fetchedProducts);
                setProducts(fetchedProducts);
            } catch (error) {

            }
        }

        void fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ products, setProducts, originalProducts }}>
            {children}
        </ProductContext.Provider>
    );
}
