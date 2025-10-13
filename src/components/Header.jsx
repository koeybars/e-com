import React from "react";
import logo from "/Users/ipek/Projects/redi/e-commerce/e_commerce/src/assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartProvider";

function Header({ cartCount }) {
  const navigate = useNavigate();
  const ctx = useCart();
  // prefer context value when available (so pages that use context update the badge)
  const count = (ctx && Array.isArray(ctx.cart)) ? ctx.cart.length : (typeof cartCount === 'number' ? cartCount : 0);
  return (
    <header className="bg-white text-black w-full p-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex lg:flex-1">
        <Link to="/" className="-m-1.5 p-1.5">
          <span className="sr-only">e-com</span>
          <img alt="e-com logo" src={logo} className="h-8 w-auto" />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-4">
        <Link to="/" className="text-black hover:underline">Home</Link>
        <Link to="/about" className="text-black hover:underline">About</Link>
      </nav>

      {/* Shopping Cart Button with Counter */}
      <div className="relative ml-4">
        <button onClick={() => navigate('/shoppingcart')} className="bg-black py-1 px-3 text-white hover:bg-gray-700">
          Shopping Cart
        </button>
        {count > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2">
            {count}
          </span>
        )}
      </div>
    </header>
  );
}

export default Header;
