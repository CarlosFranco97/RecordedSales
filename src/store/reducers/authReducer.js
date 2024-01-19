import { types } from "./types"

export const initialAuth = {
    user: {
        id: 1234, 
        name: 'Francos1234'
    }
}

export const authReducer = (state, action) => {
    switch(action.type) {
        case types.authLogin:
            return {
                ...state, 
                user: initialAuth.user
            }
        case types.authLogout: 
            return {
                ...state,
                user: null
            }

        default: 
        state
    }
}