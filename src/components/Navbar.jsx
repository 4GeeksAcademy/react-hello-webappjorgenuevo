import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

		let navigate = useNavigate();

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary" onClick={()=>navigate("/add-contact")}>Añadir Contacto</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};