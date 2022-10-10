import React from 'react';
import suncalc from 'suncalc';
import './App.css';
import { useTranslation } from 'react-i18next';
import {
    isBoolean,
    isRadians,
    radiansToDegrees,
} from './utilities';

function EventList({
    times: events,
}) {
    const {t} = useTranslation();
    let eventElements: any[] = [];
    for (const event in events) {
        const eventTimestamp = events[event].getTime();
        const startTimestamp = new Date(2022, 9, 10).getTime();
        const endTimestamp = new Date(2022, 9, 11).getTime();
        const range = endTimestamp - startTimestamp;
        const eventRelativeOffset = (eventTimestamp - startTimestamp)/range;
        eventElements.push({
            eventTimestamp,
            element: <li
                style={{
                    position: 'absolute',
                    left: `${eventRelativeOffset * 100}%`
                }}
                key={event}
                className={event}
            >
                <p>
                    <span className={'item-field'}>{t(event)}</span>
                    <span className={'item-value event-time'}>{events[event].toLocaleTimeString()}</span>
                </p>
            </li>
        });
    }
    return <ol style={{position: "relative"}}>
        {
            eventElements.sort((a, b) => a.eventTimestamp - b.eventTimestamp).map(item => item.element)
        }
    </ol>;
}

function DataList({
    accuracy = 3,
    dataItems,
}) {
    const {t} = useTranslation();
    let dataItemElements: any[] = [];
    for (const dataItem in dataItems) {
        (!isBoolean(dataItem) && isRadians(dataItem))
        ?
        dataItemElements.push(
            <div key={dataItem}>
                <p>
                    <span className={'item-field'}> {t(dataItem)}</span>
                    <span className={'item-value'}>{radiansToDegrees(dataItems[dataItem]).toFixed(accuracy)}</span>
                </p>
            </div>
        )
        :
        dataItemElements.push(
            <div key={dataItem}>
                <p>
                    <span className={'item-field'}> {t(dataItem)}</span>
                    <span className={'item-value'}>{dataItems[dataItem].toFixed(accuracy)}</span>
                </p>
            </div>
        )
    }
    return <div>
        {
            dataItemElements.map(element => element)
        }
    </div>;
}

function App() {
    return (
        <div className="App">
            <EventList times={suncalc.getTimes(new Date(), 51.5, -0.1)}/>
            <EventList times={suncalc.getMoonTimes(new Date(), 51.5, -0.1)}/>
            <DataList dataItems={suncalc.getPosition(new Date(), 51.5, -0.1)}/>
            <DataList dataItems={suncalc.getMoonPosition(new Date(), 51.5, -0.1)}/>
            <DataList dataItems={suncalc.getMoonIllumination(new Date(), 51.5, -0.1)}/>
        </div>
    );
}

export default App;
