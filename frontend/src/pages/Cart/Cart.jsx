import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const deliveryFee = getTotalCartAmount() === 0 ? 0 : 2.00; // Fixed delivery fee if cart is not empty
  const totalAmount = getTotalCartAmount() + deliveryFee; // Calculate total including delivery

  return (
    <div className="p-4 bg-gray-50 min-h-screen flex flex-col lg:flex-row justify-center gap-8">
      {/* Cart Items Section */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-2/3">
        <div className="grid grid-cols-6 gap-4 font-semibold text-gray-700 border-b pb-3 text-center">
          <p>Image</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <div className="mt-4 space-y-4">
          {food_list.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <div
                  key={item._id}
                  className="grid grid-cols-6 gap-4 items-center bg-gray-100 p-4 rounded-lg text-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded mx-auto"
                  />
                  <p className="text-gray-800 font-medium">{item.name}</p>
                  <p className="text-gray-600">${item.price}</p>
                  <p className="text-gray-600">{cartItems[item._id]}</p>
                  <p className="text-gray-800 font-semibold">
                    ${(item.price * cartItems[item._id]).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 hover:text-red-600 font-semibold cursor-pointer transition duration-150"
                  >
                    X
                  </button>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>

      {/* Cart Summary Section */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-1/3 space-y-6">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 space-y-4 shadow-inner">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Cart Summary</h2>
          
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
          onClick={() => navigate('/order')} 
          className="w-full bg-[tomato] text-white py-3 rounded-lg font-medium hover:bg-red-600 transition duration-300 mt-4"
        >
          PROCEED TO CHECKOUT
        </button>

        {/* Promo Code Section */}
        <div className="bg-gray-50 p-5 rounded-lg shadow-inner mt-6">
          <p className="text-gray-600 mb-2 text-sm text-center">
            Have a promo code? Enter it here
          </p>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Promo code"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-[tomato] text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
