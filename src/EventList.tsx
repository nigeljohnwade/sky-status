import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface EventListProps {
    date: Date,
    events: any,
    type: any,
}
export const EventList: FC<EventListProps> = ({
    date = new Date(),
    events,
    type,
}) =>{
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
                    left: `${eventRelativeOffset * 100}vw`
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