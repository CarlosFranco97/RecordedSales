import { Link } from "react-router-dom"

export const InputRegister = ({handleSubmit, onInputChange, compras, base, efectivo, monedas, store}) => {
    return (
    <div className="container mt-5 pt-5">
            <div className="col-12 col-sm-8 col-md-6 m-auto">
                <div className="card border-0 shadow p-4" 
                  style={{backgroundColor: "#e3f2fd"}}  
                 >
                 <div className="card-body">
                 <form onSubmit={handleSubmit}> 
                <div className="form-floating">
                    <input 
                        onChange={onInputChange} 
                        type="number" 
                        name="compras" 
                        value={compras}
                        placeholder="compras"
                        className="form-control mb-3"
                        required
                        id="inputCompras"
                    />
                    <label htmlFor="inputCompras">Ingrese compras totales</label>
                </div>
                <div className="form-floating"> 
                    <input 
                        onChange={onInputChange}
                        type="number" 
                        name="base" 
                        value={base}
                        placeholder="base"
                        className="form-control mb-3"
                        id="inputBase"
                        required
                        />
                    <label htmlFor="inputBase">Ingrese valor de la base</label>
                </div>
                <div className="form-floating">
                    <input 
                        onChange={onInputChange}
                        type="number" 
                        name="monedas"
                        value={monedas}
                        placeholder="monedas"
                        className="form-control mb-3"
                        id="inputMonedas"
                        required
                    />
                    <label htmlFor="inputMonedas">Ingrese valor monedas</label>
                </div>
                 <div className="form-floating">
                    <input 
                        onChange={onInputChange}
                        type="number" 
                        name="efectivo"
                        value={efectivo}
                        placeholder="efectivo"
                        className="form-control"
                        id="inputEfectivo"
                        required
                    />
                    <label htmlFor="inputEfectivo">Ingrese valor de efectivo</label>
                </div>
                <div className="text-center mt-3">
                <button 
                type="submit" 
                className="btn btn-dark" data-mdb-ripple-init data-mdb-ripple>
                Obtener Valores
                </button>
                </div>
            </form>
        </div>
        {
           (store.register.length === 0) ? <span className="text-center mb-3">Aún no hay registros</span>
           : <Link to="/BoxRegister" className="mt-1 mb-3 text-center">
                Mirar registros 
            </Link>
        }
                </div>
            </div>
        </div>
    )
    }