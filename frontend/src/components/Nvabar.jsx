import { Link } from "react-router-dom";
import { assets } from "./../assets/assets";
import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";

export const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="py-5 flex justify-between items-center">
      <Link to='/'>
        <img src={assets.logo} alt="logo" className="w-[150px]" />
      </Link>
      <ul className="flex list-none gap-20 text-[#49557e] text-[18px]">
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={`${
            menu === "Home"
              ? "active pb-2 border-b-2 border-[#49557e] cursor-pointer"
              : ""
          }`}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={`${
            menu === "Menu"
              ? "active pb-2 border-b-2 border-[#49557e] cursor-pointer"
              : ""
          }`}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("Mobile-app")}
          className={`${
            menu === "Mobile-app"
              ? "active pb-2 border-b-2 border-[#49557e] cursor-pointer"
              : ""
          }`}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact us")}
          className={`${
            menu === "Contact us"
              ? "active pb-2 border-b-2 border-[#49557e] cursor-pointer"
              : ""
          }`}
        >
          Contact us
        </a>
      </ul>

      <div className="flex items-center gap-[40px] relative">
        <img
          src={assets.search_icon}
          alt="Search"
          className="relative w-[30px] h-[30px] cursor-pointer"
        />

        <div className="relative">
          <Link to='/cart'><img src={assets.basket_icon} alt="Basket" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "absolute w-[10px] h-[10px] bg-[tomato] rounded-full top-[-8px] right-[-8px]"} />
        </div>

        <button
          onClick={() => setShowLogin(true)}
          className="bg-transparent text-[18px] text-[#495573] border-[1px] border-[tomato] px-[30px] py-[10px] rounded-[50px] cursor-pointer hover:bg-[#fff4f2] transition duration-300"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};
