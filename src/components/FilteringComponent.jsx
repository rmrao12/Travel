import React from 'react';

const FilteringComponent = ({ filters, onFilterChange }) => {
  return (
    <div className="my-4">
      <label htmlFor="minPrice">Filter by Price:</label>
      <input
        type="number"
        id="minPrice"
        name="minPrice"
        value={filters.minPrice}
        onChange={onFilterChange}
        placeholder="Min Price"
      />
      <input
        type="number"
        id="maxPrice"
        name="maxPrice"
        value={filters.maxPrice}
        onChange={onFilterChange}
        placeholder="Max Price"
      />
    </div>
  );
};

export default FilteringComponent;
