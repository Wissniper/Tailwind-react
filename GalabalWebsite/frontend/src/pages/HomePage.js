import React, {useState} from "react";
import heroBg from "../assets/2024.jpg";
import Bg100dagen from "../assets/Bg100dagen.jpg";
import InfoTicket from "../assets/InfoTicket.jpg";
import InfoSchedule from "../assets/InfoSchedule.jpg";
import MapComponent from "../components/MapComponent";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function HomePage() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    voornaam: '',
    achternaam: '',
    klas: '',
    plusOneNaam: '',
    plusOneOpSintMaarten: '',
    naarDiner: '',
    email: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  //Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/inschrijving', formData);
      console.log('Form submitted successfully:', response.data);
      setFormData({
        voornaam: '',
        achternaam: '',
        klas: '',
        plusOneNaam: '',
        plusOneOpSintMaarten: '',
        naarDiner: '',
        email: ''
      });
      alert('Form successfully submitted!');
    } catch (error) {
      console.error('Error submitting form:', error.response.data);
    }
  };


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
              A short introduction
            </h3>
            <h4 class="text-xl font-semibold text-gray-600 mb-8 text-wrap w-3/4 text-center">
              Join us for an unforgettable evening at the Annual Gala Ball, a night of elegance, entertainment, and enchantment. This prestigious event brings together community leaders, philanthropists, and guests from all walks of life to celebrate and support our cause.
              To find out more about the evening's schedule and to purchase your tickets, please visit the following pages:</h4>
            <h3 class="text-2xl font-semibold text-blue-600 mb-8 text-wrap w-3/4 text-center hover:underline hover:cursor-pointer" onClick={() => navigate('/Tickets')}>Tickets</h3>
            <h4 class="text-xl font-semibold text-gray-600 mb-8 text-wrap w-3/4 text-center">
              Secure your place at this prestigious event by purchasing your tickets now. Various ticket options are available, including individual seats, VIP tables, and sponsorship packages.
            </h4>
            <h3 class="text-2xl font-semibold text-blue-600 mb-8 text-wrap w-3/4 text-center hover:underline hover:cursor-pointer" onClick={() => navigate('/Schedule')}>Schedule</h3>
            <h4 class="text-xl font-semibold text-gray-600 mb-8 text-wrap w-3/4 text-center">
              Get all the details about the evening’s events, from the welcome reception to the closing remarks. Plan your night and make sure you don’t miss any of the highlights.
              Don’t miss out on this magical evening. Reserve your tickets today and be part of an event that makes a difference. We look forward to celebrating with you at the Annual Gala Ball.
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
          <form class="max-w-xl mx-auto" onSubmit={handleSubmit}>
            <div class="mb-4">
              <input
                type="text"
                name="voornaam"
                value={formData.voornaam}
                onChange={handleChange}
                placeholder="Voornaam"
                class="w-full p-3 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-gray-300"
              ></input>
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    name="achternaam"
                    value={formData.achternaam}
                    onChange={handleChange}
                    placeholder="Achternaam"
                    className="w-full p-3 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-gray-300"
                />
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    name="klas"
                    value={formData.klas}
                    onChange={handleChange}
                    placeholder="Klas"
                    className="w-full p-3 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-gray-300"
                />
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    name="plusOneNaam"
                    value={formData.plusOneNaam}
                    onChange={handleChange}
                    placeholder="Naam plus-one"
                    className="w-full p-3 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-gray-300"
                />
            </div>
            <div className="mb-4">
                <p className="text-xl font-bold text-white mb-2">
                    Zit je plus-one op Sint-Maarten?
                </p>
                <select
                    name="plusOneOpSintMaarten"
                    value={formData.plusOneOpSintMaarten}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-gray-300"
                >
                    <option value=""></option>
                    <option value="Ja">Ja</option>
                    <option value="Nee">Nee</option>
                </select>
            </div>
            <div className="mb-4">
                <p className="text-xl font-bold text-white mb-2">
                    Ga je naar het Diner (recht voor het Galabal)?
                </p>
                <select
                    name="naarDiner"
                    value={formData.naarDiner}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-gray-300"
                >
                    <option value=""></option>
                    <option value="Ja">Ja</option>
                    <option value="Nee">Nee</option>
                </select>
            </div>
            <div className="mb-4">
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@example.com"
                    className="w-full p-3 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-gray-300"
                />
            </div>
            <button
                type="submit"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-red-500"
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
