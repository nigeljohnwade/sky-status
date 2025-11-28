import React, { useEffect, useState, } from 'react';
import suncalc from 'suncalc';
import './App.css';
import { DataList } from './DataList';
import { EventList } from './EventList';

function App() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        console.log(date);
    }, [date]);

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
