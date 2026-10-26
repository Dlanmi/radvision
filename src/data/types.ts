export type ModalidadId = 'rx' | 'fluoro' | 'arco-c' | 'tac' | 'rm' | 'pet' | 'eco' | 'dmo';

export type FabricanteId = 'siemens' | 'ge' | 'united' | 'philips';

/** Disciplinas de la "Perspectiva interdisciplinaria" del documento. */
export type Area =
  | 'fisica'
  | 'biomedica'
  | 'industrial'
  | 'electrica'
  | 'electronica'
  | 'mecanica'
  | 'criogenica'
  | 'computacional'
  | 'acustica';

export interface Perspectiva {
  /** Rótulo tal como aparece en el documento, p. ej. "Ing. Mecánica y Eléctrica". */
  label: string;
  /** Disciplinas que cubre el rótulo, para filtrar. */
  areas: Area[];
  texto: string;
}

/** Dato numérico destacado de la ficha. */
export interface Cifra {
  /** Valor mostrado en grande: "−50", "<2", "0.7", "15–25", "3×". */
  valor: string;
  /** Unidad pegada al valor: "%", "min", "L", "s", "mm", "cm". Vacío si no aplica. */
  unidad: string;
  /** Qué mide, en minúscula y corto (máx. ~8 palabras). */
  texto: string;
  tipo: 'dosis' | 'tiempo' | 'calidad' | 'infraestructura';
  /** El documento lo reporta como máximo ("hasta un 50 %"). */
  hasta?: boolean;
}

export interface Equipo {
  /** `${fabricante}-${modalidad}`, p. ej. "siemens-tac". */
  slug: string;
  fabricante: FabricanteId;
  modalidad: ModalidadId;
  /** Nombre comercial del/los equipos: "SOMATOM X.cite / NAEOTOM Alpha". */
  nombre: string;
  /** Descriptor entre paréntesis del documento: "Photon-Counting CT". */
  descriptor: string;
  /** Nombres propios de los algoritmos / plataformas de IA citados. */
  algoritmos: string[];
  /** Referencias regulatorias citadas: "FDA 510(k)", "K211161", "21 CFR 892.2050", "De Novo". */
  regulatorio: string[];
  /** Texto completo de "Módulo de IA y Estado FDA". */
  moduloIA: string;
  /** Texto completo de "Funcionalidad y Características Técnicas". */
  funcionalidad: string;
  /** Texto completo de "Propósito Clínico". */
  proposito: string;
  /** Texto completo de "Integración". */
  integracion: string;
  perspectivas: Perspectiva[];
  /** Fila correspondiente de la matriz comparativa del fabricante. */
  matriz: {
    algoritmo: string;
    impactoFisico: string;
    impactoOperativo: string;
  };
  /** 2 a 4 cifras clave extraídas literalmente del texto. */
  cifras: Cifra[];
}
