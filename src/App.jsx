import { Route, Routes } from 'react-router-dom'
import Menu from './assets/components/menu/Menu.jsx'
import BannerLayout from './layout/banner/BannerLayout.jsx'
import Map from './layout/map/DinamicMap.jsx'
import Preregister from './layout/preregister/Preregister.jsx'
import BottomBanner from './assets/components/bottombanner/Bottombanner.jsx'
import CountdownModal from './layout/counter/Counter.jsx'
import BocasDelToro from './data/america/panama/BocasDelToro/BocasDelToro.jsx'
import AboutUs from './assets/components/about us/AboutUs.jsx'
import AleatorySuggestions from './layout/suggestion/Suggestions.tsx'
import useHomeNavigation from './layout/functions/useHomeNavigation.js'
import './App.css'
import Logo from './assets/img_test/LogoRectangular.svg'

function Home() {
  const {
    homeRef,
    mapRef,
    preregisterRef,
    scrollToHome,
    scrollToMap,
    scrollToPreregister,
    scrollToSuggestions,
    scrollToUs,
    setShowCountdown,
    showCountdown,
    showMenu,
    suggestionsRef,
    usRef,
  } = useHomeNavigation()

  return (
    <div className="relative bg-brand-soft text-brand-charcoal">
      {showCountdown && (
        <CountdownModal
          onClose={() => setShowCountdown(false)}
          onPreregister={scrollToPreregister}
        />
      )}

      <div
        className={`fixed top-0 z-30 w-full transition-transform duration-300 ease-in-out ${
          showMenu ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Menu
          onLogoClick={scrollToHome}
          onPreregisterClick={scrollToPreregister}
          onMapClick={scrollToMap}
          onUsClick={scrollToUs}
          onSuggestionsClick={scrollToSuggestions}
        />
      </div>
      {/* BANNER */}
      <section id="home" ref={homeRef} className="relative">
        <BannerLayout />
        <div className=" mr-5 mb-2 md:mr-10 md:mb-5 pointer-events-none absolute inset-0 z-20 flex items-end justify-end">
          <img src={Logo} alt="Logo" className="h-10 md:h-27 w-auto max-w-full drop-shadow-[0_18px_10px_rgba(0,0,0,0.45)]" />
        </div>
      </section>

      {/*US*/}
      <section id="us" ref={usRef} className="scroll-mt-7 md:scroll-mt-20">
        <AboutUs />
      </section>

      {/* MAP */}
      <section id="map" ref={mapRef} className="scroll-mt-60">
        <Map />
      </section>

      {/* SUGGESTIONS */}
      <section id="suggestions" ref={suggestionsRef} className="scroll-mt-1/2 md:scroll-mt-0">
        <AleatorySuggestions />
      </section>

      {/* PREREGISTER */}
      <section id="preregister" ref={preregisterRef} className="scroll-mt-24">
        <Preregister />
      </section>
      <BottomBanner onLogoClick={scrollToHome} />
    </div>
  )
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/provincias/bocas-del-toro" element={<BocasDelToro />} />
    </Routes>
  )
}

export default App
