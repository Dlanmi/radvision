# RadVision — Inteligencia artificial en imagen diagnóstica

Dominio: [radvision.site](https://radvision.site)

Sitio web del proyecto formativo **«Lista detallada de herramientas de IA»** del SENA
(Tecnología en Radiología e Imágenes Diagnósticas · código 321311 · ficha 3316554).

Catálogo de 32 equipos (8 modalidades × 4 fabricantes), el software AI-Rad Companion y las
plataformas de orquestación de IA, con comparador, buscador y glosario.

## Tecnologías

- [Astro 7](https://astro.build) con TypeScript estricto (sitio estático)
- Tailwind CSS 4
- GSAP (ScrollTrigger, SplitText, DrawSVG) para las animaciones
- Tipografías: Poppins (títulos), Inter Tight (texto) e IBM Plex Mono (etiquetas) (alojadas localmente con Fontsource)

## Comandos

```bash
npm install      # instalar dependencias (solo la primera vez)
npm run dev      # servidor de desarrollo en http://localhost:4321
npm run build    # genera el sitio final en la carpeta dist/
npm run preview  # previsualiza la versión final
npx astro check  # revisión de tipos TypeScript
```

## Dónde está cada cosa

| Qué quieres cambiar | Archivo |
| --- | --- |
| Nombres de los aprendices, instructor, ficha | `src/data/proyecto.ts` |
| Los 32 equipos (textos, cifras, matriz) | `src/data/equipos/*.ts` |
| Modalidades y fabricantes | `src/data/catalogo.ts` |
| AI-Rad Companion (software) | `src/data/software.ts` |
| Orquestación (AGFA y otras) | `src/data/orquestacion.ts` |
| Glosario | `src/data/glosario.ts` |
| Colores, tipografía y estilos globales | `src/styles/global.css` |
| Dibujos técnicos de cada modalidad | `src/components/Schematic.astro` |

Todas las páginas se generan a partir de esos datos: si cambias un texto en un archivo de datos,
se actualiza en la ficha, el comparador, el buscador y las tablas a la vez.

## Notas

- Agregar `?static` a cualquier URL desactiva las animaciones (útil para tomar capturas).
- El sitio respeta la preferencia del sistema «reducir movimiento».
- Tema claro/oscuro con el botón del encabezado; se recuerda la elección.
- Buscador: `Ctrl K` / `⌘ K` o la tecla `/`.
