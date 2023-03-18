import React from "react"
import ReactDOM from "react-dom/client"
import "./index.scss"
import Homepage from "./pages/Homepage/index.jsx"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<Homepage />
	</React.StrictMode>
)
