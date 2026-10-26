import type { Equipo } from '../types';

// Philips Healthcare (páginas P25–P33 del documento fuente).
export const philips: Equipo[] = [
  {
    slug: 'philips-rx',
    fabricante: 'philips',
    modalidad: 'rx',
    nombre: 'DigitalDiagnost C90 / Radiography 7000 M',
    descriptor: 'Radiología digital fija',
    algoritmos: ['Eleva Live', 'UNIQUE 2', 'Bone Suppression AI'],
    regulatorio: ['FDA 510(k)', '21 CFR 892.1680'],
    moduloIA:
      'Cámara de visión computacional Eleva Live, motor de procesamiento de imagen UNIQUE 2 (UNIfied Image QUality Enhancer) y compatibilidad nativa con Bone Suppression AI y detección asistida (Aprobación FDA 510(k), Reg. 21 CFR 892.1680).',
    funcionalidad:
      'Utiliza una cámara de video integrada directamente en el cabezal del tubo de rayos X que reconoce en tiempo real la silueta y posición del paciente proyectada en la interfaz táctil del colimador. El software asiste la colimación automática milimétrica al área anatómica de interés y verifica la alineación del receptor digital. El motor UNIQUE 2 aplica redes de procesamiento multiescala para equilibrar contrastes locales entre tejidos blandos y hueso sin generar halos artificiales.',
    proposito:
      'Estudios de tórax, abdomen y esqueleto apendicular de alto rendimiento; visualización optimizada de catéteres, líneas vasculares, consolidaciones y nódulos pulmonares sin requerir proyecciones adicionales.',
    integracion:
      'Integración nativa con la consola de usuario Eleva Workspot, conectada de forma bidireccional mediante DICOM Modality Worklist (MWL) y MPPS hacia el RIS/PACS y la plataforma Philips HealthSuite.',
    perspectivas: [
      {
        label: 'Física Médica',
        areas: ['fisica'],
        texto:
          'La colimación virtual por cámara en tiempo real suprime la necesidad de disparos de prueba o colimaciones excesivas, reduciendo la dosis de entrada en piel y el producto dosis-área (DAP) hasta en un 15 % a 20 %.',
      },
      {
        label: 'Ing. Industrial',
        areas: ['industrial'],
        texto:
          'Disminuye la tasa de rechazo/repetición de placas por mal encuadre anatómico o corte de estructuras por debajo del 1 %, reduciendo el tiempo de estudio de tórax a menos de 90 segundos.',
      },
    ],
    matriz: {
      algoritmo: 'Eleva Live / UNIQUE 2',
      impactoFisico: 'Colimación óptica que reduce dosis superficial (DAP ↓ 20 %).',
      impactoOperativo: 'Tasa de rechazo/repetición <1 %; flujo de tórax en <90 s.',
    },
    cifras: [
      { valor: '15–20', unidad: '%', texto: 'menos producto dosis-área (DAP)', tipo: 'dosis' },
      { valor: '<1', unidad: '%', texto: 'de rechazo/repetición de placas', tipo: 'calidad' },
      { valor: '<90', unidad: 's', texto: 'por estudio de tórax', tipo: 'tiempo' },
    ],
  },
  {
    slug: 'philips-fluoro',
    fabricante: 'philips',
    modalidad: 'fluoro',
    nombre: 'ProxiDiagnost N90 / CombiDiagnost R90',
    descriptor: 'Fluoroscopia y radiografía dinámica 2 en 1',
    algoritmos: ['Gridless Imaging', 'SkyFlow Plus', 'IntelliGantry', 'DoseAware'],
    regulatorio: ['FDA 510(k)'],
    moduloIA:
      'Suite de procesamiento dinámico Gridless Imaging (SkyFlow Plus) y control de dosis IntelliGantry / DoseAware (Aprobación FDA 510(k)).',
    funcionalidad:
      'Aplica algoritmos de aprendizaje automático para modelar y sustraer la radiación dispersa de forma matemática en proyecciones dinámicas y estáticas, permitiendo adquirir imágenes sin rejilla antidifusora física (grid). Incorpora procesamiento adaptativo temporal que diferencia el movimiento anatómico del ruido cuántico en secuencias de video fluoroscópico continuo y pulsado.',
    proposito:
      'Estudios digestivos funcionales (tránsito faringoesofágico, enema de bario), procedimientos urológicos, artrografías y radiografía pediátrica con mínima dosis.',
    integracion:
      'Compatible con protocolos DICOM Radiation Dose Structured Report (RDSR) para auditoría dosimétrica institucional automatizada.',
    perspectivas: [
      {
        label: 'Física Médica',
        areas: ['fisica'],
        texto:
          'Eliminar la rejilla física mediante corrección digital por software (SkyFlow) reduce la dosis absorbida en pacientes pediátricos y adultos delgados entre un 40 % y 60 % sin pérdida de contraste de imagen.',
      },
      {
        label: 'Ing. Mecánica',
        areas: ['mecanica'],
        texto:
          'Diseño de geometría abierta con mesa basculante motorizada que permite aproximación lateral sin barreras, reduciendo el riesgo ergonómico de los operadores al movilizar pacientes con movilidad reducida.',
      },
    ],
    matriz: {
      algoritmo: 'SkyFlow Plus / IntelliGantry',
      impactoFisico: 'Eliminación de rejilla física; dosis reducida en 40–60 %.',
      impactoOperativo: 'Ausencia de rejilla física agiliza posicionamiento y manipulación del paciente.',
    },
    cifras: [
      { valor: '40–60', unidad: '%', texto: 'menos dosis absorbida sin rejilla física', tipo: 'dosis' },
      { valor: '2 en 1', unidad: '', texto: 'fluoroscopia y radiografía dinámica', tipo: 'infraestructura' },
    ],
  },
  {
    slug: 'philips-arco-c',
    fabricante: 'philips',
    modalidad: 'arco-c',
    nombre: 'Zenition Series (Zenition 70 / Zenition 90 / Zenition 3000 con Flat Detector)',
    descriptor: 'Arco en C quirúrgico e intervencionismo',
    algoritmos: ['SmartVision', 'ClarifEye', 'AlluraClarity', 'ClarityIQ'],
    regulatorio: ['FDA 510(k)'],
    moduloIA:
      'Procesamiento guiado por red neuronal SmartVision / ClarifEye Augmented Reality Surgical Navigation y reducción de dosis AlluraClarity / ClarityIQ Technology (Aprobación FDA 510(k)).',
    funcionalidad:
      'Emplea algoritmos de filtrado espacial y temporal de alta velocidad impulsados por IA que reducen el ruido cuántico en el flujo fluoroscópico a tasas de fotogramas ultrabajas (1 a 4 pulsos/segundo). En sistemas híbridos vasculares o espinales (ClarifEye), fusiona en tiempo real la tomografía computarizada con visión artificial y cámaras ópticas de superficie para proyectar trayectorias de tornillos pediculares o endoprótesis vasculares sobre el paciente.',
    proposito:
      'Cirugía vascular endovascular (reparación de aneurismas de aorta abdominal - EVAR), cirugía ortopédica y fijaciones espinales mínimamente invasivas.',
    integracion:
      'Enlace directo con monitores de quirófano en configuración libre de cables mediante protocolos DICOM 3D intraoperatorios y plataformas de navegación quirúrgica abierta.',
    perspectivas: [
      {
        label: 'Física Médica',
        areas: ['fisica'],
        texto:
          'La tecnología de procesamiento ClarityIQ reduce la tasa de dosis de radiación en quirófano hasta en un 73 % en intervencionismo espinal y hasta un 83 % en procedimientos vasculares complejos frente a arcos tradicionales, protegiendo al equipo quirúrgico.',
      },
      {
        label: 'Ing. Mecánica y Eléctrica',
        areas: ['mecanica', 'electrica'],
        texto:
          'Sistema de enfriamiento activo en el tubo de rayos X de ánodo giratorio de alta disipación térmica, con detector plano de silicio amorfo/CMOS que previene el sobrecalentamiento durante cirugías de larga duración (>4 horas).',
      },
    ],
    matriz: {
      algoritmo: 'ClarityIQ / ClarifEye',
      impactoFisico: 'Reducción de tasa de dosis en escopia quirúrgica de hasta 73–83 %.',
      impactoOperativo: 'Navegación 3D de tornillos con realidad aumentada en quirófano.',
    },
    cifras: [
      { hasta: true, valor: '73–83', unidad: '%', texto: 'de reducción de la tasa de dosis en quirófano', tipo: 'dosis' },
      { valor: '1–4', unidad: '', texto: 'pulsos/segundo con ruido cuántico reducido', tipo: 'calidad' },
      { valor: '>4', unidad: 'h', texto: 'de cirugía sin sobrecalentamiento', tipo: 'infraestructura' },
    ],
  },
  {
    slug: 'philips-tac',
    fabricante: 'philips',
    modalidad: 'tac',
    nombre: 'Spectral CT 7500 / Incisive CT',
    descriptor: 'Tomografía computarizada',
    algoritmos: ['Spectral Recon IQ', 'Camera-based Precise Positioning', 'Precise Image'],
    regulatorio: ['FDA 510(k)', 'K203063', 'K211582'],
    moduloIA:
      'Reconstrucción espectral instantánea Spectral Recon IQ (Spectral Detector CT), motor de flujo guiado Camera-based Precise Positioning y reconstrucción de aprendizaje profundo Precise Image (Aprobación FDA 510(k), K203063 / K211582).',
    funcionalidad:
      'El Spectral CT 7500 incorpora un detector de doble capa (Dual-Layer NanoPanel Prism): la capa superior absorbe fotones de baja energía y la inferior fotones de alta energía de forma continua y simultánea en el 100 % de los escaneos, sin requerir preselección de protocolos espectrales. El algoritmo de IA Precise Image entrena redes convolucionales con imágenes a dosis de referencia para reconstruir simultáneamente conjuntos de datos convencionales y mapas espectrales (monoenergéticos virtuales de 40 a 200 keV, densidad de iodo, supresión de ácido úrico y número atómico efectivo, Zeff).',
    proposito:
      'Detección de embolismo pulmonar periférico sin artefactos de volumen parcial, caracterización de placas ateromatosas, diferenciación entre quistes y lesiones tumorales hipervasculares, y oncología hepática/pancreática.',
    integracion:
      'Integración nativa a través de IntelliSpace Portal o HealthSuite Insights; los mapas monoenergéticos y de iodo se generan automáticamente en segundo plano y se indexan en el PACS como series DICOM estándar.',
    perspectivas: [
      {
        label: 'Física Médica',
        areas: ['fisica'],
        texto:
          'Precise Image logra hasta un 80 % de reducción en la dosis de radiación y una mejora del 85 % en la detectabilidad de bajo contraste (LCD), reduciendo simultáneamente el volumen de medio de contraste iodado endovenoso en hasta un 40 % al evaluar series monoenergéticas bajas (40–50 keV).',
      },
      {
        label: 'Ing. Industrial',
        areas: ['industrial'],
        texto:
          'La adquisición espectral "siempre activa" elimina la necesidad de repetir exploraciones por no haber seleccionado un protocolo de energía dual antes del escaneo, optimizando el rendimiento de la sala a menos de 10 minutos por examen completo.',
      },
    ],
    matriz: {
      algoritmo: 'Spectral Recon IQ / Precise Image',
      impactoFisico: 'Datos espectrales en el 100 % de escaneos; hasta −80 % de dosis.',
      impactoOperativo: 'Análisis espectral retrospectivo sin necesidad de repetir estudios.',
    },
    cifras: [
      { hasta: true, valor: '80', unidad: '%', texto: 'menos dosis de radiación', tipo: 'dosis' },
      { valor: '85', unidad: '%', texto: 'más detectabilidad de bajo contraste (LCD)', tipo: 'calidad' },
      { valor: '100', unidad: '%', texto: 'de los escaneos con datos espectrales (Spectral CT 7500)', tipo: 'calidad' },
      { valor: '<10', unidad: 'min', texto: 'por examen completo', tipo: 'tiempo' },
    ],
  },
  {
    slug: 'philips-rm',
    fabricante: 'philips',
    modalidad: 'rm',
    nombre: 'MR 5300 (1.5T BlueSeal) / MR 7700 (3.0T Multi-Nuclei)',
    descriptor: 'Resonancia magnética',
    algoritmos: ['SmartSpeed', 'Compressed SENSE', 'SmartExam'],
    regulatorio: ['FDA 510(k)', 'K213275'],
    moduloIA:
      'Plataforma de reconstrucción acelerada por Deep Learning SmartSpeed (con motor Compressed SENSE impulsado por IA) y planificación automatizada SmartExam (Aprobación FDA 510(k), K213275).',
    funcionalidad:
      'SmartSpeed integra redes neuronales de aprendizaje profundo directamente en la etapa iterativa del sensado compresivo (Compressed SENSE). Recoge datos submuestreados en el espacio k y entrena una red de regularización neuronal que preserva los bordes anatómicos microscópicos y suprime el ruido de fondo gaussiano. La función SmartExam utiliza modelos de segmentación para posicionar automáticamente los paquetes de cortes (axial, coronal, sagital, ejes cardíacos) con una concordancia anatómica superior al 98 %.',
    proposito:
      'Neuroimagen en pacientes con sospecha de isquemia cerebral o esclerosis múltiple en tiempos ultra-rápidos, resonancia cardíaca completa en respiración libre y resonancia musculoesquelética de alta resolución en articulaciones complejas.',
    integracion:
      'Totalmente embebido en el entorno operativo Philips Workspace; las secuencias reconstruidas con SmartSpeed conservan absoluta compatibilidad con mapas cuantitativos de difusión (ADC), T1/T2 mapping y espectroscopía multi-núcleo (³¹P, ²³Na, ¹³C en el MR 7700).',
    perspectivas: [
      {
        label: 'Ing. Mecánica y Criogénica (Tecnología BlueSeal)',
        areas: ['mecanica', 'criogenica'],
        texto:
          'Imán sellado con circuito cerrado de micro-refrigeración que utiliza únicamente 7 litros de helio líquido de por vida (en contraste con los 1500–2000 litros convencionales). Elimina el ducto de escape de emergencia (quench pipe), reduciendo drásticamente el peso de la máquina en casi 1000 kg y permitiendo su instalación en pisos superiores o búnkeres sin salida directa a la azotea.',
      },
      {
        label: 'Física Médica / Biomédica',
        areas: ['fisica', 'biomedica'],
        texto:
          'SmartSpeed acelera las adquisiciones hasta en un factor de 3× (65 % de reducción de tiempo de escaneo) o incrementa la resolución espacial hasta en un 65 % con idéntico tiempo, mitigando sustancialmente el depósito de energía específica de radiofrecuencia (SAR).',
      },
      {
        label: 'Ing. Industrial',
        areas: ['industrial'],
        texto:
          'SmartExam automatiza más del 80 % de los pasos de planificación del examen, reduciendo la variabilidad inter-operador y los tiempos totales de examen neurológico a menos de 8 minutos.',
      },
    ],
    matriz: {
      algoritmo: 'SmartSpeed / SmartExam',
      impactoFisico: 'Aceleración de escaneo hasta 3×; menor depósito de SAR.',
      impactoOperativo: 'Imán BlueSeal sin tubo de quench (7 L de He); 80 % pasos automáticos.',
    },
    cifras: [
      { valor: '7', unidad: 'L', texto: 'de helio líquido de por vida (imán BlueSeal)', tipo: 'infraestructura' },
      { hasta: true, valor: '3×', unidad: '', texto: 'de aceleración en las adquisiciones', tipo: 'tiempo' },
      { valor: '≈1000', unidad: 'kg', texto: 'menos de peso sin tubo de quench (BlueSeal)', tipo: 'infraestructura' },
      { valor: '<8', unidad: 'min', texto: 'por examen neurológico total', tipo: 'tiempo' },
    ],
  },
  {
    slug: 'philips-pet',
    fabricante: 'philips',
    modalidad: 'pet',
    nombre: 'Vereos Digital PET/CT / Spectral DMI',
    descriptor: 'PET/CT digital',
    algoritmos: [
      'Digital Photon Counting (DPC)',
      'IntelliSpace AI PET Reconstruction',
      'Auto Prime Motion Correction',
    ],
    regulatorio: ['FDA 510(k)'],
    moduloIA:
      'Algoritmos de reconstrucción digital directa Digital Photon Counting (DPC) asistidos por redes de eliminación de ruido IntelliSpace AI PET Reconstruction y corrección de movimiento respiratorio Auto Prime Motion Correction (Aprobación FDA 510(k)).',
    funcionalidad:
      'Basado en detectores digitales 1:1 donde cada cristal de silicato de lutecio e itrio (LYSO) se encuentra acoplado directamente a un fotomultiplicador de silicio digital (dSiPM). La IA analiza las secuencias cinéticas de tiempo de vuelo (Time-of-Flight, ToF con resolución temporal de orden sub-300 ps) y ejecuta algoritmos de eliminación de ruido cuántico y corrección del volumen parcial (Point Spread Function - PSF), recuperando el contraste de microlesiones sin amplificar el ruido periférico.',
    proposito:
      'Detección ultra-temprana de metástasis ganglionares en oncología (mama, pulmón, melanoma, próstata con ⁶⁸Ga-PSMA o ¹⁸F-DCFPyL) y cuantificación estandarizada en neurología (amiloide/FDG para demencias).',
    integracion:
      'Transmisión fluida hacia sistemas de planificación de radioterapia (Pinnacle / RayStation) mediante perfiles de integración DICOM RT, exportando automáticamente los volúmenes tumorales biológicos (BTV).',
    perspectivas: [
      {
        label: 'Física Médica',
        areas: ['fisica'],
        texto:
          'Incremento significativo de la resolución volumétrica efectiva a 3.0 mm, logrando una duplicación de la relación contraste-ruido (CNR) y exactitud cuantitativa absoluta en los valores máximos y medios de captación estandarizada (SUVmax y SUVmean).',
      },
      {
        label: 'Ing. Eléctrica y Computacional',
        areas: ['electrica', 'computacional'],
        texto:
          'Conversión fotónica directa a nivel de detector que elimina etapas analógicas de amplificación, procesando millones de eventos de coincidencia por segundo mediante tarjetas aceleradoras PCIe GPU de arquitectura neuronal.',
      },
    ],
    matriz: {
      algoritmo: 'Digital Photon Counting (DPC)',
      impactoFisico: 'Resolución volumétrica a 3.0 mm; duplicación del contraste (CNR).',
      impactoOperativo: 'Detectores dSiPM digitales 1:1; cuantificación SUV absoluta.',
    },
    cifras: [
      { valor: '3.0', unidad: 'mm', texto: 'de resolución volumétrica efectiva', tipo: 'calidad' },
      { valor: '<300', unidad: 'ps', texto: 'de resolución temporal de tiempo de vuelo', tipo: 'calidad' },
      { valor: '1:1', unidad: '', texto: 'acoplamiento cristal LYSO a dSiPM', tipo: 'infraestructura' },
    ],
  },
  {
    slug: 'philips-eco',
    fabricante: 'philips',
    modalidad: 'eco',
    nombre: 'EPIQ Elite / Affiniti Series',
    descriptor: 'Cardiología, radiología y salud de la mujer',
    algoritmos: [
      'Anatomical Intelligence Ultrasound (AIUS)',
      'AutoStrain',
      'HeartModel A.I.',
      'PercuNav',
    ],
    regulatorio: ['FDA 510(k)', 'K161521', 'K192271'],
    moduloIA:
      'Modelado anatómico inteligente Anatomical Intelligence Ultrasound (AIUS), herramientas automáticas AutoStrain (LV/LA/RV), HeartModel A.I. y navegación guiada PercuNav (Aprobación FDA 510(k), K161521 / K192271).',
    funcionalidad:
      'Incorpora una arquitectura de procesamiento de datos crudos (nSIGHT Imaging) combinada con redes de inteligencia anatómica entrenadas sobre miles de modelos morfológicos 3D de órganos. HeartModel A.I. segmenta, rastrea y calcula en 3D volumétrico la fracción de eyección del ventrículo izquierdo, los volúmenes telediastólico/telesistólico y el volumen de la aurícula izquierda en un solo ciclo cardíaco. Para intervencionismo hepático, PercuNav fusiona ecografía en tiempo real con tomografía o resonancia previa mediante registro de imágenes asistido por IA.',
    proposito:
      'Evaluación hemodinámica cardiovascular compleja, tamizaje de insuficiencia cardíaca, seguimiento de quimiotoxicidad miocárdica y guía de ablación percutánea por radiofrecuencia de tumores hepáticos.',
    integracion:
      'Exportación instantánea de reportes estructurados DICOM-SR a sistemas PACS/CVIS (IntelliSpace Cardiovascular), completando de manera automática las tablas de medición del ecocardiograma.',
    perspectivas: [
      {
        label: 'Ing. Biomédica / Industrial',
        areas: ['biomedica', 'industrial'],
        texto:
          'HeartModel A.I. reduce el tiempo de análisis de volúmenes cardíacos complejos de 8–10 minutos a menos de 20 segundos, reduciendo la variabilidad inter-observador a niveles clínicamente insignificantes (ICC > 0.95).',
      },
      {
        label: 'Ing. Eléctrica y Acústica',
        areas: ['electrica', 'acustica'],
        texto:
          'Transductores de tecnología de matriz activa monocristalina PureWave y xMATRIX que integran miles de elementos piezoeléctricos microscópicos con procesadores micro-beamforming integrados dentro del propio mango de la sonda.',
      },
    ],
    matriz: {
      algoritmo: 'HeartModel / Anatomical Intelligence (AIUS)',
      impactoFisico: 'Modelado dinámico de órganos y rastreo miocárdico 3D.',
      impactoOperativo: 'Fracción de eyección 3D en un ciclo (<20 s) con variabilidad mínima.',
    },
    cifras: [
      { valor: '<20', unidad: 's', texto: 'de análisis de volúmenes cardíacos', tipo: 'tiempo' },
      { valor: '>0.95', unidad: '', texto: 'de ICC interobservador', tipo: 'calidad' },
      { valor: '1', unidad: '', texto: 'ciclo cardíaco basta para el cálculo 3D', tipo: 'tiempo' },
    ],
  },
  {
    slug: 'philips-dmo',
    fabricante: 'philips',
    modalidad: 'dmo',
    nombre: 'Spectral Bone Mineral Density (BMD) / Quantitative CT en Spectral CT 7500',
    descriptor: 'QCT espectral en TAC',
    algoritmos: ['Spectral Advanced Analysis', 'Bone Mineral Density Application'],
    regulatorio: ['FDA 510(k)', '21 CFR 892.1750'],
    moduloIA:
      'Plataforma de análisis volumétrico y caracterización tisular Spectral Advanced Analysis / Bone Mineral Density Application (Aprobación FDA 510(k) bajo 21 CFR 892.1750).',
    funcionalidad:
      'Al igual que Siemens y United Imaging, Philips ha trasladado el diagnóstico densitométrico de vanguardia hacia la Tomografía Computarizada Cuantitativa Espectral (Spectral QCT), dejando los equipos DXA bidimensionales de cabezal móvil fuera de su catálogo primario de innovación. El detector de doble capa del Spectral CT 7500 permite la descomposición multielemental de materiales en base a tres materiales fundamentales (hidroxiapatita cálcica, agua y grasa de médula ósea). El algoritmo de IA identifica, segmenta y numera automáticamente las vértebras lumbares (L1–L4), excluyendo osteofitos degenerativos y las placas corticales para medir la concentración real de hidroxiapatita trabecular en mg/cm³.',
    proposito:
      'Detección oportunista de osteopenia y osteoporosis grave en pacientes que se realizan estudios de tórax o abdomen contrastados o no contrastados (oncológicos, vasculares, trauma), sin citación ni exposición radiológica secundaria.',
    integracion:
      'Integrado en el ecosistema IntelliSpace Portal; exporta el cálculo de T-Score y Z-Score volumétrico alineado con la base de datos poblacional de la Sociedad Internacional de Densitometría Clínica (ISCD).',
    perspectivas: [
      {
        label: 'Física Médica',
        areas: ['fisica'],
        texto:
          'La descomposición espectral simultánea permite cuantificar con exactitud la densidad ósea trabecular incluso en exámenes con medio de contraste endovenoso iodado, ya que el algoritmo separa matemáticamente la densidad espectral del iodo intravascular de la del calcio trabecular óseo, algo físicamente imposible en tomógrafos no espectrales o en densitómetros DXA planos.',
      },
      {
        label: 'Ing. Industrial',
        areas: ['industrial'],
        texto:
          'Maximiza la rentabilidad clínica y operativa del centro: un único estudio tomográfico indicado por dolor abdominal o control oncológico resuelve simultáneamente la necesidad de tamizaje metabólico óseo poblacional.',
      },
    ],
    matriz: {
      algoritmo: 'Dual-Layer Spectral BMD Engine',
      impactoFisico: 'Cuantificación trabecular pura incluso en presencia de iodo endovenoso.',
      impactoOperativo: 'Diagnóstico densitométrico oportunista sin doble dosis ni equipo DXA.',
    },
    cifras: [
      { valor: '3', unidad: '', texto: 'materiales fundamentales en la descomposición espectral', tipo: 'calidad' },
      { valor: 'L1–L4', unidad: '', texto: 'vértebras lumbares segmentadas automáticamente', tipo: 'calidad' },
    ],
  },
];
