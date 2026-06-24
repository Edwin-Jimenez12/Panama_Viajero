import { boqueteCentro } from './sites/boquete-centro.js'
import { volcanBaru } from './sites/volcan-baru.js'
import { gualaca } from './sites/gualaca.js'
import { cerroPuntaCentro } from './sites/cerro-punta-centro.js'
import { bocaChica } from './sites/boca-chica.js'
import { davidCentro } from './sites/david-centro.js'
import { playaBarqueta } from './sites/playa-barqueta.js'
import { playaLasLajas } from './sites/playa-las-lajas.js'
import { puertoArmuelles } from './sites/puerto-armuelles.js'

export const chiriquiSiteRegistry = {
  [boqueteCentro.id]: boqueteCentro,
  [volcanBaru.id]: volcanBaru,
  [gualaca.id]: gualaca,
  [cerroPuntaCentro.id]: cerroPuntaCentro,
  [bocaChica.id]: bocaChica,
  [davidCentro.id]: davidCentro,
  [playaBarqueta.id]: playaBarqueta,
  [playaLasLajas.id]: playaLasLajas,
  [puertoArmuelles.id]: puertoArmuelles,
}
