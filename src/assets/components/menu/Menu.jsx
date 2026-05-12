import { useEffect, useState } from 'react';
import LogoVertical from '../../img_test/LogoVertical.svg';
import { MapPin, Megaphone, ClipboardPen, Users } from 'lucide-react';
import LogoCuadrado from '../../img_test/LogoCuadrado.svg';


function Menu({ onLogoClick, onPreregisterClick, onMapClick, onUsClick, onSuggestionsClick}) {
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
    const goToUs = () =>{
        closeMenu();
        onUsClick?.();
    }
    const goToSuggestions = () => {
        closeMenu();
        onSuggestionsClick?.();
    }

    return(
        /* Fondo del menu */
        <div className="bg-gradient-to-b from-brand-charcoal/80 via-brand-charcoal/45 to-transparent pb-7 backdrop-blur-[1px]">
            {/* Justificacion del menu */}
            <div className="flex justify-between items-center pt-5 md:pt-5 px-3 md:pl-10 md:pr-30 text-brand-white text-lg">
                <button className="cursor-pointer transition hover:scale-110" onClick={goToHome}>
                    <img src={LogoCuadrado} alt="Logo IEPA" className="h-12 w-auto max-w-full" />
                </button>

                <div className="hidden md:flex gap-8 font-invisible">
                    {/* Nosotros */}
                    <button className="group flex items-center gap-2 cursor-pointer rounded-full px-3 py-2 transition hover:bg-brand-white/15 hover:text-brand-white" onClick={goToUs}>
                        <Users size={15} className="text-brand-red opacity-0 transition-opacity group-hover:opacity-100" />
                        <span>Nosotros</span>
                        
                    </button>
                    {/* Provincias */}
                    <button
                        className="group flex items-center gap-2 cursor-pointer rounded-full px-3 py-2 transition hover:bg-brand-white/15 hover:text-brand-white"
                        onClick={goToMap}
                        >
                            <MapPin size={15} className="text-brand-red opacity-0 transition-opacity group-hover:opacity-100" />
                        <span>Provincias</span>
                        
                    </button>

                    {/* Promociones */}
                    <button className="group flex items-center gap-2 cursor-pointer rounded-full px-3 py-2 transition hover:bg-brand-white/15 hover:text-brand-white" onClick={goToSuggestions}>
                        <Megaphone size={15} className="text-brand-red opacity-0 transition-opacity group-hover:opacity-100"/>
                        <span>Recomendaciones</span>
                    </button>
                    {/* Registro */}
                    <button className="group flex items-center gap-2 cursor-pointer rounded-full px-3 py-2 transition hover:bg-brand-white/15 hover:text-brand-white" onClick={goToRegister}>
                        <ClipboardPen size={15} className="text-brand-red opacity-0 transition-opacity group-hover:opacity-100" />
                        <span>Registro</span>
                    </button>
                </div>
                {/* Menu Responsive */}
                <button className="md:hidden rounded-full bg-brand-white/15 px-3 py-1 transition hover:bg-brand-red" onClick={() => setIsOpen(true)}>
                    ☰
                </button>
                
                <div className="hidden md:block "></div>
                
                <div
                    className={`fixed inset-0 z-40 bg-black/50 transition-opacity h-screen duration-300 ${
                        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                    onClick={closeMenu}
                ></div>

                <div
                    className={`fixed inset-y-0 right-0 z-50 h-screen w-2/3 bg-brand-charcoal text-brand-white shadow-2xl shadow-black/60 transition-transform duration-300 ease-in-out sm:w-1/2 ${
                        isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >{/* Menu Responsive */}
                    <div className="flex flex-col gap-8 py-6">
                        <div className="flex flex-col items-center gap-3">
                            <button className="cursor-pointer transition hover:scale-110" onClick={goToHome}>
                                <img src={LogoVertical} alt="Logo IEPA" className="h-25 w-auto max-w-full" />
                            </button>
                        </div>

                        <div className="flex flex-col items-start ml-3 gap-2.5">
                            <button className="rounded-full px-4 py-2 transition hover:bg-brand-white/10" onClick={goToUs}>Nosotros</button>
                            <button className="rounded-full px-4 py-2 transition hover:bg-brand-white/10" onClick={goToMap}>Provincias</button>
                            <button className="rounded-full px-4 py-2 transition hover:bg-brand-white/10" onClick={goToSuggestions}>Sugerencia</button>
                            <button className="rounded-full px-4 py-2 transition hover:bg-brand-white/10" onClick={goToRegister}>Registro</button>
                        </div>

                        <div className="flex justify-center mt-15">
                            <button className="rounded-lg bg-brand-red text-brand-white px-5 py-2 font-semibold transition hover:bg-brand-blue" onClick={goToRegister}>
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
