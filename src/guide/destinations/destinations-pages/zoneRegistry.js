import { cocleZoneRegistry } from './cocle/zoneRegistry.js'
import { colonZoneRegistry } from './colon/zoneRegistry.js'
import { panamaOesteZoneRegistry } from './panama-oeste/zoneRegistry.js'

export const zoneRegistry = {
  ...cocleZoneRegistry,
  ...colonZoneRegistry,
  ...panamaOesteZoneRegistry,
}
