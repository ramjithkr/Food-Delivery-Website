import { assets } from "../../assets/assets";

export const Add = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      <form className="w-full max-w-lg bg-white p-10 rounded-2xl shadow-xl space-y-6 transition-transform transform hover:scale-105 duration-300 m-[55px]">
        
        {/* Upload Image Section */}
        <div className="space-y-2">
          <p className="text-gray-800 font-semibold text-lg">Upload Image</p>
          <label
            htmlFor="image"
            className="block w-full h-40 border-2 border-dashed border-gray-300 rounded-lg flex justify-center items-center cursor-pointer transition duration-200 ease-in-out hover:border-indigo-600 hover:bg-indigo-100"
          >
            <img src={assets.upload_area} alt="Upload Icon" className="w-16 h-16 opacity-80 transition duration-300" />
          </label>
          <input type="file" id="image" hidden required />
        </div>
        
        {/* Product Name Input */}
        <div className="flex flex-col space-y-1">
          <label className="text-gray-800 font-semibold" htmlFor="name">Product Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Type here"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition duration-200 ease-in-out"
          />
        </div>
        
        {/* Product Description Textarea */}
        <div className="flex flex-col space-y-1">
          <label className="text-gray-800 font-semibold" htmlFor="description">Product Description</label>
          <textarea
            id="description"
            name="description"
            rows="6"
            placeholder="Write content here"
            required
            className="border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition duration-200 ease-in-out"
          ></textarea>
        </div>
        
        {/* Category and Price Section */}
        <div className="flex space-x-4">
          
          {/* Product Category Dropdown */}
          <div className="flex flex-col flex-1 space-y-1">
            <label className="text-gray-800 font-semibold" htmlFor="category">Product Category</label>
            <select
              id="category"
              name="category"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition duration-200 ease-in-out"
            >
              <option value="Salas">Salas</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure veg">Pure veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          {/* Product Price Input */}
          <div className="flex flex-col flex-1 space-y-1">
            <label className="text-gray-800 font-semibold" htmlFor="price">Product Price</label>
            <input
              id="price"
              type="number"
              name="price"
              placeholder="$20"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition duration-200 ease-in-out"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};
