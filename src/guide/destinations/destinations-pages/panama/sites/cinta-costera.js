const cintaCosteraImageBase = '/images/destinations/panama'

export const cintaCostera = {
    id: 'cinta-costera',
    provinceId: 'panama',
    nombre: 'Cinta Costera',
    banner: {
        src: `${cintaCosteraImageBase}/bg-cinta-costera.jpg`,
        alt: 'Banner de Cinta Costera',
    },
    descripcion:
        'Uno de los espacios urbanos más importantes de la capital, ideal para caminar, hacer ejercicio y disfrutar de vistas espectaculares del skyline de Panamá y la Bahía de Panamá.',
    previewDescripcion:
        'Vistas al mar, recreación y el mejor skyline de la ciudad.',
    previewUbicacion: 'Panamá, Capital',
    actividades: [
        { nombre: 'Caminatas', descripcion: 'Recorre kilómetros de costa con vistas increíbles.', icono: '' },
        { nombre: 'Ciclismo', descripcion: 'Disfruta rutas urbanas junto al mar.', icono: '' },
        { nombre: 'Fotografía del skyline', descripcion: 'Captura la moderna silueta de la ciudad.', icono: '' },
        { nombre: 'Ejercicio al aire libre', descripcion: 'Aprovecha áreas deportivas y recreativas.', icono: '' },
        { nombre: 'Patinaje', descripcion: 'Disfruta amplios espacios para patinar.', icono: '' },
        { nombre: 'Picnic urbano', descripcion: 'Comparte momentos en áreas verdes frente al mar.', icono: '' },
        { nombre: 'Atardeceres', descripcion: 'Contempla uno de los mejores sunsets de la ciudad.', icono: '' },
        { nombre: 'Eventos públicos', descripcion: 'Participa en actividades y festivales al aire libre.', icono: '' },
        { nombre: 'Turismo urbano', descripcion: 'Conoce la ciudad desde uno de sus puntos más emblemáticos.', icono: '' },
        { nombre: 'Recreación familiar', descripcion: 'Ideal para actividades con niños y familia.', icono: '' },
    ],
    ubicacion: 'https://www.google.com/maps?q=Cinta%20Costera%20Panama&output=embed',
}
