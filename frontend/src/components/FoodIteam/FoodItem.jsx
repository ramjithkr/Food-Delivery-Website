import { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

export const FoodItem = ({ id, name, price, description, image }) => {

  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="w-full m-auto border-[1px] border-gray-200 shadow-md transition duration-300 ease-in-out hover:shadow-lg">
      <div className="relative">
        <img src={image} alt={name} className="w-full rounded-t-lg" />
        {!cartItems[id] ? (
          <img
            className="w-[30px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-full"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add Item"
          />
        ) : (
          <div className="absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-full bg-white">
            <img
              className="w-[20px]"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove Item"
            />
            <p>{cartItems[id]}</p>
            <img
              className="w-[20px]"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="Add More Item"
            />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-semibold">{name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="rating" />
        </div>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <p className="text-[#ff6347] text-[22px] font-medium my-[10px]">
          ${price}
        </p>
      </div>
    </div>
  );
};
