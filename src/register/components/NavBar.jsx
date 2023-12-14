
export const NavBar = () => {
  return (
    <div className="navbar navbar-dark mb-4 px-2" 
        style={{backgroundColor: "#e3f2fd"}}>
        <span className="navbar-brand">
            <i className="fa-solid fa-user"></i>
            &nbsp;
            <span className="text-dark"> Hola, Francos123 </span>
        </span>
        
            <button type="button" className="btn btn-dark ms-auto mx-2" data-mdb-ripple-init>
                Registro de cuadres
            </button>
                
            <button type="button" className="btn btn-dark" data-mdb-ripple-init>
                <i className="fas fa-sign-out-alt" />
                &nbsp;
                Salir
            </button>
    </div>
  )
}
