import React from "react";
import { ProductProvider } from "./context/ApiContext";
import { GloabalStyle } from "./global/GlobalStyles";
import Rotas from "./routes/routes";
import { BagProvider } from "./context/cartOpenContext";
import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <ProductProvider>
      <BagProvider>
        <CartProvider>
          <GloabalStyle />
          <Rotas />
        </CartProvider>
      </BagProvider>
    </ProductProvider>
  );
}

export default App;
