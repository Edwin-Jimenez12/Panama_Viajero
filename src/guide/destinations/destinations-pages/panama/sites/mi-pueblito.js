const miPueblitoImageBase = '/images/destinations/panama'

export const miPueblito = {
    id: 'mi-pueblito',
    provinceId: 'panama',
    nombre: 'Mi Pueblito',
    banner: {
        src: `${miPueblitoImageBase}/bg-mi-pueblito.jpg`,
        alt: 'Banner de Mi Pueblito',
    },
    descripcion:
        'Un espacio cultural que reúne la esencia de las tradiciones panameñas a través de réplicas arquitectónicas, artesanías y expresiones folclóricas. Es ideal para quienes desean conocer la diversidad cultural del país en un solo lugar.',
    previewDescripcion:
        'Tradición, cultura y folclore panameño en un solo espacio.',
    previewUbicacion: 'Panamá, Capital',
    actividades: [
        { nombre: 'Turismo cultural', descripcion: 'Conoce las raíces y tradiciones de Panamá.', icono: '' },
        { nombre: 'Fotografía folclórica', descripcion: 'Captura escenarios tradicionales y coloridos.', icono: '' },
        { nombre: 'Compra de artesanías', descripcion: 'Encuentra recuerdos hechos por artesanos locales.', icono: '' },
        { nombre: 'Recorridos históricos', descripcion: 'Descubre la representación de comunidades tradicionales.', icono: '' },
        { nombre: 'Gastronomía típica', descripcion: 'Prueba sabores auténticos panameños.', icono: '' },
        { nombre: 'Eventos culturales', descripcion: 'Participa en actividades y presentaciones folclóricas.', icono: '' },
        { nombre: 'Aprendizaje cultural', descripcion: 'Conoce la diversidad étnica y cultural del país.', icono: '' },
        { nombre: 'Paseo familiar', descripcion: 'Ideal para disfrutar en familia.', icono: '' },
        { nombre: 'Observación de arquitectura típica', descripcion: 'Admira estilos representativos de Panamá.', icono: '' },
        { nombre: 'Experiencia educativa', descripcion: 'Aprende sobre historia y costumbres nacionales.', icono: '' },
    ],
    ubicacion: 'https://www.google.com/maps?q=Mi%20Pueblito%20Panama&output=embed',
}
