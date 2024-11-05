// import { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// export const List = () => {
//   const url = "http://localhost:4000";

//   const [list, setList] = useState([]);

//   const fetchList = async () => {
//     try {
//       const response = await axios.get(`${url}/api/v1/food/list`);
//       console.log(response.data);
//       if (response.data.success) {
//         setList(response.data.data);
//       } else {
//         toast.error("Error fetching data");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Error fetching data");
//     }
//   };

//   useEffect(() => {
//     fetchList();
//   }, []);

//   return (
//     <div>
//       <p>All Food List</p>
//       <div>
//         <div className="header-row">
//           <b>Image</b>
//           <b>Name</b>
//           <b>Category</b>
//           <b>Price</b>
//           <b>Action</b>
//         </div>
//         {list.map((item, index) => (
//           <div key={index} className="item-row">
//             <img src={`${url}/image/${item.image}`} alt={item.name} />
//             <p>{item.name}</p>
//             <p>{item.category}</p>
//             <p>${item.price}</p>
//             <p>X</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
//5:40
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const List = () => {
  const url = "http://localhost:4000";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/v1/food/list`);
      console.log(response.data);
      if (response.data?.success) {
        setList(response.data.data || []); // Ensure data is an array or set to empty
      } else {
        toast.error("Error fetching data");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error fetching data");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      <p>All Food List</p>
      <div>
        <div className="header-row">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list?.length > 0 ? (
          list.map((item, index) => (
            <div key={index} className="item-row">
              <img src={`${url}/image/${item.image}`} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p>X</p>
            </div>
          ))
        ) : (
          <p>No items available</p>
        )}
      </div>
    </div>
  );
};
