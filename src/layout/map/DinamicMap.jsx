import { Link } from 'react-router-dom';
import MapGenera from '../../assets/srcProvincias/Mpa.svg';
import LosSantos from '../../assets/srcProvincias/los_santos/los santos.svg';
import Chiriqui from '../../assets/srcProvincias/chiriqui/chiriqui.svg';
import BocasDelToro from '../../assets/srcProvincias/bocas_del_toto/bocas del toro.svg';
import NgabeBugle from '../../assets/srcProvincias/comarca_ngabe_bugle/comarca_ngabe_bugle.svg';
import Cocle from '../../assets/srcProvincias/cocle/cocle.svg';
import Colon from '../../assets/srcProvincias/colon/colon.svg';
import GunaYala from '../../assets/srcProvincias/comarca_guna_yala/guna_yala.svg';
import Darien from '../../assets/srcProvincias/darien/darien.svg';

function Map() {
    return (
        <div className="mx-auto my-28 flex max-w-6xl flex-col items-center px-4 text-center md:my-40">
            <div className="w-full rounded-xl  md:p-12">
                {/* map */}
                
                <div className='relative drop-shadow-[0_18px_45px_rgba(77,76,76,0.50)]'>
                    <img src={MapGenera} alt="" className='opacity-50'/>
                    {/* Provincias imagenes */}
                    <img src={LosSantos} alt="" className='absolute top-[292px] left-[409px] w-[120px] h-auto cursor-pointer transition hover:scale-110 duration-300' />
                    <img src={Chiriqui} alt="" className='absolute top-[131px] left-[0px] w-[263px] h-auto cursor-pointer transition hover:scale-110 duration-300' />
                    <img src={BocasDelToro} alt="" className='absolute top-[1px] left-[13px] w-[121px] h-auto cursor-pointer transition hover:scale-110 duration-300' />
                    <img src={NgabeBugle} alt="" className='absolute top-[85px] left-[110px] w-[212px] h-auto cursor-pointer transition hover:scale-110 duration-300' />
                    <img src={Cocle} alt="" className='absolute top-[111px] left-[395px] w-[125px] h-auto cursor-pointer transition hover:scale-110 duration-300' />
                    <img src={Colon} alt="" className='absolute top-[0px] left-[385px] w-[308px] h-auto cursor-pointer transition hover:scale-110 duration-300' />
                    <img src={GunaYala} alt="" className='absolute top-[30px] left-[663px] w-[320px] h-auto cursor-pointer transition hover:scale-110 duration-300' />
                    <img src={Darien} alt="" className='absolute top-[100px] left-[805px] w-[220px] h-auto cursor-pointer transition hover:scale-110 duration-300' />

                </div>
                <Link
                    to="/provincias/bocas-del-toro"
                    className="mt-8 inline-flex rounded-full bg-brand-red px-6 py-3 
                    font-semibold text-brand-white shadow-[0_12px_25px_rgba(205,46,76,0.28)] 
                    transition hover:bg-brand-blue"
                >
                    Ver Bocas del Toro
                </Link>

                <Link
                    to="/provincias/bocas-del-toro"
                    className="mt-8 inline-flex rounded-full bg-brand-red px-6 py-3 
                    font-semibold text-brand-white shadow-[0_12px_25px_rgba(205,46,76,0.28)] 
                    transition hover:bg-brand-blue"
                >
                    Ver Bocas del Toro
                </Link>
            </div>
        </div>
    )
}

export default Map
