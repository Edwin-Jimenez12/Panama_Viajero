import { elValleDeAnton } from './sites/el-valle-de-anton.js'
import { penonome } from './sites/penonome.js'
import { playaBlanca } from '../rivera-pacifica/sites/playa-blanca.js'
import { playaFarallon } from '../rivera-pacifica/sites/playa-farallon.js'
import { playaJuanHombron } from '../rivera-pacifica/sites/playa-juan-hombron.js'
import { santaClara } from '../rivera-pacifica/sites/santa-clara.js'

export const cocleSiteRegistry = {
  [elValleDeAnton.id]: elValleDeAnton,
  [penonome.id]: penonome,
  [playaBlanca.id]: playaBlanca,
  [playaFarallon.id]: playaFarallon,
  [playaJuanHombron.id]: playaJuanHombron,
  [santaClara.id]: santaClara,
}
