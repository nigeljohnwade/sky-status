import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
            resources: {
                en: {
                    translation: {
                        solarNoon: 'Solar Noon',
                        nadir: 'Nadir',
                        sunrise: 'Sunrise',
                        sunset: 'Sunset',
                        sunriseEnd: 'Sunrise End',
                        sunsetStart: 'Sunset Start',
                        dawn: 'Dawn',
                        dusk: 'Dusk',
                        nauticalDawn: 'Nautical Dawn',
                        nauticalDusk: 'Nautical Dusk',
                        nightEnd: 'Night End',
                        night: 'Night',
                        goldenHourEnd: 'Golden Hour End',
                        goldenHour: 'Golden Hour Start',
                        azimuth: 'Azimuth',
                        altitude: 'Altitude',
                        distance: 'Distance',
                        parallacticAngle: 'Parallactic Angle',
                        fraction: 'Fraction',
                        phase: 'Phase',
                        angle: 'Angle',
                        set: 'Set',
                        rise: 'Rise',
                    }
                }
            },
            lng: 'en', // if you're using a language detector, do not define the lng option
            fallbackLng: 'en',
            interpolation: {
                escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
            }
        }
    );

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
