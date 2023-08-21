/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import FilterPrice from "./index";
import { ProductContext } from "../../context/ApiContext";
import { fireEvent, render, screen } from "@testing-library/react";
import { apiMock } from "../../services/__mocks__/apimock";
import { CartProvider } from "../../context/cartContext";
import { MemoryRouter } from "react-router-dom";

jest.mock("axios", () => ({
    get: jest.fn(() => Promise.resolve({})),
}));

const renderComponent = () => {
    const setProductsMock = jest.fn();
    const renderHeader = render(
        <MemoryRouter>
            <ProductContext.Provider value={{
                originalProducts: [apiMock],
                setProducts: setProductsMock,
            } as any} >
                <CartProvider>
                    <FilterPrice />
                </CartProvider>
            </ProductContext.Provider>
        </MemoryRouter>
    );
    return { ...renderHeader, setProductsMock };
}

describe('<FilterPrice/>', () => {
    it('renders the component without errors', () => {
        renderComponent();
        const filterPriceComponent = screen.getByRole('heading', {
            name: 'Refina sua busca'
        });
        expect(filterPriceComponent).toBeInTheDocument();
    });

    it("renders the component without errors", () => {
        render(<FilterPrice />);
        const filterPriceComponent = screen.getByRole("heading", {
            name: "Refina sua busca",
        });
        expect(filterPriceComponent).toBeInTheDocument();
    });

    it('sees if the inputs are working', () => {
        renderComponent();

        const filterOptions = [
            'Até R$40',
            'R$40 a R$60',
            'R$100 a R$200',
            'R$200 a R$500',
            'Acima de R$500'
        ];

        filterOptions.forEach(option => {
            const filter = screen.getByLabelText(option);
            fireEvent.click(filter);
        });
    });


    it('sees if the inputs are working', () => {

        const { setProductsMock } = renderComponent();

        const getPrice = screen.getByLabelText("R$40 a R$60")

        fireEvent.click(getPrice)

        expect(setProductsMock).toHaveBeenCalledTimes(2)



    });
});











