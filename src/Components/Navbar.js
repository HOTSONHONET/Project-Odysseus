import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import FireBaseAuth from '../Utils/Auth/FireBaseAuth';

export default function Navbar() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    FireBaseAuth.handleLogout(navigate);
    navigate("/");
  }

  return <nav className="navbar navbar-expand-lg wavebg wave" >
    <div className="d-flex flex-row justify-items-end ms-1">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse nav-items" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0" >
          <li>
            <Link className="nav-link item-link" to="/home">
              <h3>Home</h3>
            </Link>
          </li>
          <li>
            <Link className="nav-link item-link" to="/profile">
              <h3>Profile</h3>
            </Link>
          </li>
          <li onClick={handleLogOut}>
            <Link className="nav-link item-link">
              <h3>LogOut</h3>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav >;
}
