import { cocleZoneRegistry } from './cocle/zoneRegistry.js'
import { panamaOesteZoneRegistry } from './panama-oeste/zoneRegistry.js'

export const zoneRegistry = {
  ...cocleZoneRegistry,
  ...panamaOesteZoneRegistry,
}
