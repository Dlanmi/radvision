/** Plataformas de orquestación de IA. Páginas 33–36 del documento. */

export const necesidad = {
  intro:
    'A medida que un hospital adquiere múltiples algoritmos independientes aprobados por la FDA (para tórax, ACV, fracturas, próstata, etc.), surgen problemas de arquitectura crítica:',
  problemas: [
    {
      titulo: 'Saturación del ancho de banda',
      texto:
        'Múltiples conexiones DICOM directas hacia cada servidor de IA generan redundancia en el tráfico de red.',
    },
    {
      titulo: 'Fragmentación de visores',
      texto:
        'Obligar al radiólogo a abrir ventanas o visores separados para cada algoritmo degrada la eficiencia.',
    },
    {
      titulo: 'Falta de gobernanza clínica',
      texto:
        'Dificultad para auditar qué algoritmo procesó qué estudio, con qué versión y bajo qué parámetros.',
    },
  ],
  definicion:
    'El orquestador de IA actúa como una pasarela inteligente y agnóstica que intercepta los estudios provenientes de las modalidades, evalúa metadatos clínicos, decide qué motor de IA debe ejecutarse, gestiona el cómputo y consolida los resultados directamente en el visor de diagnóstico principal.',
};

export const agfa = {
  nombre: 'AGFA Enterprise Imaging AI Ecosystem',
  intro:
    'El ecosistema de AGFA HealthCare Enterprise Imaging incorpora un orquestador clínico nativo diseñado para integrar, ejecutar y presentar algoritmos de IA de terceros y propios de manera transparente dentro del flujo de trabajo radiológico regular.',
  /** Pasos del mecanismo, en orden: alimentan el diagrama de flujo. */
  mecanismo: [
    {
      paso: 'Clasificación y enrutamiento inteligente',
      texto:
        'Al recibir un estudio DICOM desde la modalidad (RX, TAC, RM), el motor de reglas del orquestador analiza la cabecera (región anatómica, protocolo de escaneo, datos demográficos del paciente y sospecha diagnóstica de la orden HL7/EMR).',
    },
    {
      paso: 'Disparo condicional',
      texto:
        'Si el estudio cumple los criterios (por ejemplo, una tomografía simple de cráneo con sospecha de trauma o ictus), el orquestador extrae los cortes necesarios y los distribuye automáticamente a través de APIs REST/DICOMweb hacia los contenedores de inferencia adecuados (por ejemplo, detección de hemorragia intracraneal o fractura).',
    },
    {
      paso: 'Normalización de resultados',
      texto:
        'El orquestador recibe las salidas de los algoritmos (mapas de probabilidad, contornos de segmentación, mediciones biométricas) y las convierte en formatos nativos compatibles con el visor universal de AGFA.',
    },
  ],
  salidas: [
    {
      formato: 'DICOM Structured Reporting (SR)',
      texto: 'Rellena automáticamente campos del borrador del informe radiológico.',
    },
    {
      formato: 'DICOM Presentation States (GSPS) / Segmentation Objects (SEG)',
      texto:
        'Muestra sobreimpresiones gráficas interactivas que el radiólogo puede encender, apagar o editar.',
    },
    {
      formato: 'Alertas críticas',
      texto: 'Dispara notificaciones de triaje prioritario en la lista de trabajo global.',
    },
  ],
  impacto: [
    {
      titulo: 'Interfaz única (zero footprint)',
      texto:
        'El especialista no interactúa con interfaces secundarias; los hallazgos de IA aparecen integrados en la barra de herramientas del visor de AGFA Enterprise Imaging.',
    },
    {
      titulo: 'Priorización dinámica de listas',
      texto:
        'Reordena la lista de trabajo institucional (worklist) en tiempo real basándose en la gravedad de los hallazgos detectados por la IA (urgencias con sospecha de patología aguda pasan al primer lugar).',
    },
    {
      titulo: 'Aceleración del reporte',
      texto:
        'Estudios multicéntricos reportan una reducción de entre el 20 % y el 35 % en el tiempo de redacción, ya que valores como diámetros nodulares, volúmenes de hemorragia o scores de densidad ósea se transcriben directamente al dictador de voz o plantilla del informe.',
    },
  ],
  infraestructura: [
    {
      titulo: 'Despliegue contenedorizado',
      texto:
        'Utiliza arquitecturas basadas en Kubernetes/Docker que permiten escalar dinámicamente los nodos de procesamiento GPU según la demanda horaria del hospital.',
    },
    {
      titulo: 'Balanceo y tolerancia a fallos',
      texto:
        'Si un nodo de inferencia de IA falla o sufre una latencia excesiva, el orquestador continúa el flujo del estudio sin interrumpir el almacenamiento central en el PACS ni congelar la estación de lectura.',
    },
  ],
};

