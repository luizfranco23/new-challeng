import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = React.lazy(async () => await import('../pages/home/index'));
const Catalog = React.lazy(async () => await import('../pages/catalog/index'));


export default function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produto" element={<Catalog />} />
            </Routes>
        </Router>
    )
}
