/** AI-Rad Companion (Siemens Healthineers) — software de lectura asistida. Páginas 8–11 del documento. */

export interface Hallazgo {
  titulo: string;
  texto: string;
}

export interface Bloque {
  titulo?: string;
  intro?: string;
  hallazgos: Hallazgo[];
}

export interface ModuloSoftware {
  id: 'chest-xray' | 'chest-ct' | 'prostate-mr';
  nombre: string;
  modalidad: string;
  intro: string;
  bloques: Bloque[];
}

export const softwareIntro =
  'AI-Rad Companion es el software de lectura asistida por IA de Siemens Healthineers. La suite para tórax se divide en dos módulos regulados por la FDA: Chest X-ray (radiografía convencional) y Chest CT (tomografía multiorgánica). A ellos se suma el módulo Prostate MR para resonancia de próstata.';

export const modulos: ModuloSoftware[] = [
  {
    id: 'chest-xray',
    nombre: 'AI-Rad Companion Chest X-ray',
    modalidad: 'Radiografía de tórax',
    intro:
      'Este módulo opera como un lector secundario asistido por Deep Learning para radiografías PA/AP en bipedestación o cama. Evalúa nódulos pulmonares, consolidaciones, atelectasias, derrame pleural, neumotórax y la distancia del tubo endotraqueal a la carina.',
    bloques: [
      {
        titulo: 'Sensibilidad y especificidad clínica',
        hallazgos: [
          {
            titulo: 'Nódulos pulmonares',
            texto:
              'En estudios multicéntricos evaluados en el marco de RSNA, la sensibilidad para nódulos radiográficamente visibles oscila entre 88 % y 92 %, con una especificidad entre 85 % y 90 %, superando a radiólogos generales en fases tempranas de detección.',
          },
          {
            titulo: 'Neumotórax y derrame pleural',
            texto:
              'La sensibilidad diagnóstica para neumotórax alcanza el 91 %–95 %, con un área bajo la curva (AUC-ROC) superior a 0.95, lo que permite su uso como sistema de triaje y priorización de listas de lectura de emergencias.',
          },
        ],
      },
      {
        titulo: 'Otros hallazgos',
        hallazgos: [
          {
            titulo: 'Posicionamiento de dispositivos (línea endotraqueal)',
            texto:
              'Precisión milimétrica (<3 mm de discrepancia media) respecto a la distancia tubo-carina determinada por radiólogos expertos.',
          },
          {
            titulo: 'Impacto en la lectura (eye-tracking y tiempos)',
            texto:
              'Estudios presentados en RSNA mostraron que el soporte de la IA reduce los falsos negativos por fatiga visual en un 18 % a 24 % y redistribuye los patrones de fijación ocular del lector hacia áreas periféricas o retrocardíacas donde suelen esconderse lesiones sutiles.',
          },
        ],
      },
    ],
  },
  {
    id: 'chest-ct',
    nombre: 'AI-Rad Companion Chest CT',
    modalidad: 'Tomografía de tórax',
    intro:
      'Módulo multiorgánico integral que realiza análisis simultáneo del parénquima pulmonar, corazón (calcio coronario), aorta torácica y columna vertebral.',
    bloques: [
      {
        hallazgos: [
          {
            titulo: 'Detección de nódulos pulmonares',
            texto:
              'Sensibilidad del algoritmo de detección de nódulos sólidos y subsólidos entre 5 y 30 mm: >90 %.',
          },
          {
            titulo: 'Seguimiento longitudinal (matching)',
            texto:
              'En estudios de concordancia para estudios sucesivos (screening de cáncer de pulmón), el emparejamiento automático (matching rate) de nódulos basales vs. seguimiento alcanzó un 91.8 % en parénquima y 84.4 % en zonas periféricas.',
          },
          {
            titulo: 'Score de calcio Agatston (oportunístico en CT sin contraste)',
            texto:
              'Concordancia de estratificación de riesgo cardiovascular frente a la medición manual por cardiorradiólogos con un coeficiente de correlación intraclase (ICC) > 0.94.',
          },
          {
            titulo: 'Volumetría cardíaca y aórtica',
            texto:
              'Precisión en la segmentación del diámetro aórtico con un error medio inferior a 1.5 mm, validado frente a mediciones manuales y ecocardiografía.',
          },
          {
            titulo: 'Eficiencia del flujo de trabajo',
            texto:
              'Reportes presentados en RSNA demostraron una reducción neta en el tiempo de interpretación y estructuración del informe del 25 % al 32 % en tomografías de cribado.',
          },
        ],
      },
    ],
  },
  {
    id: 'prostate-mr',
    nombre: 'AI-Rad Companion Prostate MR',
    modalidad: 'Resonancia de próstata',
    intro:
      'El módulo AI-Rad Companion Prostate MR (basado en secuencias biparamétricas y multiparamétricas T2, DWI/ADC y DCE) está diseñado para asistir la cuantificación glandular, la detección focal de lesiones sospechosas (PI-RADS v2.1) y la planificación de biopsia por fusión RM-Ecografía.',
    bloques: [
      {
        titulo: 'Segmentación y volumetría glandular',
        hallazgos: [
          {
            titulo: 'Precisión de delineación',
            texto:
              'El algoritmo de segmentación prostática volumétrica basado en arquitecturas CNN 3D logra un coeficiente de similitud Dice (Dice Similarity Coefficient, DSC) de 0.90–0.93 al compararse con el contorneo manual de radiólogos subespecialistas en uro-radiología y patología posquirúrgica.',
          },
          {
            titulo: 'Cálculo de la densidad del PSA (PSAD)',
            texto:
              'Al calcular el volumen prostático exacto de forma automatizada, la precisión diagnóstica del PSAD para discriminar entre hiperplasia prostática benigna (HPB) y cáncer clínicamente significativo (csPCa) mejora sustancialmente frente a la fórmula tradicional del elipsoide (p < 0.01), la cual sobrestima o subestima el volumen glandular hasta en un 15–20 %.',
          },
        ],
      },
      {
        titulo: 'Detección y clasificación PI-RADS v2.1 (csPCa: Gleason ≥ 7)',
        intro:
          'En estudios multicéntricos y ponencias de RSNA orientadas a evaluar la asistencia en la lectura de lesiones intraprostáticas:',
        hallazgos: [
          {
            titulo: 'Sensibilidad',
            texto: '86 % a 92 % para lesiones con PI-RADS ≥ 3.',
          },
          {
            titulo: 'Especificidad',
            texto:
              '78 % a 85 %, reduciendo significativamente los falsos positivos generados por prostatitis o nódulos estromales benignos en la zona de transición.',
          },
          {
            titulo: 'Valor predictivo negativo (VPN)',
            texto:
              'Alcanza entre el 93 % y 96 %, lo cual ofrece un alto respaldo clínico para evitar biopsias innecesarias en pacientes con baja sospecha.',
          },
          {
            titulo: 'Rendimiento en lectores menos experimentados',
            texto:
              'Uno de los hallazgos clínicos más consistentes reportados en RSNA es la disminución de la variabilidad interobservador (índice Kappa de Cohen, κ). Sin IA (radiólogos no expertos): κ ≈ 0.52–0.60 (acuerdo moderado). Con asistencia de AI-Rad Companion: κ ≈ 0.76–0.82 (acuerdo sustancial), equiparando el desempeño diagnóstico de lectores noveles con el de subespecialistas.',
          },
        ],
      },
      {
        titulo: 'Soporte a la biopsia de fusión (MR-US)',
        hallazgos: [
          {
            titulo: 'Exportación DICOM RT-Struct',
            texto:
              'La exportación de los contornos prostáticos y de las regiones de interés (ROI) en formatos DICOM RT-Struct hacia ecógrafos intervencionistas para biopsias por fusión disminuyó el error de muestreo y acortó los tiempos pre-biopsia de registro y co-registro en sala de 10–15 minutos a menos de 3 minutos.',
          },
        ],
      },
    ],
  },
];

