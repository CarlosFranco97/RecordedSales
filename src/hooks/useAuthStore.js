import { useContext } from "react"
import { AuthContext } from "../store/context"
import boxRegisterApi from "../api/boxRegisterApi";
import { types } from "../store/reducers";
export const useAuthStore = () => {
    const [authStore, dispatch] = useContext(AuthContext);
    const {user, status, errorMessage} = authStore;
    
    const startLogin = async({name, password}) => {
        try {
            dispatch({ 
                type: types.authChecking
            });
            const {data} = await boxRegisterApi.post('/auth', {name, password}); 
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch({
                type: types.authLogin,
                payload: {
                    name: data.name, uid: data.uid
                }
            }); 

        } catch(error) {
            dispatch({
                type: types.errorCredentials,
                payload: 'Credenciales Incorrectas'
            }); 

            setTimeout(() => {
                dispatch({
                    type: types.clearErrorMessage
                })
            }, 10)
        }
    };

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token'); 
        if(!token) return dispatch({type: types.authLogout}); 

        try {
            const {data} = await boxRegisterApi.get('/auth/renew');
            localStorage.setItem('token', data.token); 
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch({
                type: types.authLogin, 
                payload: {
                    name: data.name, uid: data.uid
                }
            })
        } catch(error) {
            localStorage.clear(); 
            dispatch({
                type: types.authLogout
            })
        }
    }; 

    const startLogout = () => {
        localStorage.clear(); 
        dispatch({
            type: types.authLogout
        })
    }

    return {
        //Props
        user, 
        status, 
        errorMessage,
        //Methods
        startLogin, 
        checkAuthToken,
        startLogout
    }
}