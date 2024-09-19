import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faTrain, faBus, faCar } from '@fortawesome/free-solid-svg-icons';

const TransportOptions=({ transportOptions })=> {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold">Transport Options</h3>
      <ul className="list-none space-y-2">
        <li className="flex items-center">
          <FontAwesomeIcon icon={faPlane} className="mr-2 text-blue-600" />
          <span>Nearest Airport: {transportOptions.airport}</span>
        </li>
        {transportOptions.trainStation && (
          <li className="flex items-center">
            <FontAwesomeIcon icon={faTrain} className="mr-2 text-red-600" />
            <span>Nearest Train Station: {transportOptions.trainStation}</span>
          </li>
        )}
        <li className="flex items-center">
          <FontAwesomeIcon icon={faBus} className="mr-2 text-yellow-600" />
          <span>Nearest Bus Station: {transportOptions.busStation}</span>
        </li>
        <li className="flex items-center">
          <FontAwesomeIcon icon={faCar} className="mr-2 text-green-600" />
          <span>Car Rental: {transportOptions.carRental}</span>
        </li>
      </ul>
    </div>
  );
}

export default TransportOptions;
