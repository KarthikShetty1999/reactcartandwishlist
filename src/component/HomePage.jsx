import React from "react";
import {Link} from "react-router-dom";
import "../css/HomePage.css";
function Home(){
  
    return(
        <div className="HomeBody">
        <nav className='mainMenu' >
          <ul className='menuOptions'>
            <li className='listedMenu'>
              <Link className="Link" to="/"  >Home</Link>
            </li>
            <li className='listedMenu'>
              <Link className="Link" to="/location"  >Location</Link>
            </li>
            <li className='listedMenu'>
              <Link className="Link" to="/userlogin" >Login And SignUp</Link>
            </li>
           
          </ul>
          </nav>
          <div className="welcome"></div>
            <div className="iwelcome">
            <h1>Welcome</h1>
            </div>
      </div>  
    );
}
export default  Home;