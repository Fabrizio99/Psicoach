import { AppSettings } from "../util/AppSeetings";

export const HttpRequest = {
  POST: async (url, data) => {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer", //
      body: JSON.stringify(data),
    });
    return await response.json();
  },
  GET : async (url,token)=>{
    const response = await fetch(
      url,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
          'Host': AppSettings.END_POINT
        }
      }
    );
    return await response.json();
  }
};
