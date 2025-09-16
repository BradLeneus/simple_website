
import React from "react";
import {Link} from "react-router-dom";
function Navbar(){

return (
    <div>
        <nav className="navbar justify-content-between" id={"navBar"}>





               <Link to="/">
                    <text className={"pagesName"}>Home</text>
                </Link>
                &nbsp;
                <Link to="/signUp" style={{textDecoration: "none"}}>
                    <text className={"pagesName"}>SignUp</text>
                </Link>
                &nbsp;
            <Link to="/series" style={{textDecoration: "none"}}>
                <text className={"pagesName"}>Series</text>
            </Link>











        </nav>
    </div>
);
}

export default Navbar;