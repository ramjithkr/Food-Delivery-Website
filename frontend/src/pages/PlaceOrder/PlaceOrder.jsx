import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

export const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  const deliveryFee = getTotalCartAmount() === 0 ? 0 : 5.00; // Fixed delivery fee if cart has items
  const totalAmount = getTotalCartAmount() + deliveryFee; // Calculate total including delivery

  return (
    <form className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">
      {/* Delivery Information Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">Delivery Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="First name" 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="text" 
            placeholder="Last name" 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <input 
          type="email" 
          placeholder="Email address" 
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="text" 
          placeholder="Street" 
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="grid grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="City" 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="text" 
            placeholder="State" 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="Zip code" 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="text" 
            placeholder="Country" 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <input 
          type="text" 
          placeholder="Phone" 
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Cart Summary Section */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 space-y-4 shadow-inner">
        <h2 className="text-2xl font-semibold text-gray-700 text-center">Cart Summary</h2>
        
        <div className="flex justify-between text-gray-600 text-lg">
          <p>Subtotal</p>
          <p className="font-semibold">${getTotalCartAmount().toFixed(2)}</p>
        </div>
        <hr className="border-t border-gray-300 my-2" />
        
        <div className="flex justify-between text-gray-600 text-lg">
          <p>Delivery Fee</p>
          <p className="font-semibold">${deliveryFee.toFixed(2)}</p>
        </div>
        <hr className="border-t border-gray-300 my-2" />
        
        <div className="flex justify-between text-gray-800 text-lg font-semibold">
          <p>Total</p>
          <p>${totalAmount.toFixed(2)}</p>
        </div>
      </div>

      <button 
        type="submit" 
        className="w-full bg-[tomato] text-white py-3 rounded-lg font-medium hover:bg-red-600 transition duration-300"
      >
        PROCEED TO PAYMENT
      </button>
    </form>
  );
};
