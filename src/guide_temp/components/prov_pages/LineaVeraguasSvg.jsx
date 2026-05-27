const lineaVeraguasSvg = new URL('../../srcProvincias/veraguas/LineaVeraguas.svg', import.meta.url).href;

function LineaVeraguasSvg({ className = '' }) {
    return <img src={lineaVeraguasSvg} alt="" aria-hidden="true" className={className} />;
}

export default LineaVeraguasSvg;
