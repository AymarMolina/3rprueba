# Medición — Landing /performance-marketing

Cuentas ya cargadas en `layout.tsx`:
- **GTM**: `GTM-54VJ6F97`
- **GA4**: `G-SQBPMGH3BM`
- **Google Ads**: `AW-17933910865`

`track()` envía **cada evento al dataLayer (GTM) Y a GA4 directo (gtag)** → todo se mide aunque GTM no tenga tags configurados.

## Eventos que se disparan (todos llegan a GA4)

| Evento | Cuándo | Parámetros |
|---|---|---|
| `landing_view` | carga la landing | `page` |
| `section_view` | cada sección entra en pantalla | `section` |
| `scroll_depth` | 25 / 50 / 75 / 90 % | `percent` |
| `cta_click` | clic en botón primario / CTA | `location`, `label` |
| `whatsapp_click` | clic a cualquier `wa.me` | `location`, `label`, `link_url` |
| `outbound_click` | clic a enlace externo | `location`, `label`, `link_url` |
| `element_click` | cualquier otro clic en enlace/botón | `location`, `label` |
| `form_start` | primer foco en el formulario | `location` |
| `form_service_select` | elige servicio en el `select` | `service`, `location` |
| `lead_whatsapp_open` | submit abre WhatsApp con los datos | `service` |
| `generate_lead` | **CONVERSIÓN** — submit del formulario | `service`, `company`, `utm`, `delivered` |
| `lead_send_error` | el POST al backend falló | `service` |

## Conversiones a Google Ads (las 2 que pidió el cliente)

El submit y el clic a WhatsApp ya disparan `gtag('event','conversion',{send_to})`. **Solo falta el label de cada acción de conversión** (las crea el cliente en Google Ads):

1. Google Ads → **Objetivos → Conversiones → +Nueva acción → Sitio web**.
2. Crear **"Lead - Formulario"** (categoría: Enviar formulario de cliente potencial). Copia el label `AW-17933910865/XXXXXXXX`.
3. Crear **"Clic WhatsApp"** (categoría: Contacto). Copia su label.
4. En **Vercel** del sitio, añadir variables de entorno:
   - `NEXT_PUBLIC_ADS_CONVERSION_LABEL` = label del formulario (sin el `AW-17933910865/`)
   - `NEXT_PUBLIC_ADS_WA_LABEL` = label del WhatsApp
   - Redeploy → cada envío y cada clic a WhatsApp cuenta como conversión.

**Alternativa sin labels**: vincular GA4 (`G-SQBPMGH3BM`) ↔ Google Ads (Herramientas → Cuentas vinculadas) y **importar** los eventos `generate_lead` y `whatsapp_click` como conversiones desde GA4.

## Verificar que mide
- GA4 → **Tiempo real** → enviar el form / tocar WhatsApp → ver el evento.
- Google Ads → la acción de conversión pasa de "Sin actividad reciente" a registrar conversiones (~3-24h).
