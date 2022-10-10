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
                        sunriseTooltip: 'Sunrise (top edge of the sun appears on the horizon)',
                        sunriseEndTooltip: 'Sunrise ends (bottom edge of the sun touches the horizon)',
                        goldenHourEndTooltip: 'Morning golden hour (soft light, best time for photography) ends',
                        solarNoonTooltip: 'Solar noon (sun is in the highest position)',
                        goldenHourTooltip: 'Evening golden hour starts',
                        sunsetStartTooltip:	'Sunset starts (bottom edge of the sun touches the horizon)',
                        sunsetTooltip: 'Sunset (sun disappears below the horizon, evening civil twilight starts)',
                        duskTooltip: 'Dusk (evening nautical twilight starts)',
                        nauticalDuskTooltip:	'Nautical dusk (evening astronomical twilight starts)',
                        nightTooltip:	'Night starts (dark enough for astronomical observations)',
                        nadirTooltip: 'Nadir (darkest moment of the night, sun is in the lowest position)',
                        nightEndTooltip: 'Night ends (morning astronomical twilight starts)',
                        nauticalDawnTooltip:'Nautical dawn (morning nautical twilight starts)',
                        dawnTooltip: 'Dawn (morning nautical twilight ends, morning civil twilight starts)',
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
