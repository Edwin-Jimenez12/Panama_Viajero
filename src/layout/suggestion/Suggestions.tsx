import { useMemo } from 'react';
import { provincias as colonData } from '../../data/america/panama/colon/ColonData.js';
import { lugaresPanama } from '../../data/america/panama/panama/places/place.js';

const DEFAULT_IMAGE = 'https://tripealotuyo.com/wp-content/uploads/2025/06/Panama%CC%81-%E2%80%93-Foto-Home-Provincia%E2%80%93-Autoridad-de-Turismo-de-Panama%CC%81-%E2%80%93-Tripea-Lo-Tuyo.jpg-Custom-600x338.jpg';

function getRandomItems(items, limit) {
    return [...items]
        .sort(() => Math.random() - 0.5)
        .slice(0, limit);
}

function AleatorySuggestions() {
    const suggestions = useMemo(() => {
        const colon = colonData[0];

        const colonPlaces = [
            ...colon.lugaresDestacados,
            ...colon.restoDeLugares,
        ].map((place) => ({
            ...place,
            provincia: colon.nombre,
        }));

        const panamaPlaces = lugaresPanama.map((place) => ({
            ...place,
            provincia: 'Panama',
        }));

        return getRandomItems([...colonPlaces, ...panamaPlaces], 6);
    }, []);

    return (
        <section className="mx-auto w-full max-w-6xl px-4 py-16">
            <div className="mb-8 text-center">
                <h2 className="font-invisible text-3xl font-bold text-brand-blue md:text-5xl text-left">
                    Sugerencias para explorar
                </h2>
                <p className="ml-2 mt-3 max-w-2xl text-brand-charcoal/90 md:text-lg text-left">
                    Lugares recomendados de Panama para descubrir historia, naturaleza, cultura y experiencias urbanas.
                </p>
            </div>

            <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
                {suggestions.map((place) => (
                    <article
                        key={`${place.provincia}-${place.id}`}
                        className="flex w-full max-w-md flex-col overflow-hidden rounded-xl bg-brand-white shadow-[0_14px_35px_rgba(77,76,76,0.14)] transition 
                        hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(73,86,162,0.22)] md:w-[355px]"
                    >
                        <div className="aspect-[16/9] w-full overflow-hidden bg-brand-soft">
                            <img
                                src={place.imagen || DEFAULT_IMAGE}
                                alt={place.nombre}
                                className="h-full w-full cursor-pointer object-cover transition duration-300 hover:scale-105"
                            />
                        </div>

                        <div className="flex flex-1 flex-col p-5">
                            <span className="text-sm font-semibold text-brand-red">
                                {place.provincia}
                            </span>

                            <h3 className="mt-2 text-xl font-bold text-brand-charcoal">
                                {place.nombre}
                            </h3>

                            <p className="mt-3 line-clamp-3 text-sm leading-6 text-brand-charcoal/95">
                                {place.descripcion}
                            </p>

                            <p className="mt-auto pt-4 text-sm font-semibold text-brand-blue">
                                {place.ubicacion}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default AleatorySuggestions;
