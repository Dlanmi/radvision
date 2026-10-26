/** Recorrido sugerido por el sitio. Lo usan el inicio y el bloque "Siguiente paso". */
export interface Paso {
  id: string;
  titulo: string;
  texto: string;
  href: string;
  cta: string;
}

export const ruta: Paso[] = [
  {
    id: 'proyecto',
    titulo: 'Conoce el proyecto',
    texto: 'Qué documento se analizó y los cinco criterios con los que se evaluó cada equipo.',
    href: '/proyecto/',
    cta: 'Ver el proyecto',
  },
  {
    id: 'modalidades',
    titulo: 'Elige una modalidad',
    texto: 'Empieza por la que más conozcas: radiografía, tomografía o resonancia.',
    href: '/modalidades/',
    cta: 'Ver modalidades',
  },
  {
    id: 'ficha',
    titulo: 'Abre una ficha',
    texto: 'Seis apartados fijos: módulo de IA, funcionalidad, propósito clínico, integración, perspectiva interdisciplinaria y matriz.',
    href: '/equipos/siemens-tac/',
    cta: 'Ficha de ejemplo',
  },
  {
    id: 'comparador',
    titulo: 'Compara fabricantes',
    texto: 'Los cuatro equipos de una modalidad frente a frente, fila por fila.',
    href: '/comparador/',
    cta: 'Abrir comparador',
  },
  {
    id: 'indicadores',
    titulo: 'Lee los indicadores',
    texto: 'Reducción de dosis y de tiempo de adquisición reportada, en gráficas.',
    href: '/indicadores/',
    cta: 'Ver indicadores',
  },
  {
    id: 'software',
    titulo: 'Software y orquestación',
    texto: 'La IA que lee estudios, mide hallazgos y organiza el flujo del servicio.',
    href: '/software/',
    cta: 'Ver software',
  },
];

export const pasoSiguiente = (id: string) => {
  const i = ruta.findIndex((p) => p.id === id);
  return i >= 0 ? { paso: ruta[i + 1], n: i + 2 } : undefined;
};
