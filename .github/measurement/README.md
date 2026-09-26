# Medición de Compra con Criterio

## Estado actual

La web ya instrumenta todos los clics hacia Amazon desde `js/main-v4.js`.

Evento preparado:

- `amazon_click`

Campos:

- `page_path`
- `page_title`
- `product_name`
- `asin`
- `affiliate_tag`
- `link_url`

## Cómo funciona

- Si existe `gtag`, se envía un único evento `amazon_click`.
- Si no existe `gtag` pero hay una capa `dataLayer`/GTM, se deja el evento en `dataLayer`.
- Si no hay ninguna solución de analítica conectada, no se envía información a ningún tercero; el código queda preparado para el futuro.

## Próximo paso para activar estadísticas reales

1. Crear/conectar una propiedad GA4.
2. Incorporar el Measurement ID únicamente junto con la gestión de consentimiento correspondiente.
3. Marcar `amazon_click` como evento relevante dentro de GA4 si interesa.
4. Crear informes por:
   - página;
   - producto;
   - ASIN;
   - tag de afiliado.
5. Cruzar estos datos con Search Console y los informes de Amazon Afiliados.

## Regla para nuevos artículos

No es obligatorio añadir atributos manuales a los enlaces de Amazon. El script intenta extraer:

- el ASIN de la URL;
- el tag de afiliado del parámetro `tag`;
- el producto desde el H1/H2/H3 de la tarjeta o bloque contenedor.

En páginas futuras puede usarse `data-product="Nombre exacto"` en el enlace de Amazon cuando se quiera forzar un nombre concreto.
