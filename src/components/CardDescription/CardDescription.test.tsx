import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import CardDescription from "./index";
import { CartProvider } from "../../context/cartContext";
import { CartProductProvider } from "../../context/ModifyQuantityProductCart";
import { MemoryRouter, Route } from "react-router-dom";
import { ProductContext, ProductProvider } from "../../context/ApiContext";
import { apiMock } from "../../services/__mocks__/apimock";
import axios from "axios";

// Mock axios outside the describe block
jest.mock("axios", () => ({
    get: jest.fn(() => Promise.resolve({ data: apiMock.items })),
}));

// Define the mockContext outside the describe block
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
                    <ProductProvider>
                        <Route path="/products/:id">
                            <CardDescription />
                        </Route>
                    </ProductProvider>
                </CartProductProvider>
            </CartProvider>
        </MemoryRouter>
    );
    return renderCart;
};

describe('<CardDescription/>', () => {
    it('should render name of product', async () => {
        renderComponent();

        await waitFor(() => {
            const nameProduct = screen.getByText('Vinho bom');
            expect(nameProduct).toBeInTheDocument();
        });
    });
});
