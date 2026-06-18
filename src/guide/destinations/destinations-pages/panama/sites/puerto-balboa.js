const puertoBalboaImageBase = '/images/destinations/panama'

export const puertoBalboa = {
    id: 'puerto-balboa',
    provinceId: 'panama',
    nombre: 'Puerto de Balboa',
    banner: {
        src: `${puertoBalboaImageBase}/bg-puerto-balboa.jpg`,
        alt: 'Banner de Puerto de Balboa',
    },
    descripcion:
        'Uno de los puertos más importantes del Pacífico y una pieza clave en el comercio marítimo mundial. Desde sus alrededores se puede apreciar la dinámica de entrada y salida de embarcaciones en el Canal de Panamá.',
    previewDescripcion:
        'Comercio marítimo y vistas del movimiento portuario en el Pacífico panameño.',
    previewUbicacion: 'Panamá, Zona del Canal',
    actividades: [
        { nombre: 'Observación de buques', descripcion: 'Contempla grandes embarcaciones en tránsito.', icono: '' },
        { nombre: 'Fotografía portuaria', descripcion: 'Captura la actividad marítima y logística.', icono: '' },
        { nombre: 'Turismo marítimo', descripcion: 'Conoce la dinámica del comercio internacional.', icono: '' },
        { nombre: 'Observación del Canal', descripcion: 'Conecta con la historia del tránsito marítimo.', icono: '' },
        { nombre: 'Paseos cercanos', descripcion: 'Disfruta de áreas aledañas como Amador.', icono: '' },
        { nombre: 'Experiencia educativa', descripcion: 'Aprende sobre la operación portuaria.', icono: '' },
        { nombre: 'Fotografía industrial', descripcion: 'Captura grúas, barcos y contenedores.', icono: '' },
        { nombre: 'Vistas panorámicas', descripcion: 'Disfruta la actividad del puerto desde distintos puntos.', icono: '' },
        { nombre: 'Turismo urbano', descripcion: 'Combina la visita con otros puntos del Canal.', icono: '' },
        { nombre: 'Observación del atardecer', descripcion: 'Disfruta vistas únicas al final del día.', icono: '' },
    ],
    ubicacion:
        'https://www.google.com/maps?q=Puerto%20de%20Balboa%20Panama&output=embed',
}
