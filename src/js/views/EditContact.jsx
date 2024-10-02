import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";

const EditContact = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const contacto = store.contactos.find((e) => e.id === parseInt(id));

    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        address: ''
    });

    useEffect(() => {
        if (contacto) {
            setFormData({
                fullname: contacto.name,
                email: contacto.email,
                phone: contacto.phone,
                address: contacto.address
            });
        }
    }, [contacto]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async () => {
        const updatedContact = {
            id,
            name: formData.fullname,
            email: formData.email,
            phone: formData.phone,
            address: formData.address
        };
        await actions.updateContact(updatedContact);
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center fs-1">
                <p>Edit contact</p>
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
            
            <button type="button" className="btn btn-primary w-100" onClick={handleSubmit}>Save changes</button>
            <Link to="/">
                <button className="btn btn-secondary w-100 mt-2">Back to contacts</button>
            </Link>
        </div>
    );
};
export default EditContact;
