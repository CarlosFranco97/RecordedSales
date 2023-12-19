const dataDummy = [{
  date: new Date().getTime(),
  _id: '1234',
  compras: 1560000,
  efectivo: 1440000,
  ventas: 3000000
}]
export const BoxRegister = () => {
  return (
    <>
      <div className="alert alert-success m-5" role="alert">
          
         { 
          dataDummy.map( data => 
            <div key={data._id} className="d-flex flex-row justify-content-between align-items-center">
             <span>
              {data.date}
            </span>
            <div className="d-flex flex-column align-items-center">  
              <button className="btn btn-outline-danger">
                <i className="fa-solid fa-trash"></i>
              </button>
                <span><strong>Compras:</strong> {data.compras}</span>
                <span> <strong> Efectivo: </strong> {data.efectivo} </span>
                <span><strong> Ventas: </strong> {data.ventas} </span>
            </div>
            </div>
          )}
      </div>
    </>
  )
}
