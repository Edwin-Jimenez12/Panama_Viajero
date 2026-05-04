import { useEffect, useRef, useState } from 'react'
import Menu from './layout/menu/Menu.jsx'
import BannerLayout from './layout/banner/BannerLayout.jsx'
import Map from './layout/map/DinamicMap.jsx';
import Preregister from './layout/preregister/Preregister.jsx'
import BottomBanner from './layout/bottombanner/Bottombanner.jsx';
import CountdownModal from './layout/counter/Counter.jsx';
import './App.css'


function App() {
  const [showCountdown, setShowCountdown] = useState(true)
  const [showMenu, setShowMenu] = useState(true)
  const homeRef = useRef(null)
  const preregisterRef = useRef(null)
  const lastScrollY = useRef(0)

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
        />
      </div>
      <section ref={homeRef}>
        <BannerLayout />
      </section>
      <Map />
      <section ref={preregisterRef} className="scroll-mt-24">
        <Preregister />
      </section>
      <BottomBanner onLogoClick={scrollToHome} />
    </div>
  )
}

export default App
