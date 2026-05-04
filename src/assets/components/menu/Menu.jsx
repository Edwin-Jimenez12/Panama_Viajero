import { useEffect, useState } from 'react';
import LogoIEPA from '../../img_test/logoIEPA.png';
import { MapPin, Megaphone, ClipboardPen } from 'lucide-react';


function Menu({ onLogoClick, onPreregisterClick, onMapClick }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const closeMenu = () => {
        setIsOpen(false);
    };

    const goToRegister = () => {
        closeMenu();
        onPreregisterClick?.();
    };

    const goToHome = () => {
        closeMenu();
        onLogoClick?.();
    };
    const goToMap = () => {
        closeMenu();
        onMapClick?.();
    };

    return(
        /* Fondo del menu */
        <div className="bg-gradient-to-b from-black/75 to-transparent pb-10 ">
            {/* Justificacion del menu */}
            <div className="flex justify-between items-center pt-10 md:pt-5 px-3 md:pl-10 text-white font-bold text-lg">
                <button className="cursor-pointer transition hover:scale-110" onClick={goToHome}>
                    <img src={LogoIEPA} alt="Logo IEPA" className="h-12 w-auto max-w-full" />
                </button>

                <div className="hidden md:flex gap-13">
                    {/* Provincias */}
                    <button
                        className="group flex items-center gap-2 cursor-pointer transition hover:scale-110"
                        onClick={goToMap}
                        >
                            <MapPin size={15} className="opacity-0 transition-opacity group-hover:opacity-100" />
                        <span>Provincias</span>
                        
                    </button>

                    {/* Promociones */}
                    <button className="group flex items-center gap-2 cursor-pointer transition hover:scale-110">
                        <Megaphone size={15} className="opacity-0 transition-opacity group-hover:opacity-100"/>
                        <span>Promociones</span>
                    </button>
                    {/* Registro */}
                    <button className="group flex items-center gap-2 cursor-pointer transition hover:scale-110" onClick={goToRegister}>
                        <ClipboardPen size={15} className="opacity-0 transition-opacity group-hover:opacity-100" />
                        <span>Registro</span>
                    </button>
                </div>
                <button className="md:hidden transition hover:scale-110" onClick={() => setIsOpen(true)}>
                    ☰
                </button>

                <div className="hidden md:block pr-10"></div>
                
                <div
                    className={`fixed inset-0 z-40 bg-black/50 transition-opacity h-screen duration-300 ${
                        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
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
                            <button className="cursor-pointer transition hover:scale-110" onClick={goToHome}>
                                <img src={LogoIEPA} alt="Logo IEPA" className="h-12 w-auto max-w-full" />
                            </button>
                            <label>Panama Viajero</label>
                        </div>

                        <div className="flex flex-col items-start ml-3 gap-2.5">
                            <button className="cursor-pointer transition hover:scale-110" onClick={goToMap}>Provincias</button>
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
