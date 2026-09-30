# COMPRA CON SENTIDO
## Documento MASTER

**Última actualización:** 30 de septiembre de 2026 · 21:55
**Mercado inicial:** España  
**Idioma principal:** Español  
**Dominio canónico:** `https://compraconsentido.es/`  
**Repositorio de producción:** `SuperSergi/compra-con-sentido`  
**Rama de producción:** `main`

---

# 1. Objetivo del proyecto

Crear, posicionar y hacer crecer **Compra con Sentido** como una web de comparativas, guías de compra y análisis de productos orientada principalmente a:

1. SEO orgánico.
2. Intención de búsqueda.
3. Calidad y utilidad real del contenido.
4. Velocidad de carga.
5. Arquitectura web clara.
6. Buen enlazado interno.
7. Conversión hacia enlaces de afiliado.
8. Costes fijos mínimos.
9. Facilidad de mantenimiento.
10. Crecimiento sostenible.

Fuente principal de tráfico prevista: Google Search.

Monetización inicial: Amazon Afiliados.

No crear contenido simplemente para aumentar el número de páginas. Priorizar oportunidades donde una web pequeña pueda competir y aportar valor.

---

# 2. Marca y dominio

## Marca definitiva

**Compra con Sentido**

Se abandonó el nombre provisional **Compra con Criterio**.

Motivos principales:

- `compraconcriterio.es` no estaba disponible.
- `compra-con-criterio.es` se descartó por el guion y por ser menos limpio como marca.
- se detectó `compraconcriterio.net` utilizado por una web de comparativas/recomendaciones próxima al planteamiento del proyecto.
- el proyecto estaba todavía en una fase suficientemente temprana para cambiar de marca antes de acumular indexación y tráfico.

## Dominio

Dominio definitivo:

`compraconsentido.es`

Registrador:

DonDominio.

Fecha de compra:

28/09/2026.

Precio mostrado en el momento de la compra:

6,95 € + IVA/año.

No se contrataron inicialmente:

- hosting de DonDominio
- SSL de pago
- VPS
- WordPress
- correo asociado al hosting

Pendiente administrativo: comprobar que la renovación automática del dominio esté activada.

---

# 3. Infraestructura definitiva

Arquitectura:

Desarrollo  
→ GitHub  
→ Cloudflare Pages  
→ `compraconsentido.es`  
→ Google / usuarios

## GitHub

Repositorio:

`SuperSergi/compra-con-sentido`

Rama de producción:

`main`

GitHub es la **fuente definitiva del código publicado**.

Se reutilizó el repositorio existente porque ya contenía HTML, CSS, JavaScript, imágenes, páginas y estructura SEO.

Se creó temporalmente la rama `compra-con-sentido` para la migración y posteriormente se fusionó a `main`.

Cambios de migración realizados:

- marca cambiada de Compra con Criterio a Compra con Sentido
- URLs absolutas migradas a `https://compraconsentido.es`
- canonical actualizadas
- Open Graph actualizado
- Schema actualizado
- `robots.txt` actualizado
- `sitemap.xml` actualizado
- README adaptado a Cloudflare Pages
- añadido `.gitignore`
- eliminada una antigua verificación HTML de Google
- adaptadas múltiples páginas y recursos al dominio nuevo

## Cloudflare Pages

Proyecto:

`compra-con-sentido`

URL técnica:

`https://compra-con-sentido.pages.dev`

Repositorio conectado:

`SuperSergi/compra-con-sentido`

Rama:

`main`

Configuración:

- Framework: Ninguno
- Build command: `exit 0`
- Output directory: `.`
- Root directory: vacío
- Variables de entorno: ninguna

Motivo: la web es HTML, CSS y JavaScript estático y los archivos públicos están directamente en la raíz.

La URL `pages.dev` no debe utilizarse como URL pública o canónica.

## DNS

DNS gestionado completamente por Cloudflare.

Nameservers configurados en DonDominio:

- `katja.ns.cloudflare.com`
- `nico.ns.cloudflare.com`

DNSSEC:

- no estaba activado en DonDominio
- se mantiene desactivado durante esta fase
- no crear una entrada DNSSEC manual salvo decisión posterior

Registros principales:

- CNAME raíz → `compra-con-sentido.pages.dev`
- CNAME `www` → `compra-con-sentido.pages.dev`
- proxy Cloudflare activado
- TTL automático

## Dominio canónico y redirección

Dominio principal:

`https://compraconsentido.es`

`https://www.compraconsentido.es/*` redirige mediante **301 Permanent Redirect** a:

`https://compraconsentido.es/${1}`

Se conservan ruta y query string.

Norma estable:

- utilizar siempre la versión sin `www`
- consolidar las señales SEO en el dominio raíz
- no usar `pages.dev` como canonical

## SSL/TLS

Estado:

- SSL Universal activo
- certificado válido para `compraconsentido.es` y `*.compraconsentido.es`
- modo SSL/TLS: Completo
- Usar siempre HTTPS: activado
- Reescrituras automáticas HTTPS: activadas
- TLS 1.3: activado
- versión mínima TLS: 1.2
- HSTS: desactivado por ahora
- Encriptación oportunista: activada
- Advanced Certificate Manager: no necesario
- Total TLS: no necesario

No activar HSTS hasta que HTTPS y las redirecciones lleven suficiente tiempo estables.

---

# 4. Stack técnico y rendimiento

Tecnologías principales:

- HTML
- CSS
- JavaScript
- imágenes WebP o AVIF cuando convenga

Evitar inicialmente:

- WordPress
- PHP
- MySQL
- plugins
- servidores VPS

Objetivos Core Web Vitals:

- LCP < 2,5 s
- INP < 200 ms
- CLS < 0,1

Prioridades:

- HTML accesible directamente por Google
- CSS optimizado
- JavaScript mínimo
- imágenes ligeras
- lazy loading cuando corresponda
- CDN Cloudflare
- evitar dependencias innecesarias

---

# 5. Cloudflare y bots

Configuración inicial elegida:

- Bots de búsqueda: permitir
- Agentes de IA: permitir
- Bots de entrenamiento: bloquear
- Bot Preference Sync: activado

Posteriormente se detectó que Cloudflare estaba bloqueando solicitudes legítimas de Googlebot al `sitemap.xml` mediante la regla:

`Block AI training crawlers - BOBA-199`

Googlebot aparecía correctamente identificado como **Search Engine Crawler**.

Se creó una regla:

**Nombre:** `Permitir bots verificados`

Condición:

`cf.client.bot and http.request.uri.path eq "/sitemap.xml"`

Acción:

`Skip / Omitir`

Configuración:

- saltar todas las reglas administradas
- orden de ejecución: primero
- estado: activo
- logging activado

Se comprobó posteriormente una petición real de Googlebot con acción `skip`.

Como medida adicional quedaron temporalmente:

- Búsqueda: Permitir
- Agente: Permitir
- Entrenamiento: Permitir

**Decisión actual:** no reactivar el bloqueo de entrenamiento mientras exista riesgo de volver a interferir con Googlebot.

---

# 6. SEO técnico obligatorio

Toda la web debe mantener:

- `<title>` único
- meta description
- H1 único y coherente
- H2/H3 lógicos
- canonical
- Open Graph
- breadcrumbs
- `sitemap.xml`
- `robots.txt`
- HTTPS
- redirecciones correctas
- versión única del dominio
- página 404 adecuada
- Schema.org cuando corresponda
- imágenes optimizadas
- lazy loading cuando tenga sentido

## robots.txt

URL:

`https://compraconsentido.es/robots.txt`

El archivo propio contiene:

- `User-agent: *`
- `Allow: /`
- referencia al sitemap

Sitemap declarado:

`https://compraconsentido.es/sitemap.xml`

Cloudflare puede añadir su bloque de Content Signals.

## sitemap.xml

URL:

`https://compraconsentido.es/sitemap.xml`

El sitemap utiliza el dominio definitivo.

No modificar o reenviar repetidamente el sitemap sin una razón concreta si Google puede obtenerlo correctamente.

## Canonical

