import React from "react";

function ModalLogin({children, show, onClose}) {
    if (!show) {
        return null;
    }
    
    return (
        // Modal overlay: covers the entire viewport with a semi-transparent background
        // onClick on the overlay calls onClose to close the modal when the overlay is clicked
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
          {/* Modal content container: centered within the overlay */}
          {/* Stop propagation to prevent the modal from closing when clicking inside the content */}
          <div className="bg-white p-6 rounded-lg shadow-lg relative" onClick={e => e.stopPropagation()}>
            {/* Close button: positioned in the top-right corner of the modal content */}
            {/* Calls onClose when clicked to close the modal */}
            <button className="absolute top-0 right-0 m-2 text-gray-600 hover:text-gray-800" onClick={onClose}>&times;</button>
            {/* Render the children elements (e.g., Login component) inside the modal */}
            {children}
          </div>
        </div>
      );
    }
    
export default ModalLogin;
