const parqueMetropolitanoImageBase = '/images/destinations/panama'

export const parqueMetropolitano = {
    id: 'parque-metropolitano',
    provinceId: 'panama',
    nombre: 'Parque Natural Metropolitano',
    banner: {
        src: `${parqueMetropolitanoImageBase}/bg-parque-metropolitano.jpg`,
        alt: 'Banner del Parque Natural Metropolitano',
    },
    descripcion:
        'El único bosque tropical dentro de una ciudad capital en América Latina. Este parque ofrece senderos, miradores y biodiversidad en pleno corazón de Panamá, siendo un refugio natural ideal para desconectarse sin salir de la ciudad.',
    previewDescripcion:
        'Naturaleza, senderos y biodiversidad en medio de la ciudad de Panamá.',
    previewUbicacion: 'Panamá, Selva Metropolitana',
    actividades: [
        { nombre: 'Senderismo', descripcion: 'Recorre senderos rodeados de bosque tropical.', icono: '' },
        { nombre: 'Observación de aves', descripcion: 'Descubre una gran variedad de especies tropicales.', icono: '' },
        { nombre: 'Fotografía de naturaleza', descripcion: 'Captura flora, fauna y paisajes verdes.', icono: '' },
        { nombre: 'Miradores panorámicos', descripcion: 'Disfruta vistas de la ciudad y la selva.', icono: '' },
        { nombre: 'Turismo ecológico', descripcion: 'Explora uno de los pulmones verdes de la capital.', icono: '' },
        { nombre: 'Observación de fauna', descripcion: 'Encuentra monos, perezosos y otras especies.', icono: '' },
        { nombre: 'Caminatas familiares', descripcion: 'Disfruta recorridos aptos para toda la familia.', icono: '' },
        { nombre: 'Educación ambiental', descripcion: 'Aprende sobre conservación y ecosistemas tropicales.', icono: '' },
        { nombre: 'Ejercicio al aire libre', descripcion: 'Aprovecha el entorno natural para actividad física.', icono: '' },
        { nombre: 'Conexión con la naturaleza', descripcion: 'Relájate en un ambiente natural dentro de la ciudad.', icono: '' },
    ],
    ubicacion:
        'https://www.google.com/maps?q=Parque%20Natural%20Metropolitano%20Panama&output=embed',
}
