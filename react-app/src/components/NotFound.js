import { Link } from "react-router-dom"

export default function NotFound() {
	return (
		<div>
			<br></br>
			<h1>404, Page not found!</h1>
			<br></br>
			<Link to='/'>Go Back</Link>
		</div>
	)
}
