import type { Equipo } from '../types';

// United Imaging Healthcare (páginas P18–P25 del documento fuente).
export const united: Equipo[] = [
  {
    slug: 'united-rx',
    fabricante: 'united',
    modalidad: 'rx',
    nombre: 'uDR 780i / uDR 596i Pro',
    descriptor: 'Radiología digital fija',
    algoritmos: ['uAI Easy-Positioning', 'uAI Vision', 'uView'],
    regulatorio: ['FDA 510(k)', '21 CFR 892.1680'],
    moduloIA:
      'Plataforma integrada uAI Easy-Positioning, uAI Vision y procesamiento inteligente de imagen uView (Aprobación FDA 510(k), Reg. 21 CFR 892.1680 / K-submissions).',
    funcionalidad:
      'Emplea una cámara óptica 3D montada en el cabezal del tubo de rayos X que utiliza redes neuronales de visión artificial para reconocer la pose y la silueta del paciente. El gantry motorizado y el estativo vertical se alinean de forma robótica y automática al isocentro anatómico exacto. En post-proceso, la suite aplica algoritmos de aprendizaje profundo para supresión de costillas (bone suppression) y realce dinámico de tejidos blandos sin aumentar la dosis.',
    proposito:
      'Radiografía de tórax y osteoarticular de alto volumen; detección temprana de nódulos pulmonares ocultos tras arcos costales y evaluación precisa de fracturas finas.',
    integracion:
      'Enrutamiento DICOM nativo hacia PACS/RIS con etiquetado automático de incidencias y reportes estructurados DICOM-SR.',
    perspectivas: [
      {
        label: 'Física Médica',
        areas: ['fisica'],
        texto:
          'La colimación automática guiada por visión óptica reduce el haz de radiación estrictamente a la región de interés, eliminando radiación dispersa innecesaria en órganos radiosensibles (tiroides, gónadas).',
      },
      {
        label: 'Ing. Industrial',
        areas: ['industrial'],
        texto:
          'Reduce los pasos manuales del tecnólogo de 7 a solo 2 clics por proyección, reduciendo el tiempo de posicionamiento a menos de 45 segundos.',
      },
    ],
    matriz: {
      algoritmo: 'uAI Vision / uView',
      impactoFisico: 'Supresión ósea inteligente; colimación óptica guiada que limita la dispersión.',
      impactoOperativo: 'Posicionamiento robótico automatizado; reducción de pasos de 7 a 2 clics.',
    },
    cifras: [
      { valor: '7 → 2', unidad: '', texto: 'clics por proyección', tipo: 'tiempo' },
      { valor: '<45', unidad: 's', texto: 'de tiempo de posicionamiento', tipo: 'tiempo' },
    ],
  },
  {
    slug: 'united-fluoro',
    fabricante: 'united',
    modalidad: 'fluoro',
    nombre: 'uRF 800i',
    descriptor: 'Fluoroscopia y radiografía digital multipropósito',
    algoritmos: ['uAI Low-Dose Fluoro Engine'],
    regulatorio: ['FDA 510(k)'],
    moduloIA:
      'Módulo de reducción de dosis uAI Low-Dose Fluoro Engine y algoritmos de estabilización de imagen dinámica (FDA 510(k)).',
    funcionalidad:
      'Monitoreo dinámico del espesor tisular y del movimiento del bolo baritado/iodado. Utiliza redes neuronales recurrentes (RNN) para la predicción y compensación de movimiento en tiempo real, permitiendo aplicar filtros de reducción de ruido cuántico sin generar imágenes "fantasma" o desenfoque por movimiento.',
    proposito:
      'Estudios digestivos dinámicos (deglución, tránsito gastrointestinal), urológicos e histerosalpingografías con estricta restricción de dosis.',
    integracion:
      'Integración total con consolas de comando remoto blindadas y almacenamiento directo de secuencias cine-loop comprimidas sin pérdida diagnóstica.',
    perspectivas: [
      {
        label: 'Ing. Biomédica y Mecánica',
        areas: ['biomedica', 'mecanica'],
        texto:
          'Mesa radiográfica basculante (+90° / −90°) con sensores anticolisión ultrasónicos controlados por firmware que garantizan la seguridad del paciente durante rotaciones automáticas.',
      },
      {
        label: 'Física Médica',
        areas: ['fisica'],
        texto:
          'Disminución de la tasa de dosis en escopia continua de hasta un 45 % a 60 % en comparación con sistemas de fluoroscopia analógica o digital clásica sin modulación adaptativa por IA.',
      },
    ],
    matriz: {
      algoritmo: 'uAI Low-Dose Fluoro',
      impactoFisico: 'Reducción de tasa de dosis en escopia continua de hasta un 60 % sin lag.',
      impactoOperativo: 'Compensación dinámica de movimiento del bolo de contraste.',
    },
    cifras: [
      { hasta: true, valor: '45–60', unidad: '%', texto: 'de reducción de la tasa de dosis en escopia continua', tipo: 'dosis' },
      { valor: '±90°', unidad: '', texto: 'de basculación de la mesa radiográfica', tipo: 'infraestructura' },
    ],
  },
  {
    slug: 'united-arco-c',
    fabricante: 'united',
    modalidad: 'arco-c',
    nombre: 'uArc / uArc Plus',
    descriptor: 'Arco en C quirúrgico móvil',
    algoritmos: ['uAI Clarity Surgical'],
    regulatorio: ['FDA 510(k)'],
    moduloIA:
      'Motor de procesamiento de imagen en tiempo real uAI Clarity Surgical y algoritmos inteligentes de compensación de metales (FDA 510(k)).',
    funcionalidad:
      'Incorpora un detector de panel plano (FPD) de silicio amorfo de alto rango dinámico. El algoritmo de IA identifica en microsegundos la presencia de material quirúrgico radiopaco (separadores de titanio, tornillos, placas) y recalcula la curva de contraste local para evitar la saturación de brillo o el ensombrecimiento de las estructuras óseas y vasos sanguíneos adyacentes.',
    proposito:
      'Cirugía ortopédica, reducción cerrada de fracturas, cirugía vascular y procedimientos urológicos percutáneos.',
    integracion:
      'Interfaz inalámbrica DICOM 3.0 para transferencia instantánea de imágenes a sistemas de información de quirófano y estaciones de almacenamiento central.',
    perspectivas: [
      {
        label: 'Ing. Eléctrica y Mecánica',
        areas: ['electrica', 'mecanica'],
        texto:
          'Generador de alta frecuencia monofásico con almacenamiento de energía por supercondensadores, lo que permite descargas de alta potencia sostenidas sin requerir conexiones eléctricas trifásicas dedicadas en el quirófano.',
      },
      {
        label: 'Ing. Industrial',
        areas: ['industrial'],
        texto:
          'Diseño ergonómico de huella reducida con frenos electromagnéticos de activación táctil que agilizan el tránsito en quirófanos saturados.',
      },
    ],
    matriz: {
      algoritmo: 'uAI Clarity Surgical',
      impactoFisico: 'Corrección instantánea de saturación y artefactos por implantes de titanio.',
      impactoOperativo: 'Generador con supercondensadores; no requiere acometida trifásica en quirófano.',
    },
    cifras: [
      { valor: '0', unidad: '', texto: 'conexiones trifásicas dedicadas en quirófano', tipo: 'infraestructura' },
    ],
  },
  {
    slug: 'united-tac',
    fabricante: 'united',
    modalidad: 'tac',
    nombre: 'uCT 960+ (640 cortes) / uCT 780',
    descriptor: 'Tomografía computarizada',
    algoritmos: ['AI-Recon', 'uAI Vision Camera', 'uAI Cardio Assist'],
    regulatorio: ['FDA 510(k)', 'K193081', 'K210515'],
    moduloIA:
      'Reconstrucción profunda AI-Recon (uAI Deep Learning Image Reconstruction), uAI Vision Camera y uAI Cardio Assist (Aprobación FDA 510(k), K193081 / K210515).',
    funcionalidad:
      'El uCT 960+ cuenta con un detector de cobertura axial ultra-ancha de 16 cm (z-axis) y una velocidad de rotación de 0.25 s. La cámara 3D superior analiza la posición tridimensional del paciente y ejecuta el centrado automático en el isocentro. La plataforma AI-Recon utiliza redes neuronales convolucionales profundas entrenadas directamente en el espacio de proyección crudo (raw-data) para desacoplar el ruido cuántico de la resolución espacial.',
    proposito:
      'Angio-TAC coronario en un único latido cardíaco, incluso en pacientes con arritmias severas o frecuencias cardíacas elevadas; perfusión cerebral volumétrica de cerebro completo y tamizaje pulmonar de ultrabaja dosis.',
    integracion:
      'Conectividad con la plataforma de análisis avanzado uWS-CT, con segmentación vascular automática, cuantificación de placa coronaria y reporte de perfusión en ACV isquémico.',
    perspectivas: [
      {
        label: 'Física Médica',
        areas: ['fisica'],
        texto:
          'Permite reducciones de dosis de hasta el 80 % en protocolos de cribado pulmonar manteniendo la detectabilidad de estructuras milimétricas y preservando el espectro de potencia de ruido (NPS) sin el efecto de "cera" característico de las reconstrucciones iterativas clásicas.',
      },
      {
        label: 'Ing. Mecánica',
        areas: ['mecanica'],
        texto:
          'Cojinete de gantry sustentado magnéticamente con tecnología de transmisión directa sin contacto (direct-drive), capaz de soportar aceleraciones centrífugas de más de 40G sin vibraciones residuales.',
      },
    ],
    matriz: {
      algoritmo: 'AI-Recon / uAI Vision',
      impactoFisico: 'Hasta un 80 % menos de dosis en cribado; preservación estricta de textura NPS.',
      impactoOperativo: 'Cobertura de 16 cm; angio-TAC coronario completo en un latido (0.25 s).',
    },
    cifras: [
      { hasta: true, valor: '80', unidad: '%', texto: 'menos dosis en cribado pulmonar', tipo: 'dosis' },
      { valor: '0.25', unidad: 's', texto: 'por rotación del gantry (uCT 960+)', tipo: 'tiempo' },
      { valor: '16', unidad: 'cm', texto: 'de cobertura axial del detector (uCT 960+)', tipo: 'infraestructura' },
      { valor: '>40', unidad: 'G', texto: 'de aceleración centrífuga sin vibraciones', tipo: 'infraestructura' },
    ],
  },
  {
    slug: 'united-rm',
    fabricante: 'united',
    modalidad: 'rm',
    nombre: 'uMR Omega (75 cm Ultra-Wide Bore 3.0T) / uMR Jupiter 5.0T',
    descriptor: 'Resonancia magnética de 3.0 T y 5.0 T',
    algoritmos: ['uAI ACS', 'DeepRecon'],
    regulatorio: ['FDA 510(k)', 'K201217'],
    moduloIA:
      'Suite de aceleración por aprendizaje profundo uAI ACS (Artificial Intelligence Compressed Sensing) y DeepRecon (Aprobación FDA 510(k), K201217).',
    funcionalidad:
      'uAI ACS combina el muestreo pseudoaleatorio del sensado compresivo (Compressed Sensing) tradicional con redes neuronales iterativas basadas en datos crudos de radiofrecuencia (RF). Reconstruye secuencias 2D y 3D en alta resolución a partir de una fracción del espacio k (k-space), eliminando artefactos de submuestreo y ruido incoherente.',
    proposito:
      'Neuroimagen funcional y estructural, evaluación musculoesquelética avanzada y estudios abdominales dinámicos. El uMR Omega cuenta con una apertura de gantry de 75 cm (la más amplia del mercado en 3.0T), ideal para pacientes bariátricos, deportistas de gran envergadura o claustrofóbicos. El uMR Jupiter 5.0T representa la primera RM de cuerpo entero ultra-alto campo a nivel clínico.',
    integracion:
      'Módulos de procesamiento integrados en la consola de adquisición (uStation), permitiendo visualizaciones multiplanares automáticas sin carga computacional externa.',
    perspectivas: [
      {
        label: 'Ing. Eléctrica y Criogénica',
        areas: ['electrica', 'criogenica'],
        texto:
          'Sistemas de gradientes de alta especificación (45 mT/m a 200 T/m/s) con electrónica digital RF de 96 canales. Incorpora tecnología de imán con criostato de fuga cero (zero-boil-off de helio).',
      },
      {
        label: 'Física Médica',
        areas: ['fisica'],
        texto:
          'Reduce los tiempos de adquisición entre un 50 % y un 70 % (por ejemplo, secuencias cerebrales completas de rutina en menos de 90 segundos), minimizando notablemente la tasa de absorción específica (SAR) acumulada.',
      },
    ],
    matriz: {
      algoritmo: 'uAI ACS (DeepRecon)',
      impactoFisico: 'Reducción de SAR térmico; resolución espacial elevada en tiempos mínimos.',
      impactoOperativo: 'Gantry ultra-amplio de 75 cm; exámenes de rutina reducidos a <90 segundos.',
    },
    cifras: [
      { valor: '50–70', unidad: '%', texto: 'menos tiempo de adquisición', tipo: 'tiempo' },
      { valor: '<90', unidad: 's', texto: 'por secuencia cerebral completa de rutina', tipo: 'tiempo' },
      { valor: '75', unidad: 'cm', texto: 'de apertura de gantry en 3.0T', tipo: 'infraestructura' },
      { valor: '5.0', unidad: 'T', texto: 'en la primera RM clínica de cuerpo entero de ultra-alto campo (Jupiter)', tipo: 'infraestructura' },
    ],
  },
  {
    slug: 'united-pet',
    fabricante: 'united',
    modalidad: 'pet',
    nombre: 'uEXPLORER / uMI Panorama',
    descriptor: 'PET/CT de cuerpo entero (Total-Body)',
    algoritmos: ['uAI Deep Reconstruction', 'uAI Flow Tracking'],
    regulatorio: ['FDA 510(k)', 'K190587', 'K222849'],
    moduloIA:
      'Reconstrucción molecular profunda uAI Deep Reconstruction, uAI Flow Tracking y corrección de movimiento basada en IA (Aprobación FDA 510(k), K190587 / K222849).',
    funcionalidad:
      'El uEXPLORER es el primer tomógrafo PET/CT de cuerpo entero del mundo con un campo de visión axial (FOV) de 194 cm, permitiendo registrar simultáneamente toda la anatomía del paciente. La suite de IA modela la propagación de fotones y la función de dispersión de punto (PSF) en modo lista (list-mode), procesando simultáneamente datos dinámicos cinéticos en todos los órganos corporales.',
    proposito:
      'Oncología de ultra-precisión (detección de micrometástasis inferiores a 2.0 mm), farmacocinética celular en tiempo real de nuevos fármacos, inmunoterapia y estudios pediátricos con dosis radiológicas mínimas.',
    integracion:
      'Exportación de curvas de actividad temporal (TAC) multicompartimentales hacia plataformas de investigación y sistemas de radioterapia (DICOM RT).',
    perspectivas: [
      {
        label: 'Física Médica',
        areas: ['fisica'],
        texto:
          'Sensibilidad fotónica extrema (hasta 40× a 50× mayor que un PET/CT convencional). Permite realizar escaneos completos con una reducción de la dosis inyectada de radiofármaco del 80 % al 90 % (dosis pediátricas inferiores a 0.5 mSv) o reducir el tiempo total de examen a solo 1 minuto.',
      },
      {
        label: 'Ing. Eléctrica y Electrónica',
        areas: ['electrica', 'electronica'],
        texto:
          'Electrónica de tiempo de vuelo (ToF) con detectores SiPM integrados a microchips ASIC dedicados, procesando tasas de transferencia de datos en el rango de los terabits por segundo gestionados por clústeres de GPU en paralelo.',
      },
    ],
    matriz: {
      algoritmo: 'uAI Deep Reconstruction',
      impactoFisico: 'Reducción de dosis administrada en 80–90 % o escaneo total en 1 minuto.',
      impactoOperativo: 'FOV axial continuo de 194 cm; captura cinética sistémica simultánea.',
    },
    cifras: [
      { valor: '194', unidad: 'cm', texto: 'de campo de visión axial en uEXPLORER', tipo: 'infraestructura' },
      { hasta: true, valor: '40–50×', unidad: '', texto: 'mayor sensibilidad que un PET/CT convencional', tipo: 'calidad' },
      { valor: '80–90', unidad: '%', texto: 'menos dosis inyectada de radiofármaco', tipo: 'dosis' },
      { valor: '1', unidad: 'min', texto: 'de examen total, como alternativa a reducir la dosis', tipo: 'tiempo' },
    ],
  },
  {
    slug: 'united-eco',
    fabricante: 'united',
    modalidad: 'eco',
    nombre: 'uUS 700 / uUS Series',
    descriptor: 'Ecografía general y en el punto de atención',
    algoritmos: ['uAI Ultrasound Engine', 'Auto Doppler Measure'],
    regulatorio: ['FDA 510(k)'],
    moduloIA:
      'Suite uAI Ultrasound Engine, Auto Doppler Measure y segmentación anatómica vascular/obstétrica (FDA 510(k)).',
    funcionalidad:
      'Incorpora algoritmos de aprendizaje automático para el reconocimiento automático de la anatomía fetal (biometría: DBP, LF, CC, CA) y estructuras cardiovasculares. Reconoce la orientación del transductor y coloca de manera automatizada el volumen de muestra en el eje del vaso sanguíneo, calculando el ángulo de insonación, el índice de resistencia (RI) y la velocidad pico sistólica (PSV).',
    proposito:
      'Obstetricia y ginecología de precisión, diagnóstico vascular periférico y ecocardiografía general.',
    integracion:
      'Exportación directa de mediciones a reportes estructurados DICOM-SR para sistemas de información obstétrica y PACS.',
    perspectivas: [
      {
        label: 'Ing. Biomédica / Industrial',
        areas: ['biomedica', 'industrial'],
        texto:
          'Mitiga la variabilidad inter-operador en mediciones biométricas fetales y acelera los exámenes obstétricos de rutina en más del 40 %, reduciendo la tensión repetitiva en la muñeca del ecografista.',
      },
      {
        label: 'Ing. Eléctrica',
        areas: ['electrica'],
        texto:
          'Transductores de tecnología de cristal único (single-crystal) acoplados a procesadores de haz de formación digital masiva con alta tasa de refresco (high frame rate).',
      },
    ],
    matriz: {
      algoritmo: 'uAI Ultrasound Engine',
      impactoFisico: 'Optimización del ángulo Doppler y reducción del ruido speckle.',
      impactoOperativo: 'Medición biométrica obstétrica automática; −40 % tiempo de exploración.',
    },
    cifras: [
      { valor: '−40', unidad: '%', texto: 'de tiempo de exploración obstétrica', tipo: 'tiempo' },
      { valor: '4', unidad: '', texto: 'biometrías fetales automáticas (DBP, LF, CC, CA)', tipo: 'calidad' },
    ],
  },
  {
    slug: 'united-dmo',
    fabricante: 'united',
    modalidad: 'dmo',
    nombre: 'uAI Bone Mineral Density',
    descriptor: 'Análisis de densidad mineral ósea en uCT',
    algoritmos: ['uAI Spine', 'BMD QCT Solution'],
    regulatorio: ['FDA 510(k)', '21 CFR 892.1750'],
    moduloIA:
      'Módulo de análisis densitométrico espectral y volumétrico uAI Spine / BMD QCT Solution (Aprobación FDA 510(k) bajo categoría 21 CFR 892.1750).',
    funcionalidad:
      'Al igual que Siemens, United Imaging orienta la densitometría ósea hacia el cribado de TAC Cuantitativo (QCT) y análisis espectral de doble energía (Dual Energy CT). El algoritmo de redes neuronales segmenta y etiqueta automáticamente los cuerpos vertebrales lumbares (L1–L4) y cuello femoral, separa el hueso trabecular del hueso cortical y calcula la densidad volumétrica de hidroxiapatita mineral ósea (mg/cm³).',
    proposito:
      'Diagnóstico oportunista de osteoporosis y cuantificación del riesgo de fractura en pacientes que se realizan tomografías de tórax, abdomen o columna por otros motivos clínicos, eliminando la necesidad de derivación a un densitómetro DXA bidimensional.',
    integracion:
      'Integración en la suite uWS (United Workstation); genera reportes comparativos automáticos con curvas de referencia poblacional de T-score y Z-score conformes con los estándares de la Sociedad Internacional de Densitometría Clínica (ISCD).',
    perspectivas: [
      {
        label: 'Física Médica',
        areas: ['fisica'],
        texto:
          'Elimina las falsas lecturas de densidad mineral ósea provocadas por calcificaciones ateromatosas en la aorta abdominal o esclerosis facetaria degenerativa, artefactos que con frecuencia distorsionan las mediciones en los densitómetros DXA planos.',
      },
      {
        label: 'Ing. Industrial',
        areas: ['industrial'],
        texto:
          'Habilita la medicina preventiva poblacional automatizada sin costos operativos adicionales ni tiempos añadidos de ocupación de sala.',
      },
    ],
    matriz: {
      algoritmo: 'Deep Spine Segmenter',
      impactoFisico: 'Medición volumétrica trabecular inmune a calcificaciones extraesqueléticas.',
      impactoOperativo: 'Cribado oportunista en estudios de tórax/abdomen sin citación adicional.',
    },
    cifras: [
      { valor: 'L1–L4', unidad: '', texto: 'segmentadas y etiquetadas automáticamente', tipo: 'calidad' },
      { valor: '0', unidad: '', texto: 'citaciones adicionales para el cribado', tipo: 'tiempo' },
    ],
  },
];
