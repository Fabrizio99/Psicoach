export const AppSettings = {
    END_POINT : 'https://psicouch-apiv2.herokuapp.com/',
    LOCAL_STORAGE : {
        ID : 'id'
    }
}
export const Services = {
    REGISTER : AppSettings.END_POINT+'register',
    LOG_IN   : AppSettings.END_POINT+'auth/login',
    PROFILE  : AppSettings.END_POINT+'auth/profile'
}