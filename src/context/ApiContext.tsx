import React, { createContext, useEffect, useState } from 'react';
import { fetchProductsFromAPI } from '../services/apiServices';
import type { Wine } from '../types/products';

export const ProductContext = createContext<Wine[]>([]);

export function ProductProvider({ children }: { children: React.ReactNode }) {
    const [products, setProducts] = useState<Wine[]>([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const fetchedProducts = await fetchProductsFromAPI();
                setProducts(fetchedProducts);
            } catch (error) {
            }
        }

        void fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
}
