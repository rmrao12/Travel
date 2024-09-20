import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import destinationsData from "./destinationData"; // Import destinations data
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from react-icons
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
  const dropdownRef = useRef(null);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const filteredResults = destinationsData.filter((destination) =>
        destination.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredResults);
      onSearch(filteredResults);
      setDropdownVisible(true);
    } else {
      setSearchResults([]);
      onSearch([]);
      setDropdownVisible(false);
    }
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    handleSearch();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black py-10 px-4">
      <div className="flex">
      <div className="max-w-screen-xl flex flex-col sm:gap-5 md:flex-row items-center justify-between mx-auto">
        {/* Logo Section */}

        <div className="text-white pr-6">
          <Link to="/" className="text-2xl font-bold">
            TRAVEL MASTER
          </Link>
        </div>

        {/* Navigation Buttons */}
        <div className="flex-1 hidden lg:flex items-center justify-center">
          <ul className="flex space-x-6 text-white">
          
            <li>
              <Link to="/destinations" className="hover:underline px-3">
                Destinations
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:underline px-3">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:underline px-3">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/feedback" className="hover:underline px-3">
                Feedback
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:underline">Login</Link>
            </li>
          </ul>
        </div>

        {/* Search Section */}
        <div
          className="relative flex items-center px-6 space-x-2"
          ref={dropdownRef}
        >
          <input
            className="p-2 bg-black text-white border-b"
            type="text"
            placeholder="Search entire store here..."
            value={searchQuery}
            onChange={handleChange}
            onFocus={() => setDropdownVisible(true)}
            aria-label="Search"
          />
          <button
            className="bg-[#EC3642] text-white p-2 rounded-2xl text-sm"
            onClick={handleSearch}
            aria-label="Search Button"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
          {/* Display search results */}
          {dropdownVisible && searchResults.length > 0 && (
            <div className="absolute top-full left-0 w-full mt-2 bg-white text-black rounded-md shadow-lg">
              <ul>
                {searchResults.map((result) => (
                  <li
                    key={result.id}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {result.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        </div>
        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center ">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}{" "}
            {/* Toggle between hamburger and close icons */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute md:top-28 right-2 w-52 bg-black h-auto s sm:top-48 rounded-lg shadow-lg z-50 lg:hidden">
          <ul className="flex flex-col p-4 space-y-4 text-white">
            <li>
              <Link
                to="/destinations"
                className="hover:underline"
                onClick={toggleMenu}
              >
                Destinations
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="hover:underline"
                onClick={toggleMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="hover:underline"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/feedback"
                className="hover:underline"
                onClick={toggleMenu}
              >
                Feedback
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:underline">Login</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
