import type { ImageMetadata } from 'astro';

/** Fotografías de producto (WebP en src/assets/fotos). Clave = slug del equipo o `sw-<módulo>`. */
export interface Foto {
  img: ImageMetadata;
  /** Modelo que aparece en la imagen. */
  producto: string;
  /** Titular de los derechos, para el crédito. */
  credito: string;
  /** Texto alternativo. */
  alt: string;
  /** Captura de software (fondo oscuro) en vez de foto de producto. */
  captura?: boolean;
}

interface Entrada {
  archivo: string;
  producto: string;
  credito: string;
  captura?: boolean;
}

const archivos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.webp', { eager: true });
const img = (archivo: string) => {
  const m = archivos[`../assets/fotos/${archivo}.webp`];
  if (!m) throw new Error(`Falta la foto ${archivo}.webp`);
  return m.default;
};

const SIE = 'Siemens Healthineers';
const GE = 'GE HealthCare';
const UIH = 'United Imaging Healthcare';
const PHI = 'Philips Healthcare';

const tabla: Record<string, Entrada[]> = {
  'siemens-rx': [{ archivo: 'siemens-rx', producto: 'Ysio X.pree', credito: SIE }],
  'siemens-fluoro': [{ archivo: 'siemens-fluoro', producto: 'Luminos Lotus Max', credito: SIE }],
  'siemens-arco-c': [{ archivo: 'siemens-arco-c', producto: 'Cios Spin', credito: SIE }],
  'siemens-tac': [{ archivo: 'siemens-tac', producto: 'NAEOTOM Alpha', credito: SIE }],
  'siemens-rm': [{ archivo: 'siemens-rm', producto: 'MAGNETOM Vida / MAGNETOM Flow', credito: SIE }],
  'siemens-pet': [{ archivo: 'siemens-pet', producto: 'Biograph Vision', credito: SIE }],
  'siemens-eco': [
    { archivo: 'siemens-eco', producto: 'ACUSON Sequoia', credito: SIE },
    { archivo: 'siemens-eco-2', producto: 'ACUSON Origin', credito: SIE },
  ],
  'siemens-dmo': [
    { archivo: 'siemens-dmo', producto: 'syngo.CT Osteo · Segmentación vertebral', credito: SIE, captura: true },
    { archivo: 'siemens-dmo-2', producto: 'syngo.CT Osteo · Curva de referencia', credito: SIE, captura: true },
  ],
  'sw-chest-ct': [
    { archivo: 'sw-chest-ct', producto: 'AI-Rad Companion Chest CT', credito: SIE, captura: true },
    { archivo: 'sw-chest-ct-2', producto: 'AI-Rad Companion Chest CT · parénquima', credito: SIE, captura: true },
  ],
  'sw-prostate-mr': [
    { archivo: 'sw-prostate-mr', producto: 'AI-Rad Companion Prostate MR', credito: SIE, captura: true },
  ],
  'ge-rx': [{ archivo: 'ge-rx', producto: 'Definium', credito: GE }],
  'ge-arco-c': [{ archivo: 'ge-arco-c', producto: 'OEC 3D', credito: GE }],
  'ge-tac': [{ archivo: 'ge-tac', producto: 'Revolution Apex', credito: GE }],
};

// Fotos adicionales que se agregan cuando existan en la carpeta (búsqueda web).
const extra: Record<string, Entrada> = {
  'ge-fluoro': { archivo: 'ge-fluoro', producto: 'Discovery IGS 7', credito: GE },
  'ge-rm': { archivo: 'ge-rm', producto: 'SIGNA Premier', credito: GE },
  'ge-pet': { archivo: 'ge-pet', producto: 'Omni Legend', credito: GE },
  'ge-eco': { archivo: 'ge-eco', producto: 'LOGIQ E10 Series', credito: GE },
  'ge-dmo': { archivo: 'ge-dmo', producto: 'Lunar iDXA', credito: GE },
  'united-rx': { archivo: 'united-rx', producto: 'Imagen referencial: uDR 780i Pro', credito: UIH },
  'united-fluoro': { archivo: 'united-fluoro', producto: 'uRF 800i', credito: UIH },
  'united-arco-c': { archivo: 'united-arco-c', producto: 'Imagen referencial: uMC Reveal, arco en C móvil de United Imaging (no es el modelo evaluado)', credito: UIH },
  'united-tac': { archivo: 'united-tac', producto: 'uCT 960+', credito: UIH },
  'united-rm': { archivo: 'united-rm', producto: 'uMR Omega', credito: UIH },
  'united-pet': { archivo: 'united-pet', producto: 'uEXPLORER', credito: UIH },
  'united-eco': { archivo: 'united-eco', producto: 'Imagen referencial: uSONIQUE Nova, no es el modelo evaluado', credito: UIH },
  'united-dmo': { archivo: 'united-dmo', producto: 'Imagen referencial: análisis de columna y hueso en uCT 550 (no es el software evaluado)', credito: UIH, captura: true },
  'philips-rx': { archivo: 'philips-rx', producto: 'DigitalDiagnost C90', credito: PHI },
  'philips-fluoro': { archivo: 'philips-fluoro', producto: 'ProxiDiagnost N90', credito: PHI },
  'philips-arco-c': { archivo: 'philips-arco-c', producto: 'Zenition 70', credito: PHI },
  'philips-tac': { archivo: 'philips-tac', producto: 'Spectral CT 7500', credito: PHI },
  'philips-rm': { archivo: 'philips-rm', producto: 'MR 5300', credito: PHI },
  'philips-pet': { archivo: 'philips-pet', producto: 'Vereos Digital PET/CT', credito: PHI },
  'philips-eco': { archivo: 'philips-eco', producto: 'EPIQ Elite', credito: PHI },
  'philips-dmo': { archivo: 'philips-tac', producto: 'Spectral CT 7500', credito: PHI },
};
for (const [slug, e] of Object.entries(extra)) {
  if (!tabla[slug] && archivos[`../assets/fotos/${e.archivo}.webp`]) tabla[slug] = [e];
}

export const fotos: Record<string, Foto[]> = Object.fromEntries(
  Object.entries(tabla).map(([k, lista]) => [
    k,
    lista.map((e) => ({
      img: img(e.archivo),
      producto: e.producto,
      credito: e.credito,
      captura: e.captura,
      alt: e.captura ? `Captura de pantalla: ${e.producto}` : `Fotografía del equipo ${e.producto}`,
    })),
  ]),
);

export const fotosDe = (clave: string): Foto[] => fotos[clave] ?? [];
