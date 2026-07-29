import { Montserrat, Poppins, Playfair_Display } from "next/font/google"

/**
 * Fuente única de tipografías del sitio. Antes cada componente instanciaba la
 * suya (31 llamadas a next/font con 6 familias: Montserrat, Poppins,
 * Playfair Display, Trirong, Ubuntu e Inter) y el head precargaba 16 woff2
 * (~259 KB) compitiendo con el LCP. Se consolida a 3 familias:
 *  - Montserrat (principal; absorbe Ubuntu e Inter, usos puntuales)
 *  - Poppins (secundaria de UI)
 *  - Playfair Display (serif display; absorbe Trirong, mismo rol visual
 *    serif-italic en contadores y títulos decorativos)
 */
export const montserrat = Montserrat({ subsets: ["latin"], display: "swap" })

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
})
