import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { provincias as bocasDelToroData } from '../../data/panama/BocasDelToro/BocasDelToro.js';
import { provincias as chiriquiData } from '../../data/panama/chiriqui/ChiriquiData.js';
import { provincias as cocleData } from '../../data/panama/cocle/CocleData.js';
import { provincias as colonData } from '../../data/panama/colon/ColonData.js';
import { provincias as darienData } from '../../data/panama/darien/DarienData.js';
import { provincias as herreraData } from '../../data/panama/herrera/HerreraData.js';
import { provincias as losSantosData } from '../../data/panama/lossantos/LosSantosData.js';
import { provincias as panamaData } from '../../data/panama/panama/PanamaData.js';
import { provincias as veraguasData } from '../../data/panama/veraguas/VeraguasData.js';
import { provincias as gunaYalaData } from '../../data/panama/comarca_guna_yala/GunaYalaData.js';

const provinceRoutes = [
    { data: bocasDelToroData[0], path: '/provincias/bocas-del-toro' },
    { data: chiriquiData[0], path: '/provincias/chiriqui' },
    { data: cocleData[0], path: '/provincias/cocle' },
    { data: colonData[0], path: '/provincias/colon' },
    { data: darienData[0], path: '/provincias/darien' },
    { data: herreraData[0], path: '/provincias/herrera' },
    { data: losSantosData[0], path: '/provincias/los-santos' },
    { data: panamaData[0], path: '/provincias/panama' },
    { data: veraguasData[0], path: '/provincias/veraguas' },
    { data: gunaYalaData[0], path: '/provincias/comarca-guna-yala' },
];

function getRandomItems(items, limit) {
    return [...items]
        .sort(() => Math.random() - 0.5)
        .slice(0, limit);
}

function getBannerVideo(province) {
    const banner = province.banner || {};
    return {
        src: banner.src,
        alt: banner.alt || province.nombre,
    };
}

function AleatorySuggestions() {
    const navigate = useNavigate();
    
    const suggestions = useMemo(() => {
        const provincesWithVideoBanner = provinceRoutes.filter(({ data }) => {
            const banner = data.banner || {};
            return banner.tipo === 'video' && banner.src;
        });

        return getRandomItems(provincesWithVideoBanner, 3).map((province) => ({
            ...province,
            media: getBannerVideo(province.data),
        }));
    }, []);

    return (
        <section className="mx-auto w-full max-w-6xl px-4 py-16">
            <div className="mb-8 text-center">
                <h2 className="font-main text-3xl text-brand-blue md:text-5xl text-left">
                    Sugerencias para explorar
                </h2>
                <p className="font-body-italic ml-2 mt-3 max-w-2xl text-brand-charcoal/90 md:text-lg text-left">
                    Provincias recomendadas para descubrir historia, naturaleza, cultura y experiencias únicas.
                </p>
            </div>

            <div className="max-w-6xl mx-auto flex  justify-center gap-8">
                {suggestions.map(({ data: province, path, media }) => (
                    <button
                        key={province.id}
                        type="button"
                        aria-label={`Explorar ${province.nombre}`}
                        onClick={() => navigate(`${path}#video`)}
                        className="group flex flex-col items-center w-full max-w-md cursor-pointer md:w-[355px]"
                    >
                        {/* Video Container */}
                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-brand-soft 
                            transition-all duration-300 group-hover:scale-105
                            group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.20)]"
                        >
                            <video
                                src={media.src}
                                className="h-[116%] w-full object-cover object-top"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                            />
                            {/* Overlay discret que se aclara en hover */}
                            <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/0" />
                        </div>
                        {/* Province Name Below */}
                        <div className="mt-4 overflow-hidden w-full text-center">
                            <span className="inline-block font-accent text-4xl font-bold text-brand-blue
                                transform translate-y-4 opacity-0 transition-all duration-300 ease-out
                                group-hover:translate-y-0 group-hover:opacity-100"
                            >
                                {province.nombre}
                            </span>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
}

export default AleatorySuggestions;