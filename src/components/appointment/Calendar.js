import React from 'react';
import { Calendar } from 'antd';
import { Menu, Dropdown } from 'antd';
// import 'antd/dist/antd.css';
// import { ConfigProvider } from 'antd';
// import esES from 'antd/lib/locale/es_ES';
// import moment from 'moment';
// import 'moment/locale/es';

// moment.locale('es');

export const CalendarComponent = () => {
    function getListData(value) {
        let listData;
        switch (value.date()) {
          case 8:
            listData = [
                { content: 'Cita 1 / 14:00 - 15:00' },
            ];
            break;
          case 10:
            listData = [
                { content: 'Cita 1 / 14:00 - 15:00' },
                { content: 'Cita 2 / 16:00 - 18:00' }
            ];
            break;
          default:
        }
        return listData || [];
      }
      
      function dateCellRender(value) {
        const listData = getListData(value);
        const menu = (<Menu>
            {listData.map(item => (
                <Menu.Item
                    key={item.content}
                    className="calendar-item"
                >
                    <a target="_blank" rel="noopener noreferrer" href="https://meet.google.com/">
                        {item.content}
                    </a>
                </Menu.Item>
            ))}
        </Menu>)

        return  (listData.length ? (
            (
                <Dropdown overlay={menu} placement="bottomLeft" className="dropdown-calendar">
                    <button className="button button--calendar">
                        {listData.length} Cita(s)
                    </button>
                </Dropdown>
            )
        ):<small></small>)
        
      }
      
      function getMonthData(value) {
        if (value.month() === 8) {
          return 1394;
        }
      }
      
      function monthCellRender(value) {
        const num = getMonthData(value);
        return num ? (
          <div className="notes-month">
            <section>{num}</section>
            <span>Backlog number</span>
          </div>
        ) : null;
      }

    return (
        <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
    )
}
