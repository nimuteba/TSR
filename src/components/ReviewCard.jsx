import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function ReviewCard({ review }) {
  const stars = Array.from({ length: review.rating });

  return (
    <div className="review-card">
      <div className="review-stars">
        {stars.map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} className="star" />
        ))}
      </div>
      <h3>{review.name}</h3>
      <p>{review.text}</p>
    </div>
  );
}