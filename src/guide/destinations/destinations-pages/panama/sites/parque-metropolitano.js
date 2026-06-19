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
        'El único bosque tropical dentro de una ciudad capital en América Latina. Este parque ofrece senderos, miradores y una extraordinaria biodiversidad en pleno corazón de Panamá, convirtiéndose en un refugio natural perfecto para quienes buscan aventura y naturaleza sin salir de la ciudad.',
    previewDescripcion:
        'Naturaleza, senderos y biodiversidad en el corazón de la ciudad de Panamá.',
    previewUbicacion: 'Panamá, Selva Metropolitana',
    actividades: [
        {
            nombre: 'Senderismo',
            descripcion:
                'Recorre senderos rodeados de bosque tropical y descubre la riqueza natural de uno de los pulmones verdes más importantes de la ciudad.',
            icono: '',
        },
        {
            nombre: 'Observación de aves',
            descripcion:
                'Disfruta de uno de los mejores lugares urbanos para observar aves tropicales y migratorias.',
            icono: '',
        },
        {
            nombre: 'Observación de fauna',
            descripcion:
                'Encuentra monos, perezosos y otras especies silvestres que habitan libremente en el parque.',
            icono: '',
        },
        {
            nombre: 'Miradores panorámicos',
            descripcion:
                'Contempla impresionantes vistas de la ciudad de Panamá y su contraste con la selva tropical.',
            icono: '',
        },
        {
            nombre: 'Fotografía de naturaleza',
            descripcion:
                'Captura paisajes verdes, fauna silvestre y la fusión única entre naturaleza y ciudad.',
            icono: '',
        },
        {
            nombre: 'Educación ambiental',
            descripcion:
                'Aprende sobre la conservación de ecosistemas tropicales y la importancia de proteger la biodiversidad urbana.',
            icono: '',
        },
        {
            nombre: 'Recorridos guiados',
            descripcion:
                'Explora el parque acompañado de guías que enriquecen la experiencia con información sobre flora y fauna.',
            icono: '',
        },
    ],
    ubicacion:
        'https://www.google.com/maps?q=Parque%20Natural%20Metropolitano%20Panama&output=embed',
}