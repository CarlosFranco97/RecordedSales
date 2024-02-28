import { CSVLink } from "react-csv"

export const ExportRegisterToExcel = ({dataToExcel, store}) => {

    return (
        <CSVLink data={dataToExcel} filename="registros-caja.csv" className={`btn btn-outline-success mx-2 ${(store.register.length === 0) ? "disabled" : ""}`}>
            <i className="fa-solid fa-file-excel"></i>
            &nbsp;
            Exportar a Excel
        </CSVLink>
  )
}
