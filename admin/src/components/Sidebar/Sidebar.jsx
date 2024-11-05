import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

export const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r border-gray-300">
      <div className="pt-12 pl-6 flex flex-col gap-4">
        
        {/* Add Items Button */}
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer transition-all duration-300 ${
              isActive
                ? "border-l-4 border-tomato text-tomato font-semibold shadow-sm bg-red-100"
                : "text-gray-700 hover:text-tomato hover:bg-gray-50 hover:border-l-4 hover:border-gray-300"
            }`
          }
        >
          <img src={assets.add_icon} alt="Add Icon" className="w-5 h-5" />
          <p className="text-sm">Add Items</p>
        </NavLink>

        {/* List Items Button */}
        <NavLink
          to="/list"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer transition-all duration-300 ${
              isActive
                ? "border-l-4 border-tomato text-tomato font-semibold shadow-sm bg-red-100"
                : "text-gray-700 hover:text-tomato hover:bg-gray-50 hover:border-l-4 hover:border-gray-300"
            }`
          }
        >
          <img src={assets.order_icon} alt="Order Icon" className="w-5 h-5" />
          <p className="text-sm">List Items</p>
        </NavLink>

        {/* Orders Button */}
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer transition-all duration-300 ${
              isActive
                ? "border-l-4 border-tomato text-tomato font-semibold shadow-sm bg-red-100"
                : "text-gray-700 hover:text-tomato hover:bg-gray-50 hover:border-l-4 hover:border-gray-300"
            }`
          }
        >
          <img src={assets.order_icon} alt="Order Icon" className="w-5 h-5" />
          <p className="text-sm">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};