Todas las páginas deben utilizar canonical bajo:

`https://compraconsentido.es/...`

La portada declara:

`https://compraconsentido.es/`

---

# 7. Google Search Console

Propiedad principal:

`compraconsentido.es`

Tipo:

Propiedad de dominio.

Verificación:

DNS mediante Cloudflare.

Se eliminaron las propiedades antiguas correspondientes a Google Sites y GitHub Pages.

Mantener únicamente la propiedad de dominio actual.

## Estado confirmado a 29/09/2026

- dominio verificado
- portada accesible para Google
- rastreo permitido
- obtención de página correcta
- indexación permitida
- canonical declarada correctamente
- indexación de la portada solicitada
- `sitemap.xml` enviado correctamente
- estado del sitemap: **Correcto**
- última lectura confirmada: **29/09/2026**
- páginas descubiertas: **19**
- informe `Indexación > Páginas`: todavía procesando datos

Pendiente:

- revisar las URLs cuando el informe termine de procesarse; Search Console había descubierto 19 el 29/09 y el sitemap actual contiene 20 tras publicar llaves de impacto
- vigilar páginas indexadas y excluidas
- revisar Core Web Vitals
- analizar impresiones, clics, CTR y posición media
- analizar consultas y páginas
- prestar especial atención a keywords aproximadamente en posiciones 8-20

Google Search Console será la fuente principal de datos SEO reales.

---

# 8. Bing Webmaster Tools y analítica

Bing Webmaster Tools:

Pendiente de configurar.

Analítica inicial:

- Google Search Console
- Cloudflare Web Analytics

Valorar GA4 más adelante.

---

# 9. Estrategia SEO general

La web se construye alrededor de **intenciones de búsqueda**, no del número de artículos.

Antes de crear una nueva página:

1. investigar la SERP
2. identificar intención de búsqueda
3. analizar competidores
4. determinar keyword principal
5. identificar keywords secundarias
6. detectar preguntas relacionadas
7. estudiar posibles subtemas
8. valorar dificultad real
9. valorar intención comercial y afiliación
10. comprobar relación con clusters existentes
11. decidir si merece la pena crear la página
12. diseñar el enlazado interno antes de publicarla

No crear una URL simplemente porque exista una variación de keyword.

Orden de trabajo:

**SEO estratégico → contenido → diseño → publicación**

---

# 10. Arquitectura y clusters

Trabajar mediante clusters temáticos.

Estructura actual/conceptual:

- `/herramientas/`
- `/hogar/`
- `/impresion-3d/`

Otras categorías como tecnología o automoción se valorarán cuando exista investigación suficiente.

URLs:

- cortas
- descriptivas
- permanentes
- sin fechas salvo necesidad
- sin palabras innecesarias

Evitar canibalización.

## Auditoría inicial de las 19 URLs anteriores a llaves de impacto

Conclusión inicial:

- no se detecta canibalización grave
- las intenciones “cómo elegir” y “qué comprar/comparativa” están razonablemente separadas
- los posibles solapamientos deben vigilarse con Search Console antes de crear nuevas URLs

Áreas a vigilar:

- gatos hidráulicos
- taladros a batería
- impresoras 3D
- deshumidificadores

No crear por ahora páginas separadas para:

- gatos hidráulicos 3 toneladas
- gatos hidráulicos perfil bajo
- gatos hidráulicos para SUV
- taladros a batería menos de 100 €

Primero reforzar URLs existentes si Google empieza a mostrar esas consultas.

---

# 11. URLs prioritarias para seguimiento SEO

Orden inicial:

1. `/hogar/deshumidificadores/cuantos-litros-deshumidificador-metros-cuadrados/`
2. comparativa de taladros a batería
3. comparativa de gatos hidráulicos
4. comparativa de deshumidificadores
5. comparativa de impresoras 3D
6. comparativa de robots aspiradores

---

# 12. Enlazado interno ya mejorado

Cambios realizados:

- desde `/hogar/` se añadió enlace directo a la guía de litros de deshumidificador
- mejorados anchors desde la guía de taladros hacia su comparativa
- variados anchors desde la guía de gatos hacia su comparativa
- actualizado `lastmod` del sitemap para páginas modificadas
- añadido schema `WebSite` en portada

Regla global:

Cuando una nueva sección o página deba aparecer en navegación, revisar el menú en todas las páginas actuales.

Comprobar:

- enlaces duplicados
- caracteres residuales
- funcionamiento escritorio/móvil
- coherencia de jerarquía

---

# 13. Breadcrumbs

Decisión global:

- todas las páginas salvo la home deben mostrar breadcrumbs visibles y clicables
- deben reflejar la jerarquía real
- mantener `BreadcrumbList` cuando corresponda
- la home no necesita `Inicio › Inicio`

Esta regla ya se extendió a páginas que anteriormente no mostraban breadcrumbs visibles.

---

# 14. Estrategia de contenido

El contenido debe aportar más que una ficha de producto.

Priorizar:

- comparaciones
- tablas
- criterios de selección
- ventajas e inconvenientes reales
- diferencias entre modelos
- escenarios de uso
- explicación técnica
- recomendaciones según necesidad
- análisis de especificaciones
- información práctica
- preguntas frecuentes útiles
- alternativas
- cuándo compensa pagar más

No copiar descripciones de fabricantes o Amazon.

No publicar cientos de páginas.

Objetivo inicial orientativo:

20-30 URLs de alta calidad.

Ritmo orientativo:

1-2 páginas buenas por semana, subordinado a calidad y oportunidad real.

---

# 15. Metodología de investigación de productos

Para cualquier dato que pueda influir en la compra:

1. buscar primero la fuente oficial del fabricante
2. revisar manuales/documentación técnica si es necesario
3. si falta el dato, investigar distribuidores especializados, retailers fiables, análisis expertos y otras fuentes secundarias que identifiquen el modelo exacto
4. contrastar discrepancias
5. no inventar ni deducir cifras inciertas

Especialmente importante para:

- peso
- dimensiones
- potencia/par
- modos
- accesorios
- compatibilidades

Los datos comparados deben utilizar el mismo criterio.

No mezclar magnitudes no equivalentes.

No añadir una cifra de autonomía genérica cuando no exista una metodología comparable entre fabricantes.

---

# 16. Pruebas de producto y tono editorial

Nunca afirmar que se ha probado físicamente un producto si no es cierto.

La metodología debe expresarse de forma positiva y transmitir criterio experto.

No limitar el análisis a fichas técnicas. Para valorar un producto se deben cruzar:

- especificaciones oficiales y manuales
- documentación técnica
- experiencias reales de propietarios y profesionales
- análisis especializados del modelo exacto
- incidencias, limitaciones y patrones que se repitan entre fuentes fiables

Si hay pocas experiencias reales de un modelo concreto, ampliar la búsqueda antes de sacar conclusiones. Si aun así un dato o comportamiento no queda suficientemente respaldado, no convertirlo en argumento de compra ni presentarlo como hecho.

Nunca dar a entender que Compra con Sentido ha probado físicamente un producto si no es cierto.

Evitar repetir defensivamente “no lo hemos probado” en cada ficha.

La redacción debe ser natural y útil para una persona que está intentando decidir.

Evitar:

- fichas demasiado simétricas
- repetir la misma conclusión
- estructuras mecánicas
- copiar lenguaje comercial
- afirmaciones absolutas sin soporte

---

# 17. Amazon Afiliados

Amazon España será el destino principal de monetización inicial.

Los productos principales de comparativas comerciales deben:

1. existir en Amazon.es
2. tener ficha activa
3. coincidir con modelo y variante
4. disponer de ASIN comprobado
5. indicar correctamente si es cuerpo solo o kit
6. poder enlazarse mediante afiliación

Un producto sin ficha válida en Amazon España puede mencionarse como referencia técnica, pero no debe utilizarse como recomendación principal salvo decisión expresa.

CTA habitual:

`Ver precio en Amazon`

Los enlaces de afiliado deben llevar:

`rel="nofollow sponsored"`

## Creators API

Estado a 30/09/2026 20:00:

