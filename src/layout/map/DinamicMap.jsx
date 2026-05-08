import { Link } from 'react-router-dom';
import MapGenera from '../../assets/srcProvincias/Mpa.svg';
import LosSantos from '../../assets/srcProvincias/los_santos/los santos.svg';
import ChiriquiSvg from '../../assets/components/provincias/ChiriquiSvg.jsx';
import BocasDelToroSvg from '../../assets/components/provincias/BocasDelToroSvg.jsx';
import NgabeBugle from '../../assets/components/provincias/nbSvg.jsx';
import Cocle from '../../assets/srcProvincias/cocle/cocle.svg';
import Colon from '../../assets/srcProvincias/colon/colon.svg';
import GunaYala from '../../assets/srcProvincias/comarca_guna_yala/guna_yala.svg';
import Darien from '../../assets/srcProvincias/darien/darien.svg';
import Veraguas from "../../assets/srcProvincias/veraguas/Veraguas.svg";
import Herrera from '../../assets/srcProvincias/herrera/herrera.svg';

const provinces = [
    { src: LosSantos, alt: 'Los Santos', top: '68.87%', left: '39.90%', width: '11.71%' },
    { component: ChiriquiSvg, alt: 'Chiriqui', top: '30.90%', left: '0%', width: '25.66%' },
    { component: BocasDelToroSvg, alt: 'Bocas del Toro', to: '/provincias/bocas-del-toro#video', top: '0.24%', left: '1.27%', width: '11.80%' },
    { component: NgabeBugle, alt: 'Comarca Ngabe Bugle', top: '20.05%', left: '10.73%', width: '20.68%' },
    { src: Cocle, alt: 'Cocle', top: '26.18%', left: '38.54%', width: '12.20%' },
    { src: Colon, alt: 'Colon', top: '0%', left: '37.56%', width: '30.05%' },
    { src: GunaYala, alt: 'Guna Yala', top: '7.08%', left: '64.68%', width: '31.22%' },
    { src: Darien, alt: 'Darien', top: '23.58%', left: '78.54%', width: '21.46%' },
    { src: Veraguas, alt: 'Veraguas', top: '26%', left: '20.85%', width: '23.60%' },
    { src: Herrera, alt: 'Herrera', top: '58.50%', left: '29%', width: '21%' },
];

function Map() {
    return (
        <div className="mx-auto my-28 flex max-w-6xl flex-col items-center px-4 text-center md:my-40">
            <div className="w-full rounded-xl  md:p-12">
                {/* map */}
                
                <div className='relative mx-auto aspect-[1025/424] w-full max-w-[1025px] drop-shadow-[0_18px_45px_rgba(77,76,76,0.50)]'>
                    <img src={MapGenera} alt="Mapa de Panama" className='absolute inset-0 h-full w-full opacity-50'/>
                    {/* Provincias imagenes */}
                    {provinces.map((province) => (
                        province.to ? (
                            <Link
                                key={province.alt}
                                to={province.to}
                                className="absolute cursor-pointer transition duration-300 hover:scale-110 drop-shadow-[0_3px_6px_rgba(77,76,76,0.50)]"
                                style={{
                                    top: province.top,
                                    left: province.left,
                                    width: province.width,
                                }}
                            >
                                {province.component ? <province.component className="h-auto w-full" /> : <img src={province.src} alt={province.alt} className="h-auto w-full" />}
                            </Link>
                        ) : (
                            <div
                                key={province.alt}
                                className="absolute cursor-pointer transition duration-300 hover:scale-110 drop-shadow-[0_3px_6px_rgba(77,76,76,0.50)]"
                                style={{
                                    top: province.top,
                                    left: province.left,
                                    width: province.width,
                                }}
                            >
                                {province.component ? <province.component className="h-auto w-full" /> : <img src={province.src} alt={province.alt} className="h-auto w-full" />}
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Map
