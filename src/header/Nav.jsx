import React from 'react'
import { Link } from 'react-router-dom'
import Demo from '../pages/Demo'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/ab">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Menu</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/list">List</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/crud">Crud</Link>
          </li>
        </ul>
        <Demo />
      </div>
    </nav>
  )
}

export default Nav
