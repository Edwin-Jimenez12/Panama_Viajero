import { Link } from 'react-router-dom';

function Map() {
    return(
        <div className="justify-center items-center flex flex-col mt-70 mb-70">
            <h1>Seccion del mapa</h1>
            <h3>Valor relativos, posiciones fijas, cada imagen estará en png o svg, escalables</h3>

            <Link
                to="/provincias/colon"
                className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
                Ver Colón
            </Link>
        </div>
    )
}

export default Map
