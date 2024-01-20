import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage } from "../auth";
import { BoxRegister, FormsBoxRegister } from '../register'

export const AppRouter = () => {
    const authStatus = 'authenticated'
    return (
    <>
        <Routes>
            {
            (authStatus === 'not-authenticated') 
            ? <Route path="/auth/*" element={<LoginPage />}/>
            : <Route path="/*" element={<FormsBoxRegister />}/>
            }
            <Route path="/*" element={<Navigate to="/auth/login"/>}/>
            <Route path="/pages/BoxRegister" element={<BoxRegister/>}/>
        </Routes>
    </>
  )
}
