import React from 'react';
import { useState } from 'react';
import DestinationDetail from './DestinationDetails';


const DestinationCard=({ destination })=> {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold">{destination.name}</h2>
      <p className="text-gray-700">Starting Price: {destination.price}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Hide Details' : 'View Details'}
      </button>

      {showDetails && <DestinationDetail destination={destination} />}
    </div>
  );
}

export default DestinationCard;
