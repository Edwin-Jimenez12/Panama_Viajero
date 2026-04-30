import { useEffect, useState } from 'react';

function CountdownModal({ onClose, onPreregister }) {
    const launchDate = new Date('2026-10-09T00:00:00-05:00');

    const getTimeLeft = () => {
    const now = new Date();

    if (now >= launchDate) {
        return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    let months = (launchDate.getFullYear() - now.getFullYear()) * 12;
    months += launchDate.getMonth() - now.getMonth();

    const dateAfterMonths = new Date(now);
    dateAfterMonths.setMonth(now.getMonth() + months);

    if (dateAfterMonths > launchDate) {
        months -= 1;
        dateAfterMonths.setMonth(dateAfterMonths.getMonth() - 1);
    }

    const difference = launchDate - dateAfterMonths;

    return {
        months,
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
};

const [timeLeft, setTimeLeft] = useState(getTimeLeft);

useEffect(() => {
    const timer = setInterval(() => {
        setTimeLeft(getTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
},);

return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
        <div className="bg-white p-8 rounded-lg max-w-md w-[90%] relative text-center shadow-2xl">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl font-bold cursor-pointer"
                aria-label="Cerrar ventana emergente"
            >X</button>
            <h2 className="text-2xl font-bold mb-4">Lanzamiento muy pronto</h2>
            <div className="grid grid-cols-5 gap-3 mb-6">
                <div className="bg-gray-100 p-3 rounded-lg">
                    <span className="block text-3xl font-bold">{timeLeft.months}</span>
                    <span className="text-xs uppercase">Meses</span>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg">
                    <span className="block text-3xl font-bold">{timeLeft.days}</span>
                    <span className="text-xs uppercase">Dias</span>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg">
                    <span className="block text-3xl font-bold">{timeLeft.hours}</span>
                    <span className="text-xs uppercase">Horas</span>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg">
                    <span className="block text-3xl font-bold">{timeLeft.minutes}</span>
                    <span className="text-xs uppercase">Min</span>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg">
                    <span className="block text-3xl font-bold">{timeLeft.seconds}</span>
                    <span className="text-xs uppercase">Seg</span>
                </div>
            </div>
            <p className="mb-6 text-gray-600">No te pierdas nuestra apertura oficial.</p>
            <button
                onClick={onPreregister}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition cursor-pointer"
            >Preregistrarme ahora</button>
        </div>
    </div>
    );
}

export default CountdownModal;
