

export const DailyLogs = ({store, handleDelete}) => {
  
    return (
      <>
      { 
        (store.register.length === 0) ? <span className="animate__animated animate__fadeIn">Aún no hay registros...</span>
        :  
            store.register?.map( register =>  
            <div key={register.id} className={`alert alert-${(register.efectivo > 0) ?"primary":"danger"} 
                m-2 animate__animated animate__fadeIn border-0 shadow`} role="alert">
                    <div className="d-flex flex-row justify-content-between align-items-center">
                <span>
                    {register.date.toString()} 
                </span>
                <div className="d-flex flex-column align-items-center">  
                    <button
                    onClick={() => handleDelete(register.id)} 
                    className="btn btn-outline-danger">
                    <i className="fa-solid fa-trash"></i>
                    </button>
                    <span>
                        <strong>Compras: </strong> 
                        {register.compras}
                    </span>
                    <span>
                        <strong> Efectivo: </strong> 
                        {register.efectivo} 
                    </span>
                        <span>
                        <strong> Ventas: </strong> 
                        {register.ventas} 
                        </span>
                </div>
                </div>
            </div>
            )
        }; 
      </>
  )
}
