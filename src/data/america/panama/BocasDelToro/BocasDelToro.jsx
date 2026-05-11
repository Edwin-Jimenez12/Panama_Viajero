import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Menu from '../../../../assets/components/menu/Menu.jsx';
import BocasDelToroVideo from '../../../../assets/srcProvincias/bocas_del_toto/Playa-banner-1080p.mp4';
import BottomBanner from '../../../../assets/components/bottombanner/Bottombanner.jsx';
import ProvinceVideo from '../../../../assets/components/province/ProvinceVideo.jsx';
import ProvinceInfo from '../../../../assets/components/province/ProvinceInfo.jsx';
import Activities from '../../../../assets/components/province/Activities.jsx';
import Suggestions from '../../../../assets/components/province/Suggestions.jsx';
import MapSection from '../../../../assets/components/province/MapSection.jsx';
import { provincias } from './BocasDelToro.js';

function BocasDelToro() {
    const navigate = useNavigate();
    const location = useLocation();
    const bocasDelToro = provincias[0];

    useEffect(() => {
        if (location.hash) {
            const targetId = location.hash.replace('#', '');
            const section = document.getElementById(targetId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [location.hash]);

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

            <ProvinceVideo provinceData={bocasDelToro} videoSrc={BocasDelToroVideo} />

            <ProvinceInfo provinceData={bocasDelToro} />

            <Activities provinceData={bocasDelToro} />

            <Suggestions provinceData={bocasDelToro} navigate={navigate} basePath="../bocas-del-toro" />

            <MapSection provinceData={bocasDelToro} />

            <BottomBanner onLogoClick={() => navigate('/#home')} />
        </div>
    );
}
export default BocasDelToro;
