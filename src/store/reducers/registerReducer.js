import { types } from "./types"

export const initialStore = [{
    _id: new Date().getTime(),
    register: 
        { 
        date: new Date().getTime(),
        ventas: 3000000,
        efectivo: 1460000,
        compras: 1540000
        }
}]; 


export const registerReducer = (state, action) => {
    switch(action.type) {
        
        case types.addRegister: 
          return [  
              {_id: new Date().getTime(), register: action.payload},
                ...state
                ]
            
        
        case types.deleteRegister: 
            return state.filter(
                state => state._id !== action.payload
            )
        
        
        default: 
        state;
    }
}