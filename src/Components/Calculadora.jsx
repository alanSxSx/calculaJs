import { useState } from 'react'
import '../App.css'
import Visor from '../Components/Visor'
import BotoesCalc from '../Components/BotoesCalc'
import Botao from '../Components/Botao'


function Calculadora() {

const [visor,setVisor] = useState('');


const HandleButon = (e) => {

const value = e.target.value

setVisor((prevVisor) => prevVisor + value);


}

const HandleResult = () => {

  try {
    const result = eval(visor);

    if (Number.isNaN(result) || !Number.isFinite(result)) {
      throw new Error('Erro de cálculo');
    }

    setVisor(String(result));
  } catch (error) {
    console.error('Erro ao calcular:', error);
  }

}

const HandleClear = () => {
  setVisor('')
}


  return (
    <>
    <h3>Calculadora</h3>
    <Visor nome="Visor1" tipo="Text" valor={visor} /><br/><br/>
    <BotoesCalc Handlebuttons={HandleButon}/>
    <Botao texto="=" valor={'='} eclick={HandleResult}/>
    <Botao texto="C" valor={'C'} eclick={HandleClear}/>
    </>
  )


}

export default Calculadora
