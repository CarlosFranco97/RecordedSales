import { useContext } from "react"
import { AuthContext, RegisterContext } from "../store/context"
import boxRegisterApi from "../api/boxRegisterApi";
import { types } from "../store/reducers";
import Swal from "sweetalert2";
import { convertDateToDays } from "../helpers/convertDateToDays";

export const useBoxRegisterEvent = () => {
    const [store, dispatch] = useContext(RegisterContext); 
    const [authStore] = useContext(AuthContext);
    const {user} = authStore; 

    const startSavingRegister = async({date, ventas, efectivo, compras}) => {

        try {

            const {data} = await boxRegisterApi.post('/events', {date, ventas, efectivo, compras})
                dispatch({
                    type: types.addRegister, 
                    payload: {
                        date, 
                        ventas, 
                        efectivo, 
                        compras,
                        id: data.eventoGuardado.id, 
                        user
                    }});

        } catch(error) {
            console.log(error); 
            Swal.fire('Error', error.response.data.msg, 'error')
        }
        };

    const startLoadingRegister = async() => {
        try {
            const {data} = await boxRegisterApi.get('/events');
            const eventDate = convertDateToDays(data.eventos) 
            dispatch({
                type: types.loadingRegister, 
                payload: eventDate
            }) 

        } catch (error) {   
            console.log('Error cargando eventos')
            console.log(error)
        }
    };

    const startDeletingRegister = async(id) => {
        try {
            await boxRegisterApi.delete(`/events/${id}`);
            dispatch({
                type: types.deleteRegister
            })
        } catch(error) {
            console.log(error); 
            Swal.fire('Error al eliminar', 'error')
        }
    }
    

    
    return {
        //Props
        ...store,
        store,
        user,
        //Methods
        startSavingRegister,
        startLoadingRegister,
        startDeletingRegister
    }
}