- creada en Amazon Afiliados la aplicación `compra-con-sentido-api`
- Application ID: asociado a la Store ID principal `librosde0a1-21`
- creada una credencial activa de versión `3.2`
- Credential Secret guardado por Sergio fuera del repositorio
- no almacenar Credential ID ni Credential Secret en HTML, JavaScript cliente o GitHub
- la integración prevista debe realizarse del lado servidor, preferentemente mediante Cloudflare Worker o equivalente
- para credenciales versión 3.2, la autenticación OAuth 2.0 de Creators API utiliza el endpoint europeo correspondiente
- Amazon puede tardar hasta 48 horas en confirmar la elegibilidad efectiva de acceso tras crear la credencial

Objetivo de uso:

- consultar productos por ASIN
- obtener datos oficiales de producto e imágenes cuando corresponda
- comprobar variantes y disponibilidad
- valorar uso de precios/ofertas dinámicos únicamente conforme a las condiciones de Amazon
- mantener la web estática y las credenciales fuera del frontend

Pendiente inmediato:

- configurar las credenciales como secretos en el entorno servidor
- realizar una primera llamada de prueba a Creators API para Amazon.es
- Partner Tag específico creado para la integración API: `ccs-api-21`
- creado Cloudflare Worker `compra-con-sentido-api` en producción
- configurados en Cloudflare los secretos `AMAZON_CREATORS_CLIENT_ID` y `AMAZON_CREATORS_CLIENT_SECRET`
- configurada la variable `AMAZON_PARTNER_TAG=ccs-api-21`
- el Worker ya contiene una integración de prueba con Creators API para Amazon.es
- prueba real realizada con `GetItems` y ASIN `B0BGBQSHPK`
- autenticación y llamada llegan correctamente a Creators API, pero Amazon responde HTTP 403 con `AssociateNotEligible`
- interpretación confirmada por la documentación oficial: la cuenta aún no cumple o Amazon aún no ha reconocido el requisito de 10 ventas cualificadas en los últimos 30 días
- la propia interfaz de Amazon indica que la revisión de elegibilidad tras crear la credencial puede tardar hasta 48 horas
- no hacer cambios en credenciales ni Worker por este 403; volver a probar cuando Amazon haya actualizado la elegibilidad

## Precios

No mostrar precios fijos si no podemos garantizar que estén actualizados.

Los precios observados pueden utilizarse internamente para analizar gama y posicionamiento, pero en la web se prioriza el CTA de consulta de precio.

## Botones

Estándar:

- amarillo/dorado tipo Amazon
- degradado suave
- borde
- sombra ligera
- carrito genérico
- hover discreto
- ligera elevación/escala
- efecto de pulsación
- responsive
- reflejo animado solo si no perjudica rendimiento
- sin logotipo de Amazon integrado

---

# 18. Imágenes

No usar Google Drive como servidor permanente de imágenes.

Las imágenes necesarias deben almacenarse dentro del proyecto cuando sea legal y apropiado.

Preferencias:

- WebP
- AVIF cuando compense
- dimensiones adecuadas
- peso reducido
- lazy loading
- alt útil cuando corresponda

En comparativas:

- priorizar una imagen individual por producto
- evitar collages como imagen principal de ficha
- hero contextual
- texto importante en HTML, no incrustado innecesariamente en la imagen

Las imágenes generadas por IA son ilustrativas y no deben presentarse como reproducción exacta de un modelo cuando no lo sean.

Para representación exacta, valorar imágenes oficiales compatibles con las condiciones de uso y afiliación.

---

# 19. Estándar de tablas comparativas

Las tablas deben contener información que realmente ayude a elegir.

Evitar columnas que no diferencian productos.

Cuando un dato relevante no esté confirmado o no exista una fuente suficientemente fiable, mostrar `–` en la tabla en lugar de rellenar el hueco con explicaciones largas o inferencias.

Priorizar tablas compactas: si una característica puede deducirse claramente de otra columna o es común a todos los modelos, no crear una columna separada.

En móvil:

- permitir desplazamiento horizontal
- mostrar un aviso visible de que la tabla puede deslizarse
- mantener celdas compactas
- no fijar automáticamente la primera columna

En la comparativa de llaves de impacto se decidió expresamente que **toda la tabla se desplaza conjuntamente, sin primera columna fija**.

Aviso actual:

`← Desliza la tabla para ver todas las columnas →`

---

# 20. Fichas y bloques de decisión

Cada ficha debe responder:

- qué diferencia al modelo
- para quién tiene sentido
- cuál es su ventaja concreta
- cuál es su limitación real
- cuándo compensa frente a otro

## “La elegiría si…”

Debe responder:

**¿Qué tiene esta máquina que puede hacer que la compre antes que otra?**

No repetir simplemente la introducción.

El ecosistema de batería puede ser un criterio secundario, pero no debe convertirse automáticamente en el argumento principal cuando existan diferencias más importantes de potencia, control, tamaño, peso, modos o accesorios.

---

# 21. Cabecera editorial, afiliación y schema

Las comparativas deben mostrar:

- Compra con Sentido
- enlace a `/sobre-nosotros/`
- fecha de actualización

No repetir un aviso de afiliación en la cabecera si el aviso global del sitio ya informa claramente de la relación con Amazon.

Schema según corresponda:

- WebSite
- Organization
- BreadcrumbList
- Article
- FAQPage cuando sea útil y coincida con contenido visible
- Product o Review solo cuando los datos sean legítimos

No inventar valoraciones.

No añadir `Product`, `Review` o ratings artificialmente para aumentar el marcado.

---

# 22. Cluster prioritario: Herramientas

Herramientas es el primer cluster prioritario de expansión.

Motivos:

- existen contenidos de taladros
- existen contenidos de gatos hidráulicos
- encaja con conocimiento técnico
- tiene intención comercial
- permite monetización con Amazon

Oportunidades investigadas:

- llaves de impacto a batería: creada y publicada
- amoladoras a batería 125 mm: **prioridad cerrada como siguiente página; selección de 6 modelos cerrada y documentación técnica en preparación**
- sierras circulares a batería: segunda prioridad
- plataformas de herramientas/baterías 18 V: tercera prioridad; plantearla como hub comercial/estratégico cuando el cluster tenga más familias de herramientas
- hidrolimpiadoras para coche: cuarta prioridad; pendiente resolver antes su encaje arquitectónico

No crear todavía:

- gatos hidráulicos 3 toneladas
- gatos hidráulicos perfil bajo
- gatos hidráulicos SUV
- taladros menos de 100 €

## Decisión SEO cerrada · 30/09/2026

La siguiente página nueva a preparar será:

`/herramientas/amoladoras-a-bateria/`

Estado:

**DECISIÓN CERRADA. Selección de 6 modelos y matriz técnica cerradas. Estructura SEO/editorial preparada. No publicada todavía.**

Keyword principal provisional:

`mejores amoladoras a batería`

Enfoque editorial:

- comparativa de amoladoras a batería con especial foco en 18 V y disco de 125 mm
- no crear una URL independiente para la variante `125 mm` mientras la misma intención pueda resolverse bien en esta página
- seleccionar solo modelos y variantes comprobados en Amazon.es antes de cerrar la comparativa
- verificar cada modelo mediante fabricante y documentación oficial antes de usar especificaciones técnicas

Orden de prioridad acordado tras analizar intención, SERP, competencia, potencial comercial, canibalización y arquitectura:

1. amoladoras a batería de 125 mm
2. sierras circulares a batería
3. plataformas de herramientas/baterías 18 V
4. hidrolimpiadoras para coche

Motivo principal:

Amoladoras combina una intención comercial clara, encaje directo en el cluster prioritario de Herramientas, bajo riesgo de canibalización y buen potencial de afiliación. Además permite reforzar el enlazado con taladros y llaves de impacto y preparar después una página estratégica sobre plataformas de batería de 18 V.

## Selección de producto cerrada · 30/09/2026 19:36

