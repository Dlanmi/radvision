/* Animaciones de entrada con GSAP + ScrollTrigger. Se respetan las preferencias de movimiento reducido. */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);

const html = document.documentElement;
// `?static` desactiva las animaciones (útil para revisar capturas).
const reducido =
  matchMedia('(prefers-reduced-motion: reduce)').matches || new URLSearchParams(location.search).has('static');
const EASE = 'expo.out';

export function listo() {
  html.classList.add('motion-ready');
}

function revelar() {
  // Titulares que suben línea a línea desde una máscara.
  gsap.utils.toArray<HTMLElement>('[data-split]').forEach((el) => {
    const split = SplitText.create(el, { type: 'lines', mask: 'lines', linesClass: 'split-line' });
    gsap.set(el, { opacity: 1 });
    gsap.from(split.lines, {
      yPercent: 105,
      duration: 1.15,
      ease: EASE,
      stagger: 0.08,
      delay: Number(el.dataset.delay ?? 0),
      scrollTrigger: el.hasAttribute('data-now') ? undefined : { trigger: el, start: 'top 90%', once: true },
    });
  });

  // Bloques que suben con fundido.
  gsap.utils.toArray<HTMLElement>('[data-reveal="up"]').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: EASE,
        delay: Number(el.dataset.delay ?? 0),
        scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      },
    );
  });

  // Contenedores cuyos hijos entran en cascada.
  gsap.utils.toArray<HTMLElement>('[data-reveal="stagger"]').forEach((el) => {
    gsap.set(el, { opacity: 1 });
    gsap.fromTo(
      el.children,
      { opacity: 0, y: 22 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: EASE,
        stagger: Number(el.dataset.stagger ?? 0.06),
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      },
    );
  });

  // Líneas que se dibujan de izquierda a derecha.
  gsap.utils.toArray<HTMLElement>('[data-reveal="line"]').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 1, scaleX: 0, transformOrigin: '0 50%' },
      { scaleX: 1, duration: 1.4, ease: 'expo.inOut', scrollTrigger: { trigger: el, start: 'top 95%', once: true } },
    );
  });

  // Esquemas técnicos que se trazan al entrar en pantalla.
  const trazar = (svg: Element) => {
    const lineas = Array.from(svg.querySelectorAll('path, rect, circle, line')).filter((n) => !n.closest('.beam, .dim'));
    gsap.fromTo(lineas, { drawSVG: '0%' }, { drawSVG: '100%', duration: 1.4, ease: 'power2.inOut', stagger: 0.012, overwrite: true });
    // El haz y las cotas son punteados: aparecen con fundido para conservar el trazo.
    gsap.from(svg.querySelectorAll('.beam, .dim'), { opacity: 0, duration: 0.5, delay: 1, clearProps: 'opacity' });
  };
  gsap.utils.toArray<SVGElement>('[data-draw]').forEach((svg) => {
    ScrollTrigger.create({ trigger: svg, start: 'top 88%', once: true, onEnter: () => trazar(svg) });
  });
  // Al mostrar la vista de esquema en una figura, se vuelve a trazar.
  document.addEventListener('fig:mostrar', (e) => {
    const svg = (e.target as HTMLElement).querySelector('[data-draw]');
    if (svg) trazar(svg);
  });
  // Miniaturas que se redibujan al pasar el cursor por su fila o tarjeta.
  if (matchMedia('(hover: hover)').matches) {
    document.querySelectorAll<HTMLElement>('[data-redraw]').forEach((zona) => {
      const svg = zona.querySelector('svg.schematic');
      if (svg) zona.addEventListener('mouseenter', () => trazar(svg));
    });
  }

  // Contadores numéricos: respetan prefijos (<, >, −) y decimales.
  gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
    const texto = el.textContent ?? '';
    const m = texto.match(/^(\D*?)(\d+(?:[.,]\d+)?)(.*)$/);
    if (!m) return;
    const [, pre, num, post] = m;
    const sep = num.includes(',') ? ',' : '.';
    const decimales = num.split(/[.,]/)[1]?.length ?? 0;
    const fin = parseFloat(num.replace(',', '.'));
    const entero = num.split(/[.,]/)[0];
    const ancho = entero.length > 1 && entero.startsWith('0') ? entero.length : 0;
    const fmt = (v: number) => {
      const [e, d] = v.toFixed(decimales).split('.');
      return (ancho ? e.padStart(ancho, '0') : e) + (d ? sep + d : '');
    };
    if (!isFinite(fin) || fin === 0) return;
    const obj = { v: 0 };
    el.textContent = `${pre}${fmt(0)}${post}`;
    gsap.to(obj, {
      v: fin,
      duration: 1.6,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      onUpdate: () => {
        el.textContent = `${pre}${fmt(obj.v)}${post}`;
      },
    });
  });
}

function init() {
  if (reducido) {
    listo();
    return;
  }
  document.fonts.ready.then(() => {
    revelar();
    listo();
    ScrollTrigger.refresh();
  });
}

init();

export { gsap, ScrollTrigger, reducido };
