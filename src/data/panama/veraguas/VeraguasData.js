/* const  = new URL('../../../assets/srcProvincias', import.meta.url).href; */
const VERAGUAS_BANNER = new URL('../../../assets/srcProvincias/veraguas/VeraguasBanner.mp4', import.meta.url).href;
const ISLA_CEBACO = new URL('../../../assets/srcProvincias/veraguas/Isla_Cebaco.mp4', import.meta.url).href;
const MARIATO = new URL('../../../assets/srcProvincias/veraguas/Mariato.mp4', import.meta.url).href;
const ISLA_COCOS = new URL('../../../assets/srcProvincias/veraguas/Isla_Cocos.mp4', import.meta.url).href;
const ISLA_RANCHERIA = new URL('../../../assets/srcProvincias/veraguas/Isla_Rancheria.mp4', import.meta.url).href;
const PLAYA_EL_ESTERO = new URL('../../../assets/srcProvincias/veraguas/Playa_El_Estero.mp4', import.meta.url).href;
export const provincias = [
  {
    id: 'veraguas',
    nombre: 'Veraguas',

    banner: {
      tipo: 'video',
      src: VERAGUAS_BANNER,
      alt: 'Vista de la provincia de Veraguas',
    },

    descripcionCorta:
      'Veraguas es la única provincia que te permite ver el amanecer en un océano y el atardecer en otro bajo el mismo cielo. Es el paraíso de los que buscan la soledad de islas protegidas como Coiba y la frescura de montañas que guardan tesoros artísticos del tiempo de la colonia.',

    ubicacionProvincia: {
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1598685.7655912635!2d-82.7498707822495!3d8.03766501294524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fae170daec5093b%3A0xc558fcd4c89d62fd!2sVeraguas%20Province!5e1!3m2!1sen!2spa!4v1778777648582!5m2!1sen!2spa',
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
        imagen: 'https://dam.visitpanama.com/files/a2c8b300-80e1-3f99-a669-6c208b2350df?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779380998809&signature=l17W71xP3dxrrw9m3oMPBgQA1FzZR0m59iu4gJXK1ZOO3r5AHg%2BV1qWbbebrMVr2L3lkVzzkfm93FkvqD6z2Dg%3D%3D&version=a0b1ec4b',
        ubicacion: 'Isla Coiba, Veraguas',
      },
      {
        id: 'Santa_Catalina',
        nombre: 'Santa Catalina',
        descripcion: 'Destino costero famoso por sus olas, ambiente de surf y acceso hacia el Parque Nacional Coiba.',
        tipo: 'imagen',
        imagen: 'https://dam.visitpanama.com/files/39642742-ef17-3654-9914-005ffac90ed4?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779381024977&signature=L%2BmQJK71vPaS3nS06E5ggGs9cRUDwIbEXohyrbnZvHPFGCHTbywdEXARDi4mXHDgThSAxV0mrMOHcNupPIXFDA%3D%3D&version=a0b1ec4b',
        ubicacion: 'Santa Catalina, Veraguas',
      },
      {
        id: 'Isla_Cebaco',
        nombre: 'Isla Cébaco',
        descripcion: 'Isla extensa y poco masificada con playas, naturaleza y comunidades costeras de ambiente tranquilo.',
        tipo: 'video',
        imagen: ISLA_CEBACO,
        ubicacion: 'Isla Cébaco, Veraguas',
      },
      {
        id: 'Mariato',
        nombre: 'Mariato',
        descripcion: 'Distrito costero de paisajes amplios, playas abiertas y rutas hacia zonas naturales del sur de Veraguas.',
        tipo: 'video',
        imagen: MARIATO,
        ubicacion: 'Mariato, Veraguas',
      },
      {
        id: 'Isla_Cocos',
        nombre: 'Isla Cocos',
        descripcion: 'Isla de ambiente natural dentro del entorno marino veragüense, ideal para recorridos y fotografía.',
        tipo: 'video',
        imagen: ISLA_COCOS,
        ubicacion: 'Isla Cocos, Veraguas',
      },
      {
        id: 'Isla_Rancheria',
        nombre: 'Isla Ranchería',
        descripcion: 'Isla cercana a Coiba con playas y naturaleza, frecuentada por quienes exploran el parque marino.',
        tipo: 'video',
        imagen: ISLA_RANCHERIA,
        ubicacion: 'Isla Ranchería, Veraguas',
      },
      {
        id: 'Playa_El_Estero',
        nombre: 'Playa El Estero',
        descripcion: 'Playa de Santa Catalina ideal para surf, caminatas y tardes frente al Pacífico.',
        tipo: 'video',
        imagen: PLAYA_EL_ESTERO,
        ubicacion: 'Playa El Estero, Veraguas',
      },
      {
        id: 'Parque_Nacional_Santa_Fe',
        nombre: 'Parque Nacional Santa Fé',
        descripcion: 'Área protegida de montaña con ríos, cascadas y senderos rodeados de bosque tropical.',
        tipo: 'imagen',
        imagen: 'https://dam.visitpanama.com/files/4af0d846-2a18-362e-887a-28f093e1aa24?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779381459621&signature=i95uIRqcripwHrGda1XY6D6WhDgHEq93tpPEVgBnnzZM6I4vXKh0lYiGCDYd6WzNPhKbZqrRY8RL0TiDWFhoDA%3D%3D&version=a0b1ec4b',
        ubicacion: 'Santa Fé, Veraguas',
      },
      {
        id: 'Isla_Granito_de_Oro',
        nombre: 'Isla Granito de Oro',
        descripcion: 'Pequeña isla de aguas claras dentro de Coiba, muy apreciada para snorkel y observación marina.',
        tipo: 'imagen',
        imagen: 'https://dam.visitpanama.com/files/397e2ef5-ea7e-371a-99a8-f1fc1578a3ba?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779381488096&signature=P09SYkeSv%2FxHnaQ%2BeMA3rtO8ufWP1J28cAYM4saBCSB%2Fa6zHa5T5IgmSlltWvY7j4BPteBRc4f16ljS91CLdAw%3D%3D&version=a0b1ec4b',
        ubicacion: 'Parque Nacional Coiba, Veraguas',
      },
      {
        id: 'El_Faro_Dive_Site',
        nombre: 'El Faro Dive Site',
        descripcion: 'Sitio de buceo en Coiba conocido por su vida marina, profundidad y paisajes submarinos.',
        tipo: 'imagen',
        imagen: 'https://dam.visitpanama.com/files/a7fd5821-5d6d-3599-9667-dbe767c9c92a?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779381514139&signature=imMM1DCpV3kwzeUGfQDLvS1arLTkBTxpII6gEC5rzPkTpMhkgcAKSOV%2FpfeGhcLFhCFcrVCNSd7VYMg6srQkAg%3D%3D&version=a0b1ec4b',
        ubicacion: 'Parque Nacional Coiba, Veraguas',
      },
      {
        id: 'Isla_Tortuga',
        nombre: 'Isla Tortuga',
        descripcion: 'Isla de entorno natural y aguas tranquilas, ideal para excursiones marinas y descanso.',
        tipo: 'imagen',
        imagen: 'https://dam.visitpanama.com/files/1ad3aaf4-6fca-35b3-a7e3-bbfe3737505c?account_id=6642FBAB-A4D7-4BE0-A372A15EFDD15853&expiry=1779381542039&signature=Xwc7H2fWxjfohBmDKVl6k5yKeylEic89Zf4DBczjQebxebAthloKojkUPMkTyXmDAQWWelNVF64cFP2TpZX2Dg%3D%3D&version=a0b1ec4b',
        ubicacion: 'Isla Tortuga, Veraguas',
      },
    ],
  },
];
