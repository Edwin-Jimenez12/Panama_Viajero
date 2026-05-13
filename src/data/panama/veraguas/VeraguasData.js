const VERAGUAS_IMAGE = new URL('../../../assets/srcProvincias/veraguas/veraguas.png', import.meta.url).href;

export const provincias = [
  {
    id: 'veraguas',
    nombre: 'Veraguas',

    banner: {
      tipo: 'imagen',
      src: VERAGUAS_IMAGE,
      alt: 'Vista de la provincia de Veraguas',
    },

    descripcionCorta:
      'Veraguas es la única provincia que te permite ver el amanecer en un océano y el atardecer en otro bajo el mismo cielo. Es el paraíso de los que buscan la soledad de islas protegidas como Coiba y la frescura de montañas que guardan tesoros artísticos del tiempo de la colonia.',

    ubicacionProvincia: {
      src: 'https://www.google.com/maps?q=Veraguas%2C%20Panam%C3%A1&output=embed',
    },

    actividades: [
      'Buceo',
      'Surf',
      'Senderismo',
      'Pesca',
      'Avistamiento de ballenas',
      'Kayak',
      'Observación de tortugas',
      'Ciclismo',
    ],

    resena:
      'La historia de Veraguas está marcada por su posición privilegiada como el nexo entre los dos grandes mares que bañan a Panamá. Fue una tierra otorgada a la familia de Cristóbal Colón y desde siempre ha sido un pilar de la vida rural y ganadera del interior del país. Su verdadera joya es la Isla de Coiba que pasó de ser una prisión de acceso prohibido a convertirse en uno de los parques naturales más increíbles del mundo. Es una provincia de contrastes que ha sabido proteger la mística de sus pueblos de montaña como San Francisco mientras se convierte en un referente mundial para los amantes del surf que buscan olas perfectas en la costa de Santa Catalina.',

    lugaresDestacados: [
      {
        id: 'Isla_Coiba',
        nombre: 'Isla Coiba',
        descripcion: 'Parque nacional marino con islas, arrecifes y una biodiversidad excepcional para buceo y naturaleza.',
        tipo: 'imagen',
        imagen: VERAGUAS_IMAGE,
        ubicacion: 'Isla Coiba, Veraguas',
      },
      {
        id: 'Santa_Catalina',
        nombre: 'Santa Catalina',
        descripcion: 'Destino costero famoso por sus olas, ambiente de surf y acceso hacia el Parque Nacional Coiba.',
        tipo: 'imagen',
        imagen: VERAGUAS_IMAGE,
        ubicacion: 'Santa Catalina, Veraguas',
      },
      {
        id: 'Isla_Cebaco',
        nombre: 'Isla Cébaco',
        descripcion: 'Isla extensa y poco masificada con playas, naturaleza y comunidades costeras de ambiente tranquilo.',
        tipo: 'imagen',
        imagen: VERAGUAS_IMAGE,
        ubicacion: 'Isla Cébaco, Veraguas',
      },
      {
        id: 'Mariato',
        nombre: 'Mariato',
        descripcion: 'Distrito costero de paisajes amplios, playas abiertas y rutas hacia zonas naturales del sur de Veraguas.',
        tipo: 'imagen',
        imagen: VERAGUAS_IMAGE,
        ubicacion: 'Mariato, Veraguas',
      },
      {
        id: 'Isla_Cocos',
        nombre: 'Isla Cocos',
        descripcion: 'Isla de ambiente natural dentro del entorno marino veragüense, ideal para recorridos y fotografía.',
        tipo: 'imagen',
        imagen: VERAGUAS_IMAGE,
        ubicacion: 'Isla Cocos, Veraguas',
      },
      {
        id: 'Isla_Rancheria',
        nombre: 'Isla Ranchería',
        descripcion: 'Isla cercana a Coiba con playas y naturaleza, frecuentada por quienes exploran el parque marino.',
        tipo: 'imagen',
        imagen: VERAGUAS_IMAGE,
        ubicacion: 'Isla Ranchería, Veraguas',
      },
      {
        id: 'Playa_El_Estero',
        nombre: 'Playa El Estero',
        descripcion: 'Playa de Santa Catalina ideal para surf, caminatas y tardes frente al Pacífico.',
        tipo: 'imagen',
        imagen: VERAGUAS_IMAGE,
        ubicacion: 'Playa El Estero, Veraguas',
      },
      {
        id: 'Parque_Nacional_Santa_Fe',
        nombre: 'Parque Nacional Santa Fé',
        descripcion: 'Área protegida de montaña con ríos, cascadas y senderos rodeados de bosque tropical.',
        tipo: 'imagen',
        imagen: VERAGUAS_IMAGE,
        ubicacion: 'Santa Fé, Veraguas',
      },
      {
        id: 'Isla_Granito_de_Oro',
        nombre: 'Isla Granito de Oro',
        descripcion: 'Pequeña isla de aguas claras dentro de Coiba, muy apreciada para snorkel y observación marina.',
        tipo: 'imagen',
        imagen: VERAGUAS_IMAGE,
        ubicacion: 'Parque Nacional Coiba, Veraguas',
      },
      {
        id: 'El_Faro_Dive_Site',
        nombre: 'El Faro Dive Site',
        descripcion: 'Sitio de buceo en Coiba conocido por su vida marina, profundidad y paisajes submarinos.',
        tipo: 'imagen',
        imagen: VERAGUAS_IMAGE,
        ubicacion: 'Parque Nacional Coiba, Veraguas',
      },
      {
        id: 'Isla_Tortuga',
        nombre: 'Isla Tortuga',
        descripcion: 'Isla de entorno natural y aguas tranquilas, ideal para excursiones marinas y descanso.',
        tipo: 'imagen',
        imagen: VERAGUAS_IMAGE,
        ubicacion: 'Isla Tortuga, Veraguas',
      },
    ],
  },
];
