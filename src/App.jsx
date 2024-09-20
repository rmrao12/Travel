import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Reviews from './components/Reviews';
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import LoginSignup from "./components/LoginSignup";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <Router>
        <Navbar onSearch={setSearchResults} />
       
        <div className="container mx-auto p-6">
        <Routes>

          {/* Default route to display Destinations when the site loads */}
          <Route path="/login" element={<LoginSignup />} />
          <Route
            path="/"
            element={<Destinations searchResults={searchResults} />}
          />
          <Route
            path="/destinations"
            element={<Destinations searchResults={searchResults} />}
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/feedback" element={<Reviews />} />
          
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
