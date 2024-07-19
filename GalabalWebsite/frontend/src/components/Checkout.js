import React, { useState } from "react";
import creditCard from "../assets/Payment/creditcard.jpg"
import paypall from "../assets/Payment/Paypal.png"
import bancontact from "../assets/Payment/bancontact.jpg"

function Checkout({ show, onClose }) {
  const [Bc, setbancontact] = useState(false)
  const [Pp, setpaypall] = useState(false)
  const [Cc, setcreditcard] = useState(false)
  const [confirm, setConfirm] = useState(false)

  const handleBc = () => {
    setbancontact(true)
    setpaypall(false)
    setcreditcard(false)
  }

  const handlePp = () => {
    setbancontact(false)
    setpaypall(true)
    setcreditcard(false)
  }

  const handleCc = () => {
    setbancontact(false)
    setpaypall(false)
    setcreditcard(true)
  }

  const handleConfirm = () => {
    setConfirm(true)
  }
   
  if (!show) {
    return null;
    }
  return (
    <body>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50" onClick={onClose}>
        {/* Modal content container: centered within the overlay */}
        {/* Stop propagation to prevent the modal from closing when clicking inside the content */}
        <div className="max-h-3/6 w-5/12 bg-white p-6 rounded-lg shadow-lg relative" onClick={(e) => e.stopPropagation()}>
          {/* Close button: positioned in the top-right corner of the modal content */}
          {/* Calls onClose when clicked to close the modal */}
          <button className="absolute top-0 right-0 m-2 text-gray-600 hover:text-gray-800" onClick={onClose}>
            &times;
          </button>
          {/* Render the children elements (e.g., Login component) inside the modal */}
          <form action="#" id="payment">
            <div class="p-4 text-center">
                <h2 class="text-2xl mb-4">Payment Options</h2>
                <div class="flex justify-center">
                <div class="mr-4">
                    <input type="radio" name="payment" id="bancontact" class="m-2" onClick={handleBc}/>
                    <label for="bancontact">
                    <img src={bancontact} alt="Bancontact" />
                    </label>
                </div>
                <div class="mr-4">
                    <input type="radio" name="payment" id="paypal" class="m-2" onClick={handlePp} />
                    <label for="paypal">
                    <img src={paypall} alt="Paypal" />
                    </label>
                </div>
                <div class="mr-4">
                    <input type="radio" name="payment" id="creditcard" class="m-2" onClick={handleCc} />
                    <label for="creditcard">
                    <img src={creditCard} alt="Credit Card" />
                    </label>
                </div>
                </div>
                <button class="bg-gray-700 text-white px-4 py-3 w-1/4 rounded hover:bg-red-500">Continue</button>
                {/*redirection in backend */}
            </div>
            </form>
        </div>
      </div>
    </body>
  );
}

export default Checkout;