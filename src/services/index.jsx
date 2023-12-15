

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setWeather } from '../stores/weather';
function WeatherApi() {
    const api_key = import.meta.env.VITE_SOME_KEY;
    const city = useSelector(item => item.city.city);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api_key}`

                );

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                dispatch(setWeather(data));
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, [api_key, city, dispatch]);

    // Component içeriği
    return (
        <div>
            {/* Weather API'den gelen veri ile ilgili component içeriği */}
        </div>
    );
}

export default WeatherApi;
