import { useNavigate } from 'react-router-dom';
import Menu from '../../../../assets/components/menu/Menu.jsx';
import Banner from '../../../../assets/img_test/colonBanner.png';
import BottomBanner from '../../../../assets/components/bottombanner/Bottombanner.jsx';
import AnimateProvince from '../../../../assets/components/animatecard/animateprovince.tsx';
import { provincias } from './ColonData.js';

function Colon() {
    const navigate = useNavigate();
    const colon = provincias[0];

    return (
        <div className="relative">
            <div className="fixed top-0 z-30 w-full">
                <Menu
                    onLogoClick={() => navigate('/')}
                    onMapClick={() => navigate('/#map')}
                    onPreregisterClick={() => navigate('/#preregister')}
                />
            </div>

            <div className="relative z-0">
                <img src={Banner} alt="Banner colon" className="h-screen w-full object-cover" />
                <div className="absolute inset-0 z-10 flex items-center px-4 ">
                    <div className="max-w-md rounded-xl bg-white/80 p-8 shadow-lg shadow-black/50 md:ml-15">
                        <h1 className="text-5xl font-bold text-black md:pb-4 md:text-6xl">{colon.nombre}</h1>
                        <p className="text-lg">{colon.descripcionCorta}</p>
                    </div>
                </div>
            </div>

            {/* provincia y reseña */}
            <section className="mx-auto flex w-full max-w-6xl mx-auto flex-col gap-10 px-4 py-16 md:flex-row md:justify-between ">
                <div className="w-full md:w-1/2 ">
                    <AnimateProvince />
                </div>

                <div className="flex w-full flex-col justify-center md:w-1/2">
                    <h1 className="text-3xl font-bold">Reseña histórica</h1>
                    <p className="mt-4 leading-7 text-gray-700">{colon.resena}</p>
                </div>
            </section>

            {/* Actividades */}
            <div className='mx-auto flex w-full max-w-6xl flex-col px-4 py-16'>
                <h1 className='text-3xl font-bold text-black md:pb-4 md:text-6xl'>Actividades</h1>
                <div className='mt-6 overflow-hidden py-5 [mask-image:linear-gradient(to_right,transparent,black_3%,black_90%,transparent)]'>
                    <div className='flex w-max animate-marquee-right hover:[animation-play-state:paused] '>
                        {[0, 1].map((grupo) => (
                            <div
                                key={grupo}
                                className='flex shrink-0 gap-3 pr-3'
                                aria-hidden={grupo === 1}
                            >
                                {colon.actividades.map((actividad) => (
                                    <button
                                        key={`${grupo}-${actividad}`}
                                        type='button'
                                        className='whitespace-nowrap rounded-full border border-black/20 bg-white px-5 py-2 text-sm font-semibold text-black shadow-sm transition hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'
                                    >
                                        {actividad}
                                    </button>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* LUGARES DESTACADOS */}
            <div className='flex flex-col gap-5'>
                <h1 className='text-3xl font-bold text-black md:pb-4 md:text-4xl flex justify-center'>Mas destacados</h1>
                <div className='flex flex-wrap justify-center gap-4 md:gap-8 max-w-6xl mx-auto  '>
                    {colon.lugaresDestacados.map((lugar) =>(
                        <a key={lugar.id} className='hover:scale-105 transition'>
                            <img src={lugar.imagen}
                            alt={lugar.nombre} 
                            className='w-[150px] md:w-[350px] shadow-black shadow cursor-pointer' 
                            onclick={() => navigate('../colon/places/'+lugar.id)} /* Esto de aun necesita configurarse redieccion a informacion de lugar turistico*/
                            />
                            
                        </a>
                    ))}
                </div>
            </div>
            {/* Mapa */}
            <section className="mx-auto w-full max-w-6xl px-4 py-16 my-10">
                <iframe
                    src={colon.ubicacionProvincia.src}
                    title={`Mapa de ${colon.nombre}`}
                    className="h-[300px] w-full rounded-xl border-0 shadow-[0_0_15px_rgba(0,0,0,0.60)]"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </section>
            
            <BottomBanner onLogoClick={() => navigate('/')} />
        </div>
    );
}

export default Colon;
