const biomuseoImageBase = '/images/destinations/panama'

export const biomuseo = {
    id: 'biomuseo',
    provinceId: 'panama',
    nombre: 'Biomuseo',
    banner: {
        src: `${biomuseoImageBase}/bg-biomuseo.jpg`,
        alt: 'Banner de Biomuseo',
    },
    descripcion:
        'Un museo único diseñado por Frank Gehry que celebra la biodiversidad y la historia natural de Panamá. Su arquitectura colorida y su enfoque educativo lo convierten en uno de los espacios culturales más importantes del país.',
    previewDescripcion:
        'Arte, ciencia y biodiversidad en uno de los museos más importantes de Panamá.',
    previewUbicacion: 'Panamá, Zona del Canal',
    actividades: [
        { nombre: 'Recorrido por exposiciones', descripcion: 'Conoce la biodiversidad panameña.', icono: '' },
        { nombre: 'Fotografía arquitectónica', descripcion: 'Captura el diseño único del edificio.', icono: '' },
        { nombre: 'Experiencia educativa', descripcion: 'Aprende sobre la historia natural de Panamá.', icono: '' },
        { nombre: 'Visita guiada', descripcion: 'Descubre cada sala con explicaciones especializadas.', icono: '' },
        { nombre: 'Turismo cultural', descripcion: 'Conecta ciencia, arte y naturaleza.', icono: '' },
        { nombre: 'Exploración interactiva', descripcion: 'Participa en actividades dinámicas.', icono: '' },
        { nombre: 'Jardines exteriores', descripcion: 'Disfruta áreas verdes alrededor del museo.', icono: '' },
        { nombre: 'Aprendizaje familiar', descripcion: 'Ideal para niños y adultos.', icono: '' },
        { nombre: 'Observación de la bahía', descripcion: 'Disfruta vistas cercanas al mar.', icono: '' },
        { nombre: 'Eventos culturales', descripcion: 'Participa en actividades especiales y exposiciones.', icono: '' },
    ],
    ubicacion:
        'https://www.google.com/maps?q=Biomuseo%20Panama&output=embed',
}
