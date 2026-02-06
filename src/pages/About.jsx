import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div className="container-fluid min-vh-100 bg-light py-4">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top mb-4">
        <div className="container">
          <span className="navbar-brand h4 mb-0 fw-bold">About</span>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#aboutNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="aboutNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="crud">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Content Area */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
