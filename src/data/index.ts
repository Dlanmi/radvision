import { siemens } from './equipos/siemens';
import { ge } from './equipos/ge';
import { united } from './equipos/united';
import { philips } from './equipos/philips';
import { fabricantes, modalidades } from './catalogo';
import type { Area, Equipo, FabricanteId, ModalidadId } from './types';

export * from './catalogo';
export type * from './types';

export const equipos: Equipo[] = [...siemens, ...ge, ...united, ...philips];

const ordenModalidad = Object.fromEntries(modalidades.map((m, i) => [m.id, i]));
const ordenFabricante = Object.fromEntries(fabricantes.map((f, i) => [f.id, i]));

export const equiposDe = (fabricante: FabricanteId) =>
  equipos
    .filter((e) => e.fabricante === fabricante)
    .sort((a, b) => ordenModalidad[a.modalidad] - ordenModalidad[b.modalidad]);

export const equiposEn = (modalidad: ModalidadId) =>
  equipos
    .filter((e) => e.modalidad === modalidad)
    .sort((a, b) => ordenFabricante[a.fabricante] - ordenFabricante[b.fabricante]);

export const equipoPorSlug = (slug: string) => equipos.find((e) => e.slug === slug);

export const areaNombre: Record<Area, string> = {
  fisica: 'Física Médica',
  biomedica: 'Ing. Biomédica',
  industrial: 'Ing. Industrial',
  electrica: 'Ing. Eléctrica',
  electronica: 'Ing. Electrónica',
  mecanica: 'Ing. Mecánica',
  criogenica: 'Ing. Criogénica',
  computacional: 'Ing. Computacional',
  acustica: 'Ing. Acústica',
};

export const tipoCifra = {
  dosis: 'Dosis',
  tiempo: 'Tiempo',
  calidad: 'Calidad',
  infraestructura: 'Infraestructura',
} as const;

/** Primer producto sin el paréntesis descriptivo: "Zenition Series (Zenition 70 / …)" → "Zenition Series". */
export function nombreCorto(e: Equipo) {
  return productosDe(e)[0].nombre;
}

/** Separa los productos por " / " sin cortar dentro de paréntesis, y aparta la nota entre paréntesis. */
export const productosDe = (e: Equipo) => {
  const partes: string[] = [];
  let nivel = 0;
  let actual = '';
  for (let i = 0; i < e.nombre.length; i++) {
    const c = e.nombre[i];
    if (c === '(') nivel++;
    if (c === ')') nivel--;
    if (nivel === 0 && e.nombre.startsWith(' / ', i)) {
      partes.push(actual);
      actual = '';
      i += 2;
      continue;
    }
    actual += c;
  }
  partes.push(actual);
  return partes.map((p) => {
    const m = p.match(/^(.*?)\s*\((.*)\)\s*$/);
    return m ? { nombre: m[1], nota: m[2] } : { nombre: p, nota: '' };
  });
};

/** Número de serie con ceros: 3 → "03". */
export const nn = (n: number, d = 2) => String(n).padStart(d, '0');
