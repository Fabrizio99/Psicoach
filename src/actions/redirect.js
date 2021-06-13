import { types } from "../types/types";

export const redirectTo = (route) => ({
    type: types.redirect,
    payload: route
})
export const disableRedirect = _ => ({
    type: types.disableRedirect,
})