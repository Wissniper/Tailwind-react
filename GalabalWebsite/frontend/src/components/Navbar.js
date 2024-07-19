import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../hooks/AuthContext";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [mouseNearTop, setmouseNearTop] = useState(false);
  const [atTop, setAtTop] = useState(false);
  const {loggedIn} = useAuth();

  const handleLogin = () => {
    setShowLogin(true);
  }

  const handleLogout = () => {
    setShowLogout(true);
  }

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleCloseLogout = () => {
    setShowLogout(false);
  };

  const handleMouseMove = (e) => {
    if (e.clientY < 50) {
      setmouseNearTop(true);
    } else {
      setmouseNearTop(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY === 0);
    };

    const handleMouse = (e) => {
      handleMouseMove(e);
    };

    document.addEventListener("scroll", handleScroll);
    document.addEventListener("mousemove", handleMouse);

    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <header>
      <div 
      className={`bg-black shadow-2xl fixed w-full transition-transform duration-1000 ${
        atTop || mouseNearTop ? "transform translate-y-0" : "transform -translate-y-full"
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
              {!loggedIn &&(
                <li>
                  <p
                    onClick={handleLogin}
                    className="text-white hover:text-red-600 hover:cursor-pointer"
                  >
                    Login
                  </p>
                </li>
              )}
              {loggedIn &&(
                <li>
                  <p
                    className="text-white hover:text-red-600 hover:cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </p>
                </li>
              )}
              {loggedIn &&(
                <li>
                  <Link
                    to="/Account"
                    className="text-white hover:text-red-500 cursor-pointer"
                  >
                    Account
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>  
      <Login show={showLogin} onClose={handleCloseLogin}></Login> 
      <Logout show={showLogout} onClose={handleCloseLogout}></Logout>
    </header>
    
  );
}

export default Navbar;
