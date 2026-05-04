import { Mail, Phone, User } from 'lucide-react';

function Preregister() {
    return (
        <div className="max-w-4xl mx-auto mt-10 border-2 border-gray-200 rounded-xl p-8 shadow-xl">
            <form action="" className="space-y-6">
                <div className="flex flex-col md:flex-row gap-2 justify-end items-baseline border-b pb-4">
                    <span className="text-xl text-gray-600">Regístrate y obtén una</span>
                    <span className="font-bold text-3xl text-blue-600">NOCHE GRATIS</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative">
                        <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="text" placeholder="Juan" className="w-full border-2 rounded-lg p-3 pl-10 outline-blue-500 focus:border-blue-500 hover:border-blue-500" />
                    </div>

                    <div className="relative">
                        <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="text" placeholder="Pérez" className="w-full border-2 rounded-lg p-3 pl-10 outline-blue-500 focus:border-blue-500 hover:border-blue-500" />
                    </div>

                    <div className="relative">
                        <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="text" placeholder="65094159" className="w-full border-2 rounded-lg p-3 pl-10 outline-blue-500 focus:border-blue-500 hover:border-blue-500" />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-1">
                            <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input type="email" placeholder="micorreo012@gmail.com" className="w-full border-2 rounded-lg p-3 pl-10 outline-blue-500 focus:border-blue-500 hover:border-blue-500" />
                        </div>

                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer">
                            Registrarme
                        </button>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <input type="checkbox" id="terms" className="w-4 h-4 cursor-pointer" />
                        <label htmlFor="terms" className="cursor-pointer hover:underline">He leído y acepto los términos y condiciones</label>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Preregister;
