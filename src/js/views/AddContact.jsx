import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const AddContact = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        address: ''
    });
    const { actions } = useContext(Context);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = () => {
        const { fullname, email, phone, address } = formData;

        if (!fullname.trim() || !email.trim() || !phone.trim() || !address.trim()) {
            alert("ERROR! Contacto vacío");
        } else {
            const newContact = { name: fullname, email, phone, address };
            actions.addContact(newContact);
            alert("Contacto guardado");
            setFormData({ fullname: '', email: '', phone: '', address: '' });
        }
    };

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center align-items-center fs-1">
                    <p>Add new contact</p>
                </div>

                {['fullname', 'email', 'phone', 'address'].map((field, index) => (
                    <div className="mb-3" key={index}>
                        <label htmlFor={field} className="form-label">
                            {field.charAt(0).toUpperCase() + field.slice(1)}
                        </label>
                        <input
                            type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                            className="form-control"
                            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                            id={field}
                            value={formData[field]}
                            onChange={handleChange}
                        />
                    </div>
                ))}

                <button type="button" className="btn btn-primary w-100" onClick={handleSubmit}>Save</button>
                <Link to="/">
                    <a className="w-100 mt-2">Back to contacts</a>
                </Link>
            </div>
        </>
    );
};
export default AddContact;