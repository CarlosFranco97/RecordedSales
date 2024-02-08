import { useEffect } from "react"
import { useAuthStore } from "../../hooks/useAuthStore"
import { useForm } from "../../hooks/useForm"
import { ButtonLogin } from "../components/ButtonLogin"
import Swal from "sweetalert2"

const loginFormFields = {
  loginName: '',
  loginPassword: '' 
}

export const LoginPage = () => {

  const {user, status, errorMessage, startLogin} = useAuthStore();

  const {loginName, loginPassword, onInputChange: onLoginInputChange} = useForm(loginFormFields)
  
  const loginSubmit = (event) => {
    event.preventDefault();
    startLogin({name: loginName, password: loginPassword})
  }; 

  useEffect(() => {
    if(errorMessage !== undefined) {
      Swal.fire('Error en la autenticación', errorMessage, 'error')
    }
  }, [errorMessage])

  
  return (
      <div className="container animate__animated animate__fadeIn" style={{marginTop: "200px"}}>
        <div className="row">
          <div className="col-12 col-sm-8 col-md-6 m-auto">
            <div className="card border-0 shadow">
              <div className="card-body text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
              </svg>
                <form onSubmit={loginSubmit}>
                  <input 
                  type="text" 
                  className="form-control my-4 py-2"
                  placeholder="Username"   
                  value={loginName}
                  name="loginName"
                  onChange={onLoginInputChange}
                  /> 
               
                  <input 
                  type="password" 
                  className="form-control my-4 py-2" 
                  placeholder="Password"
                  value={loginPassword}
                  name="loginPassword"
                  onChange={onLoginInputChange}
                  />
                  <div className="text-center mt-3">
                   <ButtonLogin nameButton={'Ingresar'}/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
