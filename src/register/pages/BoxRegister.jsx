// const dataDummy = [{
//   date: new Date().getTime(),
//   _id: '1234',
//   compras: 1560000,
//   efectivo: 1440000,
//   ventas: 3000000
// }]

import { useContext } from "react"
import { RegisterContext } from "../../store/context"
import { types } from "../../store/reducers";
import { Link } from "react-router-dom";

export const BoxRegister = () => {
  const [store, dispatch] = useContext(RegisterContext);
  return (
    <>
    
    {
      (store.length == 0) ? <span>Aún no hay registros...</span>
      :  
      store?.map( store => 

      <div key={store._id} className="alert alert-success m-2" role="alert">
           
            <div className="d-flex flex-row justify-content-between align-items-center">
              <span>
                {store.register.date} 
              </span>
              <div className="d-flex flex-column align-items-center">  
                <button
                  onClick={() => dispatch({
                    type: types.deleteRegister,
                    payload: store._id
                  })} 
                  className="btn btn-outline-danger">
                  <i className="fa-solid fa-trash"></i>
                </button>
                  <span>
                    <strong>Compras:</strong> 
                      {store.register?.compras}
                  </span>
                  <span>
                    <strong> Efectivo: </strong> 
                      {store.register?.efectivo} 
                  </span>
                    <span>
                    <strong> Ventas: </strong> 
                      {store.register?.ventas} 
                    </span>
                  
              </div>
            </div>
          
          
      </div>

      )
      }
      <div className="d-flex flex-row justify-content-center">
        <Link to="/" className="btn btn-primary">
          Volver
        </Link>
      </div>

    </>
  )
}
