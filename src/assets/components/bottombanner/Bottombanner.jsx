import {FaInstagram, FaTiktok, FaFacebook} from "react-icons/fa6"

import LogoIEPA from "../../img_test/logoIEPA.png";
function BottomBanner({ onLogoClick }) {
    return (
        <div className="mt-20 bg-blue-900 py-15 shadow-[0_-3px_12px_rgba(0,0,0,0.08)] shadow-black/50  ">
            <div className="max-w-6xl mx-auto  flex flex-col items-center gap-10  font-serif text-white ">
                <h1 className="text-center text-3xl md:text-4xl font-bold">Se parte de esta gran aventura</h1>
            <button className="cursor-pointer transition hover:scale-110" onClick={onLogoClick}>
                <img src={LogoIEPA} alt="Logo IEPA" className="h-20 w-auto max-w-full" />
            </button>
            <div className="flex flex-col items-center gap-4">
                <h2 className="text-xl font-bold">Redes sociales</h2>
            <div className="flex gap-3">
                {/* Instagram */}
                <a href="https://www.instagram.com/panamaviajero.app/" className="flex h-11 w-11 items-center justify-center rounded-full border 
                border-white/30 text-white hover:scale-110
                transition hover:border-white hover:bg-white hover:text-blue-900 cursor-pointer" target="_blank">
                    <FaInstagram size={25}/>
                </a>
                {/* Tiktok */}
                <a href="https://www.tiktok.com/@panamaviajero.app" className="flex h-11 w-11 items-center justify-center rounded-full border 
                border-white/30 text-white hover:scale-110
                transition hover:border-white hover:bg-white hover:text-blue-900 cursor-pointer" target="_blank">
                    <FaTiktok size={25}/>
                </a>
            
                <a href="https://www.facebook.com/profile.php?id=61581250713824" className="flex h-11 w-11 items-center justify-center rounded-full border 
                border-white/30 text-white hover:scale-110
                transition hover:border-white hover:bg-white hover:text-blue-900 cursor-pointer" target="_blank" >
                    
                    <FaFacebook size={25} />
                </a>
                <button ></button>
            </div>
            </div>

            <hr className="border-white  opacity-40 w-full" />
            <div className="text-center">
                © 2026 Panamá viajero. Todos los derechos reservados. | Desarrollado por DHM-Asesores | Contacto: <a href="panamaviajero@.com.pa">panamaviajero@.com.pa</a>
            </div>
            </div>
        </div>
    )
}

export default BottomBanner;
