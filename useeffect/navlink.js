import React from "react";
import { NavLink } from "react-router-dom";
import "./axiosdata.css"
const Navbar = () => {
  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    
       
          <span className="nav-style">    
          <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
           
              <NavLink className="nav-link" to="/form">
                Users
              </NavLink>
           
              <NavLink className="nav-link" to="/axios">
                Jewelry
              </NavLink>
          
     <input /> <button>serach</button></span>
          
    </nav>
  );
};

export default Navbar;

