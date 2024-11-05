import { useState } from "react";
import { LoginPopup } from "./components/LoginPopup/LoginPopup";
import { Navbar } from "./components/Nvabar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart/Cart";
import { PlaceOrder } from "./pages/PlaceOrder/PlaceOrder";
import { Footer } from "./components/Footer/Footer";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}{" "}
      {/* Pass the state handler to LoginPopup */}
      <div className="w-[80%] mx-auto">
        <Navbar setShowLogin={setShowLogin} /> {/* Correct prop name */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;

//6:40:19