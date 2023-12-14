import { HashRouter } from "react-router-dom"
import { AppRouter } from "./router/AppRouter"

export const RegistroCajaApp = () => {
  return (
    <HashRouter>
        <AppRouter />
    </HashRouter>
  )
}
