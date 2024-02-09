import { NavBar } from "../"
import { useForm } from "../../hooks/useForm";
import { InputRegister } from "../components/InputRegister";
import { useBoxRegisterEvent } from "../../hooks/useBoxRegisterEvent";
import Swal from "sweetalert2";
import "animate.css";
import { useEffect } from "react";

const formData = {
  
  compras: '', 
  base: '',
  monedas: '', 
  efectivo: ''
}

export const FormsBoxRegister = () => {

  const { store, startSavingRegister, startLoadingRegister } = useBoxRegisterEvent();

  const {  compras, base, monedas, efectivo, formState, onInputChange, onResetForm  } = useForm(formData);
      
  const handleSubmit = async(event) => {
    event.preventDefault(); 

    const registro = {
      compras: parseInt(formState.compras), 
      base: parseInt(formState.base), 
      monedas: parseInt(formState.monedas), 
      efectivo: parseInt(formState.efectivo)
    }; 

    const {compras, base, monedas, efectivo} = registro; 

    if(monedas <= 0 || monedas > 60000) return Swal.fire('Verifique nuevamente', 'El valor de las monedas en caja no puede ser superior a 60000', 'error')

    const efectivoTotal = (base + monedas + efectivo) - 500000
    
    const ventaTotal = efectivoTotal + compras
    
    if(efectivoTotal < -50000) return Swal.fire('Verifique nuevamente', 'El valor del efectivo no puede dar ese valor negativo', 'error')

    console.log('efectivo total', efectivoTotal)

    const register =  { 
       date: new Date().getTime(),
       ventas: ventaTotal, 
       efectivo: efectivoTotal, 
       compras: compras 
      };

    await startSavingRegister({date: register.date, ventas: register.ventas, efectivo: register.efectivo, compras: register.compras});
    
    await startLoadingRegister();

    onResetForm();
  };

  useEffect(() => {
    startLoadingRegister()
  }, [])

  return (
    <div className="animate__animated animate__fadeIn">
      <NavBar/>
      <InputRegister 
          handleSubmit={handleSubmit} 
          onInputChange={onInputChange}
          compras={compras}
          base={base}
          monedas={monedas}
          efectivo={efectivo}
          store={store}
        />
    </div>
  )
}
