import { Link } from 'react-router-dom';
import MapGenera from '../../assets/srcProvincias/Mpa.svg';
import LosSantos from '../../assets/components/provincias/LosSantos.jsx';
import ChiriquiSvg from '../../assets/components/provincias/ChiriquiSvg.jsx';
import BocasDelToroSvg from '../../assets/components/provincias/BocasDelToroSvg.jsx';
import NgabeBugle from '../../assets/components/provincias/nbSvg.jsx';
import Cocle from '../../assets/components/provincias/CocleSvg.jsx';
import Colon from '../../assets/components/provincias/Colon.jsx';
import GunaYala from '../../assets/components/provincias/GunaYalaSvg.jsx';
import Darien from '../../assets/components/provincias/Darien.jsx';
import Veraguas from "../../assets/components/provincias/VeraguasSvg.jsx";
import Herrera from '../../assets/components/provincias/HerreraSvg.jsx';
import Panama from '../../assets/components/provincias/PanamaSvg.jsx';

const provinces = [
    { component: LosSantos, alt: 'Los Santos', top: '68.87%', left: '39.90%', width: '11.71%' },
    { component: ChiriquiSvg, alt: 'Chiriqui', top: '30.90%', left: '0%', width: '25.66%' },
    { component: BocasDelToroSvg, alt: 'Bocas del Toro', to: '/provincias/bocas-del-toro#video', top: '0.24%', left: '1.27%', width: '11.80%' },
    { component: NgabeBugle, alt: 'Comarca Ngabe Bugle', top: '20.05%', left: '10.73%', width: '20.68%' },
    { component: Cocle, alt: 'Cocle', top: '12%', left: '34.75%', width: '21%' },
    { component: Colon, alt: 'Colon', top: '0%', left: '37.56%', width: '30.05%' },
    { component: GunaYala, alt: 'Guna Yala', top: '7.08%', left: '64.68%', width: '31.22%' },
    { component: Darien, alt: 'Darien', top: '23.58%', left: '78.54%', width: '21.46%' },
    { component: Veraguas, alt: 'Veraguas', top: '26%', left: '20.85%', width: '23.60%' },
    { component: Herrera, alt: 'Herrera', top: '58.50%', left: '29%', width: '21%' },
    { component: Panama, alt: 'Panama', top: '-6.4%', left: '46.10%', width: '41.20%' },
];

function Map() {
    return (
        <div className="mx-auto my-28 flex max-w-6xl flex-col items-center px-4 text-center md:my-10">
            <div className="w-full rounded-xl  md:p-12">
                {/* map */}
                <div className='flex flex-col'>
                    <label className='font-invisible text-5xl text-brand-blue'>Panamá</label>
                    <label className='font-invisible font-bold' >Un Pais de union</label>
                </div>
                <div className='relative mx-auto aspect-[1025/424] w-full max-w-[1025px] drop-shadow-[0_18px_45px_rgba(77,76,76,0.50)] mb-[-25px]'>
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
            <label className='text-brand-red font-invisible mt-10 md:mt-0 text-xs md:text-lg'>Elige la provincia a visitar</label>
        </div>
    )
}

export default Map
