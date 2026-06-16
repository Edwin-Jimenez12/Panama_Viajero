import { bocasSiteRegistry } from './bocas-del-toro/sites/siteRegistry.js'
import { chiriquiSiteRegistry } from './chiriqui/siteRegistry.js'
import { colonSiteRegistry } from './colon/siteRegistry.js'
import { darienSiteRegistry } from './darien/siteRegistry.js'
import { gunaYalaSiteRegistry } from './comarca-guna-yala/siteRegistry.js'
import { cocleSiteRegistry } from './cocle/siteRegistry.js'
import { herreraSiteRegistry } from './herrera/siteRegistry.js'
import { losSantosSiteRegistry } from './los-santos/siteRegistry.js'
import { panamaOesteSiteRegistry } from './panama-oeste/siteRegistry.js'
import { veraguasSiteRegistry } from './veraguas/siteRegistry.js'

export const siteRegistry = {
  ...bocasSiteRegistry,
  ...chiriquiSiteRegistry,
  ...colonSiteRegistry,
  ...darienSiteRegistry,
  ...gunaYalaSiteRegistry,
  ...cocleSiteRegistry,
  ...herreraSiteRegistry,
  ...losSantosSiteRegistry,
  ...panamaOesteSiteRegistry,
  ...veraguasSiteRegistry,
}
