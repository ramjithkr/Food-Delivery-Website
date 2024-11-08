import { Navbar } from "./components/Navbar/Navbar";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Route, Routes } from 'react-router-dom';
import { Add } from "./pages/Add/Add";
import { List } from "./pages/List/List";
import { Order } from "./pages/Order/Order";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  const url = "http://localhost:4000"
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar at the top */}
      <ToastContainer/>
      <Navbar />
     

      <div className="flex flex-1">
        {/* Sidebar on the left */}
        <Sidebar />
        
        <Routes>
          <Route path="/add" element={<Add url={url}/>} />
          <Route path="/list" element={<List url={url}/>} />
          <Route path="/orders" element={<Order url={url}/>} />
        </Routes>

        {/* Main Content Area */}
        <div className="flex-1 p-4">
          {/* Main content goes here */}
        </div>
      </div>
    </div>
  );
}

//5:05:37