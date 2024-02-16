// const dataDummy = [{
//   date: new Date().getTime(),
//   _id: '1234',
//   compras: 1560000,
//   efectivo: 1440000,
//   ventas: 3000000
// }]

import { Link } from "react-router-dom";
import { useBoxRegisterEvent } from "../../hooks/useBoxRegisterEvent";
import { useEffect } from "react";
import { CSVLink } from "react-csv";

export const BoxRegister = () => {
 
  const { store, startLoadingRegister, startDeletingRegister } = useBoxRegisterEvent();

  const filteredDataToExportExcel = store.register?.map(register => ({
    Día: register.date, 
    Compras: register.compras,
    Efectivo: register.efectivo,
    Ventas: register.ventas
  })); 

  
  const handleDelete = async(id) => {
      await startDeletingRegister(id);
        startLoadingRegister()
  };

  
  useEffect(() => {
    startLoadingRegister()
  }, [])


  return (
    <>
     {
      (store.register.length === 0) ? <span className="animate__animated animate__fadeIn">Aún no hay registros...</span>
      :  
        Object.keys(store.register)?.map( key =>  
          <div key={store.register[key].id} className={`alert alert-${(store.register[key].efectivo > 0) ?"primary":"danger"} m-2 animate__animated animate__fadeIn border-0 shadow`} role="alert">
                <div className="d-flex flex-row justify-content-between align-items-center">
              <span>
                {store.register[key].date.toString()} 
              </span>
              <div className="d-flex flex-column align-items-center">  
                <button
                  onClick={() => handleDelete(store.register[key].id)} 
                  className="btn btn-outline-danger">
                  <i className="fa-solid fa-trash"></i>
                </button>
                  <span>
                    <strong>Compras: </strong> 
                      {store.register[key].compras}
                  </span>
                  <span>
                    <strong> Efectivo: </strong> 
                      {store.register[key].efectivo} 
                  </span>
                    <span>
                    <strong> Ventas: </strong> 
                      {store.register[key].ventas} 
                    </span>
              </div>
            </div>
      </div> )
      }; 

      <div className="d-flex flex-row justify-content-center animate__animated animate__fadeIn">
        <CSVLink data={filteredDataToExportExcel} filename="registros-caja.csv" className={`btn btn-outline-secondary mx-2 ${(store.register.length === 0) ? "disabled" : ""}`}>
          Exportar a PDF
        </CSVLink>
        <Link to="/" className="btn btn-outline-primary">
          Volver
        </Link>
      </div>

    </>
  )
}