Se cierra la selección inicial de seis modelos principales para la comparativa. Todos son 18 V, admiten disco de 125 mm y se han contrastado con documentación de fabricante y presencia actual en Amazon España o Amazon Marketplace ES.

Modelos y variantes:

- Bosch Professional GWS 18V-11 S — variante cuerpo solo `06019N4000` — ASIN `B0DQV82L7J`
- Makita DGA511Z — cuerpo solo — ASIN `B079QF54JP`
- DeWalt DCG405N-XJ — cuerpo solo — ASIN `B074V6QSNH`
- Einhell Professional TP-AG 18/125-13 Q P BL - Solo — artículo `4431197` — ASIN `B0H3NVNRTX`
- Milwaukee M18 BLSAG125X-0 — referencia `4933492643` — ASIN `B0CHK5DX4C`
- Metabo WVB 18 LT BL 11-125 Quick — referencia `613057840`, con metaBOX y sin batería/cargador — ASIN `B0B7RB9PYZ`

Tracking ID de amoladoras:

`ccc-amoladoras-21`

Criterio de selección:

- una referencia clara por marca
- motor brushless
- 18 V y 125 mm
- disponibilidad comercial comprobada
- variante identificable para afiliación
- diferencias técnicas suficientemente claras para evitar seis fichas prácticamente iguales
- equilibrio entre opciones de bricolaje exigente y gamas profesionales

Razón editorial prevista para cada modelo:

- Bosch GWS 18V-11 S: polivalencia, seis velocidades, 1.100 W equivalentes declarados y buen equilibrio general
- Makita DGA511Z: regulación 3.000-8.500 rpm y tecnología ADT; la ficha oficial actual de Makita España confirma anti-restart, protección de sobrecarga y ADT, pero no lista AFT para esta variante, por lo que AFT no debe atribuirse en la página
- DeWalt DCG405N-XJ: freno electrónico, embrague electrónico y formato profesional muy consolidado; interruptor deslizante
- Einhell TP-AG 18/125-13 Q P BL: 1.300 W equivalentes declarados, interruptor de paletas, antivibración y cambio de disco sin herramientas; candidata fuerte por relación entre equipamiento y coste
- Milwaukee M18 BLSAG125X-0: 11.000 rpm, diseño compacto y FIXTEC; orientada especialmente a corte rápido, con la limitación de que esta versión no incorpora freno RAPIDSTOP
- Metabo WVB 18 LT BL 11-125 Quick: regulación 2.800-10.000 rpm, freno de aproximadamente 1 s, M-Quick y embrague S-automatic; opción de alto control y seguridad

### Regla para la tabla técnica de amoladoras

No comparar peso mientras no se pueda normalizar con la misma base en los seis modelos. Algunos fabricantes publican peso sin batería y otros con una batería concreta.

Priorizar columnas realmente comparables y que ayuden a elegir:

- velocidad / rango de rpm
- velocidad regulable
- tipo de interruptor
- freno
- sistema anti-kickback o embrague de seguridad
- cambio de disco sin herramientas
- profundidad de corte solo si existe dato oficial comparable
- contenido del paquete

No dedicar columnas a 18 V o 125 mm si los seis modelos comparten esas características.

Las equivalencias en vatios publicadas por Bosch, Einhell, Milwaukee o Metabo se pueden explicar en las fichas, pero no deben presentarse como una medición de laboratorio directamente comparable entre marcas.

Antes de publicar, volver a comprobar que los seis ASIN siguen activos en Amazon.es y que cada enlace corresponde exactamente a la variante indicada.

## Matriz técnica y estructura editorial cerradas · 30/09/2026 19:45

La investigación técnica de los seis modelos ya permite construir una comparación con magnitudes equivalentes sin mezclar datos de distinto criterio.

### Tabla principal prevista

Columnas:

- modelo
- velocidad sin carga
- velocidad regulable
- tipo de interruptor
- freno
- protección ante bloqueo / kickback
- cambio de disco
- suministro

Datos normalizados:

| Modelo | Velocidad sin carga | Regulable | Interruptor | Freno | Protección ante bloqueo / kickback | Cambio de disco | Suministro |
|---|---:|---|---|---|---|---|---|
| Bosch GWS 18V-11 S | 3.000–9.000 rpm | Sí, 6 niveles | Deslizante con bloqueo | Intelligent Brake | KickBack Control + Drop Control | Tuerca rápida | Cuerpo y accesorios; sin batería/cargador |
| Makita DGA511Z | 3.000–8.500 rpm | Sí | Deslizante | No se indica freno eléctrico específico en la ficha española actual | ADT + protección contra sobrecarga + anti-restart; no atribuir AFT en esta variante para mercado español | Tuerca convencional con llave | Cuerpo y accesorios; sin batería/cargador/Makpac |
| DeWalt DCG405N-XJ | 9.000 rpm | No | Deslizante | Freno electrónico | Embrague electrónico / protección frente al retroceso | Quick Change Flange | Cuerpo y accesorios; sin batería/cargador |
| Einhell TP-AG 18/125-13 Q P BL | 10.000 rpm | No | Paleta / hombre muerto | No se indica freno rápido específico | Arranque suave, protección contra rearranque y sobrecarga; sin anti-kickback específico declarado | Tuerca rápida sin herramientas | Cuerpo y accesorios; sin batería/cargador |
| Milwaukee M18 BLSAG125X-0 | 11.000 rpm | No | Deslizante con bloqueo | Sin RAPIDSTOP en esta variante | Embrague de seguridad frente al retroceso | FIXTEC | Sin batería/cargador/maletín |
| Metabo WVB 18 LT BL 11-125 Quick | 2.800–10.000 rpm | Sí | Deslizante lateral | Freno rápido, aprox. 1 s | Embrague mecánico S-automatic | M-Quick | Con metaBOX; sin batería/cargador |

Reglas de comparación:

- no incluir peso en la tabla principal mientras los fabricantes no publiquen el mismo criterio en los seis modelos
- no usar potencia equivalente en vatios como columna comparativa entre marcas; son declaraciones de fabricante con metodologías que no deben asumirse equivalentes
- no incluir 18 V ni 125 mm como columnas porque son características comunes a los seis
- no incluir profundidad de corte en la tabla principal mientras no exista dato oficial equivalente para todos
- diferenciar siempre freno de disco, protección anti-kickback y simple desconexión al soltar un interruptor de hombre muerto
- antes de publicar, volver a comprobar que cada ASIN sigue activo y corresponde a la variante exacta

### Posicionamiento editorial de cada modelo

- **Bosch GWS 18V-11 S:** perfil equilibrado para quien quiera velocidad regulable y un paquete de seguridad completo.
- **Makita DGA511Z:** especialmente interesante para quien valore regulación de velocidad y gestión automática de carga mediante ADT.
- **DeWalt DCG405N-XJ:** opción de velocidad fija con freno y embrague electrónicos, orientada a un uso profesional sencillo y directo.
- **Einhell TP-AG 18/125-13 Q P BL:** candidata para bricolaje exigente por equipamiento, interruptor de hombre muerto y cambio de disco sin herramientas, sin basar la recomendación en un precio fijo.
- **Milwaukee M18 BLSAG125X-0:** orientada a corte rápido y formato compacto; 11.000 rpm, FIXTEC y embrague de seguridad, con la contrapartida de no tener regulación de velocidad ni RAPIDSTOP en esta variante.
- **Metabo WVB 18 LT BL 11-125 Quick:** perfil de control y seguridad, con amplio rango de rpm, freno rápido, M-Quick y embrague S-automatic.

### SEO y estructura de contenido preparados

Title final:

`Mejores amoladoras a batería de 125 mm: 6 modelos 18 V`

H1 final:

`Mejores amoladoras a batería de 125 mm: 6 modelos de 18 V comparados`

Meta description final:

`Comparamos 6 amoladoras a batería de 125 mm y 18 V de Bosch, Makita, DeWalt, Einhell, Milwaukee y Metabo: velocidad, seguridad y cambio de disco.`

Estructura prevista:

