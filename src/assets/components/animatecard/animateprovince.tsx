import { useState } from 'react'
import BocasDelToroSvg from '../prov_pages/BocasDelToroSvg.jsx'
import ChiriquiSvg from '../prov_pages/ChiriquiSvg.jsx'
import CocleSvg from '../prov_pages/CocleSvg.jsx'
import Colon from '../prov_pages/Colon.jsx'
import GunaYalaSvg from '../prov_pages/GunaYalaSvg.jsx'
import Darien from '../prov_pages/Darien.jsx'
import VeraguasSvg from '../prov_pages/VeraguasSvg.jsx'
import HerreraSvg from '../prov_pages/HerreraSvg.jsx'
import PanamaSvg from '../prov_pages/PanamaSvg.jsx'
import LosSantos from '../prov_pages/LosSantos.jsx'
import NgabeBugle from '../prov_pages/nbSvg.jsx'

const svgComponents = {
    'bocas-del-toro': BocasDelToroSvg,
    'chiriqui': ChiriquiSvg,
    'cocle': CocleSvg,
    'colon': Colon,
    'guna-yala': GunaYalaSvg,
    'darien': Darien,
    'veraguas': VeraguasSvg,
    'herrera': HerreraSvg,
    'panama': PanamaSvg,
    'los-santos': LosSantos,
    'comarca-ngabe-bugle': NgabeBugle,
    'comarca-guna-yala': GunaYalaSvg, // assuming same as guna-yala
}

function AnimateProvince({ provinceData }) {
    const [rotation, setRotation] = useState({ x: 0, y: 0 })

    const onMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        const px = x / rect.width
        const py = y / rect.height

        setRotation({
            x: (0.5 - py) * 25,
            y: (px - 0.5) * 25,
        })
    }

    const onMouseLeave = () => {
        setRotation({ x: 0, y: 0 })
    }

    const SvgComponent = svgComponents[provinceData.id]

    if (!SvgComponent) {
        return <div>SVG no encontrado para {provinceData.id}</div>
    }

    return (
        <div
            className="transition duration-300"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{ perspective: '750px' }}
        >
            <SvgComponent
                className="w-full object-contain drop-shadow-[0_18px_25px_rgba(0,0,0,0.35)] transition-transform duration-150"
                style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.03)`,
                }}
            />
        </div>
    )
}

export default AnimateProvince
