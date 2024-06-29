import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Login from "./Login";
import ModalLogin from "./ModalLogin";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);

  const handleLogin = () => {
    setShowLogin(true);
  };

  const handleClose = () => {
    setShowLogin(false);
  };

  const handleMouseMove = (e) => {
    if (e.clientY < 50) {
      setNavbarVisible(true);
    } else {
      setNavbarVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <header
      className={`bg-black shadow-2xl fixed w-full transition-transform duration-300 ${
        navbarVisible
          ? "transform translate-y-0"
          : "transform -translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-6">
        <Link
          to="/"
          className="text-4xl font-bold text-white hover:text-red-500 cursor-pointer"
        >
          Het Galabal
        </Link>
        <nav>
          <ul className="flex space-x-5">
            <li>
              <HashLink
                smooth
                to="/#welcome"
                className="text-white hover:text-red-600"
              >
                Welcome
              </HashLink>
            </li>
            <li>
              <HashLink to="/#info" className="text-white hover:text-red-600">
                Info
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#100dagen"
                className="text-white hover:text-red-600"
              >
                100 Dagen
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#locatie"
                className="text-white hover:text-red-600"
              >
                Locatie
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#inschrijving"
                className="text-white hover:text-red-600"
              >
                Inschrijving
              </HashLink>
            </li>
            <li>
              <p
                onClick={handleLogin}
                className="text-white hover:text-red-600 hover:cursor-pointer"
              >
                Login
              </p>
            </li>
          </ul>
        </nav>
      </div>
      <ModalLogin show={showLogin} onClose={handleClose}>
        <Login /> {/* child component */}
      </ModalLogin>
    </header>
  );
}

export default Navbar;
