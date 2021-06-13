import { types } from "../types/types";

export const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case types.startLoading:
            return true
        case types.finishLoading:
            return false
        default:
            return state
    }
}