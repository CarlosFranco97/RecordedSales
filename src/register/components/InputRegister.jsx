
export const InputRegister = ({handleSubmit, onInputChange, compras, base, efectivo, monedas, store}) => {
    return (
    <div className="container mt-5 pt-5">
        <div className="row">
            <div className="col-12 col-sm-8 col-md-6 m-auto">
                <div className="card border-0 shadow" 
                  style={{backgroundColor: "#e3f2fd"}}
                 >
                 <div className="card-body">
                 <form onSubmit={handleSubmit}> 
            
                Ingrese compras totales:
                <input 
                onChange={onInputChange} 
                type="number" 
                name="compras" 
                value={compras}
                placeholder="compras"
                className="form-control mb-3"
                required
                />
                
                Ingrese valor de la base:
                <input 
                onChange={onInputChange}
                type="number" 
                name="base" 
                value={base}
                placeholder="base"
                className="form-control mb-3"
                required
                />
                
                Ingrese valor monedas:
                <input 
                onChange={onInputChange}
                type="number" 
                name="monedas"
                value={monedas}
                placeholder="monedas"
                className="form-control mb-3"
                required
                />
            
                Ingrese valor de efectivo:
                <input 
                onChange={onInputChange}
                type="number" 
                name="efectivo"
                value={efectivo}
                placeholder="efectivo"
                className="form-control"
                required
                />

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
           : <div className="mt-1 mb-3 text-center">
                <strong> Efectivo: </strong>
                {store.register[0]?.efectivo}
                <strong> Venta: </strong> 
                {store.register[0]?.ventas}
            </div>
        }
                </div>
            </div>
        </div>
     </div>
    )
    }