import React from "react"
import { render } from "react-dom"

function Popup() {
	return (
		<div>
			<h1>Hello world!</h1>
			<p>please work 123</p>
		</div>
	)
}

render(<Popup />, document.getElementById("root"))
