// const dataDummy = [{
//   date: new Date().getTime(),
//   _id: '1234',
//   compras: 1560000,
//   efectivo: 1440000,
//   ventas: 3000000
// }]

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useBoxRegisterEvent } from "../../hooks/useBoxRegisterEvent";
import { ExportRegisterToExcel } from "../components/exportRegisterToExcel";
import { useReactToPrint } from "react-to-print";
import { DailyLogs } from "../components/DailyLogs";
import {NavBarBoxRegister} from '../components/NavBarBoxRegister';

export const BoxRegister = () => {
  const { store, startLoadingRegister, startDeletingRegister } = useBoxRegisterEvent();
  
  const [startDate, setStartDate] = useState(''); 

  const [endDate, setEndDate] = useState('');

  const [filteredDates, setFilteredDates] = useState(); 

  const handleStartDateSelect = ({target}) => {
    setStartDate(target.value); 
  };
  
  const handleEndDateSelect = ({target}) => {
    setEndDate(target.value);
  }; 

  const handleSearchDates = () => {
      if(startDate.length === 0 && endDate.length === 0) return;
      const rangeDatesSelected = store.register?.filter( register => register.date >= startDate && register.date <= endDate );
      setFilteredDates(rangeDatesSelected);
    }
  
  const componentToPDF = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentToPDF.current,
    documentTitle: "registros-caja",
    onAfterPrint: () => alert("Registros guardados en PDF")
  });

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
     
    <NavBarBoxRegister 
      startDate={startDate} 
      endDate={endDate} handleStartDateSelect={handleStartDateSelect} 
      handleEndDateSelect={handleEndDateSelect}
      handleSearchDates={handleSearchDates}
    />
    <div 
      ref={componentToPDF}>

      <DailyLogs 
        store={store} 
        startDate={startDate}
        endDate={endDate}
        handleDelete={handleDelete} 
        filteredDates={filteredDates}
      /> 
      
      <div className="d-flex flex-row justify-content-around animate__animated animate__fadeIn fixed-bottom">
          <ExportRegisterToExcel dataToExcel={filteredDataToExportExcel} store={store} />
          <button className="btn btn-outline-danger" onClick={handlePrint}>
             Descargar PDF
          </button>
          <Link to="/" className="btn btn-outline-primary">
             Volver
          </Link>
      </div>
    </div>
   </>
  )
}
