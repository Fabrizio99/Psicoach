export const AppSettings = {
    END_POINT: 'https://psicouch-apiv2.herokuapp.com/',
    LOCAL_STORAGE: {
        ID : 'id'
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
    }
}
export const Services = {
    REGISTER : AppSettings.END_POINT+'register',
    LOG_IN   : AppSettings.END_POINT+'auth/login',
    LOG_OUT  : AppSettings.END_POINT+'auth/logout',
    PROFILE  : AppSettings.END_POINT+'auth/profile',
    RECOVERY : AppSettings.END_POINT+'auth/recovery',
}