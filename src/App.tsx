import React from "react";
import { ProductProvider } from "./context/ApiContext";
import { GloabalStyle } from "./global/GlobalStyles";
import Rotas from "./routes/routes";
import { BagProvider } from "./context/cartOpenContext";

function App() {
  return (
    <ProductProvider>
      <BagProvider>
        <GloabalStyle />
        <Rotas />
      </BagProvider>
    </ProductProvider>
  );
}

export default App;
