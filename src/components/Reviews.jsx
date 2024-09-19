import React, { useState, useEffect } from "react";
import starFilled from '../Images/starFilled.png';
import starEmpty from '../Images/starNotFilled.png';
import destinationsData from "./destinationData";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: "",
    email: "",
    rating: 0,
    comment: "",
    destinationId: '',
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedDestination, setSelectedDestination] = useState('');

  useEffect(() => {
    // Load all reviews from local storage
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(storedReviews);

    // Log each review's destinationId
    storedReviews.forEach(review => {
      console.log("fgfg",review.destinationId);
    });
  }, []);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const { name, email, rating, comment, destinationId } = newReview;
    if (!name || !email || !rating || !comment || !destinationId) return;

    // Get existing reviews from local storage
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const newReviews = [...storedReviews, { name, email, rating, comment, destinationId }];
    
    // Save updated reviews to local storage
    localStorage.setItem("reviews", JSON.stringify(newReviews));
    
    // Update local state
    setReviews(newReviews);

    // Clear form and reset the selected destination
    setNewReview({ name: "", email: "", rating: 0, comment: "", destinationId: "" });
    setSelectedDestination(""); // Reset selection after submission
  };

  const handleStarClick = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  const handleDestinationChange = (e) => {
    setSelectedDestination(e.target.value);
    setNewReview({ ...newReview, destinationId: e.target.value });
  };

  const renderStars = (rating) => (
    <div className="flex mb-2">
      {Array.from({ length: 5 }, (_, i) => (
        <img
          key={i}
          src={i < rating ? starFilled : starEmpty}
          alt="star"
          className="w-6 h-6 cursor-pointer"
          onMouseEnter={() => setHoverRating(i + 1)}
          onMouseLeave={() => setHoverRating(0)}
          onClick={() => handleStarClick(i + 1)}
        />
      ))}
    </div>
  );

  const renderDestinationDropdown = () => (
    <div className="mb-4">
      <label htmlFor="destination" className="block font-semibold mb-1">Select Destination:</label>
      <select
        id="destination"
        value={selectedDestination}
        onChange={handleDestinationChange}
        className="w-full p-2 border rounded"
      >
        <option value="">Select a destination</option>
        {destinationsData.map((destination) => (
          <option key={destination.id} value={destination.id}>
            {destination.name}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row mt-40">
      <div className="w-full md:w-1/2 pr-4">
        <h2 className="font-prata font-bold mb-4 text-2xl">Reviews</h2>
        {reviews.length > 0 ? (
          reviews.map((review, index) => {
            {console.log(reviews)}
            const destination = destinationsData.find(dest => dest.id === review.destinationId);
            return (
              <div key={index} className="mb-6 p-4 border rounded-lg bg-white shadow-lg">
                <div className="flex items-center mb-2">
                  {renderStars(review.rating)}
                  <p className="ml-3 font-semibold text-lg">{review.name}</p>
                </div>
                {destination ? (
                  <p className="text-gray-800 font-semibold mb-2">
                    <span className="font-bold">Destination:</span> {destination.name}
                  </p>
                ) : (
                  <p className="text-gray-600">Destination not found.</p>
                )}
                <p className="text-gray-600">{review.comment}</p>
              </div>
            );
          })
        ) : (
          <p className="text-gray-600">No reviews yet.</p>
        )}
      </div>
      <div className="w-full md:w-1/2 pl-4">
        <h2 className="font-prata font-bold mb-4 text-2xl">Write a Review</h2>
        <form onSubmit={handleReviewSubmit} className="flex flex-col space-y-4">
          {renderDestinationDropdown()}
          <div>
            <label htmlFor="name" className="block font-semibold mb-1">Name:</label>
            <input
              type="text"
              id="name"
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-semibold mb-1">Email:</label>
            <input
              type="email"
              id="email"
              value={newReview.email}
              onChange={(e) => setNewReview({ ...newReview, email: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Rating:</label>
            {renderStars(hoverRating || newReview.rating)}
          </div>
          <div>
            <label htmlFor="comment" className="block font-semibold mb-1">Comment:</label>
            <textarea
              id="comment"
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              className="w-full p-2 border rounded"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="p-3 w-full bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
