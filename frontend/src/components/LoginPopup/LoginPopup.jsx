
import { useState } from "react";
import { assets } from "../../assets/assets";

export const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-6">
      <div className="relative bg-white w-full max-w-lg p-6 sm:p-8 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
            className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"
          />
        </div>
        
        <form className="space-y-4">
          <div className="space-y-4">
            {currState === "Sign Up" && (
              <input
                type="text"
                placeholder="Your name"
                required
                className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}

            <input
              type="email"
              placeholder="Your email"
              required
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              placeholder="Your password"
              required
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button className="w-full bg-red-500 text-white py-2 sm:py-3 rounded-lg hover:bg-red-600 transition duration-300">
  {currState === "Sign Up" ? "Create Account" : "Login"}
</button>

          <div className="text-sm text-gray-600 flex items-start space-x-2">
            <input type="checkbox" required className="mt-1" />
            <p className="leading-tight sm:leading-normal">
              By continuing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>

          {currState === "Login" ? (
            <p className="text-sm text-center text-gray-600">
              New here?{" "}
              <span
                onClick={() => setCurrState("Sign Up")}
                className="text-[tomato] cursor-pointer hover:underline"
              >
                Create an account
              </span>
            </p>
          ) : (
            <p className="text-sm text-center text-gray-600">
              Already have an account?{" "}
              <span
                onClick={() => setCurrState("Login")}
                className="text-[tomato] cursor-pointer hover:underline"
              >
                Login here
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
