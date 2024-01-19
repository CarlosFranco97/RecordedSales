import { Link } from "react-router-dom"
import { useContext } from "react"
import { types } from "../../store/reducers"
import { AuthContext } from "../../store/context"
export const NavBar = () => {

  const [authStore, dispatch] = useContext(AuthContext);
  return (
    <div className="navbar navbar-dark mb-4 px-2" 
        style={{backgroundColor: "#e3f2fd"}}>
        <span className="navbar-brand">
            <i className="fa-solid fa-user"></i>
            &nbsp; 
           <span className="text-dark"> Hola, {authStore.user?.name} </span> 
        </span>
              <Link to="/pages/BoxRegister" type="button" className="btn btn-dark ms-auto mx-2" data-mdb-ripple-init>
                Registro de cuadres
              </Link>
                
            <button 
              onClick={ () => dispatch({
                type: types.authLogout
              })}
              type="button" className="btn btn-outline-danger" data-mdb-ripple-init>
                <i className="fas fa-sign-out-alt" />
                &nbsp;
                Salir
            </button>
    </div>
  )
}
