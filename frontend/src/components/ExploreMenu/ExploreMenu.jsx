import { menu_list } from "../../assets/assets";

export const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5" id="explore-menu">
      <h1 className="text-gray-800 font-medium text-2xl">Explore our menu</h1>
      <p className="max-w-[60%] text-gray-500">
        Choose from a diverse menu featuring a delectable array of dishes to
        satisfy every craving.
      </p>
      <div className="flex items-center gap-12 my-5 overflow-x-scroll hide-scrollbar">
        {menu_list.map((item, index) => {
          const isActive = category === item.menu_name; // Check if the current item is active
          return (
            <div
              onClick={() => setCategory(prev => (prev === item.menu_name ? "All" : item.menu_name))}
              key={index}
              className="text-center cursor-pointer"
            >
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className={`w-[7.5vw] min-w-[80px] rounded-full transition-transform duration-200 hover:scale-105 ${
                  isActive ? "border-[4px] border-tomato" : ""
                }`} // Apply active styles here
              />
              <p
                className={`mt-2 text-gray-600 text-[max(1.4vw,16px)] ${
                  isActive ? "font-bold border border-tomato rounded-full p-1" : ""
                }`} // Add border, rounded, and padding when active
              >
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="mx-2 h-[2px] bg-[#e2e2e2] border-none" />
    </div>
  );
};
