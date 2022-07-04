import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { handleWebServiceResponse } from "../../helpers/HttpRequest";
import { ModalManager } from "../../helpers/Modal";
import { AppSettings, Services } from "../../util/AppSeetings";
import { CalendarComponent } from "../appointment/Calendar";
import { PaymentModal } from "./PaymentModal";

export const ProfileScreen = () => {
  const { profile, token } = useSelector((state) => state.auth);
  const [date, setDate] = useState();
  const [paymentId, setPaymentId] = useState(undefined);
  const [calendar, setCalendar] = useState([]);
  const [pending, setPending] = useState([]);

  const setDateInformation = (year, month) => {
    setDate({
      year: year || moment().year(),
      month: month || moment().format("M"),
    });
  };

  useEffect(() => {
    setDateInformation();
  }, []);

  useEffect(() => {
    getCalendar();
  }, [date]);

  const getCalendar = async () => {
    if (!date) return;

    const params = [`year=${date.year}`, `month=${date.month}`];
    let response;
    await handleWebServiceResponse(
      AppSettings.HTTP_VERBS.GET,
      `${Services.CALENDAR_APPOINTMENT}?${params.join("&")}`,
      token,
      (resp) => (response = resp)
    );

    setPending(response?.pending || []);
    setCalendar(response?.calendar || []);
  };

  const handleCalendarChange = (d) => {
    setDateInformation(d.year, d.month);
  };

  const handleOpenModal = (index) => {
    ModalManager.openModal("payment");
    setPaymentId(pending[index]?.meeting_id);
  };

  return (
    <>
      <div className="profile center-content">
        <div className="profile__block">
          <p className="profile__logo">{profile.name[0]?.toUpperCase()}</p>
          <div className="profile__content">
            <h3 className="profile__greeting">Hola {profile.name}!</h3>
            <p className="profile__description">
              Aquí puedes encontrar todo lo referente a tu información personal,
              citas y reservas.
            </p>
          </div>
        </div>
        <div className="profile__block">
          <div className="profile__calendar">
            <h4 className="profile__calendar__title">Agenda</h4>
            <CalendarComponent
              calendar={calendar}
              onChange={(resp) => handleCalendarChange(resp)}
            />
          </div>
          <div className="profile__pending">
            <h4 className="profile__pending__title">Paquetes pendientes</h4>
            <div className="profile__pending__list">
              {pending &&
                pending.map((p, index) => (
                  <div
                    className="profile__card"
                    key={index}
                    onClick={(_) => handleOpenModal(index)}
                  >
                    <p className="profile__card__name">{p.name}</p>
                    <p className="profile__card__status">{p.description}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <PaymentModal
        id="payment"
        payment={paymentId}
        onComplete={(_) => setDateInformation()}
      />
    </>
  );
};
