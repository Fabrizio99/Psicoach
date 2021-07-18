import React from "react";
import { Calendar } from "antd";
import { Menu, Dropdown } from "antd";
import moment from "moment";

export const CalendarComponent = ({onChange, calendar}) => {
  const handlePanel = resp => {
    onChange({year: resp.year(), month: resp.format('M')})
  }


  function getListData(value) {
    const date = calendar.filter(c => {
      const parsedDate = c.date.split('T')[0]
      return moment(parsedDate).isSame(value,'day') &&  moment(parsedDate).isSame(value,'month') &&  moment(parsedDate).isSame(value,'year')
    })

    let listData;
    if(date){
      listData = date.map(d => ({ content: d.name, link: d.link_meet }))
    }

    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value);
    const menu = (
      <Menu>
        {listData.map((item) => (
          <Menu.Item key={item.content} className="calendar-item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={item.link}
            >
              {item.content}
            </a>
          </Menu.Item>
        ))}
      </Menu>
    );

    return listData.length ? (
      <Dropdown
        overlay={menu}
        placement="bottomLeft"
        className="dropdown-calendar"
      >
        <button className="button button--calendar">
          {listData.length} <span> Cita(s)</span>
        </button>
      </Dropdown>
    ) : (
      <small></small>
    );
  }


  return (
    <Calendar
      dateCellRender={dateCellRender}
      onPanelChange={handlePanel}
    />
  );
};
