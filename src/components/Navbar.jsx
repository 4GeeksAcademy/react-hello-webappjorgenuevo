import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

		let navigate = useNavigate();

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				
				<div className="ml-auto">
					
						<button className="btn btn-primary" onClick={()=>navigate("add-contact")}>Añadir Contacto</button>
					
				</div>
			</div>
		</nav>
	);
};