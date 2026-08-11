import { Montserrat, Poppins, Playfair_Display,Josefin_Sans } from "next/font/google"

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
export const josefin = Josefin_Sans({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ['normal', 'italic'],
  display: 'swap',
});