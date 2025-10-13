/**
 * Main.jsx - Milestone 2 Final
 * This component fetches products dynamically from the Fake Store API and displays them using the ProductCard component.
 * It uses React hooks (useState, useEffect) for state management and data fetching.
 */

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import background from "/Users/ipek/Projects/redi/e-commerce/e_commerce/src/assets/background.svg"
import Filter from "./Filter";

function Main() {
  // State for storing products
  const [products, setProducts] = useState([]);
  // filteredProducts will be set by Filter component (variant B)
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  // Fetch products from the Fake Store API
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data); // Update state with fetched products
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    }

    fetchProducts();
  }, []); // [] ensures the fetch runs once when it is rendered initially

  return (
    <main className="p-6 bg-transparent min-h-screen">

      
      {/* Background Welcome Text Area */}
    <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] text-center h-[200px] overflow-hidden mb-8 pt-0 mt-0">
      <img 
        src={background} 
        alt="e-com background"
        className="absolute inset-0 w-full h-full object-cover object-center scale-150"
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/30">
        <p className="mt-2 text-gray-200">
          Explore our wide range of products
        </p>
      </div>
    </section>

  {/* Filter Component */}  
  <Filter products={products} setFilteredProducts={setFilteredProducts} />

      {/* Product Listings */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        {loading ? (
          <p className="text-center col-span-full">Loading products...</p>
        ) : (
          // If filteredProducts has items, render them; otherwise render the full list
          (filteredProducts.length > 0 ? filteredProducts : products).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default Main;