import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

function Map() {
    return (
        <div className="mx-auto my-28 flex max-w-6xl flex-col items-center px-4 text-center md:my-40">
            <div className="w-full rounded-xl bg-brand-white p-8 shadow-[0_18px_45px_rgba(77,76,76,0.16)] md:p-12">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-brand-white">
                    <MapPin size={28} />
                </div>

                <h1 className="mt-6 font-invisible text-3xl font-bold text-brand-blue md:text-5xl">
                    Provincias por descubrir
                </h1>

                <p className="mx-auto mt-4 max-w-2xl leading-7 text-brand-charcoal/80 md:text-lg">
                    Explora rutas, cultura y puntos turisticos organizados por provincia.
                    Esta seccion mantendra el mapa como punto central de navegacion.
                </p>

                <Link
                    to="/provincias/colon"
                    className="mt-8 inline-flex rounded-full bg-brand-red px-6 py-3 font-semibold text-brand-white shadow-[0_12px_25px_rgba(205,46,76,0.28)] transition hover:bg-brand-blue"
                >
                    Ver Colon
                </Link>
            </div>
        </div>
    )
}

export default Map
