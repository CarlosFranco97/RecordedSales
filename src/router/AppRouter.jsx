import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage } from "../auth";
import { BoxRegister, FormsBoxRegister } from '../register'
import { getEnvVariables } from "../helpers";
import { useAuthStore } from "../hooks/useAuthStore";
import { useEffect } from "react";

export const AppRouter = () => {
    const {status, checkAuthToken} = useAuthStore();
    
    useEffect(() => {
      checkAuthToken(); 
    }, [])

    if(status === 'checking') {
      return <h3>Cargando...</h3>
    }

    return (
    <>
        <Routes>
            {
            (status === 'not-authenticated') 
            ? (
              <>
              <Route path="/auth/*" element={<LoginPage />} />
              <Route path="/*" element={<Navigate to="/auth/login"/>} /> 
              </>
            )
             
            : (
                <>
                <Route path="/*" element={<FormsBoxRegister />}/>
                <Route path="/BoxRegister" element={<BoxRegister />} />
                <Route path="/*" element={<Navigate to="/auth/login"/>}/>
                </>
              ) 
            
            }
            
        </Routes>
    </>
  )
}
