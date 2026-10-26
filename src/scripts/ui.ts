/* Interacciones globales: tema, menú móvil, buscador y glosario contextual. */

const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  root.querySelector<T>(sel);
const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(sel));

const normalizar = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

/* ── Volver arriba ────────────────────────────────────────────────── */
function initVolver() {
  const btn = $<HTMLButtonElement>('[data-volver]');
  if (!btn) return;
  btn.hidden = false;
  let pendiente = false;
  const actualizar = () => {
    pendiente = false;
    btn.classList.toggle('visible', scrollY > innerHeight * 1.5);
  };
  addEventListener(
    'scroll',
    () => {
      if (!pendiente) {
        pendiente = true;
        requestAnimationFrame(actualizar);
      }
    },
    { passive: true },
  );
  btn.addEventListener('click', () => {
    const suave = !matchMedia('(prefers-reduced-motion: reduce)').matches;
    scrollTo({ top: 0, behavior: suave ? 'smooth' : 'auto' });
  });
  actualizar();
}

/* ── Tema ─────────────────────────────────────────────────────────── */
function initTema() {
  $('[data-theme-toggle]')?.addEventListener('click', () => {
    const html = document.documentElement;
    const nuevo = html.dataset.theme === 'dark' ? 'light' : 'dark';
    html.dataset.theme = nuevo;
    try {
      localStorage.setItem('tema', nuevo);
    } catch {}
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', nuevo === 'dark' ? '#0f110f' : '#f1f0eb');
  });
}

/* ── Menú móvil ───────────────────────────────────────────────────── */
function initMenu() {
  const btn = $<HTMLButtonElement>('[data-menu-toggle]');
  const menu = $('[data-menu]');
  if (!btn || !menu) return;

  const abrir = (si: boolean) => {
    btn.setAttribute('aria-expanded', String(si));
    menu.hidden = !si;
    document.documentElement.classList.toggle('menu-abierto', si);
    document.body.style.overflow = si ? 'hidden' : '';
    if (si) {
      const items = $$('[data-menu-item]', menu);
      items.forEach((el, i) => {
        el.animate(
          [
            { opacity: 0, transform: 'translateY(14px)' },
            { opacity: 1, transform: 'none' },
          ],
          { duration: 420, delay: 40 + i * 35, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'backwards' },
        );
      });
    }
  };

  btn.addEventListener('click', () => abrir(btn.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.hidden) abrir(false);
  });
  matchMedia('(min-width: 80rem)').addEventListener('change', (e) => e.matches && abrir(false));
}

/* ── Buscador ─────────────────────────────────────────────────────── */
interface Item {
  t: string;
  s: string;
  k: string;
  u: string;
  g: string;
}

function initBuscador() {
  const dlg = $<HTMLDialogElement>('[data-search]');
  const input = $<HTMLInputElement>('[data-search-input]');
  const lista = $('[data-search-results]');
  const cuenta = $('[data-search-count]');
  if (!dlg || !input || !lista || !cuenta) return;

  // El índice completo se descarga solo la primera vez que se abre el buscador.
  let items: (Item & { n: string; nt: string; ns: string })[] = [];
  let carga: Promise<void> | null = null;
  const cargar = () =>
    (carga ??= fetch('/indice.json')
      .then((r) => r.json())
      .then((datos: Item[]) => {
        items = datos.map((it) => ({
          ...it,
          nt: normalizar(it.t),
          ns: normalizar(it.s),
          n: normalizar(`${it.t} ${it.s} ${it.k}`),
        }));
      })
      .catch(() => {
        carga = null;
      }));

  const esMac = /Mac|iPhone|iPad/.test(navigator.platform);
  $$('[data-kbd]').forEach((k) => (k.textContent = esMac ? '⌘ K' : 'Ctrl K'));

  let sel = 0;
  let actuales: typeof items = [];

  const resaltar = (texto: string, q: string[]) => {
    let html = esc(texto);
    for (const palabra of q) {
      if (palabra.length < 2) continue;
      const nt = normalizar(texto);
      const i = nt.indexOf(palabra);
      if (i >= 0) {
        const orig = texto.slice(i, i + palabra.length);
        html = html.replace(esc(orig), `<mark>${esc(orig)}</mark>`);
      }
    }
    return html;
  };

  const pintar = () => {
    const q = normalizar(input.value.trim()).split(/\s+/).filter(Boolean);
    if (q.length === 0) {
      actuales = items.filter((i) => i.g === 'Modalidad' || i.g === 'Fabricante');
    } else {
      actuales = items
        .filter((i) => q.every((p) => i.n.includes(p)))
        .map((i) => {
          let score = 0;
          for (const p of q) {
            if (i.nt.startsWith(p)) score += 6;
            else if (i.nt.includes(p)) score += 4;
            else if (i.ns.includes(p)) score += 2;
          }
          if (i.g === 'Equipo') score += 1;
          return { i, score };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, 14)
        .map((x) => x.i);
    }
    sel = 0;
    lista.innerHTML = actuales
      .map(
        (it, idx) => `
        <li role="option" id="res-${idx}" class="res" aria-selected="${idx === sel}" data-url="${esc(it.u)}">
          <span class="truncate text-[1rem]">${resaltar(it.t, q)}</span>
          <span class="label self-center text-ink-3">${esc(it.g)}</span>
          <span class="truncate text-[0.8125rem] text-ink-3">${esc(it.s)}</span>
        </li>`,
      )
      .join('');
    cuenta.textContent =
      q.length === 0
        ? 'Sugerencias · ↑ ↓ para moverse · Enter para abrir'
        : `${actuales.length} resultado${actuales.length === 1 ? '' : 's'}`;
    input.setAttribute('aria-activedescendant', actuales.length ? 'res-0' : '');
  };

  const mover = (d: number) => {
    if (!actuales.length) return;
    sel = (sel + d + actuales.length) % actuales.length;
    $$('.res', lista).forEach((el, i) => el.setAttribute('aria-selected', String(i === sel)));
    const el = $(`#res-${sel}`, lista);
    el?.scrollIntoView({ block: 'nearest' });
    input.setAttribute('aria-activedescendant', `res-${sel}`);
  };

  const ir = (url?: string) => {
    if (!url) return;
    dlg.close();
    location.href = url;
  };

  const abrir = () => {
    if (dlg.open) return;
    dlg.showModal();
    input.value = '';
    input.focus();
    pintar();
    cargar()?.then(pintar);
  };

  $$('[data-open-search]').forEach((b) => b.addEventListener('click', abrir));
  $('[data-search-close]')?.addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', (e) => {
    if (e.target === dlg) dlg.close();
  });
  input.addEventListener('input', pintar);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      // En inputs de búsqueda, Chrome limpia el texto con Esc; aquí cerramos directamente.
      e.preventDefault();
      dlg.close();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      mover(1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      mover(-1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      ir(actuales[sel]?.u);
    }
  });
  lista.addEventListener('click', (e) => {
    const li = (e.target as HTMLElement).closest<HTMLElement>('.res');
    ir(li?.dataset.url);
  });
  document.addEventListener('keydown', (e) => {
    const tag = (e.target as HTMLElement)?.tagName;
    const escribiendo = tag === 'INPUT' || tag === 'TEXTAREA';
    if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !escribiendo)) {
      e.preventDefault();
      abrir();
    }
  });
}

