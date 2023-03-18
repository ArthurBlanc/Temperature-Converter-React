import { useState } from "react"
import BoilingVerdict from "../BoilingVerdict/index.jsx"
import TempInput from "../TempInput/index.jsx"
import "./index.scss"

function TempCalculator() {
	const [temperature, setTemperature] = useState({ scale: "c", temperature: 0 })

	const toFahrenheit = (celsius) => {
		return (celsius * 9) / 5 + 32
	}

	const toCelsius = (fahrenheit) => {
		return ((fahrenheit - 32) * 5) / 9
	}

	const handleCelciusChange = (temperature) => {
		setTemperature({ temperature, scale: "c" })
	}

	const handleFahrenheitChange = (temperature) => {
		setTemperature({ temperature, scale: "f" })
	}

	const tryConvert = (temperature, convert) => {
		const input = parseFloat(temperature)
		if (Number.isNaN(input)) {
			return ""
		}
		const rounded = Math.round(convert(input) * 100) / 100
		return rounded
	}

	const celcius = temperature.scale === "c" ? temperature.temperature : tryConvert(temperature.temperature, toCelsius)
	const fahrenheit = temperature.scale === "f" ? temperature.temperature : tryConvert(temperature.temperature, toFahrenheit)

	return (
		<div>
			<TempInput id="Celcius" temperature={celcius} onTemperatureChange={handleCelciusChange} />
			<TempInput id="Fahrenheit" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />

			<BoilingVerdict celsius={celcius} />
		</div>
	)
}

export default TempCalculator
