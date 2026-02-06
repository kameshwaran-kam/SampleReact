import React from 'react'

const Foot = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-auto">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="text-white mb-3">YourApp</h5>
            <p className="opacity-75">
              Building modern web applications with React, Django, and Bootstrap.
              Your one-stop solution for all your development needs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="text-white mb-3">Links</h6>
            <ul className="list-unstyled">
              <li><a href="/ab" className="text-light text-decoration-none opacity-75">About</a></li>
              <li><a href="/list" className="text-light text-decoration-none opacity-75">Products</a></li>
              <li><a href="/cart" className="text-light text-decoration-none opacity-75">Cart</a></li>
              <li><a href="/crud" className="text-light text-decoration-none opacity-75">Register</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="text-white mb-3">Services</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none opacity-75">Web Development</a></li>
              <li><a href="#" className="text-light text-decoration-none opacity-75">API Development</a></li>
              <li><a href="#" className="text-light text-decoration-none opacity-75">UI/UX Design</a></li>
              <li><a href="#" className="text-light text-decoration-none opacity-75">Consulting</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h6 className="text-white mb-3">Contact Info</h6>
            <div>
              <p className="mb-2 opacity-75">
                <i className="bi bi-geo-alt me-2"></i>
                Coimbatore, Tamil Nadu, India
              </p>
              <p className="mb-2 opacity-75">
                <i className="bi bi-telephone me-2"></i>
                +91 98765 43210
              </p>
              <p className="opacity-75">
                <i className="bi bi-envelope me-2"></i>
                hello@yourapp.com
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <hr className="my-4 opacity-25" />
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0 opacity-75">
              © 2026 YourApp. Built with ❤️ in Coimbatore. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#" className="text-light me-3 opacity-75 text-decoration-none">Privacy</a>
            <a href="#" className="text-light me-3 opacity-75 text-decoration-none">Terms</a>
            <a href="#" className="text-light opacity-75 text-decoration-none">Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Foot
