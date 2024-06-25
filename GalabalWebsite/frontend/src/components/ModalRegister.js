import React from "react";

function ModalRegister({children, show, onClose}) {
    if (!show) {
        return null;
    }
    
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
          <div className="h-4/6 w-7/12 bg-white p-6 rounded-lg shadow-lg relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-0 right-0 m-2 text-gray-600 hover:text-gray-800" onClick={onClose}>&times;</button>
            {children}
          </div>
        </div>
      );
    }
    
export default ModalRegister;
