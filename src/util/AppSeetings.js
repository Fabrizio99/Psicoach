export const AppSettings = {
    END_POINT: 'https://psicouch-apiv2.herokuapp.com/',
    LOCAL_STORAGE: {
        ID : 'id',
        SELECT: 'select',
        SCHEDULE: 'schedule'
    },
    ERRORS: {
        UNKNOWN: 'Ocurrió un error, vuelva a intentar'
    },
    HTTP_VERBS: {
        GET: 'GET',
        POST: 'POST',
        PUT: 'PUT',
        DELETE: 'DELETE'
    },
    TYPE_INPUTS: {
        TEXT:     'text',
        NUMBER:   'number',
        EMAIL:    'email',
        PASSWORD: 'password',
        TEL:      'tel',
        FILE:     'file'
    },
    TYPE_NUMBERS: {
        AGE: 'age',
    },
    WEEK_DAYS: [
        {
            id: 1,
            name: 'Monday'
        },
        {
            id: 2,
            name: 'Tuesday'
        },
        {
            id: 3,
            name: 'Wednesday'
        },
        {
            id: 4,
            name: 'Thursday'
        },
        {
            id: 5,
            name: 'Friday'
        },
        {
            id: 6,
            name: 'Saturday'
        },
    ]
}
export const Services = {
    REGISTER             : AppSettings.END_POINT+'register',
    LOG_IN               : AppSettings.END_POINT+'auth/login',
    LOG_OUT              : AppSettings.END_POINT+'auth/logout',
    PROFILE              : AppSettings.END_POINT+'auth/profile',
    RECOVERY             : AppSettings.END_POINT+'auth/recovery',
    CROSSING             : AppSettings.END_POINT+'crossing',
    REGISTER_APPOINTMENT : AppSettings.END_POINT+'meeting/register',
    CALENDAR_APPOINTMENT : AppSettings.END_POINT+'meeting/calendar',
    PAYMENT_APPOINTMENT  : AppSettings.END_POINT+'meeting/payment',
}