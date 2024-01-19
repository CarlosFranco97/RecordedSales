import { HashRouter } from "react-router-dom"
import { AppRouter } from "./router/AppRouter"
import { AuthProvider } from "./store/context/auth/AuthProvider"
import { RegisterProvider } from "./store/context"

export const RegistroCajaApp = () => {
  return (
        
        <AuthProvider>
          <RegisterProvider>
            <HashRouter>
              <AppRouter />
            </HashRouter>
          </RegisterProvider>  
        </AuthProvider>
  )
}
