import { types } from "../types/types"

export const redirectReducer = (state = {}, action) => {
    switch (action.type) {
        case types.redirect:
            return {
                allowed: true,
                route:   action.payload
            }
        case types.disableRedirect:
            return {
                allowed: false
            }
        default:
            return state
    }    
}
