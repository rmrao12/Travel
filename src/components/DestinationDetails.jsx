import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faParachuteBox, faWater, faUmbrellaBeach, faLandmark, faTree, faMountain } from '@fortawesome/free-solid-svg-icons';
import Accommodation from './Accomodations';
import TransportOptions from './TransportOptions';

const DestinationDetail = ({ destination }) => {
  const getActivityIcon = (activity) => {
    switch (activity.toLowerCase()) {
      case 'paragliding':
        return <FontAwesomeIcon icon={faParachuteBox} className="mr-2 text-blue-600" />;
      case 'jet skiing':
        return <FontAwesomeIcon icon={faWater} className="mr-2 text-teal-600" />;
      default:
        return <FontAwesomeIcon icon={faMountain} className="mr-2 text-gray-600" />;
    }
  };

  const getAttractionIcon = (attraction) => {
    switch (attraction.toLowerCase()) {
      case 'beach':
        return <FontAwesomeIcon icon={faUmbrellaBeach} className="mr-2 text-yellow-500" />;
      case 'museum':
        return <FontAwesomeIcon icon={faLandmark} className="mr-2 text-red-600" />;
      case 'park':
        return <FontAwesomeIcon icon={faTree} className="mr-2 text-green-600" />;
      default:
        return <FontAwesomeIcon icon={faLandmark} className="mr-2 text-gray-600" />;
    }
  };

  return (
    <div className="mt-6 text-center">
      <h3 className="text-xl font-semibold mb-2">Activities</h3>
      <ul className="list-none space-y-2">
        {destination.activities.map((activity, index) => (
          <li key={index} className="flex items-center justify-center">
            {getActivityIcon(activity)}
            <span>{activity}</span>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">Popular Attractions</h3>
      <ul className="list-none space-y-2">
        {destination.attractions.map((attraction, index) => (
          <li key={index} className="flex items-center justify-center">
            {getAttractionIcon(attraction)}
            <span>{attraction}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
  {destination.images.map((image, index) => (
    <img
      key={index}
      src={image}
      alt={`${destination.name} Image`}
      className="w-full h-40 object-cover"
    />
  ))}
</div>
      </div>

      <div className="mt-6">
        <Accommodation accommodations={destination.accommodations} />
      </div>
      
      <div className="mt-6">
        <TransportOptions transportOptions={destination.transportOptions} />
      </div>
    </div>
  );
};

export default DestinationDetail;
