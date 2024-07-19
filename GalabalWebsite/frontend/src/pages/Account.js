import React, { useState } from "react";
import { useAcc } from "../hooks/AccContext";

function AccountPage() {
  const { user } = useAcc();

  const [tickets, setTickets] = useState([
    {
      type: "Standard Ticket",
      quantity: 2,
      price: 60.0,
    },
    {
      type: "VIP Ticket",
      quantity: 1,
      price: 50.0,
    },
  ]);

  if (!user) {
    return (
    <div className="absolute h-11/12 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <p className="text-center text-5xl font-bold">Loading...</p>
    </div> // Handle initial loading state if needed
  )}

  return (
    <div class="bg-white overflow-x-hidden overflow-y-hidden">
        <div class="py-20">
      <section id="account" class="py-10 bg-gray-300 mt-10">
        <div class="container mx-auto text-center">
          <h3 class="text-3xl font-bold text-black mb-8">Account Information</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="col-span-1">
              <label class="block text-gray-700">First Name:</label>
              <p class="text-lg text-black">{user.firstName}</p>
            </div>
            <div class="col-span-1">
              <label class="block text-gray-700">Last Name:</label>
              <p class="text-lg text-black">{user.lastName}</p>
            </div>
            <div class="col-span-1">
              <label class="block text-gray-700">Email:</label>
              <p class="text-lg text-black">{user.email}</p>
            </div>
            <div class="col-span-1">
              <label class="block text-gray-700">Phone Number:</label>
              <p class="text-lg text-black">{user.phoneNumber}</p>
            </div>
            <div class="col-span-1">
              <label class="block text-gray-700">Username:</label>
              <p class="text-lg text-black">{user.username}</p>
            </div>
            <div class="col-span-1">
              <label class="block text-gray-700">Date of Birth:</label>
              <p class="text-lg text-black">{user.dateOfBirth}</p>
            </div>
            <div class="col-span-1">
              <label class="block text-gray-700">
                Bent u een leerling van Sint-Maarten?
              </label>
              <p class="text-lg text-black">{user.isStudent ? "Ja" : "Nee"}</p>
            </div>
            <div class="col-span-1">
              <label class="block text-gray-700">
                Welke riching volgt u?
              </label>
              <p class="text-lg text-black">{user.riching}</p>
            </div>
          </div>
        </div>
      </section>
      </div>

      <section id="tickets" class="py-10 bg-gray-300 mt-10">
        <div class="container mx-auto text-center pb-4">
          <h3 class="text-3xl font-bold text-black mb-8">Bought Tickets</h3>
          <ul class="list-none mb-8">
            {tickets.map((ticket, index) => (
              <li key={index} class="flex justify-between mb-4">
                <span class="text-lg text-black">{ticket.type} x {ticket.quantity}</span>
                <span class="text-lg text-black">€{ticket.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default AccountPage;
