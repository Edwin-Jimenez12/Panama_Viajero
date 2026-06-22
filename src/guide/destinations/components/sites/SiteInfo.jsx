import { useNavigate, useParams } from 'react-router-dom'
import Menu from '../../../components/menu/Menu.jsx'
import ButtomBanner from '../../../components/bottombanner/Bottombanner.jsx'
import { siteRegistry } from '../../destinations-pages/siteRegistry.js'
import SiteActivities from './SiteActivities.jsx'
import SiteMap from './SiteMap.jsx'
import DeferredSection from '../../../layout/layout-components/DeferredSection.jsx'

function SiteInfo() {
  const navigate = useNavigate()
  const { siteId } = useParams()
  const site = siteId ? siteRegistry[decodeURIComponent(siteId)] ?? null : null

  const scrollToMap = () => {
    const mapElement = document.getElementById('site-map')
    mapElement?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (!site) {
    return <main className="min-h-screen bg-brand-soft" />
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden text-brand-charcoal">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-brand-charcoal">
        <img
          src={site.banner.src}
          alt={site.banner.alt}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

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

      <section className="relative min-h-[82vh] overflow-hidden mt-5">
        <div className="relative flex min-h-[82vh] items-center px-4 mt-15 max-w-6xl">
          <div className="max-w-md rounded-xl border border-white/15 bg-black/35 p-8 text-start shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-md md:mt-0 md:ml-15">
            <h1
              className="font-main text-5xl text-brand-white md:text-6xl"
              style={{ textShadow: '0 0 3px rgba(0, 0, 0, 0.9)' }}
            >
              {site.nombre}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl font-body leading-7 text-brand-white/90 md:text-lg">
              {site.descripcion}
            </p>
            <button
              type="button"
              onClick={scrollToMap}
              className="mt-10 cursor-pointer rounded-full bg-[#CD2E4C]/80 px-3 py-1 text-[0.7rem] font-secondary-italic 
              uppercase tracking-[0.2em] text-white shadow-[0_10px_28px_rgba(0,0,0,0.18)] backdrop-blur-md
              hover:translate-y-[-2px] duration-300 hover:bg-[#CD2E4C] 
              "
            >
                {site.previewUbicacion ?? 'Ubicación no disponible'}
              
              
            </button>
          </div>
        </div>
      </section>

      <div className="relative min-h-screen">
        <div className="relative z-20 px-4 pt-16 md:px-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-50">
            <DeferredSection fallback={<div className="min-h-[420px]" />} rootMargin="300px">
              <SiteActivities activities={site.actividades} featuredImage={site.banner.src} />
            </DeferredSection>
            <DeferredSection fallback={<div className="min-h-[360px]" />} rootMargin="350px">
              <SiteMap site={site} />
            </DeferredSection>
          </div>
        </div>

        <div className="relative z-20 mt-40">
          <ButtomBanner onLogoClick={() => navigate('/#home')} />
        </div>
      </div>
    </main>
  )
}

export default SiteInfo
