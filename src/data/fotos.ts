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
  /** De dónde salió: el documento del proyecto o una página oficial del fabricante. */
  origen: 'documento' | 'web';
  /** URL de la página oficial donde se publica la imagen (solo origen web). */
  fuente?: string;
}

interface Entrada {
  archivo: string;
  producto: string;
  credito: string;
  captura?: boolean;
  fuente?: string;
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
  'ge-fluoro': { archivo: 'ge-fluoro', producto: 'Discovery IGS 7', credito: GE, fuente: 'https://www.gehealthcare.com/en-ph/products/interventional-image-guided-systems/discovery-igs-7' },
  'ge-rm': { archivo: 'ge-rm', producto: 'SIGNA Premier', credito: GE, fuente: 'https://www.ge.com/news/sites/default/files/Premier_front_detachable%20table_HR.jpg' },
  'ge-pet': { archivo: 'ge-pet', producto: 'Omni Legend', credito: GE, fuente: 'https://www.gehealthcare.com/en-us/products/molecular-imaging/pet-ct' },
  'ge-eco': { archivo: 'ge-eco', producto: 'LOGIQ E10 Series', credito: GE, fuente: 'https://www.gehealthcare.com/en-us/events/rsna-press-kit' },
  'ge-dmo': { archivo: 'ge-dmo', producto: 'Lunar iDXA', credito: GE, fuente: 'https://www.gehealthcare.com/en-us/products/bone-and-metabolic-health' },
  'united-rx': { archivo: 'united-rx', producto: 'Imagen referencial: uDR 780i Pro', credito: UIH, fuente: 'https://usa.united-imaging.com/products/x-ray/udr-780i-pro' },
  'united-fluoro': { archivo: 'united-fluoro', producto: 'uRF 800i', credito: UIH },
  'united-arco-c': { archivo: 'united-arco-c', producto: 'Imagen referencial: uMC Reveal, arco en C móvil de United Imaging (no es el modelo evaluado)', credito: UIH, fuente: 'https://global.united-imaging.com/en/product-service/products/mc/umc-reveal' },
  'united-tac': { archivo: 'united-tac', producto: 'uCT 960+', credito: UIH, fuente: 'https://global.united-imaging.com/en/product-service/products/ct/uct-960old' },
  'united-rm': { archivo: 'united-rm', producto: 'uMR Omega', credito: UIH, fuente: 'https://eu.united-imaging.com/en/product-service/products/mr/omega' },
  'united-pet': { archivo: 'united-pet', producto: 'uEXPLORER', credito: UIH, fuente: 'https://global.united-imaging.com/en/product-service/products/mi' },
  'united-eco': { archivo: 'united-eco', producto: 'Imagen referencial: uSONIQUE Nova, no es el modelo evaluado', credito: UIH, fuente: 'https://usa.united-imaging.com/products/ultrasound/usonique-nova' },
  'united-dmo': { archivo: 'united-dmo', producto: 'Imagen referencial: análisis de columna y hueso en uCT 550 (no es el software evaluado)', credito: UIH, captura: true, fuente: 'https://eu.united-imaging.com/en/product-service/products/ct/uct-550' },
  'philips-rx': { archivo: 'philips-rx', producto: 'DigitalDiagnost C90', credito: PHI, fuente: 'https://www.philips.com.au/healthcare/product/HC712034/digitaldiagnost-c90' },
  'philips-fluoro': { archivo: 'philips-fluoro', producto: 'ProxiDiagnost N90', credito: PHI, fuente: 'https://www.usa.philips.com/healthcare/product/706110/proxidiagnost-n90' },
  'philips-arco-c': { archivo: 'philips-arco-c', producto: 'Zenition 70', credito: PHI, fuente: 'https://www.philips.co.uk/healthcare/product/HC718133/zenition-70-mobile-c-arm-with-flat-detector' },
  'philips-tac': { archivo: 'philips-tac', producto: 'Spectral CT 7500', credito: PHI, fuente: 'https://www.philips.com/a-w/about/news/media-library/20220713-philips-spectral-ct-7500.html' },
  'philips-rm': { archivo: 'philips-rm', producto: 'MR 5300', credito: PHI, fuente: 'https://www.philips.com/a-w/about/news/media-library/20211123-philips-mr-5300-system.html' },
  'philips-pet': { archivo: 'philips-pet', producto: 'Vereos Digital PET/CT', credito: PHI, fuente: 'https://www.documents.philips.com/doclib/enc/10264938/452296298357_VereosBrochureREV_FNL_HR.pdf' },
  'philips-eco': { archivo: 'philips-eco', producto: 'EPIQ Elite', credito: PHI, fuente: 'https://www.usa.philips.com/healthcare/product/HC795098/epiq-elite-a-new-class-of-premium-ultrasound-has-arrived' },
  'philips-dmo': { archivo: 'philips-tac', producto: 'Spectral CT 7500', credito: PHI, fuente: 'https://www.philips.com/a-w/about/news/media-library/20220713-philips-spectral-ct-7500.html' },
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
      origen: e.fuente ? 'web' : 'documento',
      fuente: e.fuente,
      alt: e.captura ? `Captura de pantalla: ${e.producto}` : `Fotografía del equipo ${e.producto}`,
    })),
  ]),
);

export const fotosDe = (clave: string): Foto[] => fotos[clave] ?? [];
