import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProvinceVideo from '../../../assets/components/province/ProvinceVideo.jsx';
import ProvinceInfo from '../../../assets/components/province/ProvinceInfo.jsx';
import Activities from '../../../assets/components/province/Activities.jsx';
import Suggestions from '../../../assets/components/province/Suggestions.jsx';
import MapSection from '../../../assets/components/province/MapSection.jsx';
import Menu from '../../../assets/components/menu/Menu.jsx';
import BottomBanner from '../../../assets/components/bottombanner/Bottombanner.jsx';
import { provincias as chiriquiData } from './ChiriquiData.js';

function Chiriqui() {
    const navigate = useNavigate();
    const provinceData = chiriquiData[0];

    useEffect(() => {
        const hash = window.location.hash;
        if (hash === '#video') {
            const videoElement = document.querySelector('video');
            if (videoElement) {
                videoElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    const scrollToHome = () => navigate('/#home');

    return (
        <div className="relative bg-brand-soft text-brand-charcoal">
            <div className="fixed top-0 z-30 w-full">
                <Menu
                    onLogoClick={() => navigate('/#home')}
                    onUsClick={() => navigate('/#us')}
                    onMapClick={() => navigate('/#map')}
                    onSuggestionsClick={() => navigate('/#suggestions')}
                    onPreregisterClick={() => navigate('/#preregister')}
                />
            </div>
            <ProvinceVideo provinceData={provinceData} />
            <ProvinceInfo provinceData={provinceData} />
            <Activities provinceData={provinceData} />
            <Suggestions provinceData={provinceData} navigate={navigate} basePath="/provincias/chiriqui" />
            <MapSection provinceData={provinceData} />
            <BottomBanner onLogoClick={() => navigate('/#home')} />
        </div>
    );
}

export default Chiriqui;