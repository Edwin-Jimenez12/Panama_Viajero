import { chitre } from './sites/chitre.js'
import { reservaForestalElMontuoso } from './sites/reserva-forestal-el-montuoso.js'
import { desiertoSarigua } from './sites/desierto-de-sarigua.js'
import { parita } from './sites/parita.js'

export const herreraSiteRegistry = {
  [chitre.id]: chitre,
  [reservaForestalElMontuoso.id]: reservaForestalElMontuoso,
  [desiertoSarigua.id]: desiertoSarigua,
  [parita.id]: parita,
}
