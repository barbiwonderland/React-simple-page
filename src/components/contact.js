import React, { Component } from 'react';
import "../assets/estilos/contact.css";

class Contact extends Component {
    state = {  }
    render() { 
        return ( 

            <div>

<form>
    <label> Name </label>
    <input type="text" placeholder="Your name..."/>
    <label for="lname">E-mail</label>
    <input type="text" id="lname" name="lastname" placeholder="Your e-mail..."/>
    <label for="subject">Message</label>
    <textarea id="subject" name="subject" placeholder="Your message..." ></textarea>
    <input type="submit" value="SEND"/>

</form>

            </div>
          );
    }
}
 
export default Contact; 