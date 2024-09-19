import React from 'react';

const SortingComponent = ({ sortOption, onSortChange }) => {
    return (
      <div className="mb-4">
        <label htmlFor="sort" className="mr-2">Sort by:</label>
        <select id="sort" value={sortOption} onChange={onSortChange} className="p-2 border rounded">
          <option value="default">Default</option>
          <option value="price">Price</option>
          <option value="popularity">Popularity</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
        <p className="text-sm text-gray-500">Price filter applies only when sorting by price.</p>
      </div>
    );
  };
  
  export default SortingComponent;