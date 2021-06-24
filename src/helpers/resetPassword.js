import { AppSettings, Services } from "../util/AppSeetings";
import { handleWebServiceResponse } from "./HttpRequest";

const actionType = {
    MAIL: 'verify_mail',
    SECRET: 'verify_secret',
    PASSWORD: 'change_password'
}
export const recoverPassword = async (step, form) => {
    let body;
    switch (step) {
        case 1:
            body = {
                email: form.email,
                action: actionType.MAIL
            }
            break
        case 2:
            body = {
                email: form.email,
                secret_response: form.response,
                action: actionType.SECRET
            }
            break
        case 3:
            body = {
                email: form.email,
                password: form.password,
                action: actionType.PASSWORD
            }
            break
        default:
    }
    if(!body) throw new Error('Step invalid')


    let response;
    const successResponse = await handleWebServiceResponse(
        AppSettings.HTTP_VERBS.POST,
        Services.RECOVERY,
        body,
        (resp)=>{
            response = resp
        }
    )

    return response || successResponse;
}
