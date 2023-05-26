import { useState } from 'react'
import './App.css'
import Botao from './Components/Botao'
import Visor from './Components/Visor'
import BotoesCalc from './Components/BotoesCalc';

function App() {

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
     <Botao texto="7" valor={7} eclick={HandleButon}/>
     <Botao texto="8" valor={8} eclick={HandleButon}/>
     <Botao texto="9" valor={9} eclick={HandleButon}/>
     <Botao texto="+" valor={'+'} eclick={HandleButon}/><br/>
     <Botao texto="4" valor={4} eclick={HandleButon}/>
     <Botao texto="5" valor={5} eclick={HandleButon}/>
     <Botao texto="6" valor={6} eclick={HandleButon}/>
     <Botao texto="-" valor={'-'} eclick={HandleButon}/><br/>
     <Botao texto="1" valor={1} eclick={HandleButon}/>
     <Botao texto="2" valor={2} eclick={HandleButon}/>
     <Botao texto="3" valor={3} eclick={HandleButon}/>
     <Botao texto="*" valor={'*'} eclick={HandleButon}/><br/>
     <Botao texto="0" valor={'0'} eclick={HandleButon}/>
     <Botao texto="/" valor={'/'} eclick={HandleButon}/>
     <Botao texto="=" valor={'='} eclick={HandleResult}/>
     <Botao texto="C" valor={'C'} eclick={HandleClear}/>
    </>
  )
}

export default App
