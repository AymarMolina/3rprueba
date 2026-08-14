// src/components/GoogleReviews.jsx
import { useEffect, useState } from "react";

export default function GoogleReviews() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => {
        if (!res.ok) throw new Error("No se pudieron cargar las reseñas");
        return res.json();
      })
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando reseñas...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return null;

  return (
    <section className="google-reviews">
      <h2>
        {data.name} — {data.rating} ⭐ ({data.total} reseñas)
      </h2>

      <div className="reviews-grid">
        {data.reviews.map((review, i) => (
          <article key={i} className="review-card">
            <div className="review-header">
              <img
                src={review.profile_photo_url}
                alt={review.author_name}
                width={40}
                height={40}
                style={{ borderRadius: "50%" }}
              />
              <div>
                <strong>{review.author_name}</strong>
                <div>{"⭐".repeat(review.rating)}</div>
              </div>
            </div>
            <p>{review.text}</p>
            <span className="review-date">
              {review.relative_time_description}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}