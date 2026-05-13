const HERRERA_IMAGE = new URL('../../../assets/srcProvincias/herrera/herrera.png', import.meta.url).href;

export const provincias = [
  {
    id: 'herrera',
    nombre: 'Herrera',

    banner: {
      tipo: 'imagen',
      src: HERRERA_IMAGE,
      alt: 'Vista de la provincia de Herrera',
    },

    descripcionCorta:
      'Herrera te recibe con la calidez de un pueblo que nunca olvida sus raíces y celebra la vida en cada festival folclórico. Desde el paisaje surrealista de Sarigua hasta la maestría de sus artesanos esta provincia es el sitio donde la hospitalidad panameña se siente más real y auténtica.',

    ubicacionProvincia: {
      src: 'https://www.google.com/maps?q=Herrera%2C%20Panam%C3%A1&output=embed',
    },

    actividades: [
      'Tours de alfarería',
      'Cata de licores',
      'Ciclismo',
      'Senderismo en manglares',
      'Visitas a iglesias',
      'Tours gastronómicos',
    ],

    resena:
      'A Herrera se viene a conocer el alma de la península de Azuero y a entender por qué a Chitré se le llama la ciudad donde nadie es forastero. Su historia está forjada por el trabajo de hombres y mujeres que convirtieron la alfarería y la destilería en un arte reconocido a nivel internacional. Cada calle y cada plaza de esta provincia guardan ecos de un pasado colonial que todavía se celebra con danzas tradicionales de diablicos y un profundo respeto por lo religioso. Es una tierra que ha sabido mantener su sencillez interiorana mientras se desarrolla como un centro comercial clave demostrando que se puede mirar al futuro sin soltar nunca la mano de las costumbres de los abuelos.',

    lugaresDestacados: [
      {
        id: 'Chitre',
        nombre: 'Chitré',
        descripcion: 'Capital provincial reconocida por su vida comercial, sus fiestas populares y su ambiente hospitalario.',
        tipo: 'imagen',
        imagen: HERRERA_IMAGE,
        ubicacion: 'Chitré, Herrera',
      },
      {
        id: 'Sarigua',
        nombre: 'Sarigua',
        descripcion: 'Paisaje árido de gran valor natural e histórico, con senderos y vistas distintas al resto de Azuero.',
        tipo: 'imagen',
        imagen: HERRERA_IMAGE,
        ubicacion: 'Parque Nacional Sarigua, Herrera',
      },
      {
        id: 'Pese',
        nombre: 'Pesé',
        descripcion: 'Pueblo ligado a la tradición de destilería y al sabor interiorano que caracteriza a Herrera.',
        tipo: 'imagen',
        imagen: HERRERA_IMAGE,
        ubicacion: 'Pesé, Herrera',
      },
    ],
  },
];
