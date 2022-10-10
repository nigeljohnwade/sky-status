import React from 'react';
import suncalc from 'suncalc';
import './App.css';
import { useTranslation } from 'react-i18next';
import { radiansToDegrees } from './utilities';

function Times({
    times,
}) {
    const {t} = useTranslation();
    let timeElements: any[] = [];
    for (const time in times) {
        const timestamp = times[time].getTime();
        timeElements.push({
            timestamp: timestamp,
            element: <li key={time}>
                <p>
                    <span className={'item-field'}>{t(time)}</span>
                    <span className={'item-value'}>{times[time].toLocaleTimeString()}</span>
                </p>
            </li>
        });
    }
    return <ol>
        {
            timeElements.sort((a, b) => a.timestamp - b.timestamp).map(item => item.element)
        }
    </ol>;
}

function Position({
    positions,
}) {
    const {t} = useTranslation();
    let positionElements: any[] = [];
    for (const position in positions) {
        positionElements.push(
            <div key={position}>
                <p>
                    <span className={'item-field'}> {t(position)}</span>
                    <span className={'item-value'}>{radiansToDegrees(positions[position]).toFixed(2)}</span>
                </p>
            </div>
        );
    }
    return <div>
        {
            positionElements.map(element => element)
        }
    </div>;
}

function App() {
    return (
        <div className="App">
            <Times times={suncalc.getTimes(new Date(), 51.5, -0.1)}/>
            <Position positions={suncalc.getPosition(new Date(), 51.5, -0.1)}/>
            <Position positions={suncalc.getMoonPosition(new Date(), 51.5, -0.1)}/>
            <Position positions={suncalc.getMoonIllumination(new Date(), 51.5, -0.1)}/>
            <Times times={suncalc.getMoonTimes(new Date(), 51.5, -0.1)}/>
        </div>
    );
}

export default App;
