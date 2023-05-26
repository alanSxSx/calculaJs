function Botao({ texto, valor, eclick }) {
	return (
		<>

			<button value={valor} onClick={eclick}>{texto}</button>

		</>
	)
}

export default Botao
