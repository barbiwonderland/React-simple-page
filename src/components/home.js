import React, { Component } from 'react';
import "../assets/estilos/home.css";
import DemoCarousel from "./carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="home">
                <br/>
                <h4>Seasons</h4>        
                <img src="https://c.tadst.com/gfx/750x500/four-seasons.jpg?1"/>

    
        <DemoCarousel/>
        
            </div>
           
         );

    }
}
 
export default Home;