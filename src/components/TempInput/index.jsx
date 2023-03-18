import "./index.scss"

function TempInput({ id, temperature, onTemperatureChange }) {
	const handleChange = (e) => {
		onTemperatureChange(e.target.value)
	}

	return (
		<div className="my-3">
			<div className="form-group">
				<label className="my-2" htmlFor={id}>
					Enter a temperature (in {id}):
				</label>
				<input type="number" id={id} value={temperature} onChange={handleChange} className="form-control" />
			</div>
		</div>
	)
}

export default TempInput
