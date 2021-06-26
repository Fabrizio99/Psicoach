import { Calendar } from 'antd'
import React from 'react'
import { CalendarComponent } from '../appointment/Calendar'

export const ProfileScreen = () => {
    return (
        <div className="profile center-content">
            <div className="profile__block">
                <p className="profile__logo">F</p>
                <div className="profile__content">
                    <h3 className="profile__greeting">Hola Fabrizio!</h3>
                    <p className="profile__description">
                        Aquí puedes encontrar todo lo referente a tu información personal, citas y reservas.
                    </p>
                </div>
            </div>
            <div className="profile__block">
                <div className="profile__calendar">
                    <h4>Agenda</h4>
                    <CalendarComponent/>
                </div>
                <div className="profile__pending">
                    <h4>Citas/paquetes pendientes</h4>
                    <div className="profile__card">
                        <p className="profile__card__name">Paquete LUXURY</p>
                        <p className="profile__card__status">
                            Estado: Falta Pago
                        </p>
                    </div>
                    <div className="profile__card">
                        <p className="profile__card__name">Paquete DELUXE</p>
                        <p className="profile__card__status">
                            Estado: Procesando
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
