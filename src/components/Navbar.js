import React from 'react'
import { Link, useLocation } from "react-router-dom";


function Navbar(props) {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          <div className= 'd-flex'>
            <div className='bg-primary rounded mx-2' onClick={()=> props.triggerHandling('primary')} style={{height:'30px', width:'30px', cursor: 'pointer'}}></div>
            <div className='bg-danger rounded mx-2' onClick={()=> props.triggerHandling('danger')} style={{height:'30px', width:'30px', cursor: 'pointer'}}></div>
            <div className='bg-warning rounded mx-2' onClick={()=> props.triggerHandling('warning')} style={{height:'30px', width:'30px', cursor: 'pointer'}}></div>
            <div className='bg-success rounded mx-2' onClick={()=> props.triggerHandling('success')} style={{height:'30px', width:'30px', cursor: 'pointer'}}></div>
          </div>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=> props.triggerHandling(null)}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
