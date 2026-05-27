const lineaLosSantosSvg = new URL('../../srcProvincias/los_santos/LineaLosSantos.svg', import.meta.url).href;

function LineaLosSantosSvg({ className = '' }) {
    return <img src={lineaLosSantosSvg} alt="" aria-hidden="true" className={className} />;
}

export default LineaLosSantosSvg;
