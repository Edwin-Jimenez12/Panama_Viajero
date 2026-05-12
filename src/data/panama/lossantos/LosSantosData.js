export const provincias = [
  {
    id: 'los-santos',
    nombre: 'Los Santos',

    banner: {
      tipo: 'imagen',
      src: 'https://example.com/los-santos-banner.jpg',
      alt: 'Vista de la provincia de Los Santos',
    },

    descripcionCorta:
      'Provincia de Los Santos, conocida por sus playas y cultura afroantillana.',

    ubicacionProvincia: {
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202302.23954103104!2d-82.46734803926626!3d8.366126177385008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa578bccbaa2e9f%3A0x23db549450c8f698!2sLos%20Santos%2C%20Los%20Santos%20Province!5e1!3m2!1sen!2spa!4v1778531685061!5m2!1sen!2spa',
    },

    actividades: [
      'Playa',
      'Historia',
      'Carnavales',
      'Gastronomía',
    ],

    resena:
      'Los Santos es famosa por sus carnavales y playas.',

    lugaresDestacados: [
      {
        id: 'las-tablas',
        nombre: 'Las Tablas',
        descripcion: 'Capital de la provincia.',
        imagen: 'https://example.com/las-tablas.jpg',
        ubicacion: 'Las Tablas, Los Santos',
      },
    ],

    ubicacion: {
      region: 'Pacífico',
      pais: 'Panamá',
      coordenadas: {
        lat: 7.77,
        lng: -80.28,
      },
    },

    restoDeLugares: [
      {
        id: 'pedasi',
        nombre: 'Pedasí',
        descripcion: 'Pueblo costero.',
        imagen: 'https://example.com/pedasi.jpg',
        ubicacion: 'Pedasí, Los Santos',
      },
    ],
  },
];