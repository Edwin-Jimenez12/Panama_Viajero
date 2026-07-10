import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProvinceVideo from '../../components/destinations/ProvinceVideo.jsx';
import Activities from '../../components/destinations/Activities.jsx';
import SelectedActivitiesBar from '../../components/destinations/SelectedActivitiesBar.jsx';
import Sitios from '../../components/destinations/SitesList.jsx';
import Menu from '../../../components/menu/Menu.jsx';
import BottomBanner from '../../../components/bottombanner/Bottombanner.jsx';
import OtherProvinces from '../../components/destinations/OtherProvinces.tsx';
import { provincias} from './PanamaData.js';

function Panama() {
    const navigate = useNavigate();
    const location = useLocation();
    const provinceData = provincias[0];
    const [selectedActivities, setSelectedActivities] = useState([]);
    const breadcrumbSourceLabel = 'Destinos';
    const breadcrumbSourceTo = '/#map';

    const toggleSelectedActivity = (activity) => {
        setSelectedActivities((current) => {
            const currentList = Array.isArray(current) ? current : current ? [current] : [];
            const normalizedActivity = activity.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
            const alreadySelected = currentList.some(
                (item) =>
                    String(item)
                        .toLowerCase()
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '')
                        .trim() === normalizedActivity,
            );
            if (alreadySelected) {
                return currentList.filter(
                    (item) =>
                        String(item)
                            .toLowerCase()
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '')
                            .trim() !== normalizedActivity,
                );
            }
            return [...currentList, activity];
        });
    };

    const removeSelectedActivity = (activityToRemove) => {
        setSelectedActivities((current) => {
            const currentList = Array.isArray(current) ? current : current ? [current] : [];
            const targetKey = String(activityToRemove).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
            return currentList.filter(
                (item) =>
                    String(item)
                        .toLowerCase()
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '')
                        .trim() !== targetKey,
            );
        });
    };

    useEffect(() => {
        const hash = window.location.hash;
        if (hash === '#video') {
            const videoElement = document.querySelector('video');
            if (videoElement) {
                videoElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <div className="relative isolate text-brand-charcoal">
            <div className="fixed top-0 z-30 w-full">
                <Menu
                    autoHideOnScroll
                    onLogoClick={() => navigate('/#home')}
                    onUsClick={() => navigate('/#us')}
                    onMapClick={() => navigate('/#map')}
                    onSuggestionsClick={() => navigate('/#suggestions')}
                    onPreregisterClick={() => navigate('/#preregister')}
                />
            </div>
            <ProvinceVideo
                provinceData={provinceData}
                fixedBackground
                breadcrumbItems={[
                    { label: breadcrumbSourceLabel, to: breadcrumbSourceTo },
                    { label: provinceData.nombre },
                ]}
            />
            <Activities
                provinceData={provinceData}
                selectedActivities={selectedActivities}
                onActivitySelect={toggleSelectedActivity}
            />
            <SelectedActivitiesBar
                selectedActivities={selectedActivities}
                onRemoveActivity={removeSelectedActivity}
                onClearAll={() => setSelectedActivities([])}
            />
            <Sitios
                provinceData={provinceData}
                selectedActivity={selectedActivities}
                breadcrumbSourceLabel={breadcrumbSourceLabel}
            />
            <OtherProvinces provincias={provincias} />
            <div className="mt-40">
                <BottomBanner onLogoClick={() => navigate('/#home')} />
            </div>
        </div>
    );
}

export default Panama;
