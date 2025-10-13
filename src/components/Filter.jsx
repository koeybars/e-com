import React, { useState, useEffect } from 'react';

// Filter-Liste basierend auf searchTerm (case-insensitive)

function Filter({ products, setFilteredProducts }) {            

  const [searchTerm, setSearchTerm] = useState(""); // Searchbar
  const [selectedCategory, setSelectedCategory] = useState(""); // Category filter

  function handleSearch(event) {
      setSearchTerm(event.target.value.toLowerCase());
    }

  function handleFilterChange(event) {
    setSelectedCategory(event.target.value);
  }


  // Variant B: compute filteredProducts here and push the result up via setFilteredProducts
  useEffect(() => {
    // defensively handle when products isn't ready yet
    if (!products || products.length === 0) {
      setFilteredProducts([]);
      return;
    }

    const term = searchTerm.toLowerCase();

    const filteredProducts = products.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(term);
      const matchesCategory = selectedCategory
        ? product.category === selectedCategory
        : true;

      return matchesSearch && matchesCategory;
    });

    setFilteredProducts(filteredProducts);
  }, [products, searchTerm, selectedCategory, setFilteredProducts]);


return (
    <section className="text-center mb-8">
        {/* Search + Category (responsive): stacked on mobile, side-by-side on md+ */}
        <div className="mb-6 flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="w-full md:w-auto">
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full max-w-md px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>

            <div className="w-full md:w-auto">
            {/* Category Filter Dropdown */}
            <select
                value={selectedCategory}
                onChange={handleFilterChange}
                className="px-3 py-2 border border-gray-300 rounded shadow-sm"
            >
                <option value="">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelery</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
            </select>
            </div>
        </div>
        </section>
);
}

export default Filter;