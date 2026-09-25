# Compra con Criterio

Sitio estático publicado con GitHub Pages.

## Estructura

- `index.html`: portada.
- `herramientas/`: categoría Herramientas.
  - `gatos-hidraulicos/`: guía y comparativa de gatos.
  - `taladros-a-bateria/`: guía y comparativa de taladros.
- `impresion-3d/`: categoría Impresión 3D.
  - `impresoras-3d/`: guía y comparativa de impresoras.
  - `filamentos-3d/`: guía de filamentos.
  - `accesorios-3d/`: guía de accesorios.
- `hogar/`: categoría Hogar.
- `aviso-legal/`: información legal y afiliación.
- `css/`: estilos activos.
- `js/`: JavaScript común.
- `images/`: imágenes generales y subcarpetas de producto.

## Convenciones

- Diseño activo: **V4**.
- CSS global: `css/style-v4.css`.
- JavaScript global: `js/main-v4.js`.
- Las imágenes usadas por la web deben estar guardadas en este repositorio.
- Para productos, usar subcarpetas como:
  - `images/gatos/`
  - `images/taladros/`
  - `images/impresoras/`
  - `images/hogar/` cuando sea necesario.
- Preferir nombres en minúsculas, sin espacios y separados por guiones.
- Preferir WebP cuando sea posible.
- No enlazar imágenes directamente desde Google Drive, Google Sites u otros hosts externos.
- Las páginas públicas deben usar URL canónica y rutas limpias mediante carpetas con `index.html`.
- No conservar versiones antiguas V2/V3 en producción: GitHub ya mantiene el historial de cambios.

## SEO

- `robots.txt` permite el rastreo general.
- `sitemap.xml` contiene las páginas públicas del sitio.
- Las páginas de prueba o duplicadas no deben indexarse.

## Afiliación

Las comparativas pueden contener enlaces de afiliado. Cada página que los utilice debe incluir el aviso de afiliación correspondiente.
