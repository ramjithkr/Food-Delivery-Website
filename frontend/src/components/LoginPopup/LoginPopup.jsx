import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from 'axios';

export const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);

  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();  // Fixed typo here

    try {
      let newUrl = url;
      newUrl += currState === "Login" ? "/api/v1/user/login" : "/api/v1/user/register";
      
      const response = await axios.post(newUrl, data);  // Added `await` here

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Login/Register error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-6">
      <div className="relative bg-white w-full max-w-lg p-6 sm:p-8 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
            {currState}
          </h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
            className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"
          />
        </div>

        <form className="space-y-4" onSubmit={onLogin}>
          {currState === "Sign Up" && (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your name"
              required
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}

          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
            className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Your password"
            required
            className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 sm:py-3 rounded-lg hover:bg-red-600 transition duration-300"
          >
            {currState === "Sign Up" ? "Create Account" : "Login"}
          </button>

          <div className="text-sm text-gray-600 flex items-start space-x-2">
            <input type="checkbox" required className="mt-1" />
            <p className="leading-tight sm:leading-normal">
              By continuing, you agree to our Terms of Service and Privacy
              Policy.
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
