import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import "./style.css"
import thermometerpng from "../../assets/images/icons/thermometer.png"
import temperaturepng from "../../assets/images/icons/temperature.png"
import windypng from "../../assets/images/icons/windy.png"
import sunrisepng from "../../assets/images/icons/sunrise.png"
import moonrisepng from "../../assets/images/icons/moonrise.png"

const CityModal = ({ cityName, isOpen, onClose }) => {
    const weatherSituation = useSelector(item => item.weather.weather)
    const sunset = useSelector(item => item.time.sunset)
    const sunrise = useSelector(item => item.time.sunrise)
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="City Modal"
            appElement={document.getElementById('root')}
            shouldCloseOnEsc={true}

        >
            {weatherSituation !== "" && (
                <div loading="lazy">
                    <h2 className='text-[24px] font-[600] pb-[20px]'>{cityName} Hava Durumu</h2>
                    <div className='flex items-center pb-[15px]'>
                        <img className='w-[34px] h-[34px] mr-[10px]' src={thermometerpng} alt="" />
                        <div>
                            <p className='font-[700] leading-[18px]'>{weatherSituation.main.temp}°C
                            </p>
                            <span className='text-[14px] font-[400]'> Sıcaklık(°C)</span>

                        </div>
                    </div>
                    <div className='flex items-center pb-[15px]'>
                        <img className='w-[34px] h-[34px] mr-[10px]' src={temperaturepng} alt="" />
                        <div>
                            <p className='font-[700]'>{weatherSituation.main.feels_like}°C


                            </p>
                            <span className='text-[14px] font-[400]'> Hissedilen Sıcaklık(°C)</span>
                        </div>
                    </div>
                    <div className='flex items-center pb-[15px]'>
                        <img className='w-[34px] h-[34px] mr-[10px]' src={windypng} alt="" />
                        <div>
                            <p className='font-[700]'>{weatherSituation.wind.speed} m/s


                            </p>
                            <span className='text-[14px] font-[400]'> Rüzgar Hızı (m/s)</span>
                        </div>
                    </div><div className='flex items-center pb-[15px]'>
                        <img className='w-[34px] h-[34px] mr-[10px]' src={sunrisepng} alt="" />
                        <div>
                            <p className='font-[700]'>{sunrise}


                            </p>
                            <span className='text-[14px] font-[400]'>Güneşin Doğuş Zamanı</span>
                        </div>
                    </div>
                    <div className='flex items-center pb-[15px]'>
                        <img className='w-[34px] h-[34px] mr-[10px]' src={moonrisepng} alt="" />
                        <div>
                            <p className='font-[700]'>{sunset}

                            </p>
                            <span className='text-[14px] font-[400]'>Ayın Doğuş Zamanı</span>
                        </div>
                    </div>
                </div>
            )}


        </Modal>
    );
};

export default CityModal;
