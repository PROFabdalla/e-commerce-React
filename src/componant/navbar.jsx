import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const state = useSelector((state)=> state.cartreducer)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            ABDALLAH
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              
            </ul>
                <div className="buttons">
                    <NavLink to="/users" className="ms-3 ">
                       <i className="fa fa-sign-in me-2" aria-hidden="true"></i>signin</NavLink>
                    <NavLink to="/register" className="ms-3">
                       <i className="fa fa-user-circle me-2" aria-hidden="true"></i></NavLink>
                    <NavLink to="/cart" className="ms-3">
                       <i className="fa fa-cart-arrow-down me-2" aria-hidden="true"></i>cart({state.length})</NavLink>
                </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
