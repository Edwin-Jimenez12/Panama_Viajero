import { castilloSanLorenzo } from './costa-abajo/castillo-san-lorenzo.js'
import { esclusasAguaClara } from './costa-abajo/esclusas-agua-clara.js'
import { fuerteSherman } from './costa-abajo/fuerte-sherman.js'
import { bosqueProtectorSanLorenzo } from './costa-abajo/bosque-protector-san-lorenzo.js'
import { elGuaira } from './costa-arriba/el-guaira.js'
import { islaGrande } from './costa-arriba/isla-grande.js'
import { islaMamey } from './costa-arriba/isla-mamey.js'
import { portobelo } from './costa-arriba/portobelo.js'
import { puertoLindo } from './costa-arriba/puerto-lindo.js'

export const colonSiteRegistry = {
  [castilloSanLorenzo.id]: castilloSanLorenzo,
  [esclusasAguaClara.id]: esclusasAguaClara,
  [fuerteSherman.id]: fuerteSherman,
  [bosqueProtectorSanLorenzo.id]: bosqueProtectorSanLorenzo,
  [elGuaira.id]: elGuaira,
  [islaGrande.id]: islaGrande,
  [islaMamey.id]: islaMamey,
  [portobelo.id]: portobelo,
  [puertoLindo.id]: puertoLindo,
}
