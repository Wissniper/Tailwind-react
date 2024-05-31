import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

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
              <HashLink
                smooth to="/#welcome"
                class="text-white hover:text-red-600"
              >
                Welcome
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#info"
                class="text-white hover:text-red-600"
              >
                Info
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#100dagen"
                class="text-white hover:text-red-600"
              >
                100 Dagen
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#locatie"
                class="text-white hover:text-red-600"
              >
                Locatie
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#inschrijving"
                class="text-white hover:text-red-600"
              >
                Inschrijving
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
