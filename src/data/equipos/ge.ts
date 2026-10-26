import type { Equipo } from '../types';

// GE HealthCare · fichas por modalidad (documento fuente, páginas P12–P18).
export const ge: Equipo[] = [
  {
    slug: 'ge-rx',
    fabricante: 'ge',
    modalidad: 'rx',
    nombre: 'Definium 64 / Definium Tempo',
    descriptor: 'Radiología digital fija',
    algoritmos: ['Critical Care Suite (CCS 2.0)', 'Auto Positioning', 'Intelligent Workflow'],
    regulatorio: ['FDA 510(k)', '21 CFR 892.2050', 'K211161'],
    moduloIA:
      'Critical Care Suite (CCS 2.0) embebido en la consola de adquisición y Auto Positioning / Intelligent Workflow (Aprobación FDA 510(k), Reg. 21 CFR 892.2050 / K211161).',
    funcionalidad:
      'Utiliza cámaras de visión artificial acopladas al colimador para calcular la altura y rotación anatómica del paciente. En procesamiento de imagen, la suite ejecuta redes neuronales convolucionales (CNN) directamente en la máquina (on-device AI) para detectar neumotórax y calcular automáticamente la distancia vertical entre la punta del tubo endotraqueal (TET) y la carina traqueal.',
    proposito:
      'Triaje en tiempo real en servicios de urgencias y unidades de cuidados intensivos (UCI); identificación inmediata de intubaciones selectivas o neumotórax a tensión antes de que la imagen sea leída en el PACS.',
    integracion:
      'Envía metadatos de alerta como capas DICOM Structured Reporting (DICOM-SR) y sobreimpresiones (overlays) gráficas hacia el PACS/RIS institucional, priorizando automáticamente la lista de lectura del radiólogo.',
    perspectivas: [
      {
        label: 'Física Médica',
        areas: ['fisica'],
        texto:
          'La medición automatizada del grosor corporal optimiza las curvas de control automático de exposición (AEC), evitando sobreexposiciones y reduciendo el producto dosis-área (DAP).',
      },
      {
        label: 'Ing. Biomédica / Industrial',
        areas: ['biomedica', 'industrial'],
        texto:
          'El algoritmo localiza el tubo endotraqueal con un error medio inferior a 1.0 mm frente al estándar de oro, reduciendo el tiempo de notificación de hallazgos críticos de horas a menos de 15 segundos tras el disparo.',
      },
    ],
    matriz: {
      algoritmo: 'Critical Care Suite (CCS)',
      impactoFisico: 'Optimización de exposición automática; reduce radiación repetida.',
      impactoOperativo: 'Alertas críticas en <15 s; error <1 mm en punta de tubo TET.',
    },
    cifras: [
      { valor: '<15', unidad: 's', texto: 'para notificar hallazgos críticos tras el disparo', tipo: 'tiempo' },
      { valor: '<1.0', unidad: 'mm', texto: 'de error medio al localizar el tubo endotraqueal', tipo: 'calidad' },
    ],
  },
  {
    slug: 'ge-fluoro',
    fabricante: 'ge',
    modalidad: 'fluoro',
    nombre: 'Discovery IGS 7 / Allia IGS',
    descriptor: 'Fluoroscopia y angiografía',
    algoritmos: ['AutoRight'],
    regulatorio: ['FDA 510(k)'],
    moduloIA:
      'Plataforma de asistencia robótica y reducción de dosis AutoRight (FDA 510(k)).',
    funcionalidad:
      'Red neuronal que modula dinámicamente en bucle cerrado siete parámetros de la cadena de imagen en tiempo real: tasa de pulso, kV, mA, filtrado espectral de cobre añadido, tamaño focal y posición del detector plano, basándose en la composición anatómica del paciente y la densidad del medio de contraste iodado.',
    proposito:
      'Cateterismos cardíacos complejos, neurointervencionismo y embolizaciones periféricas prolongadas.',
    integracion:
      'Sincronización total con inyectores automáticos y estaciones de navegación 3D intervencionista (Innova 3D CT).',
    perspectivas: [
      {
        label: 'Ing. Mecánica / Eléctrica',
        areas: ['mecanica', 'electrica'],
        texto:
          'Implementa una base móvil motorizada con navegación guiada por láser en el quirófano (sin rieles de techo), aislando vibraciones que degradarían la sustracción digital (DSA).',
      },
      {
        label: 'Física Médica',
        areas: ['fisica'],
        texto:
          'AutoRight logra una disminución en la dosis acumulada de kerma en aire (Air Kerma) y dosis de superficie de hasta un 40 % a 55 % durante procedimientos fluoroscópicos complejos sin que el intervencionista deba ajustar manualmente la técnica radiológica.',
      },
    ],
    matriz: {
      algoritmo: 'AutoRight AI Platform',
      impactoFisico: 'Modulación en tiempo real; reducción del Air Kerma en hasta 50 %.',
      impactoOperativo: 'Adaptación continua de contraste sin intervención manual del cirujano.',
    },
    cifras: [
      { hasta: true, valor: '40–55', unidad: '%', texto: 'menos kerma en aire y dosis de superficie', tipo: 'dosis' },
      { valor: '7', unidad: '', texto: 'parámetros de imagen modulados en bucle cerrado', tipo: 'calidad' },
    ],
  },
  {
    slug: 'ge-arco-c',
    fabricante: 'ge',
    modalidad: 'arco-c',
    nombre: 'OEC 3D / OEC Elite CFD',
    descriptor: 'Arco en C quirúrgico',
    algoritmos: ['Live Zoom', 'Smart Metal Artifact Reduction'],
    regulatorio: ['FDA 510(k)', 'K203346'],
    moduloIA:
      'Algoritmos de corrección geométrica de volumen, segmentación intraoperatoria y supresión de dispersión Live Zoom / Smart Metal Artifact Reduction (Aprobación FDA 510(k), K203346).',
    funcionalidad:
      'Incorpora un detector plano de silicio amorfo CMOS de alta velocidad. El software de reconstrucción volumétrica utiliza modelos matemáticos basados en redes neuronales para identificar la dispersión causada por materiales ferromagnéticos y osteosíntesis, reconstruyendo un cubo 3D intraoperatorio (19 × 19 × 19 cm) en menos de 30 segundos.',
    proposito:
      'Cirugía ortopédica reconstructiva, fijaciones espinales complejas y traumatología craneomaxilofacial.',
    integracion:
      'Transmisión directa de imágenes volumétricas 3D hacia sistemas de navegación quirúrgica mediante perfiles IHE e interfaces DICOM intraoperatorias sin cables.',
    perspectivas: [
      {
        label: 'Ing. Mecánica',
        areas: ['mecanica'],
        texto:
          'Diseño de gantry isocéntrico de fibra de carbono que mantiene la alineación del haz con tolerancias submilimétricas durante barridos orbitales completos sin deflexión por gravedad.',
      },
      {
        label: 'Ing. Industrial',
        areas: ['industrial'],
        texto:
          'Reduce los tiempos muertos intraquirúrgicos al evitar el traslado del paciente a tomografía postoperatoria para verificar el posicionamiento de implantes.',
      },
    ],
    matriz: {
      algoritmo: '3D Volumetric Scatter Reduction',
      impactoFisico: 'Supresión de artefactos metálicos y dispersión cuántica.',
      impactoOperativo: 'Reconstrucción tomográfica intraoperatoria en búnker quirúrgico en <30 s.',
    },
    cifras: [
      { valor: '<30', unidad: 's', texto: 'para reconstruir el cubo 3D intraoperatorio', tipo: 'tiempo' },
      { valor: '19', unidad: 'cm', texto: 'por lado del cubo 3D intraoperatorio', tipo: 'calidad' },
    ],
  },
  {
    slug: 'ge-tac',
    fabricante: 'ge',
    modalidad: 'tac',
    nombre: 'Revolution Apex Elite / Revolution Maxima',
    descriptor: 'Tomografía computarizada',
    algoritmos: ['TrueFidelity DLIR', 'Effortless Workflow Engine'],
    regulatorio: ['FDA 510(k)'],
    moduloIA:
      'Motor de reconstrucción profunda TrueFidelity DLIR (Deep Learning Image Reconstruction) y cámara de posicionamiento Effortless Workflow Engine (Auto positioning 3D) (Aprobación FDA 510(k)).',
    funcionalidad:
      'A diferencia de los métodos de reconstrucción iterativa basados en modelos (MBIR) que alteran la textura del grano de la imagen (aspecto plástico o "ceroso"), TrueFidelity fue entrenada con sinogramas crudos de dosis baja pareados con imágenes de reconstrucción filtrada por retroproyección (FBP) de ultra-alta dosis y bajo ruido. Incorpora tres niveles seleccionables de intensidad (Low, Medium, High) para desacoplar el ruido cuántico de la resolución espacial.',
    proposito:
      'Angio-TAC coronario de latido único a altas frecuencias cardíacas (mediante cobertura axial de 16 cm y rotación de 0.23 s), detección de lesiones hepáticas milimétricas de bajo contraste y cribado de cáncer pulmonar con dosis equivalente a radiografía.',
    integracion:
      'Reconstrucción automática en línea en el generador de imágenes local; compatible con estaciones AW Server y visores PACS estándar.',
    perspectivas: [
      {
        label: 'Física Médica',
        areas: ['fisica'],
        texto:
          'Estudios clínicos en RSNA demuestran una mejora en la detectabilidad de bajo contraste (Low Contrast Detectability, LCD) de hasta un 100 % y una reducción en la dosis efectiva (mSv) del 40 % al 60 % manteniendo la frecuencia espacial original del espectro de potencia de ruido (Noise Power Spectrum, NPS).',
      },
      {
        label: 'Ing. Eléctrica',
        areas: ['electrica'],
        texto:
          'El gantry del Revolution Apex aloja el tubo de rayos X Quantix 1600 (generador de 1300 mA), controlado por microprocesadores sincronizados con aceleración angular de hasta 50G.',
      },
    ],
    matriz: {
      algoritmo: 'TrueFidelity DLIR',
      impactoFisico: 'Aumento del 100 % en resolución de bajo contraste; −60 % de dosis.',
      impactoOperativo: 'Textura FBP pura; escaneo cardíaco completo en un único latido (0.23 s).',
    },
    cifras: [
      { valor: '40–60', unidad: '%', texto: 'menos dosis efectiva (mSv)', tipo: 'dosis' },
      { hasta: true, valor: '100', unidad: '%', texto: 'más detectabilidad de bajo contraste (LCD)', tipo: 'calidad' },
      { valor: '0.23', unidad: 's', texto: 'de rotación para angio-TAC de latido único', tipo: 'tiempo' },
      { valor: '1300', unidad: 'mA', texto: 'de generador en el tubo Quantix 1600', tipo: 'infraestructura' },
    ],
  },
  {
    slug: 'ge-rm',
    fabricante: 'ge',
    modalidad: 'rm',
    nombre: 'SIGNA Premier / SIGNA Hero',
    descriptor: 'Resonancia magnética de 3.0 T y 1.5 T',
    algoritmos: ['AIR Recon DL', 'Sonic DL'],
    regulatorio: ['FDA 510(k)'],
    moduloIA:
      'Suite de reconstrucción basada en Deep Learning AIR Recon DL y software de adquisición acelerada Sonic DL (Aprobación FDA 510(k)).',
    funcionalidad:
      'AIR Recon DL opera a nivel de los datos crudos del espacio k antes de la transformada de Fourier. Emplea redes neuronales residuales profundas que reconocen y suprimen el ruido incoherente del espacio k e incorporan algoritmos de supresión de Gibbs (ringing artifact) sin perder bordes anatómicos finos.',
    proposito:
      'Neuroimagen cuantitativa ultra-rápida, estudios musculoesqueléticos en alta resolución y resonancia magnética cardíaca funcional en tiempo real durante respiración libre (con Sonic DL).',
    integracion:
      'Nativa en la plataforma de software de adquisición SIGNA Works; las imágenes se procesan sin latencia perceptible en la consola de adquisición.',
    perspectivas: [
      {
        label: 'Ing. Eléctrica y Electrónica',
        areas: ['electrica', 'electronica'],
        texto:
          'Acoplamiento con las antenas ligeras y flexibles tipo manta AIR Coils, las cuales reducen la inductancia parásita y mejoran el factor de desacoplamiento de bobinas contiguas.',
      },
      {
        label: 'Física Médica / Biomédica',
        areas: ['fisica', 'biomedica'],
        texto:
          'Permite incrementar la relación señal-ruido (SNR) en un factor de hasta 2×, o alternativamente reducir el tiempo de adquisición del estudio entre un 40 % y 50 %, mitigando el depósito de energía térmica por radiofrecuencia (tasa SAR) en el paciente.',
      },
      {
        label: 'Ing. Industrial',
        areas: ['industrial'],
        texto:
          'Incrementa la productividad del servicio en un 35–50 %, posibilitando agendas con citas cada 15 a 20 minutos en lugar de 40 minutos por estudio.',
      },
    ],
    matriz: {
      algoritmo: 'AIR Recon DL / Sonic DL',
      impactoFisico: 'Aumento de SNR (2×); remoción selectiva de artefactos de Gibbs.',
      impactoOperativo: 'Reducción del tiempo de escaneo en hasta un 50 %; menor claustrofobia.',
    },
    cifras: [
      { hasta: true, valor: '2×', unidad: '', texto: 'más relación señal-ruido (SNR)', tipo: 'calidad' },
      { valor: '40–50', unidad: '%', texto: 'menos tiempo de adquisición, como alternativa al aumento de SNR', tipo: 'tiempo' },
      { valor: '15–20', unidad: 'min', texto: 'por cita en lugar de 40 minutos', tipo: 'tiempo' },
    ],
  },
  {
    slug: 'ge-pet',
    fabricante: 'ge',
    modalidad: 'pet',
    nombre: 'Omni Legend / Discovery MI',
    descriptor: 'Tomografía por emisión de positrones (PET/CT)',
    algoritmos: ['Precision DL', 'Q.Clear', 'MotionFree'],
    regulatorio: ['FDA 510(k)'],
    moduloIA:
      'Reconstrucción molecular profunda Precision DL y software de compensación respiratoria Q.Clear / MotionFree (FDA 510(k)).',
    funcionalidad:
      'Precision DL utiliza una red neuronal profunda entrenada con datos PET de ultra-alto conteo (adquisiciones prolongadas) para emular la calidad de imagen de detectores de cuerpo entero en escáneres estándar. Aumenta sustancialmente la relación contraste-ruido (CNR) en lesiones milimétricas poco ávidas de trazador.',
    proposito:
      'Detección de lesiones tumorales microscópicas, recidivas locales de cáncer de próstata mediante ¹⁸F-PSMA y evaluación de patologías neurodegenerativas.',
    integracion:
      'Exportación automática de volúmenes PET/CT con corrección de atenuación calculada y segmentación metabólica directamente a estaciones de simulación de radioterapia (DICOM RT).',
    perspectivas: [
      {
        label: 'Física Médica',
        areas: ['fisica'],
        texto:
          'Precision DL incrementa la detectabilidad de lesiones de bajo contraste en un 42 % en comparación con los algoritmos estándar de reconstrucción iterativa Time-of-Flight (ToF), permitiendo reducir a la mitad la actividad administrada de radiofármaco (MBq/kg).',
      },
      {
        label: 'Ing. Eléctrica',
        areas: ['electrica'],
        texto:
          'Uso de detectores BGO de alta sensibilidad geométrica acoplados a procesadores FPGA de ultra-baja latencia para el análisis de coincidencias en nanosegundos.',
      },
    ],
    matriz: {
      algoritmo: 'Precision DL',
      impactoFisico: 'Incremento del 42 % en contraste tumoral; menor actividad inyectada.',
      impactoOperativo: 'Escaneos oncológicos rápidos; alta reproducibilidad de valores SUV.',
    },
    cifras: [
      { valor: '42', unidad: '%', texto: 'más detectabilidad de lesiones de bajo contraste', tipo: 'calidad' },
      { valor: '½', unidad: '', texto: 'de la actividad de radiofármaco administrada', tipo: 'dosis' },
    ],
  },
  {
    slug: 'ge-eco',
    fabricante: 'ge',
    modalidad: 'eco',
    nombre: 'LOGIQ E10 / Venue Family',
    descriptor: 'Ecografía en el punto de atención (POCUS)',
    algoritmos: ['Caption Guidance', 'cSound Architecture', 'Auto B-Lines', 'Auto VTI'],
    regulatorio: ['De Novo', 'FDA 510(k)'],
    moduloIA:
      'Caption Guidance (adquisición de Caption Health integrada), cSound Architecture con IA y Auto B-Lines / Auto VTI (Aprobación FDA De Novo / 510(k)).',
    funcionalidad:
      'El sistema incorpora redes neuronales de visión continua que guían al clínico en tiempo real mediante flechas de navegación espacial en pantalla para orientar la sonda hacia las vistas estándar cardíacas (ejes paraesternal, apical de 4 cámaras). Una vez adquirida la ventana, la IA cuantifica la fracción de eyección del ventrículo izquierdo, el gasto cardíaco y la presencia de líneas B pulmonares indicativas de edema alveolar.',
    proposito:
      'Medicina de urgencias, shock hemodinámico en UCI, anestesiología y cribado cardiovascular a la cabecera del paciente.',
    integracion:
      'Transmisión inalámbrica de clips y reportes DICOM estructurados hacia plataformas cloud (ViewPoint / PACS institucional) sin necesidad de acoplamiento físico.',
    perspectivas: [
      {
        label: 'Ing. Biomédica / Industrial',
        areas: ['biomedica', 'industrial'],
        texto:
          'Reduce drásticamente la curva de aprendizaje de médicos no especialistas en ecocardiografía; la guía automatizada permite que personal de enfermería o residentes capturen imágenes de calidad diagnóstica validada por cardiólogos.',
      },
      {
        label: 'Ing. Eléctrica',
        areas: ['electrica'],
        texto:
          'El motor de procesamiento gráfico cSound procesa la señal de radiofrecuencia cruda proveniente de transductores matriciales monocristalinos mediante clústeres GPU embebidos.',
      },
    ],
    matriz: {
      algoritmo: 'Caption Guidance AI',
      impactoFisico: 'Estandarización de patrones sonográficos en tiempo real.',
      impactoOperativo: 'Guiado a usuarios noveles para captura de vistas cardíacas estándar.',
    },
    cifras: [
    ],
  },
  {
    slug: 'ge-dmo',
    fabricante: 'ge',
    modalidad: 'dmo',
    nombre: 'Lunar iDXA / Lunar Prodigy',
    descriptor: 'DXA central dedicado',
    algoritmos: ['enCORE Platform', 'SmartScan', 'Auto Analysis', 'CoreScan'],
    regulatorio: ['FDA 510(k)', '21 CFR 892.1170'],
    moduloIA:
      'Software de morfometría avanzada enCORE Platform con SmartScan / Auto Analysis y CoreScan (Cuantificación de Adipocitometría Visceral) (Aprobación FDA 510(k), 21 CFR 892.1170).',
    funcionalidad:
      'A diferencia de otras marcas que tercerizan la densitometría ósea al TAC, GE HealthCare mantiene liderazgo con equipos DXA axiales físicos dedicados. El algoritmo de IA identifica automáticamente las vértebras lumbares (L1–L4), define las líneas intervertebrales, posiciona el cuello femoral y aísla el tejido graso visceral (VAT) del subcutáneo en escaneos de cuerpo entero. Detecta de forma inteligente artefactos por calcificaciones aórticas o prótesis para excluirlos del cálculo del T-score.',
    proposito:
      'Diagnóstico de osteoporosis, predicción del riesgo de fractura osteoporótica mayor a 10 años (FRAX integrado) y evaluación de sarcopenia y riesgo metabólico/cardiovascular.',
    integracion:
      'Emisión directa de informes estandarizados a historias clínicas electrónicas (EHR/HL7) y almacenamiento en PACS en formato DICOM de segunda captura y datos estructurados.',
    perspectivas: [
      {
        label: 'Física Médica',
        areas: ['fisica'],
        texto:
          'Utiliza una fuente de rayos X de haz en abanico estrecho (narrow fan-beam) acoplada a detectores directos de conteo de fotones de telururo de zinc y cadmio (CZT) con filtración de borde K (K-edge). Esto elimina la distorsión por magnificación geométrica y entrega dosis radiológicas despreciables (<0.01 mSv por estudio de columna/fémur).',
      },
      {
        label: 'Ing. Industrial',
        areas: ['industrial'],
        texto:
          'SmartScan analiza la densidad en la primera pasada y ajusta automáticamente la velocidad del brazo mecánico, reduciendo el tiempo de adquisición de un fémur o columna a 10 segundos (QuickView).',
      },
    ],
    matriz: {
      algoritmo: 'enCORE SmartScan & CoreScan',
      impactoFisico: 'Detector de conteo de fotones CZT; dosis ultra-baja (<0.01 mSv).',
      impactoOperativo: 'Segmentación automática L1–L4; escaneos esqueléticos en 10 segundos.',
    },
    cifras: [
      { valor: '<0.01', unidad: 'mSv', texto: 'por estudio de columna/fémur', tipo: 'dosis' },
      { valor: '10', unidad: 's', texto: 'de adquisición de un fémur o columna', tipo: 'tiempo' },
    ],
  },
];
