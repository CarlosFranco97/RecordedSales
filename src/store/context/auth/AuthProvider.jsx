import { useReducer } from "react"
import { authReducer, initialAuth } from "../../reducers/authReducer"
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({children}) => {
    const [authStore, dispatch] = useReducer(authReducer, initialAuth)
    return (
        <AuthContext.Provider value={[authStore, dispatch]}>
            {children}
        </AuthContext.Provider>
    )
}