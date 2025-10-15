import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartProvider";


function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  return (
    <div className="p-4 bg-white shadow-md  flex flex-col items-center">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-32 h-32 object-cover mb-4"
      />

      {/* Product Title */}
      <h3 className="text-lg font-bold text-gray-800">{product.title}</h3>

      {/* Product Price */}
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
    
      <div className="p-4 bg-white space-x-10  flex flex-row items-center">
  
        {/* Open Product Details - Button */}
        <button
          onClick={() => navigate(`/product/${product.id}`)}
          className="mt-2 bg-orange-200 text-white py-1 px-3  hover:bg-orange-300"
        >
          Details
        </button>
        
        {/* Add to Cart Button (uses context addToCart) */}
        <button
          onClick={() => {console.log('ProductCard: Add clicked', product); addToCart(product)}}
          className="mt-2 bg-black text-white py-1 px-3  hover:bg-gray-700"
        >
          Add to Cart
        </button>


      </div>
      
    </div>
  );
}

export default ProductCard;