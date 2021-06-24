import React from 'react';

import { CalendarComponent } from './Calendar';
import { HourRange} from './HourRange'



export const Appointment = () => {

    return (
        <div>
            
            <h1>pruebas para calendario</h1>
            <div className="calendar">
                <CalendarComponent/>
            </div>
            <HourRange/>
        </div>
    )
}
