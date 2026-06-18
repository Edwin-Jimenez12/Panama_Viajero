const mirafloresImageBase = '/images/destinations/panama'

export const miraflores = {
    id: 'miraflores',
    provinceId: 'panama',
    nombre: 'Centro de Visitantes de Miraflores',
    banner: {
        src: `${mirafloresImageBase}/bg-miraflores.jpg`,
        alt: 'Banner de Miraflores',
    },
    descripcion:
        'Uno de los destinos turísticos más importantes de Panamá, donde puedes observar de cerca el paso de enormes embarcaciones por el Canal de Panamá. Es una experiencia única que combina historia, ingeniería y vistas impresionantes.',
    previewDescripcion:
        'Vive de cerca la experiencia del Canal de Panamá y el paso de grandes buques.',
    previewUbicacion: 'Panamá, Zona del Canal',
    actividades: [
        { nombre: 'Observación de buques', descripcion: 'Mira barcos atravesando las esclusas.', icono: '' },
        { nombre: 'Visita al museo', descripcion: 'Aprende sobre la historia y funcionamiento del Canal.', icono: '' },
        { nombre: 'Fotografía panorámica', descripcion: 'Captura vistas únicas del Canal.', icono: '' },
        { nombre: 'Experiencia educativa', descripcion: 'Conoce la importancia mundial del Canal.', icono: '' },
        { nombre: 'Miradores', descripcion: 'Disfruta vistas privilegiadas desde las terrazas.', icono: '' },
        { nombre: 'Restaurante con vista', descripcion: 'Disfruta comida con vista al Canal.', icono: '' },
        { nombre: 'Visitas guiadas', descripcion: 'Profundiza en la historia y operación.', icono: '' },
        { nombre: 'Turismo familiar', descripcion: 'Ideal para toda la familia.', icono: '' },
        { nombre: 'Videos interactivos', descripcion: 'Explora contenido audiovisual sobre el Canal.', icono: '' },
        { nombre: 'Observación del atardecer', descripcion: 'Disfruta hermosas vistas al final del día.', icono: '' },
    ],
    ubicacion:
        'https://www.google.com/maps?q=Miraflores%20Visitor%20Center%20Panama&output=embed',
}
