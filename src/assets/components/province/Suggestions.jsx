function Suggestions({ provinceData }) {
    return (
        <div className="flex flex-col gap-5">
            <h1 className="font-main flex justify-center text-3xl font-bold text-brand-blue md:pb-4 md:text-4xl">Sugerencias turisticas</h1>
            <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-6">
                {provinceData.lugaresDestacados.map((lugar) => {
                    const isVideo = lugar.tipo === 'video';

                    return (
                        <article
                            key={lugar.id}
                            className="flex w-full max-w-md flex-col overflow-hidden rounded-xl bg-brand-white text-left shadow-[0_14px_35px_rgba(77,76,76,0.14)] transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(73,86,162,0.22)] md:w-[355px]"
                        >
                            <div className="group relative aspect-[16/9] w-full overflow-hidden bg-brand-soft">
                                {isVideo ? (
                                    <video
                                        src={lugar.imagen}
                                        className="h-[116%] w-full object-cover object-top"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        preload="metadata"
                                    />
                                ) : (
                                    <img
                                        src={lugar.imagen}
                                        alt={lugar.nombre}
                                        className="h-full w-full object-cover"
                                    />
                                )}
                                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 px-4 transition duration-300 group-hover:bg-black/50">
                                    <span className="font-accent text-center text-4xl text-brand-white opacity-0 drop-shadow-[0_3px_10px_rgba(0,0,0,0.55)] transition duration-300 group-hover:opacity-100">
                                        {lugar.nombre}
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col p-5">
                                <span className="font-secondary-italic text-sm text-brand-red">
                                    {provinceData.nombre}
                                </span>

                                <h3 className="font-main mt-2 text-xl font-bold text-brand-charcoal">
                                    {lugar.nombre}
                                </h3>

                                {lugar.descripcion && (
                                    <p className="font-body mt-3 line-clamp-3 text-sm leading-6 text-brand-charcoal/95">
                                        {lugar.descripcion}
                                    </p>
                                )}

                                <p className="font-secondary mt-auto pt-4 text-sm text-brand-blue">
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
