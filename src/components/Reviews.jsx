import React from "react";
import reviews from "../data/reviews";

export default function Reviews() {
  return (
    <section className="reviews">
      <h2>What Clients Say</h2>
      <div className="reviews-grid">
        {reviews.map((r) => (
          <div key={r.id} className="review-card">
            <p>"{r.text}"</p>
            <h4>- {r.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}