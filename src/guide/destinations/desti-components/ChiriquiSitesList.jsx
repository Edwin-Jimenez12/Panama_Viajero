import ProvinceTargetsGrid from './ProvinceTargetsGrid.jsx'

function ChiriquiSitesList({ provinceData }) {
  return (
    <ProvinceTargetsGrid
      title="Zonas y Sitios"
      targets={provinceData.targets ?? provinceData.lugaresDestacados ?? []}
      fallbackPoster={
        provinceData.banner?.poster ||
        provinceData.imagenProvincia?.src ||
        provinceData.lugaresDestacados?.find((item) => item.tipo !== 'video')?.imagen
      }
      mode={provinceData.displayMode ?? 'mixed'}
    />
  )
}

export default ChiriquiSitesList
