import { types } from "./types"

export const initialAuth = {
    status: 'checking', //authenticated, not-authenticated
    user: { },
    errorMessage: undefined,
}

export const authReducer = (state, action) => {
    switch(action.type) {
        case types.authLogin:
            return {
                ...state, 
                user: action.payload, 
                status: 'authenticated'
            }
        case types.authLogout: 
            return {
                ...state,
                user: null,
                status: 'not-authenticated'
            }

        case types.authChecking: 
            return {
                ...state,
                user: {},
                errorMessage: undefined,
                status: 'checking'
            }

        case types.errorCredentials:
            return {   
                ...state, 
                user: {},
                status: 'not-authenticated',
                errorMessage: action.payload
            } 
        
        case types.clearErrorMessage: 
         return {
            ...state, 
            errorMessage: undefined
         }

        default: 
        state
    }
}