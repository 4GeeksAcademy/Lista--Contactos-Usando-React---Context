import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			{/* <Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div> */}

			<Link to="/contact">
				<span className="navbar-brand mb-0 h1">List Contact</span>
			</Link>
			<Link to="/">
				<div>
					<button type="button" className="btn btn-primary">Add new contact</button>
				</div>
			</Link>

		</nav>


	);
};
