# Emmanuel™ — Dios con Nosotros
### MVP fundacional — Digital Experience Platform

Desarrollado por **RGS Labs™** bajo el sistema **RGS Web Architect™**, siguiendo los lineamientos de:
- **Volumen I** — Emmanuel Project Context (filosofía, marca, sistema de diseño y motion system)
- **Volumen II** — RGS Web Architect™ Master Operating Manual (estándares de ingeniería)

---

## 1. Propósito

Esta es la primera entrega de Emmanuel: no es una landing page ni un sitio de "escaparate". Es la **base arquitectónica** sobre la que crecerá la plataforma completa (CMS, devocionales, estudios bíblicos, podcasts, comunidad, donaciones, cuentas de usuario, app móvil) sin necesidad de reconstruir nada desde cero.

## 2. Tecnologías usadas

- HTML5 semántico
- CSS3 (variables nativas — sin preprocesadores ni frameworks, sin build tools)
- JavaScript Vanilla (ES6+, sin dependencias externas)
- Google Fonts: `Cormorant Garamond` (display) + `Inter` (cuerpo/UI)
- Hosting: GitHub Pages

No requiere `npm install`, build step, ni backend. Es 100% estático — se sube tal cual al repositorio.

## 3. Estructura del proyecto

```
Emmanuel-Dios-con-Nosotros-Website-/
│
├── index.html              → Página principal (todas las escenas del MVP)
├── css/
│   └── styles.css          → Design Tokens + Motion System + componentes
├── js/
│   └── main.js              → Sistema bilingüe ES/EN, scroll reveal, navegación
├── img/
│   └── ASSETS_REQUIRED.md   → Checklist exacto de imágenes pendientes y sus rutas
├── favicon/
│   └── site.webmanifest     → Manifest PWA-ready
├── robots.txt
├── sitemap.xml
└── README.md
```

## 4. Pendiente antes de publicar (checklist)

- [ ] Subir logo y favicon reales a `/favicon` con estos nombres:
  `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png`
  *(Puedes generarlos gratis en [realfavicongenerator.net](https://realfavicongenerator.net) a partir de tu PNG.)*
- [ ] Subir fotografías reales según `img/ASSETS_REQUIRED.md`
- [ ] Confirmar URL final de GitHub Pages y actualizar `<link rel="canonical">` en `index.html` y las URLs en `robots.txt` / `sitemap.xml` si cambia el nombre del repo

## 4b. Sistema de Blog + Roles (Supabase) — cómo activarlo

Esto le da a Emmanuel artículos reales (no solo "próximamente") con un panel donde tú y las personas que autorices pueden escribir y publicar.

**Un solo momento, hazlo en este orden:**

1. Abre `sql/schema.sql`, reemplaza `TU_CORREO_AQUI@ejemplo.com` por tu correo real, y corre TODO el archivo en tu proyecto de Supabase → **SQL Editor → New query → Run**.
2. Sube estos archivos nuevos a tu repo junto con el resto: `admin/login.html`, `admin/index.html`, `articulos.html`, `articulo.html`, `js/supabase-client.js`.
3. Entra a `tusitio.com/admin/login.html` → clic en **"Crea tu cuenta"** → regístrate con el **mismo correo** que pusiste en el paso 1. Ese correo queda como **super_admin** automáticamente.
4. Ya puedes escribir tu primer artículo desde el panel. En cuanto lo publiques, aparece solo en `articulos.html` y reemplaza automáticamente las 3 tarjetas de ejemplo en la sección "Devocionales" del home — sin tocar código.

**Para dar acceso a alguien más (ej. Leo) como admin (no super_admin):**
1. Esa persona debe entrar a `/admin/login.html` y crear su cuenta una vez (quedará sin permisos todavía).
2. Tú corres `sql/promote_admin.sql` en el SQL Editor de Supabase con su correo — listo, ya puede escribir y publicar. No puede borrar artículos ni dar acceso a nadie más; eso se quedó exclusivo para ti.

**Seguridad:** la `anon key` que está en `js/supabase-client.js` es segura de tener pública — así está diseñado Supabase. La protección real vive en las políticas de Row Level Security del `schema.sql` (quién puede leer/escribir/borrar qué).

## 5. Cómo publicar en GitHub Pages

1. Sube todos estos archivos a la raíz del repositorio `Emmanuel-Dios-con-Nosotros-Website-`.
2. Ve a **Settings → Pages**.
3. En **Source**, selecciona la rama `main` y carpeta `/root`.
4. Guarda — GitHub te dará la URL pública en 1–2 minutos.

## 6. Sistema bilingüe

El idioma se detecta automáticamente por el navegador del visitante (ES por defecto) y se puede cambiar manualmente con el switch ES/EN en la barra de navegación. La preferencia se recuerda en visitas futuras (`localStorage`). Todo el diccionario vive en `js/main.js` — para editar textos, se cambia ahí, no en el HTML.

## 7. Sistema de diseño y motion

Todos los colores, tipografías, espaciados, radios y animaciones están tokenizados como variables CSS en la parte superior de `css/styles.css` — nunca hardcodeados en los componentes. Las animaciones de scroll usan `IntersectionObserver` y respetan `prefers-reduced-motion` en todo el sitio (accesibilidad tiene prioridad sobre estética, como indica el Volumen I §5.9).

## 8. Mantenimiento y escalabilidad

- Cada escena es una `<section>` independiente — se pueden agregar, quitar o reordenar sin romper las demás.
- Los componentes (botones, cards, badges) están definidos una sola vez en CSS y se reutilizan en todo el sitio.
- Cuando se agregue backend (formularios, CMS, cuentas), se recomienda mantener el frontend actual y conectar vía API — no reescribirlo.

## 9. Contacto del estudio

**RGS Labs™** — *Local-first. Fast. Professional.*
