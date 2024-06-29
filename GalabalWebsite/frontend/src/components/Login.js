import React, { useState } from "react";
import Register from "./Register";

function Login({ show, onClose }) {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const handleRegister = () => {
    setShowRegister(true);
    setShowLogin(false); // Hide the login form
  };

  const handleClose = () => {
    setShowRegister(false);
    setShowLogin(true); // Ensure the login form shows again if register is closed
  };

  if (!show) {
    return null;
  }

  return (
    <>
      {showLogin && (
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
              <h2 className="text-2xl mb-4">Login</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700">Username:</label>
                  <input
                    type="text"
                    className="w-3/4 p-2 border border-gray-300 rounded mt-1"
                    name="usernameLogin"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Password:</label>
                  <input
                    type="password"
                    className="w-3/4 p-2 border border-gray-300 rounded mt-1"
                    name="passwordLogin"
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="h-1/6 w-1/4 bg-red-500 text-white px-4 py-2 m-1 rounded hover:bg-red-700"
                  >
                    Login
                  </button>
                  <p
                    onClick={handleRegister}
                    className="h-1/6 w-1/4 bg-red-500 text-white px-4 py-2 m-1 rounded hover:bg-red-700 cursor-pointer"
                  >
                    Register
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {showRegister && (
        // Render the Register component when showRegister is true
        <Register show={showRegister} onClose={handleClose} />
      )}
    </>
  );
}

export default Login;
