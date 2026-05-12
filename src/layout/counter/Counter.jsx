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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-charcoal/85 backdrop-blur-sm">
        <div className="relative w-[90%] max-w-md rounded-xl bg-brand-white p-8 text-center shadow-2xl">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 cursor-pointer text-xl font-bold text-brand-charcoal/60 hover:text-brand-red"
                aria-label="Cerrar ventana emergente"
            >X</button>
            <h2 className="mb-4 text-2xl font-bold text-brand-blue">Lanzamiento muy pronto</h2>
            <div className="grid grid-cols-5 gap-3 mb-6">
                <div className="rounded-lg bg-brand-soft p-3">
                    <span className="block text-3xl font-bold text-brand-red">{timeLeft.months}</span>
                    <span className="text-xs uppercase">Meses</span>
                </div>
                <div className="rounded-lg bg-brand-soft p-3">
                    <span className="block text-3xl font-bold text-brand-red">{timeLeft.days}</span>
                    <span className="text-xs uppercase">Dias</span>
                </div>
                <div className="rounded-lg bg-brand-soft p-3">
                    <span className="block text-3xl font-bold text-brand-red">{timeLeft.hours}</span>
                    <span className="text-xs uppercase">Horas</span>
                </div>
                <div className="rounded-lg bg-brand-soft p-3">
                    <span className="block text-3xl font-bold text-brand-red">{timeLeft.minutes}</span>
                    <span className="text-xs uppercase">Min</span>
                </div>
                <div className="rounded-lg bg-brand-soft p-3">
                    <span className="block text-3xl font-bold text-brand-red">{timeLeft.seconds}</span>
                    <span className="text-xs uppercase">Seg</span>
                </div>
            </div>
            <p className="mb-6 text-brand-charcoal/75">No te pierdas nuestra apertura oficial.</p>
            <button
                onClick={onPreregister}
                className="cursor-pointer rounded-lg bg-brand-red px-6 py-3 font-bold text-brand-white transition hover:bg-brand-blue"
            >Preregistrarme ahora</button>
        </div>
    </div>
    );
}

export default CountdownModal;
