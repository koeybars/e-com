import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import ProductPage from './pages/ProductPage.jsx';
import About from './pages/About.jsx';
import ShoppingCart from './pages/ShoppingCart.jsx';
import NotFound from './pages/NotFound.jsx';
import { CartProvider } from "./context/CartProvider";

function App() {
  return (
    <div>
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App
