// src/components/Destinations.jsx

import React, { useState } from 'react';
import DestinationCard from './DestinationCard';
import SortingComponent from './SortingComponent';
import FilteringComponent from './FilteringComponent';
import destinationsData from './destinationData';

const Destinations = () => {
    const [sortOption, setSortOption] = useState('default');
    const [filters, setFilters] = useState({
      minPrice: 0,
      maxPrice: 2000,
    });
  
    const handleSortChange = (e) => {
      setSortOption(e.target.value);
    };
  
    const handleFilterChange = (e) => {
      setFilters(prev => ({
        ...prev,
        [e.target.name]: e.target.value
      }));
    };
  
    const sortDestinations = (destinations) => {
      switch (sortOption) {
        case 'price':
          return destinations.slice().sort((a, b) => {
            const priceA = parseFloat(a.price.replace('$', ''));
            const priceB = parseFloat(b.price.replace('$', ''));
            return priceA - priceB;
          });
        case 'popularity':
          // Example popularity sorting (if you have popularity data)
          return destinations.slice().sort((a, b) => b.popularity - a.popularity);
        case 'alphabetical':
          return destinations.slice().sort((a, b) => a.name.localeCompare(b.name));
        default:
          return destinations;
      }
    };
  
    const filterDestinations = (destinations) => {
      if (sortOption === 'price') {
        return destinations.filter(destination => {
          const price = parseFloat(destination.price.replace('$', ''));
          return price >= filters.minPrice && price <= filters.maxPrice;
        });
      }
      return destinations;
    };
  
    const sortedDestinations = sortDestinations(destinationsData);
    const filteredDestinations = filterDestinations(sortedDestinations);
  
    return (
      <div>
        <SortingComponent sortOption={sortOption} onSortChange={handleSortChange} />
        <FilteringComponent filters={filters} onFilterChange={handleFilterChange} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    );
  };
  


export default Destinations;
