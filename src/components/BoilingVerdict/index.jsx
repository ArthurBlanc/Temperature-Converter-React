import "./index.scss"

function BoilingVerdict({ celsius = 0 }) {
	if (celsius >= 100) {
		return <div className="alert alert-success">The water is boiling</div>
	} else {
		return <div className="alert alert-info">The water is not boiling</div>
	}
}

export default BoilingVerdict
