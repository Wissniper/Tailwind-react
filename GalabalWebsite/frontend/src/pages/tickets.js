import React, { useState } from "react";
import InfoTicket from "../assets/TicketBG.jpg"
import Checkout from "../components/Checkout"

function TicketPage() {
  const [cart, setCart] = useState([]);
  const [ticketType, setTicketType] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckout = () => {
    setShowCheckout(true);
  }

  const handleClose = () => {
    setShowCheckout(false);
  }

  const handleTicketTypeChange = (e) => {
    setTicketType(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = () => {
    const ticket = {
      type: ticketType,
      quantity: quantity,
      price: getPrice(ticketType) * quantity,
    };
    setCart([...cart, ticket]);
  };

  const getPrice = (type) => {
    switch (type) {
      case "standard":
        return 30.0;
      case "vip":
        return 50.0;
      case "group":
        return 200.0;
      default:
        return 0.0;
    }
  };

  const handleRemoveFromCart = (index) => {
    setCart(cart.filter((item, i) => i !== index));
  };

  return (
    <body class="bg-white overflow-x-hidden overflow-y-hidden">
      <section
        id="tickets"
        class="flex items-center justify-center min-h-screen bg-cover bg-center m-12 mt-24"
        style={{ backgroundImage: `url(${InfoTicket})` }}
      >
        <div class="text-center p-6 bg-white bg-opacity-75 rounded-lg">
          <h2 class="text-red-600 mb-8 font-bold text-4xl">
            Tickets for the Galabal of Sint-Maarten
          </h2>
          <p class="text-black mb-8">Get your tickets now!</p>
        </div>
        <div class="container mx-auto text-center justify-center p-20 h-screen">
          <div class="flex flex-col items-center justify-center">
            <h3 class="text-3xl font-bold text-gray-700 mb-8">
              Ticket Options
            </h3>
            <ul class="list-none mb-8">
              <li class="mb-4">
                <span class="text-xl font-bold text-gray-700">Standard Ticket</span>
                <span class="text-lg text-gray-600">€30.00</span>
              </li>
              <li class="mb-4">
                <span class="text-xl font-bold text-gray-700">VIP Ticket</span>
                <span class="text-lg text-gray-600">€50.00</span>
              </li>
              <li class="mb-4">
                <span class="text-xl font-bold text-gray-700">Group Ticket (5+)</span>
                <span class="text-lg text-gray-600">€200.00</span>
              </li>
            </ul>
            <form class="max-w-xl mx-auto">
              <div class="mb-4">
                <label for="ticket-type" class="text-xl font-bold text-gray-700">
                  Select Ticket Type
                </label>
                <select
                  id="ticket-type"
                  class="w-full p-3 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-gray-300"
                  value={ticketType}
                  onChange={handleTicketTypeChange}
                >
                <option>Nothing Selected</option>
                  <option value="standard">Standard Ticket</option>
                  <option value="vip">VIP Ticket</option>
                  <option value="group">Group Ticket (5+)</option>
                </select>
              </div>
              <div class="mb-4">
                <label for="quantity" class="text-xl font-bold text-gray-700">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  class="w-full p-3 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-gray-300"
                  value={quantity}
                  onChange={handleQuantityChange}
                />
              </div>
              <button
                type="button"
                class="bg-gray-800 text-white px-4 py-2 rounded hover:bg-red-500"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="cart" class="py-10 bg-gray-300 mt-10">
        <div class="container mx-auto text-center">
          <h3 class="text-3xl font-bold text-black mb-8">Cart</h3>
          <ul class="list-none mb-8">
            {cart.map((item, index) => (
                            <li key={index} class="flex justify-between mb-4">
                            <span class="text-lg text-black">{item.type} Ticket x {item.quantity}</span>
                            <span class="text-lg text-black">€{item.price.toFixed(2)}</span>
                            <button
                              type="button"
                              class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                              onClick={() => handleRemoveFromCart(index)}
                            >
                              Remove
                            </button>
                          </li>
                        ))}
                      </ul>
                      <p class="text-lg text-black mb-8">
                        Total: €{cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
                      </p>
                      <p class=" hover:cursor-pointer absolute left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 w-1/6 py-2 rounded hover:bg-red-500"
                      onClick={handleCheckout}>
                        Checkout
                      </p>
                    </div>
                    <Checkout show={showCheckout} onClose={handleClose}></Checkout>
                  </section>
                </body>
              );
            }
            
            export default TicketPage;