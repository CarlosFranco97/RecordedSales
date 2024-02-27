import { CSVLink } from "react-csv"

export const ExportRegisterToExcel = ({dataToExportExcel, store}) => {
  return (
    <CSVLink data={dataToExportExcel} filename="registros-caja.csv" className={`btn btn-outline-secondary mx-2 ${(store.register.length === 0) ? "disabled" : ""}`}>
        <i className="fa-solid fa-file-excel"></i>
        &nbsp;
        Exportar a Excel
    </CSVLink>
  )
}
