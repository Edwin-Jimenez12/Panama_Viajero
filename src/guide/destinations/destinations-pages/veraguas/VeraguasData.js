const VERAGUAS_BANNER = '/videos/veraguas/VeraguasBanner.av1.mp4'

export const provincias = [
  {
    id: 'veraguas',
    nombre: 'Veraguas',

    banner: {
      tipo: 'video',
      src: VERAGUAS_BANNER,
      alt: 'Vista de la provincia de Veraguas',
    },

    descripcionCorta:
      'Veraguas es la única provincia que te permite ver el amanecer en un océano y el atardecer en otro bajo el mismo cielo. Es el paraíso de los que buscan la soledad de islas protegidas como Coiba y la frescura de montañas que guardan tesoros artísticos del tiempo de la colonia.',

    ubicacionProvincia: {
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1598685.7655912635!2d-82.7498707822495!3d8.03766501294524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fae170daec5093b%3A0xc558fcd4c89d62fd!2sVeraguas%20Province!5e1!3m2!1sen!2spa!4v1778777648582!5m2!1sen!2spa',
    },

    actividades: [
      'Buceo en arrecifes',
      'Surf de clase mundial',
      'Senderismo de montaña',
      'Pesca deportiva',
      'Avistamiento de ballenas',
      'Kayak de mar',
      'Observación de tortugas',
      'Ciclismo de ruta',
    ],

    directSiteIds: [
      'santiago',
      'isla-cebaco',
      'calovebora',
      'santa-catalina',
      'playa-torio',
      'playa-el-estero',
      'playa-morrillo',
    ],
    displayMode: 'sites-only',
  },
]
