
import ReactDOM from 'react-dom/client'

import "./assets/css/tailwind.css"
import { configureStore } from '@reduxjs/toolkit'
import routes from './routes/index.jsx'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import CityReducer from './stores/city.jsx'
import WeatherReducer from './stores/weather.jsx'
import TimeReducer from './stores/time.jsx'


const store = configureStore({
  reducer: {
    city: CityReducer,
    weather: WeatherReducer,
    time: TimeReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={routes}>

    </RouterProvider>
  </Provider>



)
