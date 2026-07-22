/**
 * contact — fuente única de los datos de contacto (NAP) de 3R Core.
 *
 * Antes convivían 3 números de WhatsApp hardcodeados en ~11 archivos:
 *   51986889147 → schema LocalBusiness / NAP + home + páginas de servicio,
 *   51987216703 → botón flotante + BlogCTA + captura de pilares,
 *   51969791251 → landing de campañas de paid (/performance-marketing).
 * Esa mezcla rompía la consistencia NAP (local SEO / citations) y la
 * atribución de leads. Aquí se consolida: el SITIO PRINCIPAL usa el número
 * del schema/NAP (WA_MAIN, el mismo de Google Business Profile) y la landing
 * de paid conserva su línea de campaña propia (WA_LANDING).
 *
 * Para cambiar cualquier número se edita SOLO este archivo.
 */

// Número principal del negocio = el del schema LocalBusiness / NAP / GBP.
export const WA_MAIN = '51986889147'

// Línea dedicada a campañas de paid (landing /performance-marketing).
export const WA_LANDING = '51969791251'

// Teléfono en formato E.164 para schema.org (LocalBusiness / ContactPoint).
export const TEL_MAIN = `+${WA_MAIN}`
export const TEL_LANDING = `+${WA_LANDING}`

/** Construye la URL de wa.me con un mensaje opcional ya codificado. */
export function waUrl(phone: string, message?: string): string {
  const base = `https://wa.me/${phone}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
