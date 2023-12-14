import { NavBar } from "../"

export const FormsBoxRegister = () => {
  
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <>
    <NavBar />
    <div className="container mt-5 pt-5">
        <div className="row">
        <div className="col-12 col-sm-8 col-md-6 m-auto">
          <div className="card" 
            style={{backgroundColor: "#e3f2fd"}}
          >
            <div className="card-body">
              <form onSubmit={handleSubmit}> 
                  Ingrese compras totales:
                  <input type="number" className="form-control mb-3"/>
                  Ingrese valor de la base:
                  <input type="number" className="form-control mb-3"/>
                  Ingrese valor monedas de 200:
                  <input type="number" className="form-control mb-3"/>
                  Ingrese valor de las monedas de 500:
                  <input type="number" className="form-control mb-3"/>
                  Ingrese valor de las monedas de 1000:
                  <input type="number" className="form-control mb-3"/>
                  Ingrese valor de efectivo:
                  <input type="number" className="form-control"/>

                  <div className="text-center mt-3">
                  <button type="submit" className="btn btn-dark" data-mdb-ripple-init data-mdb-ripple>
                    Obtener Valores
                  </button>
                  </div>
              </form>
                <div className="mt-3 text-center">
                  <strong> Efectivo: </strong>
                  1 990 000
                  <strong> Venta: </strong> 
                  3 000 000
                </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}
