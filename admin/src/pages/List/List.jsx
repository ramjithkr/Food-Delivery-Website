import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const List = ({url}) => {

  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/v1/food/list`);

      if (response.data?.success) {
        setList(response.data.foods || []);
      } else {
        toast.error("Error fetching data");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error fetching data");
    }
  };

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/v1/food/remove`, { id: foodId });
      if (response.data?.success) {
        toast.success("Food removed successfully");
        await fetchList(); // Fetch the updated list after removal
      } else {
        toast.error("Error removing food");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error removing food");
    }
  };

  useEffect(() => {
    fetchList(); // Fetch the food list when the component mounts
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">All Food List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg shadow-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-4 border border-gray-300 text-left font-medium">Image</th>
              <th className="px-6 py-4 border border-gray-300 text-left font-medium">Name</th>
              <th className="px-6 py-4 border border-gray-300 text-left font-medium">Category</th>
              <th className="px-6 py-4 border border-gray-300 text-left font-medium">Price</th>
              <th className="px-6 py-4 border border-gray-300 text-left font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {list.length > 0 ? (
              list.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition duration-200">
                  <td className="border border-gray-300 px-4 py-2">
                    <img 
                      src={`${url}/api/v1/food/image/${item.image}`} 
                      alt={item.name} 
                      className="w-24 h-24 object-cover rounded-md shadow-sm" 
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700 font-semibold">{item.name}</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">{item.category}</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">${item.price}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button 
                      onClick={() => removeFood(item._id)} 
                      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center border border-gray-300 px-4 py-4 text-gray-500">
                  No items available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
