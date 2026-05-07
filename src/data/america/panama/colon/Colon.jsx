import { useNavigate } from 'react-router-dom';
import Menu from '../../../../assets/components/menu/Menu.jsx';
import ColonVideo from '../../../../assets/srcProvincias/bocas_del_toto/Playa-banner-1080p.mp4';
import BottomBanner from '../../../../assets/components/bottombanner/Bottombanner.jsx';
import AnimateProvince from '../../../../assets/components/animatecard/animateprovince.tsx';
import { provincias } from './ColonData.js';

function Colon() {
    const navigate = useNavigate();
    const colon = provincias[0];
    return (
        <div className="relative bg-brand-soft text-brand-charcoal">
            <div className="fixed top-0 z-30 w-full">
                <Menu
                    onLogoClick={() => navigate('/#home')}
                    onUsClick={() => navigate('/#us')}
                    onMapClick={() => navigate('/#map')}
                    onSuggestionsClick={() => navigate('/#suggestions')}
                    onPreregisterClick={() => navigate('/#preregister')}
                />
            </div>

            <div className="relative z-0">
                <video
                    src={ColonVideo}
                    className="h-screen w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                />
                
                <div className="absolute mt-5 inset-0 z-10 flex items-start md:items-center bg-gradient-to-r from-brand-charcoal/55 via-brand-charcoal/20 to-transparent px-4">
                    <div className="max-w-md rounded-xl bg-white/5 p-8 shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-sm mt-24 md:mt-0 md:ml-15">
                        <h1 className="font-invisible text-5xl font-bold text-[#00CD9B] md:pb-4 md:text-6xl brightness-150">
                            {colon.nombre}
                        </h1>
                        <p className="text-lg leading-7 text-brand-white/90">
                            {colon.descripcionCorta}
                        </p>
                    </div>
                </div>
            </div>

            {/* provincia y resena */}
            <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 md:gap-15 px-4 py-16 md:flex-row md:justify-between">
                <div className="w-full md:w-1/2">
                    <AnimateProvince />
                </div>

                <div className="flex w-full flex-col justify-center md:w-1/2">
                    <h1 className="font-invisible text-3xl md:text-4xl font-bold text-brand-blue">Reseña histórica</h1>
                    <p className="mt-4 leading-7 text-brand-charcoal/80 text-lg">{colon.resena}</p>
                </div>
            </section>

            {/* Actividades */}
            <div className="mx-auto flex w-full max-w-6xl flex-col px-4 py-16">
                <h1 className="font-invisible text-3xl font-bold text-brand-blue md:text-4xl">Actividades</h1>
                <div className="overflow-hidden py-5 md:mt-2 [mask-image:linear-gradient(to_right,transparent,black_3%,black_90%,transparent)]">
                    <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused]">
                        {[0, 1].map((grupo) => (
                            <div
                                key={grupo}
                                className="flex shrink-0 gap-3 pr-3"
                                aria-hidden={grupo === 1}
                            >
                                {colon.actividades.map((actividad) => (
                                    <button
                                        key={`${grupo}-${actividad}`}
                                        type="button"
                                        className="whitespace-nowrap rounded-full border border-brand-blue/20 bg-brand-white px-5 py-2 text-sm font-semibold text-brand-charcoal shadow-sm transition hover:bg-brand-blue hover:text-brand-white focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                                    >
                                        {actividad}
                                    </button>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* sugerencias */}
            <div className="flex flex-col gap-5">
                <h1 className="flex justify-center font-invisible text-3xl font-bold text-brand-blue md:pb-4 md:text-4xl">Sugerencias turisticas</h1>
                <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-4 md:gap-8">
                    {colon.lugaresDestacados.map((lugar) => (
                        <a key={lugar.id} className="w-[195px] transition hover:scale-105 md:w-[350px]">
                            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg shadow-[0_12px_30px_rgba(77,76,76,0.22)]">
                            <img
                                src={lugar.imagen}
                                alt={lugar.nombre}
                                className="h-full w-full cursor-pointer object-cover"
                                onClick={() => navigate('../colon/places/' + lugar.id)}
                            />
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Mapa */}
            <section className="mx-auto my-10 w-full max-w-6xl px-4 py-16">
                <iframe
                    src={colon.ubicacionProvincia.src}
                    title={`Mapa de ${colon.nombre}`}
                    className="h-[300px] w-full rounded-xl border-0 shadow-[0_18px_45px_rgba(77,76,76,0.24)]"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </section>

            <BottomBanner onLogoClick={() => navigate('/#home')} />
        </div>
    );
}

export default Colon;
