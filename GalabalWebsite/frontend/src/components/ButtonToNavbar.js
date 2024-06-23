import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import imgNavButton from "../assets/navButton.jpg";

function NavButton() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div>
      <button
        onClick={toggleSidebar}
        className="fixed bottom-4 right-4 bg-transparent border-none cursor-pointer z-50"
      >
        <img
          src={imgNavButton}
          alt="Nav Button"
          className="h-12 w-12 opacity-60 hover:opacity-90"
        />
      </button>

      <nav
        onClick={toggleSidebar}
        className={`fixed top-0 right-0 h-full w-64 bg-black transition-transform transform ${
          sidebarVisible ? "translate-x-0" : "translate-x-full"
        } z-40`}
        //Sidebar Transition: The sidebar uses translate-x-full to be off-screen initially and translate-x-0 to slide in when sidebarVisible is true.//
      >
        <ul className="mt-16 space-y-4">
          <li>
            <HashLink
              smooth
              to="/#welcome"
              className="block px-4 py-2 text-white hover:bg-red-600"
            >
              Home
            </HashLink>
          </li>
          <li>
            <Link
              smooth
              to="/pictures"
              className="block px-4 py-2 text-white hover:bg-red-600"
            >
              Graduates of the class of 2024
            </Link>
          </li>
          <li>
            <Link
              to="/tickets"
              className="block px-4 py-2 text-white hover:bg-red-600"
            >
              Tickets
            </Link>
          </li>
          <li>
            <Link
              to="/dresscode"
              className="block px-4 py-2 text-white hover:bg-red-600"
            >
              Dress Code
            </Link>
          </li>
          <li>
            <Link
              to="/schedule"
              className="block px-4 py-2 text-white hover:bg-red-600"
            >
              Schedule
            </Link>
          </li>
          <li>
            <Link
              to="/pictures/100dagen"
              className="block px-4 py-2 text-white hover:bg-red-600"
            >
              Marginale 100 dagen
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavButton;
