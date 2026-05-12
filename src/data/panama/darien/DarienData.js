export const provincias = [
  {
    id: 'darien',
    nombre: 'Darién',

    banner: {
      tipo: 'imagen',
      src: 'https://example.com/darien-banner.jpg',
      alt: 'Vista de la provincia de Darién',
    },

    descripcionCorta:
      'Provincia de Darién, hogar de la selva tropical y biodiversidad.',

    ubicacionProvincia: {
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202302.23954103104!2d-82.46734803926626!3d8.366126177385008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa578bccbaa2e9f%3A0x23db549450c8f698!2sDari%C3%A9n%2C%20Dari%C3%A9n%20Province!5e1!3m2!1sen!2spa!4v1778531685061!5m2!1sen!2spa',
    },

    actividades: [
      'Naturaleza',
      'Senderismo',
      'Observación de aves',
      'Ecoturismo',
    ],

    resena:
      'Darién es la provincia más grande y menos poblada de Panamá.',

    lugaresDestacados: [
      {
        id: 'parque-nacional-darien',
        nombre: 'Parque Nacional Darién',
        descripcion: 'Área protegida con selva tropical.',
        imagen: 'https://example.com/parque-darien.jpg',
        ubicacion: 'Darién, Panamá',
      },
    ],

    ubicacion: {
      region: 'Darién',
      pais: 'Panamá',
      coordenadas: {
        lat: 8.0,
        lng: -78.0,
      },
    },

    restoDeLugares: [
      {
        id: 'la-palma',
        nombre: 'La Palma',
        descripcion: 'Capital de la provincia.',
        imagen: 'https://example.com/la-palma.jpg',
        ubicacion: 'La Palma, Darién',
      },
    ],
  },
];