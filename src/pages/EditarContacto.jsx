import React from 'react';
import { Link,useNavigate, useParams} from 'react-router-dom';
import { useState } from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer';

export const EditarContacto = () => {
  const { store, dispatch } = useGlobalReducer()
  const {id} = useParams()
  const contact = store.contacts.find((contact) => contact.id === parseInt(id) )
  console.log(id,contact)
  const [ name, setName ]=useState(contact.name)
  const [ phone, setPhone ]=useState(contact.phone)
  const [ email, setEmail ]=useState(contact.email)
  const [ address, setAddress ]=useState(contact.address)
  const navigate = useNavigate()
  
const handleSubmit = async (e)=>{
  e.preventDefault()
  const editedContact = {name,phone,email,address}
  const url =`https://playground.4geeks.com/contact/agendas/jorgesSanchez/contacts/${contact.id}`
  const response = await fetch(url,{
    method: "PUT",
    headers: {"Content-Type":"application/json"
    },
    body:JSON.stringify(editedContact)
  })
  if(response.ok){
    const contact = await response.json()
    dispatch({type:"edit_contact",payload:contact})
    navigate("/")
  }else{console.log("Error al guardar el contacto")}
}


  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center mb-4">Add a new contact</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter full name" value={name} onChange={(e)=>setName(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="tel" className="form-control" placeholder="Enter phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <input type="text" className="form-control" placeholder="Enter address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-2" >
                Save
              </button>
              <div className="text-start">
                <Link to="/" className="text-decoration-none">
                  or get back to contacts
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>)
}

