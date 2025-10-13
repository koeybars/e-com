/**Write code for a product page, with detailed info on product */

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartProvider";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="p-6 text-center">Loading...</p>;

  return (
    // Container: zentriert, mit Padding; benutzt Tailwind responsive Grid
    <main className="container mx-auto px-4 py-8">
      {/* Grid: auf Mobil 1 Spalte, ab md (>=768px) 2 Spalten */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">

        {/* Bild-Spalte: zentriert und begrenzt in der Breite */}
        <div className="flex justify-center items-start">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-sm object-contain rounded shadow-sm"
          />
        </div>

        {/* Details-Spalte: Titel, Beschreibung, Preis und Aktion */}
        <div className="flex flex-col gap-6">
          {/* Titel: größer auf Desktop */}
          <h1 className="text-2xl md:text-3xl font-bold leading-tight">{product.title}</h1>

          {/* Beschreibung: etwas dezenter auf Desktop */}
          <p className="text-gray-600 text-sm md:text-base">{product.description}</p>

          {/* Preis + Aktion: Button rechts (ml-auto) */}
          <div className="flex items-center gap-4">
            <span className="text-2xl font-semibold">${product.price}</span>

            {/* Add to cart: ruft onAddToCart über optionale globale handler auf (falls vorhanden) */}
            <button
              // ruft den Context addToCart handler auf
              onClick={() => addToCart(product)}
              className="ml-auto bg-black text-white px-4 py-2  hover:bg-gray-800 transition-colors"
            >
              Add to cart
            </button>
          </div>

          {/* Zusatzinfos wie Kategorie */}
          <div className="text-sm text-gray-500">
            <p>
              Category: <span className="font-medium text-gray-700">{product.category}</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductPage;