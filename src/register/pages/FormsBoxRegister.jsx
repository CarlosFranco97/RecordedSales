import { useContext} from "react";
import { NavBar } from "../"
import { useForm } from "../../hooks/useForm";
import { RegisterContext } from "../../store/context";
import { types } from "../../store/reducers";

const formData = {
  
  compras: '', 
  base: '',
  monedas: '', 
  efectivo: ''
}

export const FormsBoxRegister = () => {


  const [store, dispatch] = useContext(RegisterContext);

  const {  compras, base, monedas, efectivo, formState, onInputChange  } 
    = useForm(formData);
    
  
  const handleSubmit = (event) => {
    event.preventDefault(); 

    const registro = {
      compras: parseInt(formState.compras), 
      base: parseInt(formState.base), 
      monedas: parseInt(formState.monedas), 
      efectivo: parseInt(formState.efectivo)
    }; 

    const {compras, base, monedas, efectivo} = registro; 

    if(monedas <= 0 || monedas > 60000) return;
    if(compras < 0 || base < 0 || efectivo < 0) return;  

    const efectivoTotal = (base + monedas + efectivo) - 500000

    const ventaTotal = efectivoTotal + compras

    const register =  { 
       date: new Date().getTime(),
      ventas: ventaTotal, 
       efectivo: efectivoTotal, 
       compras: compras 
      
      }
    
    // console.log(efectivoTotal); 
    // console.log(ventaTotal)

    dispatch({ 
      type: types.addRegister, 
      payload: register
    })
  };

  console.log(store)
  return (
    <>
    <NavBar/>
    <div className="container mt-5 pt-5">
        <div className="row">
        <div className="col-12 col-sm-8 col-md-6 m-auto">
          <div className="card" 
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
                <div className="mt-3 text-center">
                  <strong> Efectivo: </strong>
                   {store[0]?.register.efectivo}
                  <strong> Venta: </strong> 
                    {store[0]?.register.ventas}
                </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      {/* {
        store.map( store => 
            <div key={store._id}>
              <span>  VENTAS: {store.register.ventas}</span>
              <span> COMPRAS: {store.register.compras}</span>
              <span> EFECTIVO: {store.register.efectivo}</span>
            </div>
        )
      } */}
    </>
  )
}
