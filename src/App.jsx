import { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Menu from './assets/components/menu/Menu.jsx'
import BannerLayout from './layout/banner/BannerLayout.jsx'
import Map from './layout/map/DinamicMap.jsx';
import Preregister from './layout/preregister/Preregister.jsx'
import BottomBanner from './assets/components/bottombanner/Bottombanner.jsx';
import CountdownModal from './layout/counter/Counter.jsx';
import Colon from './data/america/panama/colon/Colon.jsx';
import './App.css'



function Home() {
  const [showCountdown, setShowCountdown] = useState(true)
  const [showMenu, setShowMenu] = useState(true)
  const homeRef = useRef(null)
  const preregisterRef = useRef(null)
  const lastScrollY = useRef(0)
  const mapRef = useRef(null)

  
  const scrollToMap = () => {
  setShowCountdown(false)
  mapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}


  const scrollToHome = () => {
    setShowCountdown(false)
    homeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToPreregister = () => {
    setShowCountdown(false)
    preregisterRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 80 || currentScrollY < lastScrollY.current) {
        setShowMenu(true)
      } else {
        setShowMenu(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative">
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
        />
      </div>
      <section ref={homeRef}>
        <BannerLayout />
      </section>
      <section ref={mapRef} className="scroll-mt-24">
        <Map />
      </section>
      <section ref={preregisterRef} className="scroll-mt-24">
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
      <Route path="/provincias/colon" element={<Colon />} />
    </Routes>
  )
}

export default App
