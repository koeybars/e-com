 import { useCart } from "../context/CartProvider";

function ShoppingCart() {
  
  
    const { cart, removeFromCart } = useCart();

    //empty shopping cart
    if (cart.length === 0) {
        return (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <h2 className="text-2xl font-semibold mb-2">Empty Shopping Cart</h2>
        </div>
        );
    }


    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md ">
        
        <h2 className="text-2xl font-bold mb-6 text-gray-800"> Shopping Cart</h2>

        {/* unordered list of every item*/}
         <ul className="divide-y divide-amber-300"> {/*divider line */}
            {cart.map((item) => (
            <li
                key={item.id}
                className="flex items-center justify-between py-4"
            >
                <div>
                <p className="text-lg font-medium text-black">{item.title}</p>
                <p className="text-gray-500">{item.price.toFixed(2)} $</p>
                </div>
                <button
                onClick={() => removeFromCart(item.id)}
                className="mt-2 bg-black text-white py-1 px-3  hover:bg-gray-700"
                >
                -
                </button>
            </li>
            ))}
        </ul>

        {/* sum of the items/products */}
        <div className="border-t border-gray-200 mt-6 pt-4 text-right">
            <h3 className="text-xl font-semibold text-gray-800">
            {" "}
            <span className="text-black">
                {cart.reduce((total, item) => total + item.price, 0).toFixed(2)} €
            </span>
            </h3>
        </div>
        </div>
  );
}

export default ShoppingCart;
