import { useState,useEffect } from "react";
import  Header  from "./components/Header";
import Button from "./components/Button";
import { formatearDinero,calcularTotalPagar } from "./helpers";


function App() {
  const [cantidad, setcantidad] = useState(10000);
  const [meses,setMeses] = useState(6);
  const [total,setTotal] = useState(calcularTotalPagar(cantidad,meses))
  const [pago,setPago] = useState(0)

// useEffect-------------------------------------------------

    useEffect(()=>{
      const resultadoTotalPagar = calcularTotalPagar(cantidad,meses);
      setTotal(resultadoTotalPagar); 
      },[cantidad,meses])

    useEffect(()=>{
    // Calcular el pago mensual 
    setPago(total/meses)
    },[total])

// State cantidad-------------------------------------------------

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;


  function handleChange(e) {
    setcantidad(parseInt(e.target.value));
    
  }    

  function handleClickDecrement() {
    const valor = cantidad - STEP;
  
    if (valor < MIN) {
      alert('Invalid Amount');
      return;
    } 

    setcantidad(valor)
  }

  function handleClickIncrement() {
    const valor = cantidad + STEP;
  
    if (valor > MAX) {
      alert('Invalid Amount');
      return;
    } 

    setcantidad(valor)
  }

  return (

    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      {/* {} - indica que tiene que ir la var que deseamos agregar  */}
      {/* se puede usar el operador ? ternario isntead if else */}

    <Header />

      <div className="flex justify-between my-4"> 
        <Button 
          operador="-"
          fn={handleClickDecrement}
        />
        <Button 
          operador="+"
          fn={handleClickIncrement}
        />


      </div>



      <input 
          type="range" 
          className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600 "
          onChange={handleChange}

        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}

      />

      <p className="text-center my-10 text-5xl font-extrabold text-indigo-700">
        {formatearDinero(cantidad)}
      </p>

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Elige un <span className=" text-indigo-600">plazo</span> a pagar
      </h2>

      <select className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold" 
      value={meses}


      // State Meses-------------------------------------------------

      onChange={e => setMeses(parseInt(e.target.value))}
      >
        <option value="6"> 6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="18">18 Meses</option>
        <option value="24">24 Meses</option>
      </select>


      <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Resumen <span className=" text-indigo-600">de pagos</span> 
        </h2>
      </div>
        
      <p className=" text-xl text-gray-500 text-center font-bold ">{meses} Meses</p>
      <p className=" text-xl text-gray-500 text-center font-bold ">{formatearDinero(total)} Total a Pagar</p>
      <p className=" text-xl text-gray-500 text-center font-bold ">{formatearDinero(pago)} Mensuales</p>

    </div>

    )
}

export default App
