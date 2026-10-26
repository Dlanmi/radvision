import type { FabricanteId, ModalidadId } from './types';

/**
 * Valores reportados en el documento, tal cual. `tipo`:
 * - rango: "entre un 40 % y 60 %"
 * - hasta: "hasta un 50 %" (máximo reportado)
 * - valor: un valor puntual ("reducir a la mitad")
 * - sinDato: el documento no da una cifra para esa métrica
 */
export type TipoValor = 'rango' | 'hasta' | 'valor' | 'sinDato';

export interface Indicador {
  slug: string;
  fabricante: FabricanteId;
  modalidad: ModalidadId;
  producto: string;
  tipo: TipoValor;
  min?: number;
  max?: number;
  /** Métrica concreta que reporta el fabricante. */
  metrica: string;
  nota?: string;
  /** Rango reportado como máximo: «de hasta un 40 % a 55 %». */
  hasta?: boolean;
}

export const dosis: Indicador[] = [
  { slug: 'siemens-rx', fabricante: 'siemens', modalidad: 'rx', producto: 'Ysio X.pree', tipo: 'rango', min: 15, max: 25, metrica: 'Producto dosis-área (DAP)' },
  { slug: 'ge-rx', fabricante: 'ge', modalidad: 'rx', producto: 'Definium', tipo: 'sinDato', metrica: 'Optimiza la exposición (AEC), sin porcentaje' },
  { slug: 'united-rx', fabricante: 'united', modalidad: 'rx', producto: 'uDR 780i', tipo: 'sinDato', metrica: 'Colimación guiada, sin porcentaje' },
  { slug: 'philips-rx', fabricante: 'philips', modalidad: 'rx', producto: 'DigitalDiagnost C90', tipo: 'rango', min: 15, max: 20, metrica: 'Dosis de entrada en piel y DAP' },

  { slug: 'siemens-fluoro', fabricante: 'siemens', modalidad: 'fluoro', producto: 'Luminos Lotus Max', tipo: 'hasta', max: 50, metrica: 'Tasa de dosis en escopia continua' },
  { slug: 'ge-fluoro', fabricante: 'ge', modalidad: 'fluoro', producto: 'Discovery IGS 7', tipo: 'rango', hasta: true, min: 40, max: 55, metrica: 'Kerma en aire y dosis de superficie' },
  { slug: 'united-fluoro', fabricante: 'united', modalidad: 'fluoro', producto: 'uRF 800i', tipo: 'rango', hasta: true, min: 45, max: 60, metrica: 'Tasa de dosis en escopia continua' },
  { slug: 'philips-fluoro', fabricante: 'philips', modalidad: 'fluoro', producto: 'ProxiDiagnost N90', tipo: 'rango', min: 40, max: 60, metrica: 'Dosis absorbida al eliminar la rejilla' },

  { slug: 'siemens-arco-c', fabricante: 'siemens', modalidad: 'arco-c', producto: 'Cios Spin', tipo: 'sinDato', metrica: 'Menor dosis acumulada, sin porcentaje' },
  { slug: 'ge-arco-c', fabricante: 'ge', modalidad: 'arco-c', producto: 'OEC 3D', tipo: 'sinDato', metrica: 'Sin cifra de dosis' },
  { slug: 'united-arco-c', fabricante: 'united', modalidad: 'arco-c', producto: 'uArc', tipo: 'sinDato', metrica: 'Sin cifra de dosis' },
  { slug: 'philips-arco-c', fabricante: 'philips', modalidad: 'arco-c', producto: 'Zenition · espinal', tipo: 'hasta', max: 73, metrica: 'Tasa de dosis en intervencionismo espinal' },
  { slug: 'philips-arco-c', fabricante: 'philips', modalidad: 'arco-c', producto: 'Zenition · vascular', tipo: 'hasta', max: 83, metrica: 'Tasa de dosis en procedimientos vasculares' },

  { slug: 'siemens-tac', fabricante: 'siemens', modalidad: 'tac', producto: 'NAEOTOM Alpha', tipo: 'hasta', max: 30, metrica: 'Dosis superficiales no homogéneas' },
  { slug: 'ge-tac', fabricante: 'ge', modalidad: 'tac', producto: 'Revolution Apex', tipo: 'rango', min: 40, max: 60, metrica: 'Dosis efectiva (mSv)' },
  { slug: 'united-tac', fabricante: 'united', modalidad: 'tac', producto: 'uCT 960+', tipo: 'hasta', max: 80, metrica: 'Dosis en cribado pulmonar' },
  { slug: 'philips-tac', fabricante: 'philips', modalidad: 'tac', producto: 'Spectral CT 7500', tipo: 'hasta', max: 80, metrica: 'Dosis de radiación (Precise Image)' },

  { slug: 'siemens-pet', fabricante: 'siemens', modalidad: 'pet', producto: 'Biograph Vision', tipo: 'hasta', max: 50, metrica: 'Dosis administrada de radiofármaco' },
  { slug: 'ge-pet', fabricante: 'ge', modalidad: 'pet', producto: 'Omni Legend', tipo: 'valor', min: 50, max: 50, metrica: 'Actividad administrada («a la mitad»)' },
  { slug: 'united-pet', fabricante: 'united', modalidad: 'pet', producto: 'uEXPLORER', tipo: 'rango', min: 80, max: 90, metrica: 'Dosis inyectada de radiofármaco' },
  { slug: 'philips-pet', fabricante: 'philips', modalidad: 'pet', producto: 'Vereos', tipo: 'sinDato', metrica: 'Sin cifra de dosis' },
];

export const tiempoRM: Indicador[] = [
  { slug: 'siemens-rm', fabricante: 'siemens', modalidad: 'rm', producto: 'MAGNETOM · Deep Resolve', tipo: 'rango', min: 50, max: 70, metrica: 'Adquisición cerebral y musculoesquelética' },
  { slug: 'ge-rm', fabricante: 'ge', modalidad: 'rm', producto: 'SIGNA · AIR Recon DL', tipo: 'rango', min: 40, max: 50, metrica: 'Tiempo de adquisición del estudio', nota: 'Alternativa a duplicar la SNR' },
  { slug: 'united-rm', fabricante: 'united', modalidad: 'rm', producto: 'uMR · uAI ACS', tipo: 'rango', min: 50, max: 70, metrica: 'Tiempos de adquisición' },
  { slug: 'philips-rm', fabricante: 'philips', modalidad: 'rm', producto: 'MR 5300 / 7700 · SmartSpeed', tipo: 'hasta', max: 65, metrica: 'Tiempo de escaneo (factor 3×)' },
];

/** Helio líquido en el imán de resonancia (litros). */
export const helio = [
  { etiqueta: 'MAGNETOM Flow · DryCool', fabricante: 'siemens' as FabricanteId, slug: 'siemens-rm', min: 0.7, max: 0.7, texto: '0.7 L' },
  { etiqueta: 'MR 5300 · BlueSeal', fabricante: 'philips' as FabricanteId, slug: 'philips-rm', min: 7, max: 7, texto: '7 L de por vida' },
  { etiqueta: 'Imán convencional, según Siemens', fabricante: null, slug: 'siemens-rm', min: 1000, max: 1000, texto: 'más de 1000 L', umbral: true },
  { etiqueta: 'Imán convencional, según Philips', fabricante: null, slug: 'philips-rm', min: 1500, max: 2000, texto: '1500–2000 L' },
];
