import { useMemo, useState } from 'react'
import { FiChevronRight, FiCoffee, FiMapPin, FiHome } from 'react-icons/fi'
import hoteles from './hoteles.js'
import restaurantes from './restaurantes.js'

function HospedajeYComida({ fallbackImage = '' }) {
  const [activeTab, setActiveTab] = useState('hoteles')

  const items = useMemo(() => {
    return activeTab === 'hoteles' ? hoteles : restaurantes
  }, [activeTab])

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-12">
      <div className="overflow-hidden rounded-[28px] border border-[#4D4C4C]/10 bg-[#FFFFFF]/92 shadow-[0_20px_55px_rgba(77,76,76,0.12)] backdrop-blur-sm">
        <div className="border-b border-[#4D4C4C]/10 px-6 py-5 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4956A2]">
            Hospedaje y comida
          </p>
          <h2 className="mt-2 font-secondary-italic text-3xl text-[#4D4C4C] sm:text-5xl">
            ¿Dónde hospedarte y comer?
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setActiveTab('hoteles')}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition cursor-pointer ${
                activeTab === 'hoteles'
                  ? 'bg-[#4956A2] text-white shadow-[0_10px_24px_rgba(73,86,162,0.24)]'
                  : 'bg-[#F1F1F1] text-[#4D4C4C] hover:bg-[#E8E8E8]'
              }`}
            >
              <FiHome className="h-4 w-4" />
              Alojamientos
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('restaurantes')}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition cursor-pointer ${
                activeTab === 'restaurantes'
                  ? 'bg-[#4956A2] text-white shadow-[0_10px_24px_rgba(73,86,162,0.24)]'
                  : 'bg-[#F1F1F1] text-[#4D4C4C] hover:bg-[#E8E8E8]'
              }`}
            >
              <FiCoffee className="h-4 w-4" />
              Restaurantes
            </button>
          </div>
        </div>

        <div className="px-4 py-5 sm:px-6 sm:py-6">
          <div className="grid gap-4 lg:grid-cols-3">
            {items.map((item, index) => {
              const accent = index % 3 === 0 ? '#4956A2' : index % 3 === 1 ? '#CD2E4C' : '#4D4C4C'
              const imageSrc = item.imagen || fallbackImage

              return (
                <article
                  key={item.nombre}
                  className="grid overflow-hidden rounded-[24px] border border-[#4D4C4C]/10 bg-[#FFFFFF] shadow-[0_12px_30px_rgba(77,76,76,0.08)] md:grid-cols-[0.95fr_1.05fr]"
                >
                  <div className="relative min-h-[180px] overflow-hidden">
                    <img
                      src={imageSrc}
                      alt={item.nombre}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                  </div>

                  <div className="flex flex-col justify-between p-4 sm:p-5">
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-secondary text-xl leading-tight text-[#4D4C4C]">
                            {item.nombre}
                          </h3>
                          <p className="mt-1 text-sm font-medium text-[#4D4C4C]/70">
                            {item.tipo}
                          </p>
                        </div>

                      </div>

                      <div className="mt-4 space-y-2 text-sm text-[#4D4C4C]/78">
                        <p>{item.precio}</p>
                        <p className="flex items-center gap-2">
                          <FiMapPin className="h-4 w-4 shrink-0" />
                          <span>{item.ubicacion}</span>
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#4956A2] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-[1px] hover:bg-[#3f4a8d]"
                    >
                      Ver detalles
                      <FiChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HospedajeYComida
