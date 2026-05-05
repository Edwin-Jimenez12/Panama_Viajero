import { useState } from 'react'
import Jugador from '../../img_test/tarjeta-jugador-prueba.png'

function AnimateProvince() {
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

    return (
        <div
            className="transition duration-300"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{ perspective: '750px' }}
        >
            <img
                src={Jugador}
                alt="Tarjeta de jugadores"
                className="w-full rounded-xl object-cover shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition-transform duration-150"
                style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.03)`,
                }}
            />
        </div>
    )
}

export default AnimateProvince
