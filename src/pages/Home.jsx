import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import storeReducer from "../store.js";
import { EditarContacto } from "./EditarContacto.jsx";


export const Home = () => {

    const { store, dispatch } = useGlobalReducer()

    let url = "https://playground.4geeks.com/contact/agendas/jorgesSanchez/contacts"

    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then((contactos) => contactos.json())
            .then(contactos => { dispatch({ type: "get_contact", payload: contactos.contacts }) })
    }, [])
    //delete, post

    const handleDelete = async (id) => {

        let response = await fetch(`${url}/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" }

        })
        if (response.ok) { dispatch({ type: "delete_contact", payload: id }) }
        else { console.log("Error en eliminar contacto") }

    }

    return (
        <>

            {store.contacts.map((contact, index) => (
                <div key={index}>
                    <div className="card mb-3 shadow-sm">
                        <div className="row g-0 align-items-center">
                            <div className="col-md-8">
                                <div className="card-body">
                                    <div className="col-md-2 text-center">
                                        <img
                                            src="https://cdn.pixabay.com/photo/2021/11/05/19/01/cappadocia-6771879_1280.jpg"
                                            className="img-fluid rounded-circle"
                                            alt=""
                                        />
                                    </div>
                                    <h5 className="card-title" >{contact.name}</h5>
                                    <p className="card-text mb-1">{contact.phone}</p>
                                    <p className="card-text mb-1">{contact.email}</p>
                                    <p className="card-text mb-1">{contact.address}</p>
                                    <div className="position-absolute top-0 end-0 m-2">
                                        <button className="btn btn-light btn-sm me-2">
                                            <i className="fas fa-pencil-alt"></i>
                                        </button>
                                        <button className="btn btn-light btn-sm" onClick={() => handleDelete(contact.id)}>
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </>
    );
}; 