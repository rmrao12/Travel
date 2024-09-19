// src/data/destinationsData.js

const destinationsData = [
    {
      id: 1,
      name: 'Bali, Indonesia',
      price: '$1000',
      activities: ['Surfing', 'Temple Tours', 'Snorkeling'],
      attractions: ['Uluwatu Temple', 'Tegallalang Rice Terraces', 'Seminyak Beach'],
      images: ['/Images/Bali1.jpg', '/Images/Bali2.jpg','/Images/Bali3.jpg'],
      accommodations: [
        { name: 'Bali Resort', type: 'Resort', rating: 4.5, amenities: ['Pool', 'Spa'] },
        { name: 'Bali Hostel', type: 'Hostel', rating: 4.0, amenities: ['Wi-Fi', 'Shared Kitchen'] },
      ],
      transportOptions: {
        airport: 'Ngurah Rai International Airport',
        trainStation: null,
        busStation: 'Kuta Bus Terminal',
        carRental: 'Available',
      },
      video: 'https://example.com/bali-video',
      discount: '10% discount if booked 1 month in advance',
    },
    {
      id: 2,
      name: 'Paris, France',
      price: '$1500',
      activities: ['Eiffel Tower Tour', 'Louvre Museum', 'Seine River Cruise'],
      attractions: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame'],
      images: ['/Images/Paris1.jpg', '/Images/Paris2.jpg','/Images/Paris3.jpg'],
      accommodations: [
        { name: 'Paris Hotel', type: 'Hotel', rating: 5, amenities: ['Breakfast', 'City View'] },
        { name: 'Paris Hostel', type: 'Hostel', rating: 4.3, amenities: ['Wi-Fi', 'Shared Kitchen'] },
      ],
      transportOptions: {
        airport: 'Charles de Gaulle Airport',
        trainStation: 'Gare du Nord',
        busStation: 'Paris Bus Terminal',
        carRental: 'Available',
      },
      video: 'https://example.com/paris-video',
      discount: '15% discount if booked 2 months in advance',
    },
    {
        id: 3,
        name: 'London, UK',
        price: '$1500',
        activities: ['Eiffel Tower Tour', 'Louvre Museum', 'Seine River Cruise'],
        attractions: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame'],
        images: ['/Images/Paris1.jpg', '/Images/Paris2.jpg','/Images/Paris3.jpg'],
        accommodations: [
          { name: 'Paris Hotel', type: 'Hotel', rating: 5, amenities: ['Breakfast', 'City View'] },
          { name: 'Paris Hostel', type: 'Hostel', rating: 4.3, amenities: ['Wi-Fi', 'Shared Kitchen'] },
        ],
        transportOptions: {
          airport: 'Charles de Gaulle Airport',
          trainStation: 'Gare du Nord',
          busStation: 'Paris Bus Terminal',
          carRental: 'Available',
        },
        video: 'https://example.com/paris-video',
        discount: '15% discount if booked 2 months in advance',
      },
      {
        id: 4,
        name: 'Barcelona, Spain',
        price: '$4500',
        activities: ['Eiffel Tower Tour', 'Louvre Museum', 'Seine River Cruise'],
        attractions: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame'],
        images: ['/Images/Paris1.jpg', '/Images/Paris2.jpg','/Images/Paris3.jpg'],
        accommodations: [
          { name: 'Paris Hotel', type: 'Hotel', rating: 5, amenities: ['Breakfast', 'City View'] },
          { name: 'Paris Hostel', type: 'Hostel', rating: 4.3, amenities: ['Wi-Fi', 'Shared Kitchen'] },
        ],
        transportOptions: {
          airport: 'Charles de Gaulle Airport',
          trainStation: 'Gare du Nord',
          busStation: 'Paris Bus Terminal',
          carRental: 'Available',
        },
        video: 'https://example.com/paris-video',
        discount: '15% discount if booked 2 months in advance',
      },
  ];
  
  export default destinationsData;
  