1. introducción breve y criterio de selección
2. resumen según necesidad, sin ranking global
3. tabla técnica normalizada
4. seis fichas de producto con diferencia real y bloque “La elegiría si…”
5. cómo elegir una amoladora a batería de 125 mm
6. velocidad fija frente a regulable
7. freno, anti-kickback y sistemas de seguridad
8. interruptor deslizante frente a paleta / hombre muerto
9. cambio de disco y ergonomía práctica
10. cuerpo solo, batería y cargador
11. qué modelo encaja según tipo de uso
12. FAQ visibles y `FAQPage` solo si coinciden exactamente

FAQ previstas:

1. ¿Qué ventajas tiene una amoladora a batería de 125 mm?
2. ¿Compensa una amoladora con velocidad regulable?
3. ¿Qué diferencia hay entre freno electrónico y protección anti-kickback?
4. ¿Es mejor un interruptor deslizante o de paleta / hombre muerto?
5. ¿Compensa comprar una amoladora sin batería ni cargador?

### Enlazado interno previsto

Al publicar:

- `/herramientas/` → nueva comparativa de amoladoras
- nueva comparativa → `/herramientas/`
- nueva comparativa ↔ contenidos de taladros a batería cuando el enlace sea contextual
- nueva comparativa ↔ `/herramientas/llaves-de-impacto/` cuando el enlace sea contextual
- futura `/herramientas/plataformas-bateria-18v/` ↔ amoladoras cuando esa página exista
- no forzar enlaces hacia gatos hidráulicos solo por compartir categoría

Si la nueva página se incorpora al menú, revisar navegación de escritorio y móvil en todas las páginas actuales antes de publicar.

Estado al cierre de esta fase:

**Investigación de producto, matriz técnica, arquitectura SEO y estructura editorial preparadas. Siguiente paso: redacción y revisión de la comparativa. No se ha creado ni publicado la URL.**

## Revisión SEO y contenido cerrados · 30/09/2026 20:29

Se vuelve a contrastar la SERP española antes de redactar. La intención principal sigue siendo comercial / investigación previa a compra. La SERP continúa mostrando comparativas editoriales específicas de amoladoras a batería de 18 V y 125 mm junto a grandes retailers, por lo que se mantiene como keyword principal:

`mejores amoladoras a batería`

Keywords secundarias naturales dentro de la misma URL:

- `amoladora a batería 125 mm`
- `mejor amoladora a batería`
- `mejor amoladora a batería calidad precio`
- `amoladora 18v 125 mm`
- `radial a batería 125 mm`
- `amoladora angular a batería`

No se detecta canibalización con las URLs actuales. La categoría `/herramientas/` cubre intención de navegación; las páginas de taladros y llaves de impacto cubren familias de producto diferentes. La futura página de plataformas 18 V deberá mantenerse centrada en elegir ecosistema de batería, no en comparar amoladoras.

SEO definitivo:

- URL: `/herramientas/amoladoras-a-bateria/`
- Title: `Mejores amoladoras a batería de 125 mm: 6 modelos 18 V`
- H1: `Mejores amoladoras a batería de 125 mm: 6 modelos de 18 V comparados`
- Meta description: `Comparamos 6 amoladoras a batería de 125 mm y 18 V de Bosch, Makita, DeWalt, Einhell, Milwaukee y Metabo según velocidad, seguridad y cambio de disco.`
- Canonical: `https://compraconsentido.es/herramientas/amoladoras-a-bateria/`
- Breadcrumb: `Inicio › Herramientas › Amoladoras a batería`
- Schema previsto: `Article`, `BreadcrumbList` y `FAQPage` solo si coincide exactamente con las FAQ visibles
- no añadir `Product`, `Review` ni ratings artificiales

H2/H3 definitivos:

1. H2 `Qué amoladora a batería de 125 mm elegir según lo que necesitas`
2. H2 `Comparativa de amoladoras a batería de 125 mm`
3. H2 individual para cada uno de los 6 modelos
4. H2 `Cómo elegir una amoladora a batería de 125 mm`
   - H3 `Velocidad fija o regulable`
   - H3 `Freno, anti-kickback y protección ante bloqueos`
   - H3 `Interruptor deslizante o de paleta`
   - H3 `Cambio de disco y protector`
   - H3 `Cuerpo solo, batería y cargador`
5. H2 `Qué modelo encaja mejor según el uso`
6. H2 `Preguntas frecuentes sobre amoladoras a batería`

FAQ definitivas:

1. `¿Qué ventajas tiene una amoladora a batería de 125 mm?`
2. `¿Compensa una amoladora con velocidad regulable?`
3. `¿Qué diferencia hay entre freno electrónico y protección anti-kickback?`
4. `¿Es mejor un interruptor deslizante o de paleta?`
5. `¿Compensa comprar una amoladora sin batería ni cargador?`

Enlazado interno al publicar:

- añadir la nueva comparativa desde `/herramientas/` con anchor descriptivo
- enlazar desde la nueva página hacia `/herramientas/`
- añadir enlaces contextuales bidireccionales con taladros a batería y llaves de impacto cuando aporten valor
- reservar el enlace a la futura guía de plataformas 18 V hasta que exista
- no forzar enlaces a gatos hidráulicos

Corrección técnica importante detectada durante la verificación final:

La ficha oficial actual de Makita España para DGA511 confirma velocidad 3.000-8.500 rpm, motor brushless, ADT, velocidad constante, protección contra sobrecarga y anti-restart. No lista AFT en esta variante. Además, esa ficha española incluye una mención aislada a AWS que entra en conflicto con otras fuentes oficiales de Makita, donde DGA511 y DGA512/AWS se distinguen como variantes diferentes. Por prudencia editorial, la comparativa no debe atribuir a DGA511 ni AFT ni AWS como argumentos confirmados para el mercado español.

Estado:

**CONTENIDO Y ESTRUCTURA SEO CERRADOS. BORRADOR DE DISEÑO EN REVISIÓN EN LA RAMA `amoladoras-a-bateria-draft`. NO PUBLICADO. Los seis ASIN y variantes están revalidados. Tracking ID `ccc-amoladoras-21` activado y 12 enlaces Amazon preparados con `rel="nofollow sponsored"`. Tras revisión visual se han corregido breadcrumbs, compactado la tabla y reforzado el bloque editorial para cruzar documentación técnica con experiencias reales. Pendiente nueva revisión visual antes de producción.**

---

# 23. Comparativa de llaves de impacto a batería

URL:

`/herramientas/llaves-de-impacto/`

Estado:

**CERRADA, publicada y revisada el 29/09/2026.**

Keyword principal:

`mejores llaves de impacto a batería`

Intención:

Comercial / investigación previa a compra.

Enfoque:

Coche y bricolaje.

H1:

`Mejores llaves de impacto a batería: 6 modelos para coche y bricolaje`

Meta description final:

`Comparamos 6 llaves de impacto a batería para coche y bricolaje: par de apriete y desapriete, control, batería, peso y tipo de uso.`

## Productos y ASIN

- Bosch GDS 18V-450 HC — `B0BGBQSHPK`
- Ryobi RIW18BL-0 — `B0DDKX9TQ1`
- Einhell IMPAXXO 18/450 — `B09VPV3NZD`
- Makita DTW700Z — `B08HN48666`
- DeWalt DCF891NT-XJ — `B0B3N6WM34`
- Milwaukee M18 FMTIW2F12-0X — `B08TZRFZTR`

Tracking ID:

`ccc-llaveimpac-21`

## Datos normalizados

- Bosch: 450 Nm apriete / 800 Nm desapriete / 1,6 kg sin batería / 169 mm
- Ryobi: 700 / 900 Nm / 1,7 kg sin batería / 220 mm
- Einhell: 450 / 800 Nm / 2,0 kg sin batería / 205 mm
- Makita: 700 / 1000 Nm / 2,0 kg sin batería / 170 mm
- DeWalt: 812 / 1084 Nm / 1,67 kg sin batería / 175 mm
- Milwaukee: 745 / 881 Nm / 1,6 kg sin batería / 152 mm

Todos utilizan cuadradillo de 1/2".

## Decisiones editoriales

