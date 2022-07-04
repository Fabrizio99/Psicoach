import { AppSettings } from "../util/AppSeetings";
import { Alerts } from "./Alerts";

const transformReponse = async (response) => {
  try {
    const responseData = await response.json();
    return response.ok ? responseData : { errorHttp: true, ...responseData };
  } catch (e) {
    return response.ok
      ? true
      : { errorHttp: true, message: "Ocurrió un error, vuelva a intentar" };
  }
};

export const handleWebServiceResponse = async (
  httpVerb,
  webService,
  body,
  onSuccess,
  onFinally,
  token
) => {
  if (!webService) {
    throw new Error("Web service must be provided");
  }
  if (!httpVerb) {
    throw new Error("Http verb must be provided");
  }

  try {
    const response = await HttpRequest[httpVerb](webService, body, token);
    if (response.errors) {
      Alerts.showErrorMessage(
        response.errors[0]?.message || AppSettings.ERRORS.UNKNOWN
      );
      onFinally && onFinally();
      return false;
    }
    if (response.errorHttp) {
      Alerts.showErrorMessage(response.message);
      onFinally && onFinally();
      return false;
    }
    onSuccess && (await onSuccess(response));
    onFinally && onFinally();
    return true;
  } catch (error) {
    Alerts.showErrorMessage("Ocurrió un error, vuelva a intentar");
    onFinally && onFinally();
    return false;
  }
};

export const HttpRequest = {
  POST: async (url, data, token) => {
    const headers = {
      "Content-Type": "application/json",
    };
    if (token) {
      headers["Authorization"] = "Bearer " + token;
    }

    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      redirect: "follow",
      referrerPolicy: "no-referrer", //
      body: JSON.stringify(data),
      headers,
    });
    return await transformReponse(response);
  },
  GET: async (url, token) => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        Host: AppSettings.END_POINT,
      },
    });
    return await transformReponse(response);
  },
  DELETE: async (url, token) => {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        Host: AppSettings.END_POINT,
      },
    });
    return await transformReponse(response);
  },
};
