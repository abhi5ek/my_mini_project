import React from 'react'
import Fade from 'react-reveal/Fade'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbgcolor">
      <div className="container">
        <Fade top>
        <a className="navbar-brand" href="#">
            <div className='logo'>
              FreelancerHub
            </div> 
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          aria-controls="navbarSupportedContent"
          data-bs-target="#navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto ms-2 mb-lg-0 ">
           
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/home2">
                Home2
              </NavLink>
            </li> */}
            
            <li className="nav-item">
              <NavLink className="nav-link" to="projectadd">
                Add Project
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="browseproject">
                Browse Project
              </NavLink>
            </li>

          </ul>
          <ul className="navbar-nav mx-auto me-2 ">

            <li className="nav-item navtext">
              <button className='btn btn-success' >
              <NavLink className="nav-link" to="signup">
                Sign Up
              </NavLink>
              </button>
            </li>
            <li className="nav-item">
              <button className='btn' >
              <NavLink className="nav-link" to="login">
                Login
              </NavLink>
              </button>
            </li>

          </ul>
        </div>
        </Fade>
      </div>

    </nav>

  )
}

export default Navbar;