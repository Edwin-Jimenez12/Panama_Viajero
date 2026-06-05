

export const provincias = [
  {
    id: 'bocas-del-toro',
    nombre: 'Bocas del Toro',

    banner: {
      tipo: 'video',
      src: '/videos/bocasDelToro/bocasBanner.av1.mp4',
      alt: 'Costa caribeña de la provincia de Bocas del Toro',
    },

    descripcionCorta:
      'Un rincón caribeño donde la naturaleza se siente en cada ola. Descubre islas de aguas cristalinas, playas de arena blanca y una cultura alegre que combina tradición indígena y esencia afrocaribeña en un ambiente único.',

    imagenProvincia: {
      src: '',
      alt: 'Paisaje representativo de Bocas del Toro',
    },

    ubicacionProvincia: {
      src: 'https://www.google.com/maps?q=Bocas%20del%20Toro%20Province%2C%20Panama&output=embed',
    },

    actividades: [
      'Surf',
      'Buceo',
      'Snorkel',
      'Paseos en bote',
      'Delfines',
      'Senderismo',
      'Kayak',
      'Pesca',
      'Ciclismo',
      'Playa',
      'Tours ecológicos',
    ],

    lugaresDestacados: [
      {
        id: 'isla-colon',
        nombre: 'Isla Colón',
        descripcion:
          'Centro principal del archipiélago, con hospedajes, restaurantes, vida caribeña y acceso en bote a playas e islas cercanas.',
        imagen:'/images/destinations/bocas-del-toro/sites/isla-colon/banner/bg-isla-colon.jpg',
        ubicacion: 'Isla Colón, Bocas del Toro',
      },
      {
        id: 'isla-bastimentos',
        nombre: 'Isla Bastimentos',
        descripcion:
          'Un refugio salvaje e indómito de playas doradas, manglares misteriosos y auténtica cultura caribeña, ideal para conectar con la naturaleza más pura.',
        imagen: '/images/destinations/bocas-del-toro/sites/isla-bastimentos/banner/bg-isla-bastimentos.jpg',
        ubicacion: 'Isla Bastimentos, Bocas del Toro',
      },
            {
        id: 'cayo-zapatilla',
        nombre: 'Cayo Zapatilla',
        descripcion:
          'Conjunto de cayos dentro del Parque Nacional Marino Isla Bastimentos, conocido por playas de arena blanca y naturaleza protegida.',
        imagen:'/images/destinations/bocas-del-toro/sites/cayos-zapatilla/banner/bg-cayos-zapatilla.png',         
        ubicacion: 'Cayo Zapatilla, Isla Bastimentos',
      },
      {
        id: 'isla-carenero',
        nombre: 'Isla Carenero',
        descripcion:
          'Un oasis de tranquilidad a minutos del centro, famoso por sus aguas mansas tipo piscina, excelentes restaurantes sobre el mar y spots de surf icónicos.',
        imagen: '/images/destinations/bocas-del-toro/sites/isla-carenero/banner/bg-isla-carenero.jpg',
        ubicacion: 'Isla Carenero, Bocas del Toro',
      },
      {
        id: 'bahia-de-los-delfines',
        nombre: 'Bahía de los Delfines',
        descripcion:
          'Un tranquilo santuario ecológico rodeado de manglares, famoso por albergar familias de delfines mulares que nadan libres en aguas calmas todo el año.',
        imagen: '/videos/bocasDelToro/BahiaDeLosDelfines.avif',
        ubicacion: 'Bahía de los Delfines, Bocas del Toro',
      },
      {
        id: 'cayo-coral',
        nombre: 'Cayo Coral',
        descripcion:
          'Un acuario natural de aguas hiper-cristalinas ideal para el snorkel, célebre por sus jardines de coral y pintorescos restaurantes caribeños construidos sobre pilotes.',
        imagen: '/images/destinations/bocas-del-toro/sites/cayo-coral/banner/bg-cayo-coral.jpg',
        ubicacion: 'Cayo Coral, Bocas del Toro',
      },
      {
        id: 'playa-estrella',
        nombre: 'Playa Estrellaaaaa',
        descripcion:
          'Playa tranquila de aguas claras, famosa por sus estrellas de mar y su ambiente relajado en Isla Colón.',
        imagen:'/videos/bocasDelToro/PlayaEstrella.avif',
        ubicacion: 'Playa Estrella, Isla Colón',
      },

      {
        id: 'cueva-de-los-murcielagos',
        nombre: 'Cueva de los Murciélagos',
        descripcion:
          'Experiencia natural en Isla Bastimentos, ideal para visitantes que buscan recorridos ecológicos fuera de las playas más conocidas.',
        imagen:'/videos/bocasDelToro/cueva-de-los-murcielagos.avif', 
          ubicacion: 'Isla Bastimentos, Bocas del Toro',
      },
      {
        id: 'isla-pajaros',
        nombre: 'Isla Pájaros',
        descripcion:
          'Pequeña isla rocosa reconocida por la observación de aves marinas y paisajes del Caribe bocatoreño.',
        imagen:'/videos/bocasDelToro/isla-pajaros.avif',
        ubicacion: 'Isla Pájaros, Bocas del Toro',
      },
      {/*imagen:'/videos/bocasDelToro',*/
        id: 'punta-hospital',
        nombre: 'Punta Hospital',
        descripcion:
          'Zona costera cercana a Isla Bastimentos, apreciada por sus aguas claras, arrecifes y paseos en bote.',
        imagen:'/videos/bocasDelToro/punta-hospital.avif',
        ubicacion: 'Punta Hospital, Bocas del Toro',
      },
      {
        id: 'la-loma-cacao-farm',
        nombre: 'La Loma Cacao Farm',
        descripcion:
          'Finca de cacao en Isla Bastimentos donde se puede conocer el proceso del cacao y la vida rural del archipiélago.',
        imagen:'/videos/bocasDelToro/la-loma-cacao-farm.avif',
        ubicacion: 'La Loma Cacao Farm, Isla Bastimentos',
      },
      {
        id: 'la-piscina-bluff-beach',
        nombre: 'La Piscina Bluff Beach',
        descripcion:
          'Sector natural de Bluff Beach con formaciones costeras y piscinas naturales cuando las condiciones del mar lo permiten.',
        imagen:'/videos/bocasDelToro/la-piscina-bluff-beach.avif',
        ubicacion: 'Bluff Beach, Bocas del Toro',
      },
      {
        id: 'coral-cay',
        nombre: 'Coral Cay',
        descripcion:
          'Zona de arrecifes cerca de Bastimentos, popular para esnórquel, paseos en bote y almuerzos frente al mar.',
        imagen:'/videos/bocasDelToro/coral-cay.avif',        
        ubicacion: 'Coral Cay, Isla Bastimentos',
      },
    ],
  },
];
