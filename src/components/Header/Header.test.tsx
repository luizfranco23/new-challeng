import React from "react";
import { Header } from ".";
import { CartProvider } from "../../context/cartContext";
import { fireEvent, render, screen } from "@testing-library/react";
import { BagContext } from "../../context/cartOpenContext";
import { CartProductProvider } from "../../context/ModifyQuantityProductCart";

const renderComponent = (isOpen: boolean) => {
    const setIsOpen = jest.fn();

    const renderHeader = render(
        <BagContext.Provider value={{ isOpen, setIsOpen }}>
            <CartProvider>
                <CartProductProvider>
                    <Header />
                </CartProductProvider>
            </CartProvider>
        </BagContext.Provider>
    );

    return { renderHeader };
}

describe('<Header/>', () => {
    it('renders image logo', () => {
        renderComponent(false);
        const images = screen.getAllByAltText('Logo Wine');
        expect(images.length).toBeGreaterThan(0);
    });

    it('does not render Bag component when isOpen is false', () => {
        renderComponent(false);
        const bagComponent = screen.queryByTestId('Bag');
        expect(bagComponent).not.toBeInTheDocument();
    });

    it('navigated to "Loja" when the link is clicked', () => {
        renderComponent(true);

        const shopLink = screen.getByText("Loja")
        fireEvent.click(shopLink);
    });

    it('renders CartProducts component when isOpen is true', () => {
        renderComponent(true);

        const cartProductsComponent = screen.getByAltText('voltar');

        expect(cartProductsComponent).toBeInTheDocument();

    });

    it('renders "Clube" header text when isOpen is false', () => {
        renderComponent(false);
        const header = screen.getByText('Clube');
        expect(header).toBeInTheDocument();
    });

    it('redirects to the main page when logo is clicked', () => {
        renderComponent(false); // 

        const logoElement = screen.getByAltText('Logo Wine');
        expect(logoElement).toBeInTheDocument();

        fireEvent.click(logoElement);

        expect(window.location.pathname).toBe('/');
    });

    it('should click on links', () => {
        renderComponent(false);

        const linksNameOptions = [
            'Clube',
            'Loja',
            'Produtores',
            'Ofertas',
            'Eventos'
        ];

        for (const linkName of linksNameOptions) {
            const link = screen.getByRole('link', { name: linkName });
            fireEvent.click(link);
        }
    });

    it('should click in search', () => {
        renderComponent(false);

        const search = screen.getByRole('img', { name: /procurar produto/i })

        expect(search).toBeInTheDocument()
    })

    it('should click in bag', () => {
        renderComponent(false);

        const bag = screen.getByRole('img', { name: /sacola de produtos/i })

        expect(bag).toBeInTheDocument()
    })

    it('should quantity of products', () => {
        renderComponent(false);

        const bagQuantity = screen.getByText(/0/i);

        expect(bagQuantity).toBeInTheDocument()
    })
});


