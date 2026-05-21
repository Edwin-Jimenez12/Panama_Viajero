import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import SmartVideo from '../video/SmartVideo.jsx';
import { provinceMedia } from '../../../data/panama/provinceMedia.js';

function getRandomItems(items, limit) {
    return [...items]
        .sort(() => Math.random() - 0.5)
        .slice(0, limit);
}

function AleatorySuggestions() {
    const navigate = useNavigate();
    const suggestions = useMemo(() => {
        const provincesWithVideoBanner = provinceMedia.filter((province) => province.banner);
        return getRandomItems(provincesWithVideoBanner, 3);
    }, []);

    return (
        <section className="mx-auto w-full max-w-6xl px-4 py-0">
            <div className="mb-8 flex flex-col items-end">
                <h2 className="font-main text-2xl text-brand-blue md:text-5xl">
                    Otras provincias
                </h2>
                <p className="font-secondary-italic text-right  mt-3 max-w-3xl text-brand-charcoal/90 md:text-lg">
                    Más allá del horizonte hay un lugar esperando cambiar tu forma de ver el mundo.
                </p>
            </div>

            <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 ">
                {suggestions.map((province) => (
                    <button
                        key={province.id}
                        type="button"
                        aria-label={`Explorar ${province.nombre}`}
                        onClick={() => navigate(`${province.path}#video`)}
                        className="group flex w-full max-w-md cursor-pointer flex-col items-center md:w-[355px]"
                    >
                        <div
                            className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-brand-soft
                            transition-all duration-300 group-hover:scale-105
                            group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.20)]"
                        >
                            <SmartVideo
                                src={province.banner}
                                className="h-[116%] w-full object-cover object-top"
                                autoPlay
                                poster={province.poster}
                                preload="none"
                            />
                            <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/0" />
                        </div>
                        <div className="mt-4 w-full overflow-hidden text-center">
                            <span
                                className="inline-block font-accent text-4xl font-bold text-brand-blue
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
