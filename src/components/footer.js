import React, { Component } from 'react';
import "../assets/estilos/pie.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="pie">
                <div className="centro">
         
                <ul >
        <li>
            <a href="#">  <FaFacebook/></a>
          
            
            
            </li>
  </ul>
  <ul>
        <li>
        <a href="#">  <FaInstagram/></a>
        </li>
  </ul>
  <ul>
        <li>
        <a href="#">  <FaLinkedin/></a>
        </li>
  </ul>
                </div>
     
  </div>
         );
    }
}
 
export default Footer;