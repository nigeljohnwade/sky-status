import React, {FC} from "react";
import {useTranslation} from "react-i18next";
import {
    isBoolean,
    isRadians,
    radiansToDegrees,
} from "./utilities";

interface DataListProps {
    accuracy?: number,
    dataItems: {[key: string]: any},
    title: string,
}

export const DataList: FC<DataListProps> = ({
    accuracy = 3,
    dataItems,
    title,
}) => {
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