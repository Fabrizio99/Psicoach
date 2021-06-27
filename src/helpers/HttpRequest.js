import { AppSettings } from "../util/AppSeetings";
import { Alerts } from "./Alerts";

const transformReponse = async(response) => {
  const responseData = await response.json();
  return response.ok? responseData: ({errorHttp: true,...responseData})
}

export const handleWebServiceResponse = async (httpVerb, webService, body, onSuccess, onFinally) => {
  if(!webService){
    throw new Error('Web service must be provided')
  }
  if(!httpVerb){
    throw new Error('Http verb must be provided')
  }
  try {
    const response = await HttpRequest[httpVerb](webService,body);
    if(response.errors){
        Alerts.showErrorMessage(response.errors[0]?.message || AppSettings.ERRORS.UNKNOWN);
        onFinally && onFinally()
        return false
    }
    if(response.errorHttp){
        Alerts.showErrorMessage(response.message);
        onFinally && onFinally()
        return false
    }
    await onSuccess(response)
    onFinally && onFinally()
    return true
  } catch (error) {
    Alerts.showErrorMessage('Ocurrió un error, vuelva a intentar');
    onFinally && onFinally()
    return false
  }
}

export const HttpRequest = {
  POST: async (url, data) => {
    const response = await fetch(url, {
      method        : "POST",
      mode          : "cors",
      cache         : "no-cache",
      credentials   : "same-origin",
      headers       : {
        "Content-Type": "application/json",
      },
      redirect      : "follow",
      referrerPolicy: "no-referrer", //
      body          : JSON.stringify(data),
    });
    return await transformReponse(response)
  },
  GET : async (url,token)=>{
    const response = await fetch(
      url,
      {
        method : 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
          'Host': AppSettings.END_POINT
        }
      }
    );
    return await transformReponse(response)
  },
  DELETE: async (url,token)=>{
    const response = await fetch(
      url,
      {
        method : 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
          'Host': AppSettings.END_POINT
        }
      }
    );
    return await transformReponse(response)
  }
};
