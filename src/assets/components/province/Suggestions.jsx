function Suggestions({ provinceData, navigate, basePath }) {
    return (
        <div className="flex flex-col gap-5">
            <h1 className="flex justify-center font-invisible text-3xl font-bold text-brand-blue md:pb-4 md:text-4xl">Sugerencias turisticas</h1>
            <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-4 md:gap-8">
                {provinceData.lugaresDestacados.map((lugar) => {
                    const isVideo = lugar.tipo === 'video';

                    return (
                        <a
                            key={lugar.id}
                            className="w-[195px] transition hover:scale-105 md:w-[350px]"
                            onClick={() => navigate(`${basePath}/places/${lugar.id}`)}
                        >
                            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg shadow-[0_12px_30px_rgba(77,76,76,0.22)]">
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
                                        className="h-full w-full cursor-pointer object-cover"
                                    />
                                )}
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}

export default Suggestions;
