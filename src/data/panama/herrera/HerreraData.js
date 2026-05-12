export const provincias = [
  {
    id: 'herrera',
    nombre: 'Herrera',

    banner: {
      tipo: 'imagen',
      src: 'https://example.com/herrera-banner.jpg',
      alt: 'Vista de la provincia de Herrera',
    },

    descripcionCorta:
      'Provincia de Herrera, conocida por su agricultura y cultura.',

    ubicacionProvincia: {
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202302.23954103104!2d-82.46734803926626!3d8.366126177385008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa578bccbaa2e9f%3A0x23db549450c8f698!2sHerrera%2C%20Herrera%20Province!5e1!3m2!1sen!2spa!4v1778531685061!5m2!1sen!2spa',
    },

    actividades: [
      'Agricultura',
      'Historia',
      'Gastronomía',
      'Naturaleza',
    ],

    resena:
      'Herrera es una provincia agrícola en el centro de Panamá.',

    lugaresDestacados: [
      {
        id: 'chitre',
        nombre: 'Chitré',
        descripcion: 'Capital de la provincia.',
        imagen: 'https://example.com/chitre.jpg',
        ubicacion: 'Chitré, Herrera',
      },
    ],

    ubicacion: {
      region: 'Centro',
      pais: 'Panamá',
      coordenadas: {
        lat: 7.97,
        lng: -80.43,
      },
    },

    restoDeLugares: [
      {
        id: 'pescadero',
        nombre: 'Pescadero',
        descripcion: 'Pueblo costero.',
        imagen: 'https://example.com/pescadero.jpg',
        ubicacion: 'Pescadero, Herrera',
      },
    ],
  },
];