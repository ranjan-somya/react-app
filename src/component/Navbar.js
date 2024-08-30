import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>

      <nav className={`navbar navbar-expand-lg navbar-${props.mode } bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand fw-bolder" href="#" >TextUnits</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-2 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to='/about'>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/contact'>Contact</Link>
              </li> */}


            </ul>
            <form className="d-flex" role="search ">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div class={`form-check form-switch me-auto text-${props.mode === 'dark' ? 'light' : 'dark'} `}>
              <input class="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault" />
              <label class="form-check-label" for="flexSwitchCheckDefault">Enable DarkMode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
