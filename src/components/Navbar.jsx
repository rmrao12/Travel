import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black py-10 px-20">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-white">
          TRAVEL MASTER
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex-1 flex justify-center">
          <ul className="flex space-x-6 text-white">
            <li>HOME</li>
            <li>SERVICES</li>
            <li>DESTINATIONS</li>
            <li>FAQs</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
          </ul>
        </div>
        
        {/* Search Section */}
        <div className="flex items-center space-x-2">
          <input
            className="p-2 bg-black text-white border-b"
            type="text"
            placeholder="Search entire store here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search"
          />
          <button
            className="bg-[#EC3642] text-white p-2 rounded-2xl text-sm"
            onClick={handleSearch}
            aria-label="Search Button"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
