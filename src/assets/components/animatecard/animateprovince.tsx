import { useState } from 'react'
import PV from '../../img_test/logoCircular.svg'


const imageMaps = {
    'bocas-del-toro': '/maps/provinces/bocas-del-toro.jpeg',
    'chiriqui': '/maps/provinces/chiriqui.jpg',
    'cocle': '/maps/provinces/cocle.png',
    'colon': '/maps/provinces/colon.jpeg',
    'guna-yala': '/maps/provinces/comarca-guna-yala.jpg',
    'darien': '/maps/provinces/darien.jpg',
    'veraguas': '/maps/provinces/veraguas.png',
    'herrera': '/maps/provinces/herrera.png',
    'panama': '/maps/provinces/panama.jpg',
    'panama-oeste': '/maps/provinces/panama-oeste.png',
    'los-santos': '/maps/provinces/los-santos.jpeg',
    'comarca-guna-yala': '/maps/provinces/comarca-guna-yala.jpg',
    'Panama-viajero': PV,
}

function AnimateProvince({ provinceData }) {
    const [rotation, setRotation] = useState({ x: 0, y: 0 })

    const onMouseMove = (event) => {
        const svgElement = event.currentTarget.ownerSVGElement || event.currentTarget
        const rect = svgElement.getBoundingClientRect()
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

    const currentImage = imageMaps[provinceData.id]

    
return (
        <div
            className="flex justify-center items-center overflow-visible py-10"
            style={{ perspective: '1000px' }}
        >
            {currentImage ? (
                <img 
                    src={currentImage}
                    alt={`Mapa de ${provinceData.nombre}`}
                    onMouseMove={onMouseMove}
                    onMouseLeave={onMouseLeave}
                    className="aspect-[4/3] rounded-xl h-full w-full object-cover transition-transform duration-150 ease-out 
                    drop-shadow-[0_25px_35px_rgba(0,0,0,0.4)]"
                    style={{
                        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.05)`,
                        transformStyle: 'preserve-3d'
                    }}
                />
            ) : (
                <p className="text-brand-white">Imagen no encontrada</p>
            )}
        </div>
    )
}

export default AnimateProvince
