import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSunrise, setSunset } from '../stores/time';

const TimeUtils = () => {
    const weatherSituation = useSelector(item => item.weather.weather);

    const dispatch = useDispatch();

    const sunriseTimestamp = weatherSituation.sys.sunrise;
    const sunsetTimestamp = weatherSituation.sys.sunset;

    useEffect(() => {
        const sunriseDate = new Date(sunriseTimestamp * 1000);
        const sunsetDate = new Date(sunsetTimestamp * 1000);


        const options = { hour: 'numeric', minute: 'numeric', hour12: false, timeZone: 'Europe/Istanbul' };
        const sunriseFormatted = sunriseDate.toLocaleString('tr-TR', options);
        const sunsetFormatted = sunsetDate.toLocaleString('tr-TR', options);

        dispatch(setSunrise(sunriseFormatted));
        dispatch(setSunset(sunsetFormatted));

    }, [dispatch, sunriseTimestamp, sunsetTimestamp]);

    return (
        <div>

        </div>
    );
};

export default TimeUtils;
