import React from "react";
import heroBg from "../assets/2024.jpg";
import Bg100dagen from "../assets/Bg100dagen.jpg";
import InfoTicket from "../assets/InfoTicket.jpg";
import InfoSchedule from "../assets/InfoSchedule.jpg";
import MapComponent from "../components/MapComponent";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <body class="bg-white overflow-x-hidden overflow-y-hidden">
      <section
        id="welcome"
        class="flex items-center justify-center min-h-screen bg-cover bg-center m-12 mt-24"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div class="text-center p-6 bg-white bg-opacity-75 rounded-lg">
          <h2 class="text-red-600 mb-8 font-bold text-4xl">
            Welcome To The Galabal of Sint-Maarten
          </h2>
          <p class="text-black mb-8">Discover some amazing pictures.</p>
          <Link
            to="/pictures"
            class="bg-gray-700 text-white px-4 py-3 rounded hover:bg-red-500"
          >
            Check out the pictures
          </Link>
        </div>
      </section>

      <section id="info" class="py-16 bg-white m-auto">
        <div class="container mx-auto text-center justify-center p-20 h-screen">
          <div class="flex flex-col items-center justify-center">
            <h3 class="text-3xl font-bold text-gray-700 mb-8">
              Your information
            </h3>
            <h4 class="text-xl font-semibold text-gray-600 mb-8 text-wrap text-justify w-3/4">
              All the needed information is to be located in one of the three
              categories. The categorie named 'Tickets' contains all the
              informations about the pricing, etc. The categorie named 'Dress
              Code' contains all the information about how you should dress, so
              you can come in confidence and shine. The categorie named
              'Schedule' contains all the information about how the Galabal will
              be proceding on the day of. So it would be wise to regularly check
              this, so you can avoid any inconveniences.
            </h4>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              class="p-6 bg-gray-100 rounded-lg shadow h-96"
              style={{ backgroundImage: `url(${InfoTicket})` }}
            >
              <div class="bg-black bg-opacity-30 rounded-lg">
                <h4 class="text-xl font-semibold text-white mb-4">Tickets</h4>
                <p class="text-white mb-4">
                  Click below to find all the ticket information
                </p>
              </div>
              <Link
                to="/Tickets"
                class="bg-gray-800 text-white px-4 py-3 rounded hover:bg-red-500"
              >
                Find out more
              </Link>
            </div>
            <div
              class="p-6 bg-gray-100 rounded-lg shadow h-96"
              style={{ backgroundImage: `url(${InfoSchedule})` }}
            >
              <div class="bg-black bg-opacity-30 rounded-lg">
                <h4 class="text-xl font-semibold text-white mb-4">Schedule</h4>
                <p class="text-white mb-4">
                  Click below to view the Galabal schedule.
                </p>
              </div>
              <Link
                to="/Schedule"
                class="bg-gray-800 text-white px-4 py-3 rounded hover:bg-red-500"
              >
                Find out more
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="100dagen"
        class="flex items-center justify-center min-h-screen bg-cover bg-center py-20 m-12"
        style={{ backgroundImage: `url(${Bg100dagen})` }}
      >
        <div class="text-center p-6 bg-white bg-opacity-75 rounded-lg">
          <h2 class="text-red-600 mb-8 font-bold text-4xl">
            Welcome To The Marginale 100 dagen of Sint-Maarten
          </h2>
          <p class="text-black mb-8">Discover some freaky pictures.</p>
          <Link
            to="/pictures/100dagen"
            class="bg-gray-700 text-white px-4 py-3 rounded hover:bg-gray-900"
          >
            Check out the pictures
          </Link>
        </div>
      </section>

      <section id="locatie" class="">
        <MapComponent />
      </section>

      <section id="inschrijving" class="py-10 bg-gray-300 mt-10">
        <div class="container mx-auto text-center">
          <h3 class="text-3xl font-bold text-white mb-8">inschrijving</h3>
          <form class="max-w-xl mx-auto">
            <div class="mb-4">
              <input
                type="text"
                placeholder="Voornaam"
                class="w-full p-3 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-gray-300"
              ></input>
            </div>
            <div class="mb-4">
              <input
                type="text"
                placeholder="Achternaam"
                class="w-full p-3 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-gray-300"
              ></input>
            </div>
            <div class="mb-4">
              <input
                type="text"
                placeholder="Klas"
                class="w-full p-3 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-gray-300"
              ></input>
            </div>
            <div class="mb-4">
              <input
                type="text"
                placeholder="Naam plus-one"
                class="w-full p-3 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-gray-300"
              ></input>
            </div>
            <div class="mb-4">
              <p class="text-xl font-bold text-white mb-2">
                Zit je plus-one op Sint-Maarten?
              </p>
              <select class="w-full p-3 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-gray-300">
                <option></option>
                <option value="Ja">Ja</option>
                <option value="Nee">Nee</option>
              </select>
            </div>
            <div class="mb-4">
              <p class="text-xl font-bold text-white mb-2">
                Ga je naar het Diner (recht voor het Galabal)?
              </p>
              <select class="w-full p-3 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-gray-300">
                <option></option>
                <option value="Ja">Ja</option>
                <option value="Nee">Nee</option>
              </select>
            </div>
            <button
              type="submit"
              class="bg-gray-800 text-white px-4 py-2 rounded hover:bg-red-500"
            >
              Inschrijven
            </button>
          </form>
        </div>
      </section>
    </body>
  );
}

export default HomePage;
