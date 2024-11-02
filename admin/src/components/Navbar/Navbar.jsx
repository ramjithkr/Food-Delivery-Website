import { assets } from './../../assets/assets';


export const Navbar = () => {

  return (
    <div className="flex justify-between items-center py-3 px-6 bg-gray-100 shadow-md">
    {/* Logo */}
    <img src={assets.logo} alt="Logo" className="w-[80px] h-auto" />

    {/* Profile Image */}
    <img src={assets.profile_image} alt="Profile" className="w-10 h-10 rounded-full" />
  </div>
  );
};
