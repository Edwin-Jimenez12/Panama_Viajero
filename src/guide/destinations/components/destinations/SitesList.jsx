import ProvinceTargetsGrid from './ProvinceTargetsGrid.jsx'
import { siteRegistry } from '../../destinations-pages/siteRegistry.js'
import { usePublishedSites } from '../../context/publishedSitesStore.js'

function SitesList({ provinceData, selectedActivity = null, breadcrumbSourceLabel = 'Mapa' }) {
  const { sites: publishedSites } = usePublishedSites()
  const zoneTargets = provinceData?.targets ?? []
  const provinceId = provinceData?.id ?? ''
  const directSiteIds = provinceData?.directSiteIds ?? []
  const fallbackSiteIds =
    directSiteIds.length > 0
      ? directSiteIds
      : Object.values(siteRegistry)
          .filter((site) => site.provinceId === provinceId)
          .map((site) => site.id)
  const staticSites = fallbackSiteIds
    .map((siteId) => siteRegistry[siteId])
    .filter(Boolean)
  const dynamicSites = publishedSites.filter((site) => (
    !site.zoneId
    && (
      site.provinceId === provinceId
      || site.provinceIds?.includes(provinceId)
      || site.sharedProvinceIds?.includes(provinceId)
    )
  ))
  const siteTargets = Array.from(
    new Map(
      [...staticSites, ...dynamicSites].map((site) => [site.id, site]),
    ).values(),
  )
    .map((site) => ({
      id: site.id,
      nombre: site.nombre,
      descripcion: site.previewDescripcion || '',
      imagen: site.banner?.src || site.thumbnail || site.src,
      ubicacion: site.previewUbicacion,
      activities: site.actividades ?? [],
      type: 'site',
      siteId: site.id,
    }))

  return (
    <div className="flex flex-col gap-12">
      {zoneTargets.length > 0 && (
        <ProvinceTargetsGrid
          title="Zonas"
          targets={zoneTargets}
          fallbackPoster={provinceData.banner?.poster || provinceData.imagenProvincia?.src}
          mode="zones-only"
          provinceId={provinceData.id}
          provinceLabel={provinceData?.nombre}
          breadcrumbSourceLabel={breadcrumbSourceLabel}
        />
      )}

      {siteTargets.length > 0 && (
        <ProvinceTargetsGrid
          title="Sitios Directos"
          targets={siteTargets}
          fallbackPoster={provinceData.banner?.poster || provinceData.imagenProvincia?.src}
          mode="sites-only"
          provinceId={provinceData.id}
          selectedActivity={selectedActivity}
          provinceLabel={provinceData?.nombre}
          breadcrumbSourceLabel={breadcrumbSourceLabel}
        />
      )}
    </div>
  )
}

export default SitesList
