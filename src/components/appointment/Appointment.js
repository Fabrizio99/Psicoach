import React from 'react';
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import esES from 'antd/lib/locale/es_ES';
import moment from 'moment';
import 'moment/locale/es';
import { CalendarComponent } from './Calendar';
import { HourRange} from './HourRange'

moment.locale('es');

export const Appointment = () => {

    return (
        <div>
            <ConfigProvider locale={esES}>
            <h1>pruebas para calendario</h1>
            <div className="calendar">
                <CalendarComponent/>
            </div>
            <HourRange/>
            </ConfigProvider>
        </div>
    )
}
