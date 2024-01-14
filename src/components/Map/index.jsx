

import TurkeyMap from 'turkey-map-react';
import CityModal from '../CityModal';
import { setCity } from '../../stores/city';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./style.css"

function Map() {

    const city = useSelector(item => item.city.city)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleCityClick = ({ name }) => {
        dispatch(setCity(name));
        setIsModalOpen(true); // Haritaya tıklandığında modal açılsın
        navigate(`?city=${name.toLowerCase()}`);
    };

    const handleCloseModal = () => {
        dispatch(setCity(null));
        setIsModalOpen(false);
    };

    return (
        <div>
            <TurkeyMap
                customStyle={{ idleColor: "#c20f2d", hoverColor: "#dc3522" }}
                showTooltip={true}
                onClick={handleCityClick}

            />

            <CityModal
                cityName={city}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    );
}



export default Map;
