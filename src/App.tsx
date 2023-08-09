import React from "react";
import { ProductProvider } from "./context/ApiContext";
import { GloabalStyle } from "./global/GlobalStyles";
import Rotas from "./routes/routes";

function App() {
  return (
    <ProductProvider>
      <GloabalStyle />
      <Rotas />
    </ProductProvider>
  );
}

export default App;
