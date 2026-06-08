import { boqueteZone } from '../dataSites/chiriqui/zBoquete/boquete.js'
import { davidZone } from '../dataSites/chiriqui/zDavid/david.js'
import { cerroPuntaZone } from '../dataSites/chiriqui/zCerroPunta/cerro-punta.js'

export const zoneRegistry = {
  [boqueteZone.id]: boqueteZone,
  [davidZone.id]: davidZone,
  [cerroPuntaZone.id]: cerroPuntaZone,
}
