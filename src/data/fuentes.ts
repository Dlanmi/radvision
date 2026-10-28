/** Bibliografía y créditos del sitio. Las fotos tienen su fuente en fotos.ts. */

export interface Referencia {
  titulo: string;
  autor: string;
  detalle?: string;
  url?: string;
}

/** Referencias generales que sustentan el glosario y los textos de apoyo. */
export const referencias: Referencia[] = [
  {
    titulo: 'DICOM — Digital Imaging and Communications in Medicine',
    autor: 'NEMA / DICOM Standards Committee',
    detalle: 'Estándar para imágenes médicas: modalidades (DX, CT, MR…), Modality Worklist, MPPS, SR, GSPS, SEG, RDSR y DICOMweb.',
    url: 'https://www.dicomstandard.org/',
  },
  {
    titulo: 'HL7 — Health Level Seven International',
    autor: 'HL7 International',
    detalle: 'Estándar de mensajería clínica y administrativa entre sistemas hospitalarios.',
    url: 'https://www.hl7.org/',
  },
  {
    titulo: 'IHE — Integrating the Healthcare Enterprise',
    autor: 'IHE International',
    detalle: 'Perfiles de integración que combinan DICOM y HL7.',
    url: 'https://www.ihe.net/',
  },
  {
    titulo: 'Premarket Notification 510(k) y De Novo Classification Request',
    autor: 'U.S. Food and Drug Administration (FDA)',
    detalle: 'Vías regulatorias citadas en el documento para los algoritmos de cada equipo. Título 21 del CFR, parte 892 (radiología).',
    url: 'https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/premarket-notification-510k',
  },
  {
    titulo: 'Software as a Medical Device (SaMD): Key Definitions',
    autor: 'International Medical Device Regulators Forum (IMDRF), 2013',
    url: 'https://www.imdrf.org/documents/software-medical-device-samd-key-definitions',
  },
  {
    titulo: 'The 2007 Recommendations of the International Commission on Radiological Protection (Publicación 103)',
    autor: 'ICRP, 2007',
    detalle: 'Principio de optimización (ALARA), dosis efectiva y magnitudes dosimétricas.',
    url: 'https://www.icrp.org/publication.asp?id=ICRP%20Publication%20103',
  },
  {
    titulo: 'The Measurement of Observer Agreement for Categorical Data',
    autor: 'Landis, J. R. y Koch, G. G. Biometrics, 33(1), 159–174, 1977',
    detalle: 'Escala de interpretación del índice Kappa (moderado, sustancial).',
    url: 'https://doi.org/10.2307/2529310',
  },
  {
    titulo: 'PI-RADS v2.1 — Prostate Imaging Reporting and Data System',
    autor: 'American College of Radiology (ACR), 2019',
    url: 'https://www.acr.org/Clinical-Resources/Clinical-Tools-and-Reference/Reporting-and-Data-Systems/PI-RADS',
  },
  {
    titulo: 'Quantification of coronary artery calcium using ultrafast computed tomography',
    autor: 'Agatston, A. S. et al. Journal of the American College of Cardiology, 15(4), 827–832, 1990',
    detalle: 'Origen del score de calcio Agatston.',
    url: 'https://doi.org/10.1016/0735-1097(90)90282-T',
  },
  {
    titulo: 'ISCD Official Positions — Adult',
    autor: 'International Society for Clinical Densitometry',
    detalle: 'Interpretación de T-score y Z-score en densitometría.',
    url: 'https://iscd.org/learn/official-positions/',
  },
  {
    titulo: 'Guidelines for Management of Incidental Pulmonary Nodules Detected on CT Images',
    autor: 'MacMahon, H. et al. (Fleischner Society). Radiology, 284(1), 228–243, 2017',
    detalle: 'Guía citada en el documento para el seguimiento de nódulos pulmonares.',
    url: 'https://doi.org/10.1148/radiol.2017161659',
  },
];

export interface Herramienta {
  nombre: string;
  uso: string;
  licencia: string;
  url: string;
}

export const herramientas: Herramienta[] = [
  { nombre: 'Astro', uso: 'Generador del sitio estático', licencia: 'MIT', url: 'https://astro.build' },
  { nombre: 'TypeScript', uso: 'Tipado de todos los datos y scripts', licencia: 'Apache 2.0', url: 'https://www.typescriptlang.org' },
  { nombre: 'Tailwind CSS', uso: 'Utilidades de estilo', licencia: 'MIT', url: 'https://tailwindcss.com' },
  { nombre: 'GSAP', uso: 'Animaciones: visor, esquemas, contadores y flujo del orquestador', licencia: 'GSAP Standard License (uso gratuito)', url: 'https://gsap.com' },
  { nombre: 'sharp', uso: 'Conversión de las fotos a WebP', licencia: 'Apache 2.0', url: 'https://sharp.pixelplumbing.com' },
  { nombre: 'Poppins', uso: 'Tipografía de títulos (Indian Type Foundry)', licencia: 'SIL Open Font License 1.1', url: 'https://fonts.google.com/specimen/Poppins' },
  { nombre: 'Inter Tight', uso: 'Tipografía de texto (Rasmus Andersson)', licencia: 'SIL Open Font License 1.1', url: 'https://fonts.google.com/specimen/Inter+Tight' },
  { nombre: 'IBM Plex Mono', uso: 'Etiquetas técnicas (IBM)', licencia: 'SIL Open Font License 1.1', url: 'https://github.com/IBM/plex' },
];

export const logoSena = {
  titulo: 'Logosímbolo del SENA',
  autor: 'Servicio Nacional de Aprendizaje (SENA)',
  detalle:
    'Archivo vectorial oficial publicado en sena.edu.co. Su uso se rige por el manual de identidad del SENA (Resolución 1825 de 2024); se emplea aquí para identificar el proyecto formativo.',
  url: 'https://www.sena.edu.co',
  norma: 'https://normograma.sena.edu.co/compilacion/docs/resolucion_sena_1825_2024.htm',
};
