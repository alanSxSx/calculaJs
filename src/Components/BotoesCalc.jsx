import Botao from "./Botao";

function BotoesCalc({Handlebuttons}) {


  return (
    <>
    <Botao texto="7" valor={7} eclick={Handlebuttons}/>
		<Botao texto="8" valor={8} eclick={Handlebuttons}/>
    <Botao texto="9" valor={9} eclick={Handlebuttons}/>
    <Botao texto="+" valor={'+'} eclick={Handlebuttons}/><br/>
    <Botao texto="4" valor={4} eclick={Handlebuttons}/>
    <Botao texto="5" valor={5} eclick={Handlebuttons}/>
    <Botao texto="6" valor={6} eclick={Handlebuttons}/>
    <Botao texto="-" valor={'-'} eclick={Handlebuttons}/><br/>
    <Botao texto="1" valor={1} eclick={Handlebuttons}/>
    <Botao texto="2" valor={2} eclick={Handlebuttons}/>
    <Botao texto="3" valor={3} eclick={Handlebuttons}/>
    <Botao texto="*" valor={'*'} eclick={Handlebuttons}/><br/>
    <Botao texto="0" valor={'0'} eclick={Handlebuttons}/>
    <Botao texto="/" valor={'/'} eclick={Handlebuttons}/>

    </>
  )
}

export default BotoesCalc
