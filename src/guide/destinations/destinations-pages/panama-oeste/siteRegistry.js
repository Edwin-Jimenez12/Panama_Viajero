import { playaSanCarlos } from '../rivera-pacifica/sites/playa-san-carlos.js'
import { coronado } from '../rivera-pacifica/sites/coronado.js'
import { playaElPalmar } from '../rivera-pacifica/sites/playa-el-palmar.js'
import { puntaChame } from '../rivera-pacifica/sites/punta-chame.js'
import { playaMalibu } from '../rivera-pacifica/sites/playa-malibu.js'
import { playaSeaCliff } from '../rivera-pacifica/sites/playa-sea-cliff.js'
import { gorgona } from './sites/gorgona.js'
import { veracruz } from './sites/veracruz.js'

export const panamaOesteSiteRegistry = {
  [playaSanCarlos.id]: playaSanCarlos,
  [coronado.id]: coronado,
  [playaElPalmar.id]: playaElPalmar,
  [puntaChame.id]: puntaChame,
  [playaMalibu.id]: playaMalibu,
  [playaSeaCliff.id]: playaSeaCliff,
  [gorgona.id]: gorgona,
  [veracruz.id]: veracruz,
}
