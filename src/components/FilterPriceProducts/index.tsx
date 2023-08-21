import React, { useContext, useEffect, useState } from "react";
import * as S from './styles'
import type { PriceRange } from "../../types/priceRange";
import { ProductContext } from "../../context/ApiContext";

export default function FilterPrice() {
    const { originalProducts, setProducts } = useContext(ProductContext);

    const [selectedRange, setSelectedRange] = useState<PriceRange | null>(null);

    const priceRanges: PriceRange[] = [
        { id: 1, label: 'Até R$40', min: 0, max: 40 },
        { id: 2, label: 'R$40 a R$60', min: 40, max: 60 },
        { id: 3, label: 'R$100 a R$200', min: 100, max: 200 },
        { id: 4, label: 'R$200 a R$500', min: 200, max: 500 },
        { id: 5, label: 'Acima de R$500', min: 500, max: 2000 },
    ];

    useEffect(() => {
        if (selectedRange === null) {
            setProducts(originalProducts);
        } else {
            const filteredProducts = originalProducts.filter(
                product =>
                    product.priceMember >= selectedRange.min && product.priceMember <= selectedRange.max
            );
            if (filteredProducts.length === 0) {
                setProducts(originalProducts);
            } else {
                setProducts(filteredProducts);
            }
        }
    }, [selectedRange, setProducts, originalProducts]);

    return (
        <S.FilterContainer>
            <h3>Refina sua busca</h3>
            <p>Por preço</p>
            <S.Price>
                {priceRanges.map(range => (
                    <label key={range.id}>
                        <input
                            type="radio"
                            name="priceRange"
                            value={range.id}
                            checked={selectedRange?.id === range.id}
                            onChange={() => { setSelectedRange(range); }}
                        />
                        {range.label}
                    </label>
                ))}
            </S.Price>
        </S.FilterContainer>
    )
}
