import type { Equipo } from '../types';

export const siemens: Equipo[] = [
  {
    slug: 'siemens-rx',
    fabricante: 'siemens',
    modalidad: 'rx',
    nombre: 'Ysio X.pree / Multix Impact',
    descriptor: 'Radiología digital fija',
    algoritmos: ['myExam Companion', 'FAST 3D Camera', 'AI-Rad Companion Chest X-ray'],
    regulatorio: ['FDA 510(k)'],
    moduloIA:
      'Integración del software de adquisición guiada myExam Companion con FAST 3D Camera y suite de algoritmos AI-Rad Companion Chest X-ray (Aprobación FDA 510(k)).',
    funcionalidad:
      'Utiliza cámaras 3D con visión computacional basada en redes neuronales convolucionales (CNN) para identificar hitos anatómicos externos del paciente en tiempo real sobre la mesa o estativo vertical. Ajusta automáticamente la colimación al área anatómica precisa y selecciona la técnica radiográfica (kVp, mAs). En post-proceso, la IA segmenta y resalta nódulos pulmonares, consolidaciones, atelectasias y neumotórax.',
    proposito:
      'Detección precoz de patologías torácicas, reducción drástica de repetición de placas por mal posicionamiento y estandarización del flujo en urgencias y triaje ambulatorio.',
    integracion:
      'Totalmente nativa bajo estándar DICOM (Modality Worklist, MPPS, DICOM Structured Reporting). Los hallazgos de IA se integran al PACS/RIS institucional sin necesidad de estaciones secundarias de post-proceso.',
    perspectivas: [
      {
        label: 'Física Médica',
        areas: ['fisica'],
        texto:
          'Disminución del producto dosis-área (DAP) entre un 15 % y 25 % gracias a la colimación guiada por IA, previniendo la radiación dispersa innecesaria fuera del blanco anatómico.',
      },
      {
        label: 'Ing. Industrial',
        areas: ['industrial'],
        texto:
          'Reduce los tiempos de posicionamiento de 4 a menos de 2 minutos por paciente, incrementando la capacidad operativa diaria del búnker.',
      },
    ],
    matriz: {
      algoritmo: 'FAST 3D Camera / myExam Companion',
      impactoFisico: 'Colimación exacta; menor radiación dispersa (DAP ↓ 20 %).',
      impactoOperativo: 'Reducción de repetición de placas a <1 %; −50 % de tiempo de posicionamiento.',
    },
    cifras: [
      { valor: '15–25', unidad: '%', texto: 'menos producto dosis-área (DAP)', tipo: 'dosis' },
      { valor: '<2', unidad: 'min', texto: 'de posicionamiento por paciente', tipo: 'tiempo' },
      { valor: '<1', unidad: '%', texto: 'de repetición de placas', tipo: 'calidad' },
    ],
  },
  {
    slug: 'siemens-fluoro',
    fabricante: 'siemens',
    modalidad: 'fluoro',
    nombre: 'Luminos Lotus Max / Luminos Q.namix',
    descriptor: 'Fluoroscopia y radiografía dinámica',
    algoritmos: ['CARE'],
    regulatorio: ['FDA 510(k)'],
    moduloIA:
      'Algoritmos de reducción de dosis CARE (Combined Applications to Reduce Exposure) asistidos por redes neuronales y optimización de cadena de imagen basada en IA (FDA 510(k)).',
    funcionalidad:
      'Modulación adaptativa en tiempo real para optimizar la dosis y la calidad de imagen durante barridos dinámicos.',
    proposito:
      'Estudios digestivos funcionales, histerosalpingografías y procedimientos intervencionistas osteoarticulares minimizando el daño radiológico celular acumulativo.',
    integracion:
      'Sincronización bidireccional vía DICOM con inyectores de contraste automáticos y consolas PACS para curvas de cinética de bolo.',
    perspectivas: [
      {
        label: 'Ing. Biomédica/Física Médica',
        areas: ['biomedica', 'fisica'],
        texto:
          'Modulación pulsada de alta precisión que suprime artefactos de movimiento mediante redes de estimación de flujo óptico, logrando reducciones de tasa de dosis de hasta el 50 % en escopia continua.',
      },
      {
        label: 'Ing. Mecánica',
        areas: ['mecanica'],
        texto:
          'Compensación activa de deformación estructural en el brazo/soporte basculante durante barridos oblicuos.',
      },
    ],
    matriz: {
      algoritmo: 'CARE / Optiq AI',
      impactoFisico: 'Reducción de tasa de dosis en tiempo real hasta un 50 %.',
      impactoOperativo: 'Adaptación instantánea de contraste en tiempo real sin pausas de reconfiguración.',
    },
    cifras: [
      { hasta: true, valor: '50', unidad: '%', texto: 'de reducción de la tasa de dosis en escopia continua', tipo: 'dosis' },
    ],
  },
  {
    slug: 'siemens-arco-c',
    fabricante: 'siemens',
    modalidad: 'arco-c',
    nombre: 'Cios Spin (Arco en C 3D móvil) / Artis Intervencional con Optiq AI',
    descriptor: 'Arcos en C quirúrgicos e intervencionismo',
    algoritmos: ['Screw Scout', 'Optiq AI'],
    regulatorio: ['FDA 510(k)'],
    moduloIA:
      'Módulo de navegación intraoperatoria y detección de implantes Screw Scout y algoritmos de optimización de exposición Optiq AI (Aprobación FDA 510(k)).',
    funcionalidad:
      'Algoritmo 3D-CNN intraoperatorio que identifica de forma automatizada tornillos pediculares, placas y clavos endomedulares en reconstrucciones 3D cone-beam CT (CBCT). Optiq AI calcula automáticamente los parámetros de haz óptimos mediante control de ganancia de contraste en lugar de técnicas fijas de dosis.',
    proposito:
      'Cirugía ortopédica, espinal y neuroquirúrgica de alta precisión; validación de emplazamiento de fijaciones antes de cerrar la herida operatoria.',
    integracion:
      'Exportación directa a sistemas de neuronavegación quirúrgica (Brainlab, Medtronic StealthStation) mediante protocolos DICOM 3D intraoperatorios.',
    perspectivas: [
      {
        label: 'Ing. Mecánica y Eléctrica',
        areas: ['mecanica', 'electrica'],
        texto:
          'Sistema móvil de contrabalanceo de torque con generador de alta frecuencia de 25 kW compacto; la IA optimiza el disparo térmico reduciendo el sobrecalentamiento del ánodo rotatorio en cirugías complejas.',
      },
      {
        label: 'Ing. Industrial',
        areas: ['industrial'],
        texto:
          'Elimina re-intervenciones quirúrgicas por fijaciones mal posicionadas; la detección de implantes reduce de 15 a 3 minutos la confirmación volumétrica intraoperatoria.',
      },
    ],
    matriz: {
      algoritmo: 'Screw Scout / Optiq AI',
      impactoFisico: 'Menor dosis acumulada en quirófano para paciente y cirujano.',
      impactoOperativo: 'Segmentación de implantes en 3D en quirófano; evita cirugías de revisión.',
    },
    cifras: [
      { valor: '3', unidad: 'min', texto: 'de confirmación volumétrica intraoperatoria (antes 15)', tipo: 'tiempo' },
      { valor: '25', unidad: 'kW', texto: 'de generador compacto de alta frecuencia', tipo: 'infraestructura' },
    ],
  },
  {
    slug: 'siemens-tac',
    fabricante: 'siemens',
    modalidad: 'tac',
    nombre: 'SOMATOM X.cite / NAEOTOM Alpha',
    descriptor: 'TAC por conteo de fotones (Photon-Counting CT)',
    algoritmos: ['myExam Companion', 'FAST Integrated Workflow', 'Deep Learning Spectral Recon'],
    regulatorio: ['FDA 510(k)'],
    moduloIA:
      'myExam Companion, FAST Integrated Workflow (cámara 3D) y motor de reconstrucción profunda Deep Learning Spectral Recon (FDA 510(k)).',
    funcionalidad:
      'La cámara óptica 3D infrarroja analiza la silueta del paciente, detecta el isocentro anatómico exacto y proyecta el rango de escaneo. En el procesador espectral del tomógrafo por conteo de fotones (NAEOTOM Alpha), algoritmos de redes neuronales convolucionales deconvolucionan pulsos individuales de energía, eliminando el ruido electrónico en bajas dosis.',
    proposito:
      'Angio-TAC coronario de ultra-alta resolución (0.2 mm), caracterización de placas vulnerables, oncología pulmonar de dosis ultrabaja equivalente a una placa de tórax convencional.',
    integracion:
      'Enrutamiento automatizado a nodos periféricos de post-proceso y algoritmos CAD (Computer-Aided Detection) como AI-Rad Companion Organs RT / Chest CT.',
    perspectivas: [
      {
        label: 'Física Médica',
        areas: ['fisica'],
        texto:
          'Relación dosis-eficiencia inigualable. Al centrar al paciente en el isocentro mediante IA, los filtros pajarita (bowtie) operan en su punto nominal óptimo, reduciendo dosis superficiales no homogéneas hasta en un 30 %.',
      },
      {
        label: 'Ing. Eléctrica',
        areas: ['electrica'],
        texto:
          'Manejo de anchos de banda masivos (> terabits por rotación en detectores de telururo de cadmio-CdTe) procesados por clústeres GPU paralelos en el gantry.',
      },
    ],
    matriz: {
      algoritmo: 'myExam Companion / Deep Spectral Recon',
      impactoFisico: 'Supresión cuántica de ruido electrónico; baja dosis isotrópica.',
      impactoOperativo: 'Isocentrado automático del paciente; protocolos adaptados sin sesgo del técnico.',
    },
    cifras: [
      { valor: '0.2', unidad: 'mm', texto: 'de resolución en angio-TAC coronario', tipo: 'calidad' },
      { hasta: true, valor: '30', unidad: '%', texto: 'menos dosis superficiales no homogéneas', tipo: 'dosis' },
    ],
  },
  {
    slug: 'siemens-rm',
    fabricante: 'siemens',
    modalidad: 'rm',
    nombre: 'MAGNETOM Vida / MAGNETOM Flow',
    descriptor: 'Resonancia magnética de 1.5 T y 3 T',
    algoritmos: ['Deep Resolve Gain', 'Deep Resolve Sharp', 'Deep Resolve Boost', 'Deep Resolve Swift Brain'],
    regulatorio: ['FDA 510(k)'],
    moduloIA:
      'Plataforma de reconstrucción Deep Resolve (Deep Resolve Gain, Sharp, Boost y Swift Brain) integrada en syngo MR XA50A/XB10 (Aprobación FDA 510(k)).',
    funcionalidad:
      'Emplea redes neuronales profundas entrenadas con pares de datos crudos (k-space) de alta y baja resolución. Deep Resolve elimina el ruido incoherente del espacio k y realiza una super-resolución matemática. Permite adquirir secuencias ponderadas en T1, T2, FLAIR y difusión en una fracción del tiempo habitual.',
    proposito:
      'Protocolos neurológicos rápidos en pacientes con sospecha de ACV agudo (protocolo de cerebro completo en menos de 2–3 minutos), estudios musculoesqueléticos sin sedación en pacientes claustrofóbicos o pediátricos.',
    integracion:
      'Integración nativa en la cadena de reconstrucción matemática del escáner (pipeline MARS); las imágenes procesadas con IA conservan la fidelidad diagnóstica cuantitativa (mapas ADC, T1/T2 mapping) y se envían transparentemente al PACS.',
    perspectivas: [
      {
        label: 'Ing. Biomédica y Física Médica',
        areas: ['biomedica', 'fisica'],
        texto:
          'Disminuye la degradación temporal por artefactos de movimiento involuntario del paciente y controla los límites de Tasa de Absorción Específica (SAR) al reducir drásticamente los trenes de pulsos de radiofrecuencia (RF).',
      },
      {
        label: 'Ing. Mecánica/Criogénica (MAGNETOM Flow)',
        areas: ['mecanica', 'criogenica'],
        texto:
          'Incorpora la tecnología DryCool, reduciendo el helio líquido a solo 0.7 litros (frente a los más de 1000 L de escáneres convencionales) y eliminando el tubo de quench físico hacia la atmósfera.',
      },
      {
        label: 'Ing. Industrial',
        areas: ['industrial'],
        texto:
          'Incremento del rendimiento de la sala de un 40 % a 65 %, reduciendo las listas de espera diagnóstica.',
      },
    ],
    matriz: {
      algoritmo: 'Deep Resolve (Boost / Sharp)',
      impactoFisico: 'Menor SAR térmico; resolución espacial milimétrica superior.',
      impactoOperativo: 'Adquisición cerebral/musculoesquelética hasta un 50–70 % más rápida.',
    },
    cifras: [
      { valor: '0.7', unidad: 'L', texto: 'de helio líquido con DryCool (MAGNETOM Flow)', tipo: 'infraestructura' },
      { valor: '<2–3', unidad: 'min', texto: 'para protocolo de cerebro completo (ACV)', tipo: 'tiempo' },
      { valor: '40–65', unidad: '%', texto: 'de incremento del rendimiento de la sala', tipo: 'tiempo' },
    ],
  },
  {
    slug: 'siemens-pet',
    fabricante: 'siemens',
    modalidad: 'pet',
    nombre: 'Biograph Vision / Biograph Vision Quadra',
    descriptor: 'PET/CT de cuerpo entero (Total-Body)',
    algoritmos: ['FlowMotion AI'],
    regulatorio: ['FDA 510(k)'],
    moduloIA:
      'Reconstrucción molecular asistida por aprendizaje profundo FlowMotion AI y algoritmos de atenuación/denoising basados en redes neuronales (Aprobación FDA 510(k)).',
    funcionalidad:
      'Utiliza fotomultiplicadores de silicio (SiPM) acoplados a cristales LSO miniatura de 3.2 mm. La IA modela la física de propagación de fotones y la función de dispersión de punto (PSF) para reconstruir imágenes moleculares con niveles mínimos de cuentas radiactivas. Asimismo, genera correcciones de atenuación sintéticas a partir de adquisiciones de CT ultrabajas.',
    proposito:
      'Oncología de precisión (micro-metástasis milimétricas con fluorodesoxiglucosa ¹⁸F-FDG o ligandos PSMA), neurología (amiloide/Tau para Alzheimer) y seguimiento teranóstico.',
    integracion:
      'Sincronización directa con sistemas de planificación de radioterapia (RT PACS/TPS como Eclipse o RayStation), enviando segmentaciones metabólicas de volumen tumoral biológico (BTV).',
    perspectivas: [
      {
        label: 'Física Médica',
        areas: ['fisica'],
        texto:
          'Permite reducir la dosis administrada del radiofármaco hasta en un 50 % o acelerar el tiempo de cama a menos de 4 minutos por examen sin perder el cociente SUV (Standardized Uptake Value) cuantitativo.',
      },
      {
        label: 'Ing. Eléctrica y Electrónica',
        areas: ['electrica', 'electronica'],
        texto:
          'Electrónica de adquisición de tiempo de vuelo (Time-of-Flight, ToF) ultra-rápida (<230 ps) que procesa petabytes de información en modo lista (list-mode) mediante matrices de procesamiento neuronal.',
      },
    ],
    matriz: {
      algoritmo: 'FlowMotion AI Recon',
      impactoFisico: 'Reducción de actividad inyectada de radiotrazador (¹⁸F).',
      impactoOperativo: 'Escaneo de cuerpo entero en paso continuo ultra-rápido.',
    },
    cifras: [
      { hasta: true, valor: '50', unidad: '%', texto: 'menos dosis administrada del radiofármaco', tipo: 'dosis' },
      { valor: '<4', unidad: 'min', texto: 'de tiempo de cama, como alternativa a reducir la dosis', tipo: 'tiempo' },
      { valor: '<230', unidad: 'ps', texto: 'de electrónica de tiempo de vuelo (ToF)', tipo: 'calidad' },
    ],
  },
  {
    slug: 'siemens-eco',
    fabricante: 'siemens',
    modalidad: 'eco',
    nombre: 'ACUSON Sequoia / ACUSON Origin',
    descriptor: 'Ecografía (ultrasonido)',
    algoritmos: ['Auto View Recognition', 'Auto Doppler Analysis'],
    regulatorio: ['FDA 510(k)'],
    moduloIA:
      'Plataformas Auto View Recognition, Auto Doppler Analysis y algoritmos de cardiología estructural asistida por IA (FDA 510(k)).',
    funcionalidad:
      'La red neuronal convolucional reconoce la ventana acústica cardíaca/abdominal en milisegundos, coloca automáticamente el volumen de muestra Doppler y realiza mediciones automáticas de fracción de eyección biplanar (Simpson), contornos endocárdicos y velocidad de flujo de salida.',
    proposito:
      'Evaluación hemodinámica rápida en unidades de cuidados intensivos (UCI), ecocardiografía diagnóstica compleja y evaluación de esteatosis hepática cuantitativa con elastografía acústica Shear Wave guiada por IA.',
    integracion:
      'Transmisión directa de reportes estructurados DICOM-SR hacia sistemas de información cardiovascular (CVIS), rellenando automáticamente las tablas de parámetros ecocardiográficos.',
    perspectivas: [
      {
        label: 'Ing. Biomédica/Industrial',
        areas: ['biomedica', 'industrial'],
        texto:
          'Eliminación sustancial de la variabilidad inter-operador e intra-operador (un problema crónico en ecografía). Disminución del esfuerzo muscular repetitivo (lesiones por esfuerzo repetitivo del ecografista) al reducir los clics de teclado por paciente en más de un 60 %.',
      },
      {
        label: 'Ing. Eléctrica',
        areas: ['electrica'],
        texto:
          'Uso de formación de haces coherentes (InFocus coherent beamforming) procesados en paralelo con algoritmos de IA en arquitecturas GPU embebidas de bajo consumo térmico.',
      },
    ],
    matriz: {
      algoritmo: 'Auto View & Doppler Engine',
      impactoFisico: 'Cero radiación; optimización de índice mecánico (MI/TI).',
      impactoOperativo: 'Automatización de cálculos hemodinámicos; consistencia diagnóstica.',
    },
    cifras: [
      { valor: '>60', unidad: '%', texto: 'menos clics de teclado por paciente', tipo: 'tiempo' },
      { valor: 'Sin', unidad: '', texto: 'radiación ionizante', tipo: 'dosis' },
    ],
  },
  {
    slug: 'siemens-dmo',
    fabricante: 'siemens',
    modalidad: 'dmo',
    nombre: 'syngo.CT Osteo / syngo.CT Dual Energy Bone Mineral Density (BMD)',
    descriptor: 'Densitometría por tomografía cuantitativa (QCT)',
    algoritmos: ['syngo.CT Osteo'],
    regulatorio: ['FDA 510(k)', '21 CFR 892.1750'],
    moduloIA:
      'Software cuantitativo syngo.CT Osteo y descomposición multielemental espectral basada en Machine Learning / Deep Learning (Aprobación FDA 510(k) bajo categoría 21 CFR 892.1750).',
    funcionalidad:
      'Mientras que Siemens no fabrica densitómetros axiales DEXA convencionales de cabezal móvil en su catálogo actual, resuelve esta necesidad clínica a través de la Densitometría Ósea por TAC Cuantitativa (QCT) y Dual Energy/Photon-Counting. El algoritmo de IA detecta y numera automáticamente las vértebras lumbares (L1–L4), excluye bordes corticales y osteofitos escleróticos (los cuales distorsionan las mediciones en DEXA 2D plano), aislando el hueso trabecular puro para calcular la masa volumétrica real en mg/cm³ de hidroxiapatita cálcica.',
    proposito:
      'Diagnóstico de osteopenia, osteoporosis y predicción biomecánica del riesgo de fractura vertebral de forma oportunista (utilizando tomografías de tórax o abdomen ya realizadas por otros motivos clínicos, sin radiar de nuevo al paciente).',
    integracion:
      'Se acopla al motor de post-proceso de syngo.via / Syngo Carbon, integrando el T-Score y Z-Score volumétricos directamente en el visor de reporte médico.',
    perspectivas: [
      {
        label: 'Física Médica y Biomédica',
        areas: ['fisica', 'biomedica'],
        texto:
          'A diferencia del DEXA tradicional que sobrestima la densidad en presencia de calcificaciones aórticas o artrosis lumbar, el QCT trabecular por IA discrimina volumétricamente el compartimiento trabecular metabólicamente activo.',
      },
      {
        label: 'Ing. Industrial',
        areas: ['industrial'],
        texto:
          'Habilita el tamizaje poblacional oportunista: el paciente oncológico o bariátrico recibe un análisis densitométrico verificado sin acudir a un segundo turno de estudio o equipo dedicado.',
      },
    ],
    matriz: {
      algoritmo: 'Deep QCT Spine Segmenter',
      impactoFisico: 'Cribado oportunista sin doble dosis de examen independiente.',
      impactoOperativo: 'Segmentación automática L1–L4; reporte de T-score sin derivación a densitómetro.',
    },
    cifras: [
      { valor: 'L1–L4', unidad: '', texto: 'vértebras detectadas y numeradas automáticamente', tipo: 'calidad' },
      { valor: '0', unidad: '', texto: 'dosis adicional al paciente', tipo: 'dosis' },
    ],
  },
];
