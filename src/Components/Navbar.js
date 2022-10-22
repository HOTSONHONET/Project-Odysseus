import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <div className="fw-bold text-bg-primary">
        <Link className="navbar-brand-lg d-flex flex-row navbaricon" to="/" style={{ textDecoration: "None" }}>
          <img alt="" width="30vw" height="25vh" src="../favicon.png" className="d-inline-block m-1" />
        </Link>

      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0" >
          <li className="nav-item" >
            <Link className="nav-link" to="/" style={{ textDecoration: "None" }}>Home</Link>
          </li>
          <li className="nav-item" >
            <Link className="nav-link" to="/community" style={{ textDecoration: "None" }}>Community</Link>
          </li>
          <li className="nav-item" >
            <Link className="nav-link" to="/profile" style={{ textDecoration: "None" }}>Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav >;
}
