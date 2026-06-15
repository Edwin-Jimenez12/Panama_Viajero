import { chitre } from './sites/chitre.js'
import { reservaForestalElMontuoso } from './sites/reserva-forestal-el-montuoso.js'
import { talleresDeArtesanosDeDiablicos } from './sites/talleres-de-artesanos-de-diablicos.js'

export const herreraSiteRegistry = {
  [chitre.id]: chitre,
  [reservaForestalElMontuoso.id]: reservaForestalElMontuoso,
  [talleresDeArtesanosDeDiablicos.id]: talleresDeArtesanosDeDiablicos,
}
