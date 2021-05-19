import { types } from "../types/types"

export const startLoginEmailPassword = ()=>{
    
}

export const login = (uid, displayName)=>({
    type: types.login,
    payload:{
        uid,
        displayName
    }
})