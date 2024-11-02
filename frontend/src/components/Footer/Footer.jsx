import { assets } from "../../assets/assets";

export const Footer = () => {
  return (
    <div className="text-[#d9d9d9] bg-[#323232] flex flex-col gap-[20px] p-[20px_8vw] pt-[80px] mt-[10%]" id="footer">
      <div className="w-full grid grid-cols-[2fr_1fr_1fr] gap-[80px]">
        <div>
          <img src={assets.logo} alt="Tomato Logo" />
          <p className="mt-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            nostrum quo dolore hic soluta assumenda. Sed aliquam fuga, inventore
            saepe cupiditate quidem autem a, reiciendis facilis sint et soluta
            iure!
          </p>
          <div className="flex gap-[15px] mt-4">
            <img className="w-[40px]" src={assets.facebook_icon} alt="Facebook" />
            <img className="w-[40px]" src={assets.twitter_icon} alt="Twitter" />
            <img className="w-[40px]" src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-[20px]">
          <h2 className="text-white text-lg">COMPANY</h2>
          <ul className="space-y-2">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Delivery</li>
            <li className="cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-[20px]">
          <h2 className="text-white text-lg">GET IN TOUCH</h2>
          <ul className="space-y-2">
            <li className="cursor-pointer">+91 9191929293</li>
            <li className="cursor-pointer">contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-[2px] my-[20px] bg-gray-500 border-none" />
      <p className="text-center text-gray-400 text-sm">
        &copy; 2024 Tomato.com. All rights reserved.
      </p>
    </div>
  );
};
