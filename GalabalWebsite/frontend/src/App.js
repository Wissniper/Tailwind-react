import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Pictures100Dagen from "./pages/pictures100dagen";
import NotFound from "./components/NotFound";
import SmPictures from "./pages/smPictures";
import Footer from "./components/Footer";
import Ticket from "./pages/tickets";
import ButtonToNavbar from "./components/ButtonToNavbar"
import Schedule from "./pages/schedule";
import AccountInformation from "./components/AccountInformation";
import BancontactPage from "./pages/Bancontact";
import PaypallPage from "./pages/Paypall";
import CreditCardPage from "./pages/CreditCard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="" element={<HomePage/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/pictures/100dagen" element={<Pictures100Dagen/>}/>
        <Route path="*" element={<NotFound />} />
        <Route path="/pictures" element={<SmPictures/>}/>
        <Route path="/tickets" element={<Ticket/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="/AccountInformation" element={<AccountInformation/>}/>
        <Route path="/Bancontact" element={<BancontactPage/>}/>
        <Route path="/Creditcard" element={<CreditCardPage/>}/>
        <Route path="/Paypall" element={<PaypallPage/>}/>
      </Routes> 
      <ButtonToNavbar/>
      <Footer/>
    </Router>
  );
}

export default App;
