const mercadoMariscosImageBase = '/images/destinations/panama'

export const mercadoMariscos = {
    id: 'mercado-mariscos',
    provinceId: 'panama',
    nombre: 'Mercado de Mariscos',
    banner: {
        src: `${mercadoMariscosImageBase}/bg-mercado-mariscos.jpg`,
        alt: 'Banner del Mercado de Mariscos',
    },
    descripcion:
        'Uno de los lugares gastronómicos más emblemáticos de la ciudad, famoso por su ceviche fresco y mariscos recién traídos del Pacífico. Es un punto clave para experimentar sabores auténticos panameños.',
    previewDescripcion:
        'Mariscos frescos, ceviche y tradición gastronómica frente al mar.',
    previewUbicacion: 'Panamá, Capital',
    actividades: [
        { nombre: 'Degustación de ceviche', descripcion: 'Prueba una de las especialidades más famosas de Panamá.', icono: '' },
        { nombre: 'Gastronomía local', descripcion: 'Disfruta mariscos frescos y platos tradicionales.', icono: '' },
        { nombre: 'Compra de mariscos', descripcion: 'Adquiere productos frescos del día.', icono: '' },
        { nombre: 'Fotografía gastronómica', descripcion: 'Captura colores y sabores únicos.', icono: '' },
        { nombre: 'Experiencia culinaria', descripcion: 'Conoce la cocina marina panameña.', icono: '' },
        { nombre: 'Paseo costero', descripcion: 'Disfruta vistas cercanas al mar y Casco Antiguo.', icono: '' },
        { nombre: 'Observación del puerto', descripcion: 'Conoce la dinámica comercial marina.', icono: '' },
        { nombre: 'Turismo gastronómico', descripcion: 'Explora la cultura culinaria local.', icono: '' },
        { nombre: 'Ambiente local', descripcion: 'Conecta con la vida cotidiana de la ciudad.', icono: '' },
        { nombre: 'Comida al aire libre', descripcion: 'Disfruta de mariscos en terrazas cercanas.', icono: '' },
    ],
    ubicacion: 'https://www.google.com/maps?q=Mercado%20de%20Mariscos%20Panama&output=embed',
}
