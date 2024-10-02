import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
// import HandlerClick from "./component/prueba";
import  Contact  from "./views/Contact.jsx"
import AddContact from "./views/AddContact.jsx";
import injectContext from "./store/appContext";
import EditContact from "./views/EditContact.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					{/* <Navbar /> */}
					<Routes>
						{/* formulario para agregar contactos  */}
						<Route path="/AddContact" element={ <AddContact />} />
						{/* por cada / redirige al elemento contact */}
						<Route path="/" element={<Contact />} />
						{/* <Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} /> */}
						{/* <Route path="/contact" element={<Contact/>} /> */}
						{/* editar contacto  */}
						<Route path="/edit/:id" element={<EditContact />} />
						{/* rutas no encontradas */}
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					{/* <Footer /> */}
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
