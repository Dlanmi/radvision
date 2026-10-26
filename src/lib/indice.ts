import { equipos, fabricantePorId, fabricantes, modalidadPorId, modalidades } from '../data';
import { glosario } from '../data/glosario';
import { modulos } from '../data/software';
import { nav } from '../data/nav';

export interface ItemBusqueda {
  /** Título */
  t: string;
  /** Subtítulo */
  s: string;
  /** Texto donde se busca */
  k: string;
  /** URL */
  u: string;
  /** Grupo */
  g: string;
}

export function construirIndice(): ItemBusqueda[] {
  return [
    ...modalidades.map((m) => ({
      t: m.nombre,
      s: `${m.codigo} · ${m.corto}`,
      k: m.resumen,
      u: `/modalidades/${m.id}/`,
      g: 'Modalidad',
    })),
    ...fabricantes.map((f) => ({
      t: f.nombre,
      s: f.sede,
      k: f.enfoque,
      u: `/fabricantes/${f.id}/`,
      g: 'Fabricante',
    })),
    ...equipos.map((e) => {
      const m = modalidadPorId[e.modalidad];
      const f = fabricantePorId[e.fabricante];
      return {
        t: e.nombre,
        s: `${f.corto} · ${m.corto}`,
        k: [
          e.descriptor,
          ...e.algoritmos,
          ...e.regulatorio,
          m.codigo,
          m.nombre,
          f.nombre,
          e.moduloIA,
          e.funcionalidad,
          e.proposito,
          e.integracion,
          ...e.perspectivas.map((p) => `${p.label} ${p.texto}`),
          e.matriz.algoritmo,
          e.matriz.impactoFisico,
          e.matriz.impactoOperativo,
        ].join(' '),
        u: `/equipos/${e.slug}/`,
        g: 'Equipo',
      };
    }),
    ...modulos.map((m) => ({
      t: m.nombre,
      s: m.modalidad,
      k: [m.intro, ...m.bloques.flatMap((b) => b.hallazgos.map((h) => `${h.titulo} ${h.texto}`))].join(' '),
      u: `/software/#${m.id}`,
      g: 'Software',
    })),
    ...glosario.map((t) => ({
      t: t.termino,
      s: t.expansion ?? '',
      k: t.definicion,
      u: `/glosario/#${t.id}`,
      g: 'Glosario',
    })),
    ...nav.map((n) => ({ t: n.label, s: 'Sección', k: '', u: n.href, g: 'Página' })),
  ];
}
