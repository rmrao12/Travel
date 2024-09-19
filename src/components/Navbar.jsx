import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import destinationsData from "./destinationData";// Import destinations data
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const filteredResults = destinationsData.filter(destination =>
        destination.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredResults);
      onSearch(filteredResults);
      setDropdownVisible(true); // Show dropdown when search is performed
    } else {
      setSearchResults([]);
      onSearch([]);
      setDropdownVisible(false); // Hide dropdown if no query
    }
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    handleSearch(); // Perform search while typing
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black py-10 px-20">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-white">
          <Link to="/" className="text-2xl font-bold">
            TRAVEL MASTER
          </Link>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex-1 flex justify-center">
          <ul className="flex space-x-6 text-white">
            <li>
              <Link to="/destinations" className="hover:underline">DESTINATIONS</Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:underline">ABOUT US</Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:underline">CONTACT US</Link>
            </li>
          </ul>
        </div>
        
        {/* Search Section */}
        <div className="relative flex items-center space-x-2" ref={dropdownRef}>
          <input
            className="p-2 bg-black text-white border-b"
            type="text"
            placeholder="Search entire store here..."
            value={searchQuery}
            onChange={handleChange}
            onFocus={() => setDropdownVisible(true)} // Show dropdown on focus
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
                {searchResults.map(result => (
                  <li key={result.id} className="p-2 hover:bg-gray-200 cursor-pointer">
                    {result.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
