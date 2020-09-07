import React, { Component } from 'react';
import "../assets/estilos/contact.css";

class Contact extends Component {
    state = {  }
    render() { 
        return ( 

            <div>

<form>
    <label> Nombre y apellido:</label>
    <input type="text" placeholder="Tu nombre..."/>
    <label for="lname">E-mail</label>
    <input type="text" id="lname" name="lastname" placeholder="Tu e-mail..."/>
    <label for="subject">Mensaje</label>
    <textarea id="subject" name="subject" placeholder="Tu mensaje..." ></textarea>
    <input type="submit" value="Enviar"/>

</form>

            </div>
          );
    }
}
 
export default Contact; 