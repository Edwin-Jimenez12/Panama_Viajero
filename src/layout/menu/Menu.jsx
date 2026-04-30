import { useState } from 'react';
import LogoIEPA from '../../assets/img_test/logoIEPA.png';


function Menu({ onPreregisterClick }) {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    const goToRegister = () => {
        closeMenu();
        onPreregisterClick?.();
    };

    return(
        <div className="bg-gradient-to-b from-black/75 to-transparent pb-25 md:pb-60">
            <div className="flex justify-between items-center pt-10 md:pt-5 px-3 md:pl-10 text-white font-bold text-lg">
                <button className="cursor-pointer transition hover:scale-110">
                    <img src={LogoIEPA} alt="Logo IEPA" className="h-12 w-auto max-w-full" />
                </button>

                <div className="hidden md:flex gap-13">
                    <button className="cursor-pointer transition hover:scale-110">Provincias</button>
                    <button className="cursor-pointer transition hover:scale-110">Promociones</button>
                    <button className="cursor-pointer transition hover:scale-110" onClick={goToRegister}>Registro</button>
                </div>

                <button className="md:hidden transition hover:scale-110" onClick={() => setIsOpen(true)}>
                    ☰
                </button>

                <div className="hidden md:block pr-10"></div>

                <div
                    className={`fixed inset-0 z-40 bg-gray-100 transition-opacity duration-300 ${
                        isOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                    onClick={closeMenu}
                ></div>

                <div
                    className={`fixed inset-y-0 right-0 z-50 h-screen w-1/2 bg-gray-800 transition-transform duration-300 ease-in-out ${
                        isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="flex flex-col gap-8 py-6">
                        <div className="flex flex-col items-center gap-3">
                            <button className="cursor-pointer transition hover:scale-110">
                                <img src={LogoIEPA} alt="Logo IEPA" className="h-12 w-auto max-w-full" />
                            </button>
                            <label>Panama Viajero</label>
                        </div>

                        <div className="flex flex-col items-start ml-3 gap-2.5">
                            <button className="cursor-pointer transition hover:scale-110">Provincias</button>
                            <button className="cursor-pointer transition hover:scale-110">Promociones</button>
                            <button className="cursor-pointer transition hover:scale-110" onClick={goToRegister}>Registro</button>
                        </div>

                        <div className="flex justify-center mt-30">
                            <button className="rounded-lg bg-blue-600 text-white px-8 py-3 font-semibold transition hover:bg-blue-700" onClick={goToRegister}>
                                Registrarme
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
