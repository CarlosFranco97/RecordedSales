import { types } from "./types"

// export const initialStore = [{
//     _id: new Date().getTime(),
//     register: 
//         { 
//         date: new Date().getTime(),
//         ventas: 3000000,
//         efectivo: 1460000,
//         compras: 1540000
//         }, 
// }]; 

export const initialStore = {
    isLoadingRegister: true,
    register: [
      //registers
    ], 
}; 



export const registerReducer = (state, action) => {
    switch(action.type) {
        
        case types.addRegister: 
          return {
            ...state,
            register: action.payload
          }
          
           
        
        case types.loadingRegister: 
          return { 
            ...state,
            isLoadingRegister: false,
            register: action.payload
          }
         
        
          
        case types.deleteRegister: 
        return {
          ...state, 
          register: state.register.filter(
            registerItem => registerItem.id !== action.payload 
          )
         }
        
        
        default: 
        state;
    }
}