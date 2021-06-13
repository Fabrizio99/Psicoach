import { Alerts } from "../helpers/Alerts";
import { handleWebServiceResponse, HttpRequest } from "../helpers/HttpRequest";
import { types } from "../types/types"
import { AppSettings, Services } from "../util/AppSeetings";
import { redirectTo } from "./redirect";


export const startLogin = (email,password)=>{
    return async(dispatch)=>{
        const body = {email,password}

        await handleWebServiceResponse(
            AppSettings.HTTP_VERBS.POST,
            Services.LOG_IN,
            body,
            async (response) => {
                const {token} = response;
                const profile = await HttpRequest.GET(Services.PROFILE,token);
                
                dispatch(login({token,profile}));
                localStorage.setItem(AppSettings.LOCAL_STORAGE.ID,JSON.stringify(token));        
            }
        )
    }
}

export const startRegister = (email,password,name)=>{
    return async(dispatch)=>{
        const body = {
            email,
            password
        }
        name.trim() && (body.name = name);

        await handleWebServiceResponse(
            AppSettings.HTTP_VERBS.POST,
            Services.REGISTER,
            body,
            async (response) => {
                Alerts.showSuccessMessage(response.message);
                dispatch(redirectTo('/auth'))
            }
        )
    }
}

export const logoutMiddleware = (token) => {
    return async (dispatch) => {
        await handleWebServiceResponse(
            AppSettings.HTTP_VERBS.DELETE,
            Services.LOG_OUT,
            token,
            async _ => {
                localStorage.removeItem(AppSettings.LOCAL_STORAGE.ID)
                dispatch(logout())
            }
        )
    }
}

export const login = (userInfo)=>({
    type: types.login,
    payload:userInfo
})

export const logout = () => ({
    type: types.logout
})