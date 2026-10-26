import { glosario } from '../data/glosario';

export type Segmento = { t: 'txt'; v: string } | { t: 'term'; v: string; id: string };

const escapar = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Patrones más largos primero para que "DICOM-SR" gane sobre "DICOM".
const pares = glosario
  .flatMap((t) => (t.patrones ?? []).map((p) => ({ p, id: t.id })))
  .sort((a, b) => b.p.length - a.p.length);

const idPorPatron = new Map(pares.map(({ p, id }) => [p, id]));

const regex = new RegExp(
  `(?<![\\p{L}\\p{N}_-])(${pares.map(({ p }) => escapar(p)).join('|')})(?![\\p{L}\\p{N}_])`,
  'gu',
);

/**
 * Divide un texto en segmentos y marca la primera aparición de cada término
 * del glosario. `vistos` permite compartir el registro entre varios bloques.
 */
export function segmentar(texto: string, vistos: Set<string> = new Set()): Segmento[] {
  const out: Segmento[] = [];
  let ultimo = 0;
  for (const m of texto.matchAll(regex)) {
    const id = idPorPatron.get(m[1]);
    const i = m.index ?? 0;
    if (!id || vistos.has(id)) continue;
    vistos.add(id);
    if (i > ultimo) out.push({ t: 'txt', v: texto.slice(ultimo, i) });
    out.push({ t: 'term', v: m[1], id });
    ultimo = i + m[1].length;
  }
  if (ultimo < texto.length) out.push({ t: 'txt', v: texto.slice(ultimo) });
  return out;
}
