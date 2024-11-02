import { assets } from "../../assets/assets";

export const AppDownload = () => {
  return (
    <div id="app-download" className="bg-gradient-to-r from-[#ff6347] to-[#ff9933] p-[30px] rounded-lg text-center max-w-[500px] mx-auto mt-[10%] shadow-lg ">
      <h2 className="text-2xl font-bold text-white mb-4">
        For a Better Experience
      </h2>
      <p className="text-lg text-white mb-6">
        Download the Tomato app to enjoy exclusive features!
      </p>
      <div className="flex justify-center gap-[15px] mt-4">
        <a
          href="#"
          className="flex flex-col items-center transition-transform transform hover:scale-105"
        >
          <img
            src={assets.play_store}
            alt="Download from Play Store"
            className="w-[160px] mb-2"
          />
          <span className="text-sm text-white">Google Play</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center transition-transform transform hover:scale-105"
        >
          <img
            src={assets.app_store}
            alt="Download from App Store"
            className="w-[160px] mb-2"
          />
          <span className="text-sm text-white">App Store</span>
        </a>
      </div>
    </div>
  );
};
