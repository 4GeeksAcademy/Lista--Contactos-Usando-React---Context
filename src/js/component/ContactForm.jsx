import React from "react";
import { Link } from "react-router-dom";
// import userImagen from "../../img/user.png";

const ContactForm = ({ contact, contactDelete }) => {
    return (
        <div className="card container">
            <div className="d-flex">
                <div className="col-2 d-flex align-items-center">
                    <img src="https://picsum.photos/id/237/150/150" className="img-fluid rounded-circle" alt="Contact" />
                </div>
                <div className="d-flex justify-content-between w-100 px-3">
                    <div className="card-body m-0">
                        <h3>{contact.name}</h3>
                        <p><i className="fa fa-envelope me-2"></i>{contact.email}</p>
                        <p><i className="fa fa-phone me-2"></i>{contact.phone}</p>
                        <p><i className="fa fa-map-marker-alt me-2"></i>{contact.address}</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <Link to={`/edit/${contact.id}`} className="btn btn-primary me-2">
                            <i className="fa fa-edit"></i>
                        </Link>
                        <button className="btn btn-danger" onClick={() => contactDelete(contact.id)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ContactForm;