- separar siempre apriete y desapriete
- no asumir que más Nm significa automáticamente mejor producto
- no afirmar que una cifra garantiza aflojar cualquier fijación
- 450 Nm pueden ser suficientes para muchas aplicaciones habituales en turismos, pero no garantizan aflojar cualquier fijación
- comparar peso sin batería
- incluir longitud porque puede ser decisiva en espacios estrechos
- no dedicar columna al cuadradillo porque es idéntico en los seis
- no usar autonomía genérica no comparable
- priorizar diferencias reales en “La elegiría si…”
- plataforma de batería como criterio secundario
- tono editorial natural
- byline de Compra con Sentido
- aviso de afiliación global sin repetición superior

## Seguridad

La página explica que:

- una llave de impacto puede usarse para desmontar ruedas
- puede utilizarse para aproximar las tuercas
- el apriete final debe comprobarse con llave dinamométrica
- debe respetarse el par indicado por el fabricante del vehículo
- deben utilizarse vasos específicos para impacto
- no conviene usar habitualmente vasos cromados convencionales con impacto

## Tabla móvil

Estado definitivo:

- scroll horizontal
- aviso destacado
- **sin primera columna fija**
- toda la tabla se mueve conjuntamente

Commit:

`fcefa069ea59f5cf522bb9bab0e58dcc817fa62e`

## FAQ

Estado definitivo:

5 preguntas visibles:

1. Nm necesarios para ruedas
2. diferencia entre apriete y desapriete
3. uso de llave dinamométrica para apriete final
4. cuándo compensa comprar sin batería
5. cuadradillo habitual de 1/2"

`FAQPage` añadido y coincidente con el contenido visible.

No se añadió `Product` ni `Review` schema artificialmente.

Commit de cierre:

`640add485fc2858e6037c8a85ab0fc7b5160384a`

## Enlaces Amazon

Comprobación final:

- 12 enlaces Amazon
- 12 utilizan `ccc-llaveimpac-21`
- 12 llevan `rel="nofollow sponsored"`

## Imágenes

Carpeta:

`/images/llaves-impacto/`

Archivos:

- `hero-llaves-impacto-ryobi.webp`
- `llave-impacto-bosch.webp`
- `llave-impacto-dewalt.webp`
- `llave-impacto-einhell.webp`
- `llave-impacto-makita.webp`
- `llave-impacto-milwaukee.webp`
- `llave-impacto-ryobi.webp`
- `llave-impacto-rueda-dinamometrica.webp`
- `vasos-impacto-cuadradillo-media-pulgada.webp`

Hero definitivo:

imagen contextual Ryobi con overlay verde y texto HTML.

## Revisión técnica final

Comprobado:

- title
- meta description
- canonical
- un único H1
- Open Graph
- Article schema
- BreadcrumbList
- breadcrumbs visibles
- byline editorial
- enlaces afiliados correctos
- FAQ visible
- FAQPage

La página se considera cerrada.

---

# 24. Páginas y contenidos existentes

Existen contenidos en los clusters:

- Herramientas
- Hogar
- Impresión 3D

Entre las páginas trabajadas se encuentran:

- taladros a batería
- gatos hidráulicos
- llaves de impacto
- aspiradoras / robots aspiradores
- deshumidificadores
- impresoras 3D
- filamentos 3D
- accesorios 3D

El estado exacto de cada URL debe contrastarse con GitHub antes de hacer cambios, ya que GitHub es la fuente de verdad del código.

---

# 25. Herramientas SEO

No contratar inicialmente:

- Semrush
- Ahrefs
- Sistrix
- DinoRank

Utilizar primero:

- Google
- Search Console
- Google Trends
- Keyword Planner
- Bing Webmaster Tools
- SERP
- autocomplete
- búsquedas relacionadas
- Reddit y foros cuando aporten información
- análisis manual

Reconsiderar herramientas de pago cuando tráfico o ingresos justifiquen el coste.

---

# 26. Costes

Costes fijos iniciales:

- dominio `.es`: 6,95 € + IVA/año según tarifa contratada
- Cloudflare Pages: 0 €
- Cloudflare DNS: 0 €
- Cloudflare CDN: 0 €
- SSL/HTTPS: 0 €
- GitHub: 0 €
- Search Console: 0 €
- Bing Webmaster Tools: 0 €

El coste fijo inicial es esencialmente el dominio.

---

# 27. Organización del proyecto en ChatGPT

Proyecto específico:

**Compra con Sentido**

Chats:

- `00 - MASTER y dirección`
- `01 - Dominio + Cloudflare + GitHub`
- `02 - SEO + Keywords + Arquitectura`
- `03 - Diseño + Plantilla web`
- `04 - Migración páginas actuales`
- `05 - Search Console + SEO real`

Estado actual de uso:

- 00: trabajado
- 01: trabajado
- 02: sin trabajo relevante hasta ahora
- 03: trabajado ampliamente
- 04: sin trabajo relevante hasta ahora
- 05: trabajado

Funciones:

- 00: decisiones globales, estrategia y MASTER
- 01: infraestructura y publicación
- 02: SERP, clusters, keywords y arquitectura
- 03: diseño global, HTML, CSS, componentes y responsive
- 04: migración/integración de contenidos existentes
- 05: Search Console, indexación y optimización basada en datos reales

Norma:

Avisar al usuario cuando sea conveniente continuar una fase en otro chat.

---

# 28. Decisiones cerradas

- Marca definitiva: Compra con Sentido.
- Dominio definitivo: `compraconsentido.es`.
- Dominio canónico sin `www`.
- `www` redirige mediante 301 al dominio raíz.
- GitHub es la fuente definitiva del código.
- Cloudflare Pages es el hosting.
- Cloudflare gestiona DNS, CDN y HTTPS.
- Mantener infraestructura estática siempre que sea posible.
- TLS mínimo 1.2.
- HSTS desactivado por ahora.
- No usar Google Drive como servidor permanente de imágenes.
- No usar `pages.dev` como URL pública o canónica.
- Search Console principal: propiedad de dominio `compraconsentido.es`.
- No modificar DNS o sitemap sin una razón concreta si Google funciona correctamente.
- Amazon España es el destino principal de monetización inicial.
- Verificar ASIN y variante antes de publicar.
- No mostrar precios fijos si no se actualizan de forma fiable.
- No afirmar pruebas físicas inexistentes.
- Investigar primero fuentes oficiales y ampliar a fuentes secundarias fiables cuando falten datos.
- Separar magnitudes técnicas que no sean equivalentes.
- No crear nuevas URLs por simples variaciones de keyword sin datos o SERP que lo justifiquen.
- Breadcrumbs visibles en todas las páginas salvo la home.
- Revisar navegación global cuando una nueva página deba aparecer en el menú.
- Llaves de impacto: página cerrada y publicada.
- Tabla móvil de llaves de impacto: sin columna fija.

---

# 29. Pendientes actuales

## SEO / Search Console

- [ ] Esperar a que `Indexación > Páginas` termine de procesar los datos. El sitemap actual contiene 20 URLs; Search Console mostraba 19 descubiertas en su última lectura confirmada del 29/09.
- [ ] Revisar páginas indexadas y excluidas.
- [ ] Analizar consultas e impresiones cuando haya datos suficientes.
- [ ] Detectar oportunidades en posiciones 8-20.
- [ ] Revisar Core Web Vitals con datos reales.
- [ ] Configurar Bing Webmaster Tools.

## Contenido

- [ ] Continuar keyword research del cluster Herramientas.
- [x] Priorizar amoladoras a batería 125 mm como siguiente página.
- [x] Cerrar selección de modelos, variantes y ASIN para `/herramientas/amoladoras-a-bateria/`.
- [x] Preparar tabla técnica normalizada, estructura editorial, FAQ y enlazado interno de `/herramientas/amoladoras-a-bateria/`.
- [ ] Redactar y revisar la comparativa de `/herramientas/amoladoras-a-bateria/` antes de cualquier publicación.
- [ ] Investigar sierras circulares a batería.
- [ ] Investigar plataformas de herramientas/baterías 18 V.
- [ ] Analizar arquitectura para hidrolimpiadoras de coche.
- [ ] Definir progresivamente las primeras 20-30 URLs de alta calidad.
- [ ] No crear todavía variantes específicas de gatos/taladros sin evidencia SEO.

