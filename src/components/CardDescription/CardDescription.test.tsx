import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CardDescription from "./index";
import { CartProvider } from "../../context/cartContext";
import { CartProductProvider } from "../../context/ModifyQuantityProductCart";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { apiMock } from "../../services/__mocks__/apimock";
import { ProductContext } from "../../context/ApiContext";

const mockContext = {
    products: [],
    setProducts: jest.fn(),
    originalProducts: apiMock.items,
    selectedProduct: apiMock.items,
};

const renderComponent = () => {
    const productId = 1;

    const renderCart = render(
        <MemoryRouter initialEntries={[`/product/${productId}`]}>
            <CartProvider>
                <CartProductProvider>
                    <ProductContext.Provider value={mockContext}>
                        <Routes>
                            <Route path="/product/:id" element={<CardDescription />} />
                        </Routes>
                    </ProductContext.Provider>
                </CartProductProvider>
            </CartProvider>
        </MemoryRouter >
    );
    return renderCart;
};

describe('<CardDescription/>', () => {
    it('should render name of product', async () => {

        renderComponent();

        const nameProduct = screen.getByRole('heading', { name: /vinho bom/i })
        expect(nameProduct).toBeInTheDocument()

    });

    it('should render region of product', () => {
        renderComponent();

        screen.logTestingPlaygroundURL();

        const regionProducts = screen.getAllByText(/portugal/i);

        expect(regionProducts).toHaveLength(4);
    });

    test('should add product to cart when "Adicionar" button is clicked', () => {
        renderComponent();


        const buttonAddProduct = screen.getByRole('button', { name: 'Adicionar' });
        fireEvent.click(buttonAddProduct);

    });

});
