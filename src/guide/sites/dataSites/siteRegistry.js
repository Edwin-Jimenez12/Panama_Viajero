import { islaColon } from './bocas-del-toro/isla-colon.js'
import { islaBastimentos } from './bocas-del-toro/Isla-Bastimentos.js'
import { cayoZapatilla } from './bocas-del-toro/cayos-zapatilla.js'
import { islaCarenero } from './bocas-del-toro/isla-carenero.js'
import { bahiaDeLosDelfines } from './bocas-del-toro/bahia-de-los-delfines.js'
import { cayoCoral } from './bocas-del-toro/cayo-coral.js'

export const siteRegistry = {
  [islaColon.id]: islaColon,
  [islaBastimentos.id]: islaBastimentos,
  [cayoZapatilla.id]: cayoZapatilla,
  [islaCarenero.id]: islaCarenero,
  [bahiaDeLosDelfines.id]: bahiaDeLosDelfines,
  [cayoCoral.id]: cayoCoral,
}
