export const Header = () => {
    return (
        <div className="h-[34vw] m-auto bg-[url('/header_img.png')] bg-no-repeat bg-contain relative">
          <div className="absolute flex flex-col items-start gap-6 max-w-[50%] bottom-[10%] left-[6vw] fadeIn">
            <h2 className="font-inter font-medium text-white text-[max(4.5vw,22px)]">
              Order your favorite food here
            </h2>
            <p className="text-white text-[1vw]">
              Explore a wide range of mouthwatering options from our carefully
              curated menu. Every dish is designed to deliver bold flavors and
              delightful textures, catering to different tastes and preferences.
              With an array of delicious appetizers, mains, and desserts, you’re
              sure to find the perfect meal to satisfy your cravings.
            </p>
            <button className="border-none text-[#747474] font-medium px-[2.3vw] py-[1vw] bg-white text-[max(1vw,13px)] rounded-full">
              View Menu
            </button>
          </div>
        </div>
      );
};
