import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="d-flex flex-row justify-content-end navbar navbar-light bg-dark mb-3">
			{/* <Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div> */}

			{/* <Link to="/contact">
				<span className="navbar-brand mb-0 h1">List Contact</span>
			</Link> */}
			<Link to="/form">
				<div>
					<button type="button" className="btn btn-primary mx-auto">Add new contact</button>
				</div>
			</Link>


		</nav>


	);
};