export const otrasPlataformas = [
  {
    nombre: 'Blackford Analysis',
    nota: 'Adquirida por Bayer',
    enfoque: 'Plataforma agnóstica de integración de aplicaciones clínicas de IA.',
    caracteristicas:
      'Cuenta con un catálogo curado de aplicaciones aprobadas por FDA. Gestiona la pre-carga (caching) predictiva de estudios previos relevantes para que los algoritmos de comparación longitudinal (nódulos pulmonares, progresión tumoral) se ejecuten antes de que el médico abra el caso.',
  },
  {
    nombre: 'DeepHealth / RadNet',
    nota: 'e-ZDI / DeepHealth OS',
    enfoque: 'Orquestación con énfasis en cribado poblacional de mama y próstata de alto volumen.',
    caracteristicas:
      'Automatiza el balanceo de carga entre centros satélites y hospitales centrales, asignando estudios a los radiólogos con el perfil de subespecialidad adecuado asistidos por lecturas de IA previas.',
  },
  {
    nombre: 'Nuance Precision Imaging Network',
    nota: 'Microsoft Nuance',
    enfoque:
      'Orquestación basada en la nube combinando IA de imagen con IA de lenguaje natural (procesamiento de informes y datos clínicos del EHR).',
    caracteristicas:
      'Conecta los resultados visuales de los algoritmos de imagen diagnóstica con la generación automatizada de texto clínico y recomendaciones de seguimiento basadas en guías (como Fleischner Society para nódulos pulmonares).',
  },
];

export const comparativa = {
  columnas: [
    'Software SaMD puntual (ej. SubtleMR, ClariCT, Viz.ai)',
    'Orquestador de IA (ej. AGFA Enterprise Imaging AI)',
  ],
  filas: [
    {
      dimension: 'Rol en la red',
      puntual: 'Procesador especializado de una tarea o modalidad específica.',
      orquestador: 'Director de tráfico, gestor de reglas y centralizador de resultados.',
    },
    {
      dimension: 'Escalabilidad',
      puntual: 'Añadir cada nuevo algoritmo requiere una conexión DICOM y configuración individual.',
      orquestador:
        'Punto único de integración; los nuevos algoritmos se conectan como módulos plug-and-play.',
    },
    {
      dimension: 'Experiencia de usuario',
      puntual: 'Puede exigir el cambio a visores externos o consolas dedicadas.',
      orquestador: 'Visualización consolidada en una única pantalla de diagnóstico.',
    },
    {
      dimension: 'Gobernanza y auditoría',
      puntual: 'Registros de auditoría aislados por fabricante.',
      orquestador:
        'Panel unificado de control de calidad, latencias de procesamiento y métricas de precisión.',
    },
    {
      dimension: 'Impacto operativo',
      puntual: 'Mejora la calidad o el tiempo de un examen individual.',
      orquestador: 'Optimiza el flujo de trabajo de todo el departamento de diagnóstico por imágenes.',
    },
  ],
};