## Sitio y transparencia

- [ ] Crear o completar `/metodologia/`.
- [ ] Revisar estructura legal de privacidad/cookies/afiliación.
- [ ] Mantener `/sobre-nosotros/` y firma editorial coherentes.
- [ ] Revisar página 404 y demás elementos técnicos globales cuando corresponda.

## Infraestructura

- [ ] Comprobar renovación automática del dominio.
- [ ] Mantener HSTS desactivado hasta nueva decisión.
- [ ] Mantener vigilancia sobre reglas de bots de Cloudflare antes de reactivar bloqueo de entrenamiento.

---


## Saneamiento técnico/editorial realizado el 30/09/2026

Tras auditar las 19 páginas anteriores a `/herramientas/llaves-de-impacto/`, se aplicaron directamente en `main` correcciones globales que no requerían decisión editorial adicional:

- corregido el menú de `/herramientas/taladros-a-bateria/` para incluir `Llaves de impacto`
- eliminado el aviso superior de afiliación duplicado en la comparativa de gatos hidráulicos
- eliminado el aviso superior de afiliación duplicado en la comparativa de taladros
- sustituido el bloque superior de transparencia de robots aspiradores por una explicación positiva de metodología
- sustituido el bloque superior de transparencia de impresoras 3D por una explicación positiva de metodología
- reformuladas las frases defensivas sobre pruebas físicas en gatos y deshumidificadores
- eliminadas las referencias a precios observados en la comparativa de taladros, sustituyéndolas por `Consulta el precio y la disponibilidad actuales en Amazon`
- añadido el aviso móvil `← Desliza la tabla para ver todas las columnas →` a las tablas existentes de taladros, robots aspiradores, deshumidificadores e impresoras 3D
- añadido estilo global reutilizable para ese aviso de desplazamiento
- añadido `FAQPage` donde ya existían FAQ visibles y coincidentes: gatos hidráulicos, taladros, robots aspiradores e impresoras 3D
- actualizado `lastmod` a 30/09/2026 para las páginas modificadas
- confirmado que el repositorio real y activo es `SuperSergi/compra-con-sentido`

Commits principales del saneamiento:
- `ada1669e760394250258a8f95e6c92796274915b` — estilo global para tablas móviles
- `53ef383935717e1130735edeb10d70c9bf1b9e08` — menú de taladros
- `85c00d0a939a3e4f5b513dd7cdab78e46caac3dd` — gatos hidráulicos
- `ede49344afebe3e0e6da876c298ce9594da00ef3` — taladros
- `7fb34337b241f5a594b78dbb9f24adcc6de1d7a7` — robots aspiradores
- `20327b1ece72c1497a7773f18abe42ffa843424f` — deshumidificadores
- `f8bc6ed7c9f5182fdbef0476fe50da0a8d24c9e3` — impresoras 3D
- `1d9cb85f80111668e9378ce3556b4e05d6910988` — sitemap `lastmod`

Queda pendiente la revisión de producto con el estándar nuevo, empezando por gatos hidráulicos:
`Amazon.es → ASIN → variante exacta → fabricante → documentación oficial → especificaciones comparables → cuerpo/kit/accesorios → disponibilidad → discrepancias`.

Primeras comprobaciones de gatos realizadas:
- BGS 2889 confirmado en fabricante oficial: 2,5 t, 100 mm de altura mínima, 460 mm máxima, construcción aluminio/acero y doble pistón
- Einhell CC-TJ 2000 confirmado en fabricante oficial: 2 t, 135 mm mínima y 330 mm máxima
- no modificar el resto de modelos hasta cerrar sus fuentes y variantes exactas

---

# 30. Regla de mantenimiento del MASTER

Este documento es la referencia consolidada del proyecto.

Actualizarlo cuando:

- cambie infraestructura
- se compre o contrate algo
- se publique una URL
- se cierre una decisión SEO
- aparezca un problema importante
- se complete una tarea
- cambie una norma
- se incorpore una herramienta
- se modifique arquitectura
- se cierre una comparativa

Cuando una información antigua contradiga una decisión posterior, prevalece el **estado más reciente confirmado**.

GitHub sigue siendo la fuente definitiva del código publicado.

Cuando Sergio responda `ok`, `vale`, `dale`, `sigue` o equivalente después de que el siguiente paso haya quedado claramente definido, se considera autorización para ejecutarlo sin volver a pedir confirmación.

### Norma de avance autónomo

ChatGPT debe avanzar por su cuenta en todo lo que pueda completar de forma segura, reversible y coherente con las decisiones ya cerradas, sin esperar a Sergio entre pasos. Puede encadenar revisión, investigación, correcciones técnicas, actualización de código, documentación y comprobaciones mientras no requiera una decisión nueva del usuario ni una acción externa que solo Sergio pueda realizar.

Debe ir informando al final de cada bloque o hito relevante de lo que ha hecho, qué ha cambiado, qué queda pendiente y cuál es el siguiente paso lógico, pero esa explicación no debe implicar detener el trabajo si puede continuar de forma autónoma.

Solo debe parar y pedir intervención cuando necesite realmente a Sergio. En ese caso, el mensaje debe ser explícito y accionable, indicando claramente: `Necesito que tú hagas esto:` seguido de la acción o acciones concretas necesarias, sin ambigüedades. Una vez Sergio complete esa intervención, ChatGPT debe continuar automáticamente desde el punto pendiente sin volver a pedir confirmación si el siguiente paso ya está definido.

---

## Actualización adicional 30/09/2026 — cierre de comparativas antiguas y auditoría UX global

Se completó la revisión técnica principal de las cinco comparativas antiguas con el estándar nuevo:

- Gatos hidráulicos: seis modelos contrastados; Tarpofix 3T quedó verificado en fuente directa con 3 t, 85–475 mm, doble cilindro, acero, plato de 110 mm y 31 kg. Comparativa cerrada sin cambios de producto.
- Taladros a batería: seis modelos y variantes revisados; la promesa comercial de “menos de 200 €” seguía siendo válida a 30/09/2026, con DeWalt como modelo más cercano al límite. Comparativa cerrada técnicamente.
- Robots aspiradores: especificaciones principales de los seis modelos contrastadas; se eliminaron recuentos de valoraciones y frases basadas en popularidad de Amazon para hacer el contenido más atemporal. La tabla pasó de “Valoraciones observadas” a “Ideal para”.
- Deshumidificadores: seis modelos contrastados. Se detectó discrepancia de conectividad en Midea DF20 entre ficha comercial y documentación oficial; se dejó explícita sin inventar el dato. Se mejoró la explicación sobre condiciones de ensayo y superficies máximas.
- Impresoras 3D: seis modelos contrastados con documentación oficial; no se detectaron errores técnicos relevantes. Se mantuvo en Flashforge AD5X la distinción correcta entre velocidad de impresión y desplazamiento.

### Auditoría UX / navegación

Se detectaron y corrigieron varios problemas globales:

- los breadcrumbs visibles estaban fuera del hero en varias páginas, sobre fondo blanco; el estilo global se cambió para integrarlos sobre el hero
- se eliminaron duplicados de navegación donde la categoría y “Cómo elegir…” apuntaban a la misma URL en Gatos, Taladros, Impresoras 3D, Aspiradoras y Deshumidificadores
- se añadieron breadcrumbs visibles a las páginas que carecían de ellos, manteniendo la home sin migas
- se unificó la página de Llaves de impacto con el sistema global de breadcrumbs
- se actualizó el CTA corto “Ver en Amazon” de la tabla de Llaves de impacto a “Ver precio en Amazon”
- se añadió aviso móvil de desplazamiento horizontal a la tabla de Filamentos 3D
- se actualizó la versión de `style-v4.css` y `main-v4.js` en todas las páginas a `?v=20260930-2` para evitar caché antigua de navegador/Cloudflare
- se actualizaron fechas editoriales y `lastmod` cuando correspondía tras las revisiones

