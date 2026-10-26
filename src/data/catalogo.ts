import type { FabricanteId, ModalidadId } from './types';

export interface Modalidad {
  id: ModalidadId;
  /** Código de modalidad DICOM (tag 0008,0060). */
  codigo: string;
  nombre: string;
  corto: string;
  ionizante: boolean;
  resumen: string;
}

export const modalidades: Modalidad[] = [
  {
    id: 'rx',
    codigo: 'DX',
    nombre: 'Radiología digital fija',
    corto: 'RX fija',
    ionizante: true,
    resumen:
      'Proyecciones planas de rayos X sobre detector digital. Es el estudio de mayor volumen del servicio: tórax, abdomen y esqueleto.',
  },
  {
    id: 'fluoro',
    codigo: 'RF',
    nombre: 'Fluoroscopia y radiografía dinámica',
    corto: 'Fluoroscopia',
    ionizante: true,
    resumen:
      'Rayos X en tiempo real para estudios funcionales con medio de contraste, angiografía y procedimientos guiados.',
  },
  {
    id: 'arco-c',
    codigo: 'XA',
    nombre: 'Arcos en C quirúrgicos',
    corto: 'Arco en C',
    ionizante: true,
    resumen:
      'Fluoroscopia móvil para quirófano. Los modelos 3D reconstruyen volúmenes cone-beam durante la cirugía.',
  },
  {
    id: 'tac',
    codigo: 'CT',
    nombre: 'Tomografía computarizada',
    corto: 'Tomografía',
    ionizante: true,
    resumen:
      'Cortes axiales obtenidos por la rotación de un tubo de rayos X y una corona de detectores alrededor del paciente.',
  },
  {
    id: 'rm',
    codigo: 'MR',
    nombre: 'Resonancia magnética',
    corto: 'Resonancia',
    ionizante: false,
    resumen:
      'Imagen por campo magnético y pulsos de radiofrecuencia, sin radiación ionizante y con alto contraste de tejidos blandos.',
  },
  {
    id: 'pet',
    codigo: 'PT',
    nombre: 'Tomografía por emisión de positrones',
    corto: 'PET/CT',
    ionizante: true,
    resumen:
      'Imagen molecular: registra en coincidencia los fotones de un radiofármaco y los fusiona con un estudio de TAC.',
  },
  {
    id: 'eco',
    codigo: 'US',
    nombre: 'Ecografía',
    corto: 'Ecografía',
    ionizante: false,
    resumen:
      'Ultrasonido en tiempo real, sin radiación. En carro o portátil, se usa a la cabecera del paciente y depende del operador.',
  },
  {
    id: 'dmo',
    codigo: 'BMD',
    nombre: 'Densitometría ósea',
    corto: 'Densitometría',
    ionizante: true,
    resumen:
      'Medición de la densidad mineral ósea, por DXA dedicado o por tomografía cuantitativa (QCT) oportunista.',
  },
];

export interface Fabricante {
  id: FabricanteId;
  nombre: string;
  corto: string;
  sede: string;
  /** Rasgo distintivo según el documento evaluado. */
  enfoque: string;
}

export const fabricantes: Fabricante[] = [
  {
    id: 'siemens',
    nombre: 'Siemens Healthineers',
    corto: 'Siemens',
    sede: 'Erlangen, Alemania',
    enfoque:
      'Cámaras 3D para posicionar en RX y TAC, reconstrucción profunda en TAC, RM y PET y el tomógrafo por conteo de fotones NAEOTOM Alpha. Resuelve la densitometría con TAC cuantitativo.',
  },
  {
    id: 'ge',
    nombre: 'GE HealthCare',
    corto: 'GE',
    sede: 'Chicago, EE. UU.',
    enfoque:
      'IA embebida en la consola del equipo (on-device) y la única marca evaluada que mantiene densitómetros DXA axiales dedicados.',
  },
  {
    id: 'united',
    nombre: 'United Imaging Healthcare',
    corto: 'United Imaging',
    sede: 'Shanghái, China',
    enfoque:
      'Posicionamiento robótico guiado por visión y el primer PET/CT de cuerpo entero del mundo, con 194 cm de campo axial.',
  },
  {
    id: 'philips',
    nombre: 'Philips Healthcare',
    corto: 'Philips',
    sede: 'Ámsterdam, Países Bajos',
    enfoque:
      'Tomografía espectral siempre activa con detector de doble capa e imán BlueSeal sellado con solo 7 litros de helio.',
  },
];

export const modalidadPorId = Object.fromEntries(modalidades.map((m) => [m.id, m])) as Record<
  ModalidadId,
  Modalidad
>;

export const fabricantePorId = Object.fromEntries(fabricantes.map((f) => [f.id, f])) as Record<
  FabricanteId,
  Fabricante
>;
