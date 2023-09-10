import React, {
    useEffect,
    useState,
} from 'react';
import suncalc from 'suncalc';
import './App.css';
import { useTranslation } from 'react-i18next';
import {
    isBoolean,
    isRadians,
    radiansToDegrees,
} from './utilities';

function EventList({
    date = new Date(),
    events,
    type,
}:{
    date: Date,
    events: any,
    type: any,
}) {
    const {t} = useTranslation();
    let eventElements: any[] = [];
    for (const event in events) {
        const eventTimestamp = events[event].getTime();
        const startTimestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
        const endTimestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1).getTime();
        const range = endTimestamp - startTimestamp;
        const eventRelativeOffset = (eventTimestamp - startTimestamp) / range;
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
                <p title={t(`${event}Tooltip`)}>
                    <span className={'item-field'}>{t(event)}</span>
                    <span className={'item-value event-time'}>{events[event].toLocaleTimeString()}</span>
                </p>
            </li>
        });
    }
    return <ol className={`event-list ${type}`}>
        {
            eventElements.sort((a, b) => a.eventTimestamp - b.eventTimestamp).map(item => item.element)
        }
    </ol>;
}

function DataList({
    accuracy = 3,
    dataItems,
    title,
}:{
    accuracy?: number,
    dataItems: any,
    title: any,
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
            );
    }
    return <div className={'data-list'}>
        <h2>{title}</h2>
        {
            dataItemElements.map(element => element)
        }
    </div>;
}

function App() {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        console.log(date);
    }, [date])
    return (
        <div className="App">
            <div className={'event-list-wrapper'}>
                <EventList
                    date={date}
                    type="sun"
                    events={suncalc.getTimes(date, 51.5, -0.1)}
                />
                <EventList
                    date={date}
                    type="moon"
                    events={suncalc.getMoonTimes(date, 51.5, -0.1)}
                />
            </div>
            <div className={'data-list-wrapper'}>
                <DataList
                    title="Sun Position"
                    dataItems={suncalc.getPosition(date, 51.5, -0.1)}
                />
                <DataList
                    title="Moon Position"
                    dataItems={suncalc.getMoonPosition(date, 51.5, -0.1)}
                />
                <DataList
                    title="Moon Illumination"
                    dataItems={suncalc.getMoonIllumination(date)}
                />
            </div>
            <input type="date" onChange={(event) => {
                setDate(new Date(`${event.target.value}T12:00:00.00Z`));
            }}/>
        </div>
    );
}

export default App;
