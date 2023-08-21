import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { CartProvider } from "../../context/cartContext";
import Bag from ".";
import { BagContext } from "../../context/cartOpenContext";

const renderComponent = () => {
    const setIsOpen = jest.fn();
    const renderBag = render(
        <CartProvider>
            <BagContext.Provider value={{ isOpen: false, setIsOpen }}>
                <Bag />
            </BagContext.Provider>
        </CartProvider>
    );
    return { ...renderBag, setIsOpen };
};

describe('<Bag/>', () => {
    it('render image in bag', () => {
        renderComponent();
        const images = screen.getAllByAltText('Sacola de produtos');
        expect(images.length).toBeGreaterThan(0);
    });

    it('handles bag click correctly', () => {
        const { getByAltText, setIsOpen } = renderComponent();

        const bagImage = getByAltText('Sacola de produtos');
        fireEvent.click(bagImage);

        expect(setIsOpen).toHaveBeenCalledWith(true);
    });

    test('displays the correct quantity of products', () => {
        const { getByText } = renderComponent();

        const quantityElement = getByText('0');
        expect(quantityElement).toBeInTheDocument();
    });
});
