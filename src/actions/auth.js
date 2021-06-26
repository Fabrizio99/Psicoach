import { Alerts } from "../helpers/Alerts";
import { handleWebServiceResponse, HttpRequest } from "../helpers/HttpRequest";
import { types } from "../types/types"
import { AppSettings, Services } from "../util/AppSeetings";
import { finishLoading, startLoading } from "./loading";
import { redirectTo } from "./redirect";


export const startLogin = (email,password)=>{
    return async(dispatch)=>{
        dispatch(startLoading())
        const body = {email,password}

        await handleWebServiceResponse(
            AppSettings.HTTP_VERBS.POST,
            Services.LOG_IN,
            body,
            async (response) => {
                const {token} = response;
                console.log('TIPO TOKEN: ', typeof token)
                const profile = await HttpRequest.GET(Services.PROFILE,token);
                
                dispatch(login({token,profile}));
                localStorage.setItem(AppSettings.LOCAL_STORAGE.ID,token);
            },
            _ => {
                dispatch(finishLoading())
            }
        )
    }
}

export const startRegister = (email,password,name, question, answer, phrase)=>{
    return async(dispatch)=>{
        dispatch(startLoading())
        const body = {
            email,
            password,
            secret_question: question,
            secret_response: answer,
            help_phrase: phrase
        }
        name.trim() && (body.name = name);

        await handleWebServiceResponse(
            AppSettings.HTTP_VERBS.POST,
            Services.REGISTER,
            body,
            (response) => {
                Alerts.showSuccessMessage(response.message,false)
                    .then( resp => {
                        dispatch(redirectTo('/auth'))
                    })
            },
            _ => {
                dispatch(finishLoading())
            }
        )
    }
}

export const logoutMiddleware = (token) => {
    console.log('token: ', token)
    console.log('token: ', "sdfsdf")
    return async (dispatch) => {
        await handleWebServiceResponse(
            AppSettings.HTTP_VERBS.DELETE,
            Services.LOG_OUT,
            token,
             _ => {
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