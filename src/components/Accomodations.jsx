import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faBuilding, faHome } from '@fortawesome/free-solid-svg-icons';

const Accommodation=({ accommodations })=> {
  const getIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'hotel':
        return <FontAwesomeIcon icon={faHotel} className="mr-2 text-blue-600" />;
      case 'resort':
        return <FontAwesomeIcon icon={faHome} className="mr-2 text-green-600" />;
      case 'hostel':
        return <FontAwesomeIcon icon={faBuilding} className="mr-2 text-yellow-600" />;
      default:
        return <FontAwesomeIcon icon={faBuilding} className="mr-2 text-gray-600" />;
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold">Accommodations</h3>
      <ul className="list-none space-y-2">
        {accommodations.map((accommodation, index) => (
          <li key={index} className="flex items-center">
            {getIcon(accommodation.type)}
            <span>
              {accommodation.name} - {accommodation.type} - {accommodation.rating} ⭐
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Accommodation;
