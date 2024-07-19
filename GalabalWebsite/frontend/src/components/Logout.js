import React, {useState} from "react";
import { useAuth } from "../hooks/AuthContext";
import { useNavigate } from "react-router-dom";

function Logout({show, onClose}){
  const [selectedOption, setSelectedOption] = useState("")
  const { loggedIn, logout} = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (loggedIn && selectedOption === "Y") {
      logout();
      console.log("Logged out");
      onClose();
      setSelectedOption("");
      navigate('/')
    } else {
      onClose()
      setSelectedOption("")
      console.log("Not logged out")
    }
  };

  if (!show) {
    return null;
  }

  return (
    <>
      {show && (
        // Modal overlay: covers the entire viewport with a semi-transparent background
        // onClick on the overlay calls onClose to close the modal when the overlay is clicked
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50" onClick={onClose}>
          {/* Modal content container: centered within the overlay */}
          {/* Stop propagation to prevent the modal from closing when clicking inside the content */}
          <div className="h-2/6 w-5/12 bg-white p-6 rounded-lg shadow-lg relative" onClick={(e) => e.stopPropagation()}>
            {/* Close button: positioned in the top-right corner of the modal content */}
            {/* Calls onClose when clicked to close the modal */}
            <button className="absolute top-0 right-0 m-2 text-gray-600 hover:text-gray-800" onClick={onClose}>
              &times;
            </button>
            {/* Render the children elements (e.g., Login component) inside the modal */}
            <div className="p-4 text-center">
              <h2 className="text-2xl mb-4">Are you sure?</h2>
                <div className="mb-4">
                    <select 
                      class="w-2/3 p-3 bg-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-gray-300 text-center"
                      value={selectedOption}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      >
                        <option></option>
                        <option value="Y">Yes</option>
                        <option value="N">No</option>
                    </select>
                </div>
                <div className="flex justify-center mt-4">
                  <p
                    onClick={handleLogout}
                    className="h-1/6 w-1/4 bg-red-500 text-white px-4 py-2 m-1 rounded hover:bg-red-700 hover:cursor-pointer"
                  >
                    Logout
                  </p>
                  
                </div>
            </div>
          </div>
        </div>
      )}
    </>
)}

export default Logout;