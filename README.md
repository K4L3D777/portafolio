# Kaled Sandoval · Portafolio y blog

¡Bienvenido! Este es mi espacio personal para compartir proyectos de desarrollo, ensayos universitarios y artículos sobre programación y ciencia de datos. También reúne mi formación académica y las formas de contactarme.

**[Visita el sitio →](https://kaledsandoval.vercel.app)**

## Qué encontrarás

- **Proyectos:** una selección de trabajos con enlaces y contenido multimedia.
- **Blog:** artículos escritos en Markdown, ordenados del más reciente al más antiguo.
- **Formación académica:** una línea de tiempo con estudios y cursos.
- **Contacto:** enlaces para conectar conmigo y conocer más de mi trabajo.

## Tecnologías

El sitio está construido con **Astro** y utiliza **Tailwind CSS** para los estilos. Los artículos se gestionan mediante colecciones de contenido de Astro, con validación de sus metadatos. Incluye estilos de lectura con Tailwind Typography, metadatos para buscadores y redes sociales, y generación de sitemap.

## Desarrollo local

Necesitas **Node.js 22.12.0 o superior** y **npm**. Desde la raíz del proyecto, instala las dependencias:

```sh
npm install
```

Inicia el servidor de desarrollo en segundo plano:

```sh
npm run dev -- --background
```

Consulta la dirección local y administra el servidor con:

```sh
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

Para generar la versión de producción y previsualizarla:

```sh
npm run build
npm run preview
```

La compilación genera el sitio en `dist/`.

## Estructura del proyecto

```text
public/                         Iconos y archivos estáticos
src/
├── components/                 Cabecera, tarjetas, formación y contacto
├── layouts/BlogPostLayout.astro Diseño compartido de los artículos
├── pages/
│   ├── index.astro             Portada del portafolio y blog
│   └── posts/[id].astro        Página de cada artículo
├── posts/                      Artículos en Markdown
├── styles/global.css           Estilos globales
└── content.config.js           Colección de artículos y sus metadatos
astro.config.mjs                Configuración de Astro, Tailwind y sitemap
```

## Publicar un artículo

Crea un archivo `.md` en `src/posts/` con estos metadatos al inicio:

```markdown
---
title: "Título del artículo"
description: "Una descripción breve del contenido."
author: "Kaled Sandoval"
date: "2026-10-01"
---

## Introducción

Escribe aquí el contenido del artículo.
```

Los cuatro campos son obligatorios. Astro incorpora el artículo a la colección y la portada lo muestra según su fecha. Usa un nombre descriptivo para el archivo, por ejemplo `mi-nuevo-articulo.md`.

Para actualizar la portada y sus proyectos, edita `src/pages/index.astro`. La formación está en `src/components/Timeline.astro`, y los enlaces de contacto en los componentes `Header.astro` y `Contact.astro`.

## Conecta conmigo

- [GitHub · K4L3D777](https://github.com/K4L3D777)
- [LinkedIn · Kaled Sandoval](https://linkedin.com/in/kaled-sandoval-b6a97419b/)

Gracias por pasar por aquí. Puedes explorar el código, leer los artículos o compartir sugerencias para seguir mejorando este espacio.
