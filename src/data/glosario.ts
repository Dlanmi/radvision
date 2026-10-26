export type CategoriaGlosario = 'dosimetria' | 'imagen' | 'ia' | 'informatica' | 'regulatorio' | 'clinica' | 'hardware';

export const categoriasGlosario: Record<CategoriaGlosario, string> = {
  dosimetria: 'Dosimetría y protección',
  imagen: 'Calidad y reconstrucción de imagen',
  ia: 'Inteligencia artificial',
  informatica: 'Informática e integración',
  regulatorio: 'Regulación',
  clinica: 'Métricas clínicas',
  hardware: 'Equipos y física',
};

export interface Termino {
  id: string;
  termino: string;
  expansion?: string;
  categoria: CategoriaGlosario;
  definicion: string;
  /** Cadenas exactas (sensibles a mayúsculas) que se enlazan automáticamente en los textos. */
  patrones?: string[];
}

export const glosario: Termino[] = [
  // Dosimetría
  {
    id: 'alara',
    termino: 'ALARA',
    expansion: 'As Low As Reasonably Achievable',
    categoria: 'dosimetria',
    definicion:
      'Principio de protección radiológica: la dosis debe ser tan baja como sea razonablemente posible sin perder la información diagnóstica.',
    patrones: ['ALARA'],
  },
  {
    id: 'dap',
    termino: 'DAP',
    expansion: 'Producto dosis-área',
    categoria: 'dosimetria',
    definicion:
      'Kerma en aire multiplicado por el área del haz (Gy·cm²). Resume cuánta radiación se entregó en radiografía y fluoroscopia, y aumenta cuando el campo es más grande de lo necesario (colimación insuficiente).',
    patrones: ['DAP'],
  },
  {
    id: 'air-kerma',
    termino: 'Kerma en aire',
    expansion: 'Air Kerma',
    categoria: 'dosimetria',
    definicion:
      'Energía cinética que la radiación transfiere por unidad de masa de aire (Gy). Es la referencia dosimétrica habitual en intervencionismo para vigilar la dosis en piel.',
    patrones: ['Air Kerma'],
  },
  {
    id: 'sar',
    termino: 'SAR',
    expansion: 'Tasa de absorción específica',
    categoria: 'dosimetria',
    definicion:
      'Potencia de radiofrecuencia que absorbe el cuerpo en resonancia magnética (W/kg). Tiene límites normativos porque se traduce en calentamiento del tejido.',
    patrones: ['SAR'],
  },
  {
    id: 'msv',
    termino: 'mSv',
    expansion: 'Milisievert',
    categoria: 'dosimetria',
    definicion:
      'Unidad de dosis efectiva: pondera la dosis absorbida por la sensibilidad de cada órgano para estimar el riesgo radiológico global.',
    patrones: ['mSv'],
  },
  {
    id: 'aec',
    termino: 'AEC',
    expansion: 'Control automático de exposición',
    categoria: 'dosimetria',
    definicion:
      'Sistema que corta el disparo de rayos X cuando el detector ya recibió la señal necesaria, adaptando la exposición al grosor del paciente.',
    patrones: ['AEC'],
  },
  {
    id: 'kvp-mas',
    termino: 'kVp / mAs',
    expansion: 'Kilovoltaje pico / miliamperio-segundo',
    categoria: 'dosimetria',
    definicion:
      'Factores técnicos de la exposición. El kVp fija la energía (penetración) del haz y el mAs la cantidad de fotones emitidos.',
    patrones: ['kVp', 'mAs'],
  },

  {
    id: 'escopia',
    termino: 'Escopia',
    expansion: 'Fluoroscopia en tiempo real',
    categoria: 'dosimetria',
    definicion:
      'Emisión de rayos X continua o pulsada para ver la imagen en movimiento. Es la fase del estudio que más dosis acumula, por eso se modula la tasa de dosis.',
    patrones: ['escopia'],
  },
  {
    id: 'rdsr',
    termino: 'RDSR',
    expansion: 'Radiation Dose Structured Report',
    categoria: 'dosimetria',
    definicion: 'Reporte DICOM con los datos de dosis de cada estudio, usado para auditorías dosimétricas.',
    patrones: ['RDSR'],
  },
  {
    id: 'kev',
    termino: 'keV',
    expansion: 'Kiloelectronvoltio',
    categoria: 'imagen',
    definicion:
      'Unidad de energía de los fotones. En TAC espectral se reconstruyen imágenes monoenergéticas virtuales a distintos keV para ajustar el contraste.',
    patrones: ['keV'],
  },
  {
    id: 'fov',
    termino: 'FOV',
    expansion: 'Campo de visión',
    categoria: 'imagen',
    definicion:
      'Región del cuerpo que el equipo cubre en una adquisición. En PET, un FOV axial largo permite registrar todo el cuerpo a la vez.',
    patrones: ['FOV'],
  },
  {
    id: 'adc',
    termino: 'ADC',
    expansion: 'Coeficiente de difusión aparente',
    categoria: 'imagen',
    definicion:
      'Mapa de resonancia que cuantifica cuánto se mueve el agua en los tejidos. Valores bajos sugieren tejido muy celular, como algunos tumores o un infarto agudo.',
    patrones: ['ADC'],
  },
  {
    id: 'ihe',
    termino: 'IHE',
    expansion: 'Integrating the Healthcare Enterprise',
    categoria: 'informatica',
    definicion:
      'Iniciativa que define perfiles de uso de DICOM y HL7 para que equipos y sistemas de distintos fabricantes funcionen juntos.',
    patrones: ['IHE'],
  },
  // Calidad y reconstrucción
  {
    id: 'snr',
    termino: 'SNR',
    expansion: 'Relación señal-ruido',
    categoria: 'imagen',
    definicion:
      'Cuánto sobresale la señal útil frente al ruido de fondo. A mayor SNR la imagen se ve más limpia; se gana con más dosis, más tiempo o mejores algoritmos.',
    patrones: ['SNR'],
  },
  {
    id: 'cnr',
    termino: 'CNR',
    expansion: 'Relación contraste-ruido',
    categoria: 'imagen',
    definicion:
      'Diferencia de señal entre una lesión y su entorno dividida por el ruido. Es lo que decide si una lesión pequeña llega a verse.',
    patrones: ['CNR'],
  },
  {
    id: 'nps',
    termino: 'NPS',
    expansion: 'Espectro de potencia de ruido',
    categoria: 'imagen',
    definicion:
      'Describe la textura del ruido según la frecuencia espacial. Explica por qué algunas reconstrucciones iterativas se ven “cerosas” o plásticas aunque tengan menos ruido.',
    patrones: ['NPS'],
  },
  {
    id: 'lcd',
    termino: 'LCD',
    expansion: 'Detectabilidad de bajo contraste',
    categoria: 'imagen',
    definicion:
      'Capacidad de distinguir estructuras cuya densidad es muy parecida a la del fondo, como lesiones hepáticas sutiles.',
    patrones: ['LCD'],
  },
  {
    id: 'fbp',
    termino: 'FBP',
    expansion: 'Retroproyección filtrada',
    categoria: 'imagen',
    definicion:
      'Método analítico clásico de reconstrucción en tomografía. Rápido y de textura natural, pero ruidoso a dosis bajas.',
    patrones: ['FBP'],
  },
  {
    id: 'mbir',
    termino: 'Reconstrucción iterativa',
    expansion: 'MBIR — Model-Based Iterative Reconstruction',
    categoria: 'imagen',
    definicion:
      'Reconstruye la imagen en ciclos sucesivos de corrección con modelos físicos del equipo. Reduce el ruido, pero puede alterar la textura de la imagen.',
    patrones: ['MBIR'],
  },
  {
    id: 'k-space',
    termino: 'Espacio k',
    expansion: 'k-space',
    categoria: 'imagen',
    definicion:
      'Matriz de datos crudos en frecuencia que adquiere la resonancia. La imagen se obtiene aplicándole la transformada de Fourier.',
    patrones: ['k-space', 'espacio k'],
  },
  {
    id: 'compressed-sensing',
    termino: 'Compressed Sensing',
    expansion: 'Sensado compresivo',
    categoria: 'imagen',
    definicion:
      'Técnica que adquiere solo una fracción del espacio k de forma pseudoaleatoria y reconstruye el resto matemáticamente, acortando el estudio.',
    patrones: ['Compressed Sensing', 'Compressed SENSE'],
  },
  {
    id: 'psf',
    termino: 'PSF',
    expansion: 'Función de dispersión de punto',
    categoria: 'imagen',
    definicion:
      'Cómo se difumina un punto ideal al pasar por el sistema de imagen. Modelarla en la reconstrucción recupera resolución y contraste en lesiones pequeñas.',
    patrones: ['PSF'],
  },

  // IA
  {
    id: 'deep-learning',
    termino: 'Deep Learning',
    expansion: 'Aprendizaje profundo',
    categoria: 'ia',
    definicion:
      'Rama del aprendizaje automático basada en redes neuronales de muchas capas que aprenden patrones directamente de grandes volúmenes de datos.',
    patrones: ['Deep Learning'],
  },
  {
    id: 'cnn',
    termino: 'CNN',
    expansion: 'Red neuronal convolucional',
    categoria: 'ia',
    definicion:
      'Arquitectura de deep learning especializada en imágenes: filtros que recorren la imagen y detectan bordes, texturas y estructuras cada vez más complejas.',
    patrones: ['CNN'],
  },
  {
    id: 'rnn',
    termino: 'RNN',
    expansion: 'Red neuronal recurrente',
    categoria: 'ia',
    definicion:
      'Red que procesa secuencias y conserva memoria de los pasos anteriores; útil para predecir movimiento entre cuadros de fluoroscopia.',
    patrones: ['RNN'],
  },
  {
    id: 'dlir',
    termino: 'DLIR',
    expansion: 'Deep Learning Image Reconstruction',
    categoria: 'ia',
    definicion:
      'Reconstrucción de imagen con una red neuronal entrenada con pares de datos de baja y alta calidad, para eliminar ruido sin cambiar la textura.',
    patrones: ['DLIR'],
  },
  {
    id: 'cad',
    termino: 'CAD',
    expansion: 'Computer-Aided Detection',
    categoria: 'ia',
    definicion:
      'Software que marca regiones sospechosas para que el especialista las revise. Funciona como un segundo lector.',
    patrones: ['CAD'],
  },

  // Informática
  {
    id: 'dicom',
    termino: 'DICOM',
    expansion: 'Digital Imaging and Communications in Medicine',
    categoria: 'informatica',
    definicion:
      'Estándar internacional para almacenar, transmitir y visualizar imágenes médicas junto con los datos del paciente y del estudio.',
    patrones: ['DICOM'],
  },
  {
    id: 'dicom-sr',
    termino: 'DICOM-SR',
    expansion: 'DICOM Structured Reporting',
    categoria: 'informatica',
    definicion:
      'Objeto DICOM que transporta mediciones y hallazgos codificados, de modo que otros sistemas los lean sin transcribirlos.',
    patrones: ['DICOM-SR'],
  },
  {
    id: 'pacs',
    termino: 'PACS',
    expansion: 'Picture Archiving and Communication System',
    categoria: 'informatica',
    definicion:
      'Sistema que archiva y distribuye las imágenes del servicio hacia las estaciones de lectura y el resto del hospital.',
    patrones: ['PACS'],
  },
  {
    id: 'ris',
    termino: 'RIS',
    expansion: 'Radiology Information System',
    categoria: 'informatica',
    definicion:
      'Sistema de gestión del servicio de radiología: citas, órdenes, seguimiento de estudios e informes.',
    patrones: ['RIS'],
  },
  {
    id: 'hl7',
    termino: 'HL7',
    expansion: 'Health Level Seven',
    categoria: 'informatica',
    definicion:
      'Estándar de mensajería para intercambiar datos clínicos y administrativos entre sistemas hospitalarios (HIS, EHR, RIS).',
    patrones: ['HL7'],
  },
  {
    id: 'mwl',
    termino: 'Modality Worklist',
    expansion: 'MWL',
    categoria: 'informatica',
    definicion:
      'Servicio DICOM con el que el equipo descarga del RIS la lista de pacientes citados, evitando digitar datos a mano.',
    patrones: ['Modality Worklist', 'MWL'],
  },
  {
    id: 'mpps',
    termino: 'MPPS',
    expansion: 'Modality Performed Procedure Step',
    categoria: 'informatica',
    definicion: 'Mensaje DICOM con el que el equipo informa al RIS que un estudio comenzó o terminó.',
    patrones: ['MPPS'],
  },
  {
    id: 'gsps',
    termino: 'GSPS',
    expansion: 'Grayscale Softcopy Presentation State',
    categoria: 'informatica',
    definicion:
      'Objeto DICOM que guarda anotaciones, ventana y marcas sobre una imagen sin modificar el archivo original.',
    patrones: ['GSPS'],
  },
  {
    id: 'dicomweb',
    termino: 'DICOMweb',
    categoria: 'informatica',
    definicion: 'Conjunto de servicios DICOM sobre HTTP/REST, pensado para aplicaciones web y en la nube.',
    patrones: ['DICOMweb'],
  },
  {
    id: 'ehr',
    termino: 'EHR',
    expansion: 'Historia clínica electrónica',
    categoria: 'informatica',
    definicion: 'Registro digital y longitudinal de la información clínica del paciente.',
    patrones: ['EHR', 'EMR'],
  },
  {
    id: 'worklist',
    termino: 'Worklist',
    expansion: 'Lista de trabajo',
    categoria: 'informatica',
    definicion:
      'Cola de estudios pendientes de lectura. La IA puede reordenarla para que los casos críticos se lean primero.',
    patrones: ['worklist'],
  },

  // Regulatorio
  {
    id: 'samd',
    termino: 'SaMD',
    expansion: 'Software as a Medical Device',
    categoria: 'regulatorio',
    definicion:
      'Software que por sí mismo cumple un fin médico (detectar, medir, priorizar) y por eso se regula como dispositivo médico.',
    patrones: ['SaMD'],
  },
  {
    id: '510k',
    termino: 'FDA 510(k)',
    expansion: 'Notificación previa a la comercialización',
    categoria: 'regulatorio',
    definicion:
      'Vía de la FDA de EE. UU. para autorizar un dispositivo demostrando que es sustancialmente equivalente a otro ya comercializado.',
    patrones: ['510(k)'],
  },
  {
    id: 'de-novo',
    termino: 'De Novo',
    categoria: 'regulatorio',
    definicion:
      'Vía de la FDA para dispositivos novedosos de riesgo bajo o moderado que no tienen un equivalente previo en el mercado.',
    patrones: ['De Novo'],
  },
  {
    id: 'cfr',
    termino: '21 CFR',
    expansion: 'Code of Federal Regulations, título 21',
    categoria: 'regulatorio',
    definicion:
      'Reglamento federal de EE. UU. que clasifica los dispositivos médicos. La parte 892 cubre los equipos de radiología.',
    patrones: ['21 CFR'],
  },

  // Equipos y física
  {
    id: 'isocentro',
    termino: 'Isocentro',
    categoria: 'hardware',
    definicion:
      'Punto alrededor del cual gira el gantry o el arco. Centrar bien al paciente optimiza la dosis y la calidad de la imagen.',
    patrones: ['isocentro'],
  },
  {
    id: 'bowtie',
    termino: 'Filtro bowtie',
    expansion: 'Filtro pajarita',
    categoria: 'hardware',
    definicion:
      'Filtro con forma de pajarita que atenúa los bordes del haz en tomografía, donde el paciente es más delgado.',
    patrones: ['bowtie'],
  },
  {
    id: 'photon-counting',
    termino: 'Photon-counting',
    expansion: 'Conteo de fotones',
    categoria: 'hardware',
    definicion:
      'Detector que registra cada fotón por separado y mide su energía, eliminando el ruido electrónico y aportando información espectral.',
    patrones: ['Photon-Counting', 'conteo de fotones'],
  },
  {
    id: 'cbct',
    termino: 'CBCT',
    expansion: 'Cone-beam CT',
    categoria: 'hardware',
    definicion:
      'Tomografía de haz cónico: reconstruye un volumen 3D a partir de un giro del arco en C, por ejemplo en quirófano.',
    patrones: ['CBCT'],
  },
  {
    id: 'dsa',
    termino: 'DSA',
    expansion: 'Angiografía por sustracción digital',
    categoria: 'hardware',
    definicion:
      'Técnica que resta una imagen sin contraste de otra con contraste para ver solo los vasos.',
    patrones: ['DSA'],
  },
  {
    id: 'tof',
    termino: 'ToF',
    expansion: 'Tiempo de vuelo',
    categoria: 'hardware',
    definicion:
      'En PET, la diferencia en picosegundos entre la llegada de los dos fotones de aniquilación, que permite ubicar mejor el evento.',
    patrones: ['ToF'],
  },
  {
    id: 'sipm',
    termino: 'SiPM',
    expansion: 'Fotomultiplicador de silicio',
    categoria: 'hardware',
    definicion:
      'Sensor de estado sólido que convierte la luz del cristal centellador en señal eléctrica; reemplaza a los tubos fotomultiplicadores.',
    patrones: ['SiPM', 'dSiPM'],
  },
  {
    id: 'suv',
    termino: 'SUV',
    expansion: 'Standardized Uptake Value',
    categoria: 'clinica',
    definicion:
      'Captación del radiofármaco en una región normalizada por la dosis inyectada y el peso del paciente. Es la medida cuantitativa del PET.',
    patrones: ['SUV'],
  },
  {
    id: 'quench',
    termino: 'Quench',
    categoria: 'hardware',
    definicion:
      'Pérdida súbita de la superconductividad del imán de resonancia: el helio se evapora y se expulsa por un ducto hacia el exterior.',
    patrones: ['quench'],
  },
  {
    id: 'dxa',
    termino: 'DXA',
    expansion: 'Absorciometría dual de rayos X',
    categoria: 'hardware',
    definicion:
      'Densitometría plana con dos energías de rayos X. Es el estándar para medir densidad ósea en columna y cadera.',
    patrones: ['DXA', 'DEXA'],
  },
  {
    id: 'qct',
    termino: 'QCT',
    expansion: 'Tomografía computarizada cuantitativa',
    categoria: 'hardware',
    definicion:
      'Mide densidad ósea volumétrica (mg/cm³) en un TAC, separando hueso trabecular y cortical.',
    patrones: ['QCT'],
  },
  {
    id: 'throughput',
    termino: 'Throughput',
    expansion: 'Rendimiento de sala',
    categoria: 'hardware',
    definicion: 'Número de pacientes o estudios que un equipo atiende por unidad de tiempo.',
    patrones: ['throughput'],
  },

  // Métricas clínicas
  {
    id: 'sensibilidad',
    termino: 'Sensibilidad',
    categoria: 'clinica',
    definicion:
      'Proporción de pacientes enfermos que la prueba detecta correctamente. Alta sensibilidad = pocos falsos negativos.',
  },
  {
    id: 'especificidad',
    termino: 'Especificidad',
    categoria: 'clinica',
    definicion:
      'Proporción de pacientes sanos que la prueba clasifica como negativos. Alta especificidad = pocos falsos positivos.',
  },
  {
    id: 'vpn',
    termino: 'VPN',
    expansion: 'Valor predictivo negativo',
    categoria: 'clinica',
    definicion: 'Probabilidad de que un paciente con resultado negativo realmente no tenga la enfermedad.',
    patrones: ['VPN'],
  },
  {
    id: 'auc',
    termino: 'AUC-ROC',
    expansion: 'Área bajo la curva ROC',
    categoria: 'clinica',
    definicion:
      'Resume el desempeño de un clasificador entre 0.5 (azar) y 1.0 (perfecto) considerando todos los umbrales posibles.',
    patrones: ['AUC-ROC', 'AUC'],
  },
  {
    id: 'dice',
    termino: 'Coeficiente Dice',
    expansion: 'Dice Similarity Coefficient (DSC)',
    categoria: 'clinica',
    definicion:
      'Mide cuánto se superponen dos segmentaciones, de 0 (nada) a 1 (idénticas). Se usa para comparar el contorno de la IA con el del especialista.',
    patrones: ['Dice'],
  },
  {
    id: 'kappa',
    termino: 'Kappa de Cohen',
    expansion: 'κ',
    categoria: 'clinica',
    definicion:
      'Acuerdo entre dos lectores corregido por el azar, de 0 a 1. En la escala de Landis y Koch, de 0.41 a 0.60 es moderado y de 0.61 a 0.80 sustancial.',
    patrones: ['Kappa'],
  },
  {
    id: 'icc',
    termino: 'ICC',
    expansion: 'Coeficiente de correlación intraclase',
    categoria: 'clinica',
    definicion:
      'Concordancia entre mediciones continuas (por ejemplo, IA vs. medición manual). Por encima de 0.9 es excelente.',
    patrones: ['ICC'],
  },
  {
    id: 'pi-rads',
    termino: 'PI-RADS',
    expansion: 'Prostate Imaging Reporting and Data System',
    categoria: 'clinica',
    definicion:
      'Escala de 1 a 5 que clasifica la probabilidad de cáncer de próstata clínicamente significativo en resonancia.',
    patrones: ['PI-RADS'],
  },
  {
    id: 'agatston',
    termino: 'Score de Agatston',
    categoria: 'clinica',
    definicion:
      'Puntaje de calcio coronario calculado en TAC sin contraste; estima el riesgo cardiovascular.',
    patrones: ['Agatston'],
  },
  {
    id: 't-score',
    termino: 'T-score / Z-score',
    categoria: 'clinica',
    definicion:
      'Número de desviaciones estándar que separan la densidad ósea del paciente de la de un adulto joven (T) o de personas de su misma edad (Z). Un T-score ≤ −2.5 define osteoporosis.',
    patrones: ['T-score', 'T-Score', 'Z-score', 'Z-Score'],
  },
];

export const terminoPorId = Object.fromEntries(glosario.map((t) => [t.id, t])) as Record<string, Termino>;
