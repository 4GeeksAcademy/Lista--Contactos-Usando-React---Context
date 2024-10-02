import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import ContactForm  from "../component/ContactForm.jsx";
import { Navbar } from "../component/navbar.js";

const Contact = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchContactos();
    }, [actions]);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar el contacto?");
        if (confirmDelete) {
            actions.deleteContact(id);
        }
    };

    return (
        <>
            <Navbar />
            <div>
                {store.contactos.map((contact, index) => (
                    <ContactForm key={index} contact={contact} contactDelete={handleDelete} />
                ))}
            </div>
        </>
    );
};
export default Contact;