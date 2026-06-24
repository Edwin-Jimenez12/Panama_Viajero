import { RxCross2 } from 'react-icons/rx'
import VentanaEmergente from '../../../img_test/VEMERGENTE.svg'
import Logo from '../../../img_test/LogoRectangularNegro.svg'
import Playstore from '../../../img_test/Playstore.svg'
import Applestore from '../../../img_test/Applestore.svg'

const preloadedPopupImage = new Image()
preloadedPopupImage.src = VentanaEmergente

function CountdownModal({ onClose, onPreregister }) {
  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center bg-[#0b1020]/55 px-3 py-4 backdrop-blur-md sm:px-4">
      <div className="relative w-full max-w-[1280px] overflow-hidden rounded-[28px] border border-white/20 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-brand-red via-[#5864c7] to-brand-red" />

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white text-brand-charcoal shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition duration-200 hover:scale-105 sm:right-5 sm:top-5 sm:h-11 sm:w-11"
          aria-label="Cerrar ventana emergente"
        >
          <RxCross2 className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
        </button>

        <div className="grid gap-0 md:grid-cols-[1.08fr_0.92fr]">
          <div className="relative bg-[#f5f7ff] sm:px-6 sm:pt-14 md:min-h-[640px] md:px-8 md:py-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(88,100,199,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(205,46,76,0.08),transparent_30%)]" />

            <div className="relative flex h-full flex-col items-center md:items-start">
              <img
                className="absolute left-4 top-4 z-20 h-10 w-auto sm:h-12 md:left-0 md:top-0 md:h-14"
                src={Logo}
                alt=""
              />

              <img
                src={VentanaEmergente}
                alt="Promocion"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="abosulute md:relative z-10 mt-14 w-full max-w-[200px] object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,0.18)] sm:mt-16 sm:max-w-[520px] md:mt-10 md:max-w-[780px]"
              />

              <div className="relative z-20 mt-3 flex w-full flex-col items-center text-center md:absolute md:bottom-8 md:left-8 md:mt-0 md:items-start md:text-left">
                <h1 className="text-xl font-bold text-brand-blue sm:text-2xl md:text-[1.7rem]">
                  ¡Espéralo pronto!
                </h1>
                <h2 className="mt-1 text-lg font-secondary-italic text-brand-red/80 sm:text-xl">
                  Ago - 2026
                </h2>

                <div className="mt-3 flex items-center justify-center gap-2 sm:gap-3 md:justify-start">
                  <img className="h-12 w-auto sm:h-14 md:h-16" src={Playstore} alt="Google Play" />
                  <img className="h-12 w-auto sm:h-14 md:h-16" src={Applestore} alt="App Store" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-5 bg-gradient-to-br from-[#1c2140] via-[#2c3568] to-[#4f5fbf] px-6 py-8 text-white sm:px-8 sm:py-10 md:px-10 md:py-12">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
              Muy pronto
            </div>

            <div>
              <div className="space-y-3">
                <h2 className="font-secondary text-3xl leading-none sm:text-4xl md:text-[3.6rem]">
                  ¡Descubre Panamá
                  <span className="block text-[#ff8fa2]">como nunca</span>
                  <span className="block text-[#ff8fa2]">antes lo viste!</span>
                </h2>
              </div>

              <div className="mt-8 flex flex-col gap-3 justify-center sm:flex-row md:mt-12">
                <button
                  type="button"
                  onClick={onPreregister}
                  className="peer cursor-pointer rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-charcoal transition duration-200 hover:translate-y-[-3px] hover:bg-white/95"
                >
                  Regístrate
                </button>

                <p className="font-body text-md transition-all duration-300 text-white/85 peer-hover:text-white">
                  Y participa por una noche gratis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountdownModal
