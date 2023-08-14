import React from "react";
import { ProductProvider } from "./context/ApiContext";
import { GloabalStyle } from "./global/GlobalStyles";
import Rotas from "./routes/routes";
import { BagProvider } from "./context/cartOpenContext";
import { CartProvider } from "./context/cartContext";
import { CartProductProvider } from "./context/ModifyQuantityProductCart";

function App() {
  return (
    <ProductProvider>
      <BagProvider>
        <CartProvider>
          <CartProductProvider>
            <GloabalStyle />
            <Rotas />
          </CartProductProvider>
        </CartProvider>
      </BagProvider>
    </ProductProvider>
  );
}

export default App;