/* ── Glosario contextual ──────────────────────────────────────────── */
function initGlosa() {
  const caja = $('[data-glosa]');
  const fuente = $('#datos-glosario');
  if (!caja || !fuente) return;
  const datos: Record<string, { t: string; e: string; d: string; c: string }> = JSON.parse(
    fuente.textContent || '{}',
  );
  const cat = $('[data-glosa-cat]', caja)!;
  const term = $('[data-glosa-term]', caja)!;
  const exp = $('[data-glosa-exp]', caja)!;
  const def = $('[data-glosa-def]', caja)!;
  const link = $<HTMLAnchorElement>('[data-glosa-link]', caja)!;

  let actual: HTMLElement | null = null;
  let timer = 0;

  const mostrar = (el: HTMLElement) => {
    const d = datos[el.dataset.term ?? ''];
    if (!d) return;
    clearTimeout(timer);
    actual?.removeAttribute('aria-describedby');
    actual = el;
    el.setAttribute('aria-describedby', 'glosa');
    cat.textContent = d.c;
    term.textContent = d.t;
    exp.textContent = d.e;
    exp.hidden = !d.e;
    def.textContent = d.d;
    link.href = `/glosario/#${el.dataset.term}`;
    caja.hidden = false;

    const r = el.getBoundingClientRect();
    const w = caja.offsetWidth;
    const h = caja.offsetHeight;
    let left = r.left + window.scrollX + r.width / 2 - w / 2;
    left = Math.max(12 + window.scrollX, Math.min(left, window.scrollX + innerWidth - w - 12));
    const arriba = r.top > h + 16;
    const top = arriba ? r.top + window.scrollY - h - 10 : r.bottom + window.scrollY + 10;
    caja.style.left = `${left}px`;
    caja.style.top = `${top}px`;
  };

  const ocultar = (inmediato = false) => {
    clearTimeout(timer);
    const fn = () => {
      caja.hidden = true;
      actual?.removeAttribute('aria-describedby');
      actual = null;
    };
    if (inmediato) fn();
    else timer = window.setTimeout(fn, 160);
  };

  const finos = matchMedia('(hover: hover)').matches;

  document.addEventListener('mouseover', (e) => {
    if (!finos) return;
    const t = (e.target as HTMLElement).closest<HTMLElement>('.term');
    if (t) mostrar(t);
    else if ((e.target as HTMLElement).closest('[data-glosa]')) clearTimeout(timer);
  });
  document.addEventListener('mouseout', (e) => {
    if (!finos) return;
    const t = (e.target as HTMLElement).closest('.term, [data-glosa]');
    if (t) ocultar();
  });
  document.addEventListener('click', (e) => {
    const t = (e.target as HTMLElement).closest<HTMLElement>('.term');
    if (t) {
      e.preventDefault();
      if (actual === t && !caja.hidden) ocultar(true);
      else mostrar(t);
    } else if (!(e.target as HTMLElement).closest('[data-glosa]')) {
      ocultar(true);
    }
  });
  document.addEventListener('focusin', (e) => {
    const t = (e.target as HTMLElement).closest<HTMLElement>('.term');
    if (t) mostrar(t);
  });
  document.addEventListener('focusout', (e) => {
    if ((e.target as HTMLElement).closest('.term')) ocultar();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') ocultar(true);
  });
  addEventListener('resize', () => ocultar(true));
}

initTema();
initVolver();
initMenu();
initBuscador();
initGlosa();
