// api/reviews.js
// Esta función corre en el servidor (nunca se expone en el navegador).
// Vercel la detecta automáticamente porque está dentro de la carpeta /api

export default async function handler(req, res) {
  const { GOOGLE_API_KEY, GOOGLE_PLACE_ID } = process.env;

  if (!GOOGLE_API_KEY || !GOOGLE_PLACE_ID) {
    return res.status(500).json({
      error: "Faltan variables de entorno GOOGLE_API_KEY o GOOGLE_PLACE_ID",
    });
  }

  const url =
    `https://maps.googleapis.com/maps/api/place/details/json` +
    `?place_id=${GOOGLE_PLACE_ID}` +
    `&fields=name,rating,reviews,user_ratings_total` +
    `&language=es` +
    `&key=${GOOGLE_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "OK") {
      return res.status(502).json({
        error: "Error de Google Places",
        detail: data.status,
      });
    }

    // Cachea la respuesta 1 hora para no gastar cuota de la API en cada visita
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");

    return res.status(200).json({
      name: data.result.name,
      rating: data.result.rating,
      total: data.result.user_ratings_total,
      reviews: data.result.reviews, // array de reseñas de Google
    });
  } catch (error) {
    return res.status(500).json({ error: "Error al obtener las reseñas" });
  }
}