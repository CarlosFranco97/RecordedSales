import { Link } from "react-router-dom"
import { useAuthStore } from "../../hooks/useAuthStore"


export const NavBar = () => {

  const {startLogout, user} = useAuthStore()

  return (


    <nav className="navbar navbar-expand-sm navbar-dark px-2 border-0 shadow" 
      style={{backgroundColor: "#e3f2fd"}}>
      <div className="container-fluid"> 
        <span className="navbar-brand">
          <i className="fa-solid fa-user"></i>
          &nbsp; 
        <span className="text-dark"> Hola, <strong> {user?.name} </strong> </span> 
        </span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
           <ul className="navbar-nav ms-auto">
              <li className="nav-item"> 
                  <Link to="/BoxRegister" type="button" className="btn btn-dark ms-auto m-1" data-mdb-ripple-init>
                    Registro de cuadres
                  </Link>
              </li>              
              <li className="nav-item">
                <button 
                    onClick={ () => startLogout()}
                    type="button" className="btn btn-outline-danger m-1" data-mdb-ripple-init>
                      <i className="fas fa-sign-out-alt" />
                      &nbsp;
                      Salir 
                </button>
              </li>
           </ul>

        </div>


      </div>
</nav> 
   

  )  
}
