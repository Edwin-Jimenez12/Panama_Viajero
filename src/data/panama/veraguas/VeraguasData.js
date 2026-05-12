export const provincias = [
  {
    id: 'veraguas',
    nombre: 'Veraguas',

    banner: {
      tipo: 'imagen',
      src: 'https://example.com/veraguas-banner.jpg',
      alt: 'Vista de la provincia de Veraguas',
    },

    descripcionCorta:
      'Provincia de Veraguas, conocida por sus playas y naturaleza.',

    ubicacionProvincia: {
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202302.23954103104!2d-82.46734803926626!3d8.366126177385008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa578bccbaa2e9f%3A0x23db549450c8f698!2sVeraguas%2C%20Veraguas%20Province!5e1!3m2!1sen!2spa!4v1778531685061!5m2!1sen!2spa',
    },

    actividades: [
      'Playa',
      'Naturaleza',
      'Historia',
      'Ecoturismo',
    ],

    resena:
      'Veraguas es una provincia costera con playas y selva.',

    lugaresDestacados: [
      {
        id: 'santiago',
        nombre: 'Santiago',
        descripcion: 'Capital de la provincia.',
        imagen: 'https://example.com/santiago.jpg',
        ubicacion: 'Santiago, Veraguas',
      },
    ],

    ubicacion: {
      region: 'Centro',
      pais: 'Panamá',
      coordenadas: {
        lat: 8.1,
        lng: -80.97,
      },
    },

    restoDeLugares: [
      {
        id: 'playa-morillo',
        nombre: 'Playa Morillo',
        descripcion: 'Playa popular.',
        imagen: 'https://example.com/playa-morillo.jpg',
        ubicacion: 'Veraguas, Panamá',
      },
    ],
  },
];