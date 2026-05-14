const DARIEN_IMAGE = new URL('../../../assets/srcProvincias/darien/darien.png', import.meta.url).href;

export const provincias = [
  {
    id: 'darien',
    nombre: 'Darién',

    banner: {
      tipo: 'imagen',
      src: DARIEN_IMAGE,
      alt: 'Vista de la provincia de Darién',
    },

    descripcionCorta:
      'Darién es el último refugio de la vida salvaje donde el asfalto se rinde ante el dominio de la selva tropical más densa del continente. Es el destino ideal para los exploradores de corazón que buscan conocer la sabiduría de pueblos que viven en armonía con la naturaleza.',

    ubicacionProvincia: {
      src: 'https://www.google.com/maps?q=Dari%C3%A9n%2C%20Panam%C3%A1&output=embed',
    },

    actividades: [
      'Expediciones en selva',
      'Avistamiento de aves',
      'Navegación en piragua',
      'Convivencia indígena',
      'Fotografía',
      'Pesca artesanal',
    ],

    resena:
      'La provincia del Darién representa el punto donde la geografía detuvo al progreso moderno para proteger un ecosistema único en su tipo. Fue el hogar de la primera ciudad española en tierra firme y hoy sigue siendo el territorio sagrado de las etnias Emberá y Wounaan que custodian los secretos de sus bosques. Su historia es un relato de resistencia frente a los intentos de conquista y un testimonio de la fuerza de sus ríos que sirven como las únicas carreteras posibles en gran parte de su extensión. Visitar esta región es entender el valor de lo que permanece intacto y descubrir un Panamá que todavía respira al ritmo original de la tierra lejos de las distracciones y el ruido de la vida moderna.',

    lugaresDestacados: [
      {
        id: 'Parque_Nacional_Darien',
        nombre: 'Parque Nacional Darién',
        descripcion: 'Área protegida de selva tropical, ríos y biodiversidad única, ideal para expediciones de naturaleza.',
        tipo: 'imagen',
        imagen: 'https://lac.wetlands.org/wp-content/uploads/sites/3/2019/12/PROYECTOS-garachine-WETLANDS-EDITABLE-03.jpg',
        ubicacion: 'Darién, Panamá',
      },
      {
        id: 'La_Palma',
        nombre: 'La Palma',
        descripcion: 'Cabecera provincial ubicada frente al golfo, punto de entrada a rutas fluviales y comunidades del Darién.',
        tipo: 'imagen',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROnR3YmjzDw4AMqhlQGalQUHCOgX0Oy27AYA&s',
        ubicacion: 'La Palma, Darién',
      },
      {
        id: 'Comunidades_Embera_Wounaan',
        nombre: 'Comunidades Emberá y Wounaan',
        descripcion: 'Comunidades indígenas donde se pueden conocer tradiciones, artesanías y formas de vida ligadas al bosque.',
        tipo: 'imagen',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQxGWewQ4IhUxmAEUu9LaezeQHc49vi17Vbg&s',
        ubicacion: 'Darién, Panamá',
      },
    ],
  },
];
