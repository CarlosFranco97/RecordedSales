import { useReducer } from "react"
import { initialStore, registerReducer } from "../../reducers"
import { RegisterContext } from "./RegisterContext"

export const RegisterProvider = ({children}) => {
  const [store, dispatch] = useReducer(registerReducer, initialStore)
  return (
    <RegisterContext.Provider value={[store, dispatch]}>
            {children}
    </RegisterContext.Provider>

  )

}
