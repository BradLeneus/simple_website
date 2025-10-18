import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import React from "react";
import {Link} from "react-router-dom";
function NavbarPage(){

return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="navbar-brand">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/series" className="navbar-brand">
                                Series
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/signUp"  className="navbar-brand">
                                SignUp
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/login"  className="navbar-brand">
                                login
                            </Link>
                        </li>
                         <li style={{paddingLeft : 1000}} >
                            <Link to="/history"  className="navbar-brand">
                                myHistory
                            </Link>
                        </li>


                        <li >
                            <Link to="/tendence"  className="navbar-brand">
                                Trending
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
        {/*<nav className="navbar justify-content-between" id={"navBar"}>*/}





        {/*</nav>*/}
    </div>
);
}

export default NavbarPage;