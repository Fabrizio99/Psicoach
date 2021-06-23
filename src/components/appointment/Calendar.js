import React from 'react';
import { Calendar } from 'antd';
// import 'antd/dist/antd.css';
// import { ConfigProvider } from 'antd';
// import esES from 'antd/lib/locale/es_ES';
// import moment from 'moment';
// import 'moment/locale/es';

// moment.locale('es');

export const CalendarComponent = () => {
    return (
        // <ConfigProvider locale={esES}>
            <Calendar fullscreen={true}/>
        // </ConfigProvider>
    )
}
