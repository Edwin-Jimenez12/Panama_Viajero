import { santiago } from './sites/santiago.js'
import { islaCebaco } from './sites/isla-cebaco.js'
import { calovebora } from './sites/calovebora.js'
import { santaCatalina } from './sites/santa-catalina.js'
import { playaElEstero } from './sites/playa-el-estero.js'
import { playaTorio } from './sites/playa-torio.js'
import { playaMorrillo } from './sites/playa-morrillo.js'

export const veraguasSiteRegistry = {
  [santiago.id]: santiago,
  [islaCebaco.id]: islaCebaco,
  [calovebora.id]: calovebora,
  [santaCatalina.id]: santaCatalina,
  [playaElEstero.id]: playaElEstero,
  [playaTorio.id]: playaTorio,
  [playaMorrillo.id]: playaMorrillo,
}
