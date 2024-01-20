import { ButtonLogin } from "../components/ButtonLogin"

export const LoginPage = () => {
  return (
      <div className="container pt-5" style={{marginTop: "200px"}}>
        <div className="row">
          <div className="col-12 col-sm-8 col-md-6 m-auto">
            <div className="card">
              <div className="card-body">
                <form>
                  <div className="text-center">
                    Ingreso
                  </div>
                  <input 
                  type="text" 
                  className="form-control my-3 py-2"
                  placeholder="Username"                  
                  /> 
               
                  <input 
                  type="password" 
                  className="form-control my-3 py-2" 
                  placeholder="Password"
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
