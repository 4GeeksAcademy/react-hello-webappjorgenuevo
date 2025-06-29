import React from 'react';


export const Formulario = () => {


  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center mb-4">Add a new contact</h2>
            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter full name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="tel" className="form-control" placeholder="Enter phone" />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <input type="text" className="form-control" placeholder="Enter address" />
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-2">
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

