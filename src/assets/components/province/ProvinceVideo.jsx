

function ProvinceVideo({ provinceData, videoSrc }) {
    return (
        <section id="video">
            <div className="relative z-0">
                <video
                    src={videoSrc}
                    className="h-screen w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                />
                
                <div className="absolute inset-0 z-10 flex items-start md:items-center bg-gradient-to-r from-brand-charcoal/55 via-brand-charcoal/20 to-transparent px-4">
                    <div className="max-w-md rounded-xl p-8 shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-sm mt-24 md:mt-0 md:ml-15">
                        <h1 className="font-invisible text-5xl font-bold text-[#3C6E1E] md:pb-4 md:text-6xl brightness-150">
                            {provinceData.nombre}
                        </h1>
                        <p className="text-lg leading-7 text-brand-white/90">
                            {provinceData.descripcionCorta}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProvinceVideo;