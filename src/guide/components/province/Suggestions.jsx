import SmartVideo from '../video/SmartVideo.jsx';

function Suggestions({ provinceData }) {
    const fallbackPoster = provinceData.banner?.poster
        || provinceData.imagenProvincia?.src
        || provinceData.lugaresDestacados.find((item) => item.tipo !== 'video')?.imagen;

    return (
        <div className="flex flex-col gap-5">
            <h1 className="font-main flex justify-center text-3xl font-bold text-brand-white/95 md:pb-4 md:text-4xl">Lugares Turisticos</h1>
            <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-6">
                {provinceData.lugaresDestacados.map((lugar) => {
                    const isVideo = lugar.tipo === 'video';

                    return (
                        <article
                            key={lugar.id}
                            className="flex w-full max-w-md flex-col overflow-hidden rounded-xl bg-brand-white/20 text-left shadow-[0_14px_35px_rgba(77,76,76,0.14)] 
                            transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(73,86,162,0.22)] md:w-[355px]"
                        >
                            <div className="group relative aspect-[16/9] w-full overflow-hidden bg-brand-soft">
                                {isVideo ? (
                                    <SmartVideo
                                        src={lugar.imagen}
                                        className="h-[116%] w-full object-cover object-top"
                                        autoPlay
                                        poster={lugar.poster || fallbackPoster}
                                        preload="none"
                                    />
                                ) : (
                                    <img
                                        src={lugar.imagen}
                                        alt={lugar.nombre}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover"
                                    />
                                )}
                                <div className="absolute inset-0 bg-black/8 transition-all duration-300 group-hover:bg-black/0" />
                            </div>
                            <div className="flex flex-1 flex-col p-5">
                                <h3
                                    className="font-secondary-italic mt-2 text-2xl text-brand-red "
                                    style={{ /* textShadow: '0 0 6px rgba(171, 5, 5, 0.9)', */ WebkitTextStroke: '0.3px black' }}
                                    
                                >
                                    {lugar.nombre}
                                </h3>

                                {lugar.descripcion && (
                                    <p className="font-body mt-3 text-sm leading-6 text-brand-white/95">
                                        {lugar.descripcion}
                                    </p>
                                )}

                                <p className="font-secondary-italic mt-auto pt-4 text-sm text-brand-white/95">
                                    {lugar.ubicacion}
                                </p>
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}

export default Suggestions;
