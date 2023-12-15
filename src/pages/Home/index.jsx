
import Header from '../../components/Header'
import Map from '../../components/Map'
import WeatherApi from '../../services'
import TimeUtils from '../../utils/timeUtils'
import { useSelector } from 'react-redux'

function HomePage() {
    const weatherSituation = useSelector(item => item.weather.weather);
    return (
        <div className='flex flex-col justify-center min-h-[100vh] '>
            <Header />
            <Map />
            <WeatherApi />
            {weatherSituation && <TimeUtils />}

        </div>
    )
}

export default HomePage
