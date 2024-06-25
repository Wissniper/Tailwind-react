import React, {useState} from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Login from "./Login";
import ModalLogin from "./ModalLogin";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = () => {
    setShowLogin(true);
  };

  const handleClose = () => {
    setShowLogin(false);
  }

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
            <li>
            <p 
              onClick={handleLogin}
              class="text-white hover:text-red-600 hover:cursor-pointer"
              >Login</p>
            </li>
          </ul>
        </nav>
      </div>
      {/* Show the modal with the Login component inside */}
      <ModalLogin show={showLogin} onClose={handleClose}>
        <Login /> {/*child component*/}
      </ModalLogin>
    </header>
  );
}
export default Navbar;
