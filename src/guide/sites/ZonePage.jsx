import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Menu from '../components/menu/Menu.jsx'
import ButtomBanner from '../components/bottombanner/Bottombanner.jsx'
import ZoneVideo from '../destinations/desti-components/ZoneVideo.jsx'
import { zoneRegistry } from './zones/zoneRegistry.js'
import { siteRegistry } from './dataSites/siteRegistry.js'
import { provincias as chiriquiProvincias } from '../destinations/desti-data/panama/chiriqui/ChiriquiData.js'

function ZonePage() {
  const { zoneId } = useParams()
  const navigate = useNavigate()

  const zone = zoneRegistry[zoneId] ?? null
  const provinceData = chiriquiProvincias[0]
  const sitios = (zone?.sitios || []).map((id) => siteRegistry[id]).filter(Boolean)

  if (!zone) {
    return <main className="min-h-screen bg-brand-soft" />
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden text-brand-charcoal">
      <div className="fixed top-0 z-50 w-full">
        <Menu
          autoHideOnScroll
          hideMobileMenu
          onLogoClick={() => navigate('/#home')}
          onUsClick={() => navigate('/#us')}
          onMapClick={() => navigate('/#map')}
          onSuggestionsClick={() => navigate('/#suggestions')}
          onPreregisterClick={() => navigate('/#preregister')}
        />
      </div>

      
      <ZoneVideo provinceData={provinceData} zone={zone} fixedBackground />

      <section className="relative z-10 ">
        <div className="mx-auto max-w-6xl px-4 md:px-10">
          <p className="mb-100 text-brand-white/95 font-secondary-italic 
          text-center text-2xl backdrop-blur-sm">{zone.descripcion}</p>

          {/* Sitios dentro de la zona */}
          <div className="mt-8">
            <h2 className="font-main text-5xl text-brand-white flex justify-center">Sitios turísticos</h2>
            <div className="mt-6 flex flex-wrap justify-center gap-6">
              {sitios.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => navigate(`/sitios/${encodeURIComponent(s.id)}`)}
                  className="flex w-full max-w-[350px] cursor-pointer flex-col overflow-hidden rounded-xl bg-brand-white text-left shadow-xl transition hover:-translate-y-1"
                >
                  <div className="group relative aspect-[16/9] w-full overflow-hidden bg-brand-soft">
                    <img
                      src={ s.imagen || s.banner?.src || s.thumbnail || s.src}
                      alt={s.nombre}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/8 transition-all duration-300 group-hover:bg-black/0" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-secondary-italic mt-2 text-2xl text-brand-blue/95">
                      {s.nombre}
                    </h3>
                    <p className="font-body mt-3 text-sm leading-6 text-brand-gray/95">
                      {s.previewDescripcion || s.descripcion || 'Sitio turístico'}
                    </p>
                    <p className="font-secondary-italic mt-auto pt-4 text-sm text-brand-red/95">
                      {s.previewUbicacion || `${provinceData.nombre}, ${s.nombre}`}
                    </p>
                  </div>
                </button>
              ))}

              {(!zone.sitios || zone.sitios.length === 0) && (
                <div className="col-span-full rounded-lg bg-brand-white p-6 text-brand-gray/90 shadow">
                  Aún no hay sitios individuales registrados en esta zona. Agrega entradas en <code>src/guide/sites/dataSites/chiriqui</code> y actualiza el registro.
                </div>
              )}
            </div>
          </div>

          
        </div>
      </section>
        <div className="mt-24">
            <ButtomBanner onLogoClick={() => navigate('/#home')} />
        </div>
    </main>
  )
}

export default ZonePage
