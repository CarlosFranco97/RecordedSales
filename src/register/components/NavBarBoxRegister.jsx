import { Link } from "react-router-dom"
import { useAuthStore } from "../../hooks/useAuthStore"
import { useState } from "react";
import dayjs from "dayjs";

export const NavBarBoxRegister = ({startDate, endDate, handleStartDateSelect, handleEndDateSelect, handleSearchDates}) => {
  
  // const {startLogout} = useAuthStore();
  
  // console.log({startDate, endDate}); 

  const maxInputDate = dayjs(new Date()).format('YYYY-MM-DD'); 
  
  
  return (


    <nav className="navbar navbar-expand-sm navbar-dark px-2 border-0 shadow" 
      style={{backgroundColor: "#e3f2fd"}}>
      <div className="container-fluid"> 
        <span className="navbar-brand d-flex flex-row">
            <input 
                value={startDate}
                onChange={handleStartDateSelect} 
                type="date" 
                name="date"
                className="form-control col-sm-1"
                max={maxInputDate}
                placeholder="From"
                style={{width: "140px"}}
              /> 
              <span className="d-flex justify-content-center align-items-center text-black mx-2"> - </span>
              <input 
                  value={endDate}
                  onChange={handleEndDateSelect} 
                  type="date" 
                  name="date"
                  className="form-control"
                  min={startDate}
                  max={maxInputDate}
                  placeholder="To"
                  style={{width: "140px"}}
              /> 

              <button className="mx-2 rounded btn btn-outline-dark" value="search" onClick={handleSearchDates}>
                <i className="fa-solid fa-magnifying-glass" />
              </button>
             
        </span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="collapse navbar-collapse" id="menu"> */}
           {/* <ul className="navbar-nav ms-auto">
              <li className="nav-item"> 
                  <Link to="/BoxRegister" type="button" className="btn btn-dark ms-auto m-1" data-mdb-ripple-init>
                    Registro de cuadres
                  </Link>
              </li>              
              <li className="nav-item">
                <button 
                    onClick={ () => startLogout()}
                    type="button" className="btn btn-outline-danger m-1" data-mdb-ripple-init>
                      <i className="fas fa-sign-out-alt" />
                      &nbsp;
                      Salir 
                </button> */}
              {/* </li>
           </ul> */}

        {/* </div> */}


      </div>
</nav> 
   

  )  
}
