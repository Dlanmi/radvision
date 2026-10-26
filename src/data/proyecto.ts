/** Datos del proyecto formativo. Editar aquí nombres de aprendices y créditos. */
export const proyecto = {
  sitio: 'RadVision',
  sitioLargo: 'Inteligencia artificial en imagen diagnóstica',
  dominio: 'radvision.site',
  documento: 'Lista detallada de herramientas de IA',
  entidad: 'Servicio Nacional de Aprendizaje — SENA',
  regional: 'Regional Distrito Capital',
  centro: 'Centro de Formación de Talento Humano en Salud',
  programa: 'Tecnología en Radiología e Imágenes Diagnósticas',
  codigoPrograma: '321311',
  ficha: '3316554',
  instructor: 'Javier Andres Motta Ballesteros',
  /** Agregar aquí los nombres de los aprendices autores. Si está vacío, la sección no se muestra. */
  aprendices: [] as string[],
  anio: 2026,
};

export const presentacion =
  'A continuación, se presentan de manera detallada las herramientas y aplicaciones de inteligencia artificial empleadas en equipos biomédicos para la obtención de imágenes diagnósticas, así como en software de posprocesamiento y lectura de estudios imagenológicos. Los criterios que se evaluaron de estos equipos y aplicaciones están enfocados a la práctica diaria de diferentes perfiles de servicios de radiología e imágenes diagnósticas.';

export interface Criterio {
  n: number;
  titulo: string;
  texto: string;
}

export const criterios: Criterio[] = [
  {
    n: 1,
    titulo: 'Evaluación de algoritmos',
    texto:
      'Procesamiento digital, software clínico como dispositivo médico (SaMD) y seguridad funcional del paciente.',
  },
  {
    n: 2,
    titulo: 'Optimización de tiempos',
    texto:
      'Tiempos de ciclo (throughput), ergonomía operativa y reducción de cuellos de botella en la cadena de atención.',
  },
  {
    n: 3,
    titulo: 'Gestión de hardware y señales',
    texto: 'Potencia, blindajes electromagnéticos, consumo energético y adquisición digital.',
  },
  {
    n: 4,
    titulo: 'Mecánica y estructura',
    texto:
      'Cinemática y robótica de gantry/brazos, refrigeración por fluidos/criogenia, vibraciones y resistencia estructural.',
  },
  {
    n: 5,
    titulo: 'Calidad de imagen y dosimetría',
    texto:
      'Optimización ALARA, relación señal-ruido (SNR), resolución espacial, contraste espectral y calidad cuantitativa de imagen.',
  },
];
