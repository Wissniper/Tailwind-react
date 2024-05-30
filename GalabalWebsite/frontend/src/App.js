import React from "react";
import heroBg from "./assets/heroBgCover.jpg";
import Bg100dagen from "./assets/Bg100dagen.jpg";
import InfoTicket from "./assets/InfoTicket.jpg";
import InfoDressCode from "./assets/InfoDressCode.jpg";
import InfoSchedule from "./assets/InfoSchedule.jpg";
import MapComponent from "./MapComponent";

function App() {
  return (
    <body class="bg-white overflow-y-auto">
      {/* Nav bar */}
      <header class="bg-black shadow-2xl">
        <div class="container mx-auto flex justify-between items-center p-6">
          <h1 class="text-4xl font-bold text-white hover:text-red-500 cursor-pointer">
            Het Galabal
          </h1>
          <nav>
            <ul class="flex space-x-5">
              <li>
                <a href="#home" class="text-white hover:text-red-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#info" class="text-white hover:text-red-600">
                  Info
                </a>
              </li>
              <li>
                <a href="#100dagen" class="text-white hover:text-red-600">
                  100 Dagen
                </a>
              </li>
              <li>
                <a href="#locatie" class="text-white hover:text-red-600">
                  Locatie
                </a>
              </li>
              <li>
                <a href="#inschrijving" class="text-white hover:text-red-600">
                  inschrijving
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section
        id="home"
        class="flex items-center justify-center min-h-screen bg-cover bg-center m-12"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div class="text-center p-6 bg-white bg-opacity-75 rounded-lg">
          <h2 class="text-red-600 mb-8 font-bold text-4xl">
            Welcome To The Galabal of Sint-Maarten
          </h2>
          <p class="text-black mb-8">Discover some amazing pictures.</p>
          <a
            href="#pictures"
            class="bg-gray-700 text-white px-4 py-3 rounded hover:bg-gray-900"
          >
            Check out the pictures
          </a>
        </div>
      </section>

      <section id="info" class="py-16 bg-white">
        <div class="container mx-auto text-center justify-center p-20">
          <h3 class="text-3xl font-bold text-gray-700 mb-8">
            Your information
          </h3>
          <h4 class="text-xl font-semibold text-gray-600 mb-8 text-wrap text-justify w-1/2">
            All the needed information is to be located in one of the three
            categories. The categorie named 'Tickets' contains all the
            informations about the pricing, etc. The categorie named 'Dress
            Code' contains all the information about how you should dress, so
            you can come in confidence and shine. The categorie named 'Schedule'
            contains all the information about how the Galabal will be proceding
            on the day of. So it would be wise to regularly check this, so you
            can avoid any inconveniences.
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              class="p-6 bg-gray-100 rounded-lg shadow h-96"
              style={{ backgroundImage: `url(${InfoTicket})` }}
            >
              <h4 class="text-xl font-semibold text-red-500 mb-4">Tickets</h4>
              <p class="text-gray-600 mb-4">
                Click below to find all the ticket information
              </p>
              <button
                type="submit"
                class="bg-gray-800 text-white px-4 py-3 rounded hover:bg-red-500"
              >
                Find out more
              </button>
            </div>
            <div
              class="p-6 bg-gray-100 rounded-lg shadow h-96"
              style={{ backgroundImage: `url(${InfoDressCode})` }}
            >
              <h4 class="text-xl font-semibold text-red-500 mb-4">
                Dress Code
              </h4>
              <p class="text-gray-600 mb-4">
                Click below to explore the dress code.
              </p>
              <button
                type="submit"
                class="bg-gray-800 text-white px-4 py-3 rounded hover:bg-red-500"
              >
                Find out more
              </button>
            </div>
            <div
              class="p-6 bg-gray-100 rounded-lg shadow h-96"
              style={{ backgroundImage: `url(${InfoSchedule})` }}
            >
              <h4 class="text-xl font-semibold text-red-500 mb-4">Schedule</h4>
              <p class="text-gray-600 mb-4">
                Click below to view the Galabal schedule.
              </p>
              <button
                type="submit"
                class="bg-gray-800 text-white px-4 py-3 rounded hover:bg-red-500"
              >
                Find out more
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="100dagen"
        class="flex items-center justify-center min-h-screen bg-cover bg-center m-12"
        style={{ backgroundImage: `url(${Bg100dagen})` }}
      >
        <div class="text-center p-6 bg-white bg-opacity-75 rounded-lg">
          <h2 class="text-red-600 mb-8 font-bold text-4xl">
            Welcome To The Marginale 100 dagen of Sint-Maarten
          </h2>
          <p class="text-black mb-8">Discover some freaky pictures.</p>
          <a
            href="#pictures"
            class="bg-gray-700 text-white px-4 py-3 rounded hover:bg-gray-900"
          >
            Check out the pictures
          </a>
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

      <footer class="bg-gray-300 text-black m-auto">
        <div class="container mx-auto text-center">
          <p>&copy; 2024 Website Galabal Sint-Maarten. All right reserved.</p>
        </div>
      </footer>
    </body>
  );
}

export default App;