Commits destacados de esta fase:

- `3405d75841dde4140e17f90beb2f59d1460fe527` — limpieza de submenús duplicados
- `a73cff472aaa2d214b31bcfdac2c6b66c5c1af96` — breadcrumbs integrados sobre el hero
- `0dec4b889013d6a8d09c1a2ac73d21fd2df3cb68` — robots aspiradores más atemporal
- `a36339b6db6c9c98c07efededd1dac1f98b26e2c` — revisión técnica de deshumidificadores
- `b0bb9ba2586e45a93588ec3bcc4d90f6166d6fa2` — revisión de impresoras 3D
- `b0e0c2b6cb9382a596e4dc5ece686dc4899b4c88` — breadcrumbs y CTA de Llaves de impacto
- `8af15a7d092b0b1dc4cbb7bd2a2c95b665bd930f` — aviso móvil en tabla de Filamentos 3D
- `29ceecd40935c6520189e7c13f170ce0e36753a0` — actualización de `lastmod` tras ajustes UX

Estado al cierre de esta fase:

- las cinco comparativas antiguas ya han pasado la revisión técnica principal
- la navegación y breadcrumbs están mucho más homogeneizados
- queda pendiente una comprobación visual final en producción, especialmente en móvil y escritorio, y después crear `/metodologia/`


---

## Actualización 30/09/2026 — publicación de `/metodologia/` y conexión GSC Wizard

Se publicó la nueva página:

- `https://compraconsentido.es/metodologia/`

Objetivo de la página:

- explicar de forma transparente cómo se elaboran guías y comparativas
- detallar el orden de fuentes: fabricante → manuales/documentación → fuentes especializadas → contraste de discrepancias
- explicar cómo se identifican variantes exactas, ASIN y contenido del paquete
- aclarar que no se presenta como prueba física un análisis que no haya implicado uso directo del producto
- explicar cómo se tratan Amazon Afiliados, disponibilidad y precios cambiantes
- dejar claro que las comparativas priorizan diferencias reales, perfiles de uso y magnitudes equivalentes frente a rankings universales
- explicar el criterio de actualización editorial y que no se cambia una fecha sin revisión o cambio real

Cambios asociados:

- creada `metodologia/index.html`
- creada `css/metodologia.css`
- añadido enlace visible a `Metodología` en el footer de todas las páginas actuales
- añadido enlace contextual desde `/sobre-nosotros/`
- añadida `/metodologia/` al sitemap con `lastmod` 30/09/2026

Commits principales:

- `2a65f1050ebb3828e07f9a2a6874225d7a06a5ba` — publicación HTML de Metodología
- `d75c1fb7a07b0f1989a4e9f2009046f745ff149f` — estilos de Metodología
- `f6bf2a26debe39295e5fd6f573de5cf5323e8293` — Metodología añadida al sitemap
- `3b6cf57e527430fc5260e407f8910173e929059f` — enlace contextual desde Sobre el proyecto

### Search Console / GSC Wizard

El 30/09/2026 se conectó en GSC Wizard la propiedad real:

- `sc-domain:compraconsentido.es`
- permiso confirmado: `siteOwner`
- etiqueta: `Compra con Sentido`

Estado de datos al consultar el 30/09/2026:

- datos asentados hasta 27/09/2026
- 0 clics
- 0 impresiones
- sin consultas ni páginas con datos todavía en el periodo disponible

Estado del sitemap en Search Console antes de reenviarlo:

- `https://compraconsentido.es/sitemap.xml`
- sin errores
- sin warnings
- 20 URLs detectadas en la última descarga anterior
- 0 indexadas reportadas en ese momento
- última descarga observada: 30/09/2026 11:30 UTC aprox.

Tras publicar `/metodologia/`, se volvió a enviar el sitemap mediante Search Console:

- envío aceptado y confirmado
- estado inmediato: pendiente de nueva descarga
- el nuevo sitemap contiene 21 URLs

No interpretar el dato de 0 indexadas como estado definitivo hasta que Google vuelva a descargar y procesar el sitemap actualizado.

### Siguiente fase

Con el saneamiento técnico/editorial y `/metodologia/` ya cerrados, el siguiente bloque de trabajo pasa a ser:

1. comprobar que Google vuelve a descargar el sitemap actualizado y que reconoce las 21 URLs
2. revisar indexación real de las URLs principales
3. esperar datos de consultas reales en Search Console
4. cuando existan impresiones, priorizar oportunidades aproximadamente en posiciones 8–20
5. decidir optimizaciones o nuevas URLs solo a partir de intención real, SERP, canibalización y potencial comercial

Mientras Search Console todavía no tenga datos de consultas, evitar crear nuevas URLs por inercia. Se puede avanzar en comprobaciones técnicas, enlazado interno, indexación y preparación de arquitectura, pero las nuevas comparativas deben seguir el flujo SEO estratégico definido en este MASTER.


## Norma de versionado del MASTER

- Cada actualización del MASTER debe incluir también la hora local de actualización en formato `DD/MM/YYYY HH:MM` para que sea fácil identificar cuál es la versión más reciente subida al proyecto.
- Última actualización de esta versión: 30/09/2026 21:55.

---

# 30. Estado de indexación real · 30/09/2026 18:49

Se ha revisado mediante URL Inspection el estado real de las 21 URLs incluidas en el sitemap.

## Sitemap

- `https://compraconsentido.es/sitemap.xml`
- 21 URLs enviadas
- última descarga observada: 30/09/2026 16:24 UTC aprox.
- 0 warnings
- 0 errors
- el informe agregado del sitemap todavía muestra 0 indexadas, pero este dato va con retraso y no coincide aún con la inspección URL por URL.

## URLs confirmadas como indexadas

Google devuelve `Submitted and indexed`, con rastreo móvil y acceso permitido, para:

- `/`
- `/herramientas/`
- `/herramientas/gatos-hidraulicos/`
- `/herramientas/gatos-hidraulicos/mejores-gatos-hidraulicos-para-coche/`
- `/herramientas/taladros-a-bateria/`
- `/herramientas/taladros-a-bateria/mejores-taladros-a-bateria/`
- `/herramientas/llaves-de-impacto/`
- `/hogar/`
- `/hogar/aspiradoras/`
- `/hogar/aspiradoras/mejores-robots-aspiradores/`
- `/hogar/deshumidificadores/cuantos-litros-deshumidificador-metros-cuadrados/`
- `/impresion-3d/`
- `/impresion-3d/impresoras-3d/mejores-impresoras-3d/`
- `/sobre-nosotros/`
- `/aviso-legal/`

Total confirmado por inspección: **15 URLs indexadas**.

## URLs descubiertas pero todavía no indexadas

- `/hogar/deshumidificadores/`
- `/hogar/deshumidificadores/mejores-deshumidificadores/`
- `/impresion-3d/filamentos-3d/`

Estado: `Discovered - currently not indexed`.

## URLs todavía desconocidas para Google

- `/impresion-3d/impresoras-3d/`
- `/impresion-3d/accesorios-3d/`
- `/metodologia/`

Estado: `URL is unknown to Google`.

## Interpretación

La indexación general es mucho mejor de lo que muestra todavía el contador agregado del sitemap: 15 de 21 URLs ya están confirmadas individualmente como indexadas.

No hay indicios de bloqueo por robots en las URLs indexadas. Las seis pendientes son coherentes con una web nueva y con páginas publicadas o modificadas recientemente.

No realizar cambios agresivos ni crear nuevas URLs solo para intentar forzar indexación. Mantener sitemap correcto, enlazado interno y contenido estable, y volver a revisar estas seis URLs cuando Google haya tenido tiempo de rastrearlas.

## Siguiente acción

- vigilar las 6 URLs pendientes
- comprobar cuándo pasan a rastreadas/indexadas
- revisar el informe agregado del sitemap cuando se actualice
- esperar las primeras impresiones y consultas reales en Search Console antes de decidir nuevas páginas por datos
