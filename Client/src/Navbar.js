import React from "react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeadphones } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom"
function Navbar(props){
    return(
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-12 mx-auto">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <NavLink exact className="navbar-brand active" to="/"><i>Grab-the-dish</i></NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <NavLink exact activeClassName="activeLink" className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink exact activeClassName="activeLink" className="nav-link active" aria-current="page" to="/about">About</NavLink>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div> 
    )
}

export default Navbar