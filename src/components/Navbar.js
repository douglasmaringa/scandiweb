import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Link } from 'react-router-dom'
import "./navbar.css"



 const Navbar = ()=>{
    return(
            <div>
                <div className="navbar">
                   
                    <ul>
                        <li className="navbar-left"><Link to="/">Technology</Link></li>
                        <li><Link to="/cart">Clothes</Link></li>
                      
                        <li  className="navbar-center"><Link to="/cartscreen"><img src="/log.png" alt="" /></Link></li>
                        <li className="navbar-right"><Link to="/cartscreen">$ &or;</Link></li>
                        <li className="navbar-right"><Link to="/cartscreen"><img src="/cart.png" alt="" /></Link></li>
                    </ul>
                </div>
            </div>
   
        
    )
}

export default Navbar;