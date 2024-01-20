import { useContext} from "react";
import { NavBar } from "../"
import { useForm } from "../../hooks/useForm";
import { RegisterContext } from "../../store/context";
import { types } from "../../store/reducers";
import { InputRegister } from "../components/InputRegister";

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
    <InputRegister 
        handleSubmit={handleSubmit} 
        onInputChange={onInputChange}
        compras={compras}
        base={base}
        monedas={monedas}
        efectivo={efectivo}
        store={store}
      />
    </>
  )
}
