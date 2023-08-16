import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { CartProvider } from "../../context/cartContext";
import Bag from ".";
import { BagContext } from "../../context/cartOpenContext";

describe('<Bag/>', () => {
    it('render image in bag', () => {
        render(
            <CartProvider>
                <Bag />
            </CartProvider>
        );

        const images = screen.getAllByAltText('Sacola de produtos');
        expect(images.length).toBeGreaterThan(0);
    });

    it('handles bag click correctly', () => {
        const setIsOpen = jest.fn();
        const { getByAltText } = render(
            <CartProvider>
                <BagContext.Provider value={{ isOpen: false, setIsOpen }}>
                    <Bag />
                </BagContext.Provider>
            </CartProvider>
        );

        const bagImage = getByAltText('Sacola de produtos');
        fireEvent.click(bagImage);
        expect(setIsOpen).toHaveBeenCalledWith(true);
    });

    test('displays the correct quantity of products', () => {
        const { getByText } = render(
            <CartProvider>
                <BagContext.Provider value={{ isOpen: false, setIsOpen: jest.fn() }}>
                    <Bag />
                </BagContext.Provider>
            </CartProvider>
        );

        const quantityElement = getByText('0');
        expect(quantityElement).toBeInTheDocument();
    });
});
