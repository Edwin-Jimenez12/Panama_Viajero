import { useNavigate } from 'react-router-dom';
import Menu from '../../../../assets/components/menu/Menu.jsx';
import Banner from '../../../../assets/img_test/colonBanner.png';
import BottomBanner from '../../../../assets/components/bottombanner/Bottombanner.jsx';
import { provincias } from './ColonData.js';
import Jugador from '../../../../assets/img_test/tarjeta-jugador-prueba.png'

function Colon() {
    const navigate = useNavigate();
    const colon = provincias[0];

    return (
        <div className="relative">
            <div className="fixed top-0 z-30 w-full">
                <Menu
                    onLogoClick={() => navigate('/')}
                    onMapClick={() => navigate('/#map')}
                    onPreregisterClick={() => navigate('/#preregister')}
                />
            </div>

            <div className="relative z-0">
                <img src={Banner} alt="Banner colon" className="h-screen w-full object-cover" />
                <div className="absolute inset-0 z-10 flex items-center px-4 ">
                    <div className="max-w-md rounded-xl bg-white/80 p-8 shadow-lg shadow-black/50 md:ml-15">
                        <h1 className="text-5xl font-bold text-black md:pb-4 md:text-6xl">{colon.nombre}</h1>
                        <p className="text-lg">{colon.descripcionCorta}</p>
                    </div>
                </div>
            </div>

            {/* provincia y reseña */}
            <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:justify-between">
                <div className="w-full md:w-1/2">
                    <img src={Jugador} alt="Tarjeta jugadores" className="w-full rounded-xl object-cover" />
                </div>

                <div className="flex w-full flex-col justify-center md:w-1/2">
                    <h1 className="text-3xl font-bold">Reseña histórica</h1>
                    <p className="mt-4 leading-7 text-gray-700">{colon.resena}</p>
                </div>
            </section>

            {/* Actividades */}
            <div className='flex flex-col max-w-6xl'>
                <h1 className='text-3xl font-bold text-black md:pb-4 md:text-6xl'>Actividades</h1>
                <div className=''>
                    <h1 className='gap-4'>{colon.actividades}</h1>
                </div>
            </div>
            <BottomBanner onLogoClick={() => navigate('/')} />
        </div>
    );
}

export default Colon;
