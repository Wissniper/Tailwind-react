import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header class="bg-black shadow-2xl">
      <div class="container mx-auto flex justify-between items-center p-6">
        <Link
          to="/"
          class="text-4xl font-bold text-white hover:text-red-500 cursor-pointer"
        >
          Het Galabal
        </Link>
        <nav>
          <ul class="flex space-x-5">
            <li>
              <a href="/#welcome" class="text-white hover:text-red-600">
                Welcome
              </a>
            </li>
            <li>
              <a href="/#info" class="text-white hover:text-red-600">
                Info
              </a>
            </li>
            <li>
              <a href="/#100dagen" class="text-white hover:text-red-600">
                100 Dagen
              </a>
            </li>
            <li>
              <a href="/#locatie" class="text-white hover:text-red-600">
                Locatie
              </a>
            </li>
            <li>
              <a href="/#inschrijving" class="text-white hover:text-red-600">
                inschrijving
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
