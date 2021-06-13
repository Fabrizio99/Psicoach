import { Alerts } from "../helpers/Alerts";
import { HttpRequest } from "../helpers/HttpRequest";
import { types } from "../types/types"
import { AppSettings, Services } from "../util/AppSeetings";

export const startLogin = (email,password)=>{
    return async(dispatch)=>{
        const body = {email,password}
        try {
            const response = await HttpRequest.POST(Services.LOG_IN,body);
            
            if(response.errors){
                Alerts.showErrorMessage(response.errors[0]?.message);
                return;
            }

            const {token} = response;
            const profile = await HttpRequest.GET(Services.PROFILE,token);
            
            dispatch(login({token,profile}));
            localStorage.setItem(AppSettings.LOCAL_STORAGE.ID,JSON.stringify(token));
        } catch (error) {
            Alerts.showErrorMessage('Ocurrió un error, vuelva a intentar');
        }
    }
}

export const login = (userInfo)=>({
    type: types.login,
    payload:userInfo
})