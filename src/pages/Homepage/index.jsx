import TempCalculator from "../../components/TempCalculator/index.jsx"
import "./index.scss"

function Homepage() {
	return (
		<div className="homepage">
			<h1>Temperature Converter</h1>

			<TempCalculator />
		</div>
	)
}

export default Homepage