export interface FilaMetrica {
  modulo: string;
  parametro: string;
  metrica: string;
  comparativa: string;
}

export const tablaMetricas: FilaMetrica[] = [
  {
    modulo: 'Chest X-ray',
    parametro: 'Detección de nódulos',
    metrica: 'Sensibilidad: 88 %–92 %; AUC: 0.93',
    comparativa: 'Reduce falsos negativos en lecturas de guardia y triaje.',
  },
  {
    modulo: 'Chest X-ray',
    parametro: 'Neumotórax / derrame',
    metrica: 'Sensibilidad: 91 %–95 %; especificidad: 94 %',
    comparativa: 'Triaje automatizado en listas de trabajo urgentes.',
  },
  {
    modulo: 'Chest CT',
    parametro: 'Nódulos pulmonares',
    metrica: 'Sensibilidad: >90 %; matching: 91.8 %',
    comparativa: 'Estandarización precisa en cribado longitudinal.',
  },
  {
    modulo: 'Chest CT',
    parametro: 'Calcio coronario (CAC)',
    metrica: 'Concordancia ICC > 0.94 vs. manual',
    comparativa: 'Cribado cardiovascular no invasivo oportunista.',
  },
  {
    modulo: 'Prostate MR',
    parametro: 'Segmentación glandular',
    metrica: 'Dice score: 0.90–0.93',
    comparativa: 'Supera la fórmula elipsoide tradicional en PSAD.',
  },
  {
    modulo: 'Prostate MR',
    parametro: 'Cáncer clínicamente significativo (csPCa)',
    metrica: 'Sensibilidad: 86 %–92 %; VPN: 93 %–96 %',
    comparativa: 'Aumenta el índice Kappa interobservador a ≥ 0.78.',
  },
];

/** Rangos reportados (en %) para la gráfica de desempeño. */
export interface Rango {
  etiqueta: string;
  modulo: string;
  metrica: 'Sensibilidad' | 'Especificidad' | 'VPN';
  min: number;
  max: number;
  /** true cuando el documento solo da un umbral (">90 %"). */
  umbral?: boolean;
}

export const rangos: Rango[] = [
  { etiqueta: 'Nódulos pulmonares', modulo: 'Chest X-ray', metrica: 'Sensibilidad', min: 88, max: 92 },
  { etiqueta: 'Nódulos pulmonares', modulo: 'Chest X-ray', metrica: 'Especificidad', min: 85, max: 90 },
  { etiqueta: 'Neumotórax', modulo: 'Chest X-ray', metrica: 'Sensibilidad', min: 91, max: 95 },
  { etiqueta: 'Nódulos 5–30 mm', modulo: 'Chest CT', metrica: 'Sensibilidad', min: 90, max: 90, umbral: true },
  { etiqueta: 'csPCa, PI-RADS ≥ 3', modulo: 'Prostate MR', metrica: 'Sensibilidad', min: 86, max: 92 },
  { etiqueta: 'Cáncer de próstata (csPCa)', modulo: 'Prostate MR', metrica: 'Especificidad', min: 78, max: 85 },
  { etiqueta: 'Cáncer de próstata (csPCa)', modulo: 'Prostate MR', metrica: 'VPN', min: 93, max: 96 },
];

/** Índice Kappa interobservador en próstata, sin y con IA. */
export const kappa = {
  sinIA: { min: 0.52, max: 0.6, etiqueta: 'Acuerdo moderado' },
  conIA: { min: 0.76, max: 0.82, etiqueta: 'Acuerdo sustancial' },
};
