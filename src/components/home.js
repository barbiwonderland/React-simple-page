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
 
              <img src="https://c.tadst.com/gfx/750x500/four-seasons.jpg?1"/>
<h4>Why seasons occur?</h4>
<p>
Seasons occur because of the tilt of the Earth’s axis. The axis of rotation of the Earth is not straight, but it is slightly tilted, which give rise to seasons.
earth-tilt
<h4>How do seasons change?</h4>
<p>
Our Earth completes one revolution in the orbit around the Sun in one year or 365 days. The sunlight that each part of the Earth receive, changes as the Earth moves in the orbit. This is because of tilt in the Earth axis of rotation. Due to this tilt, the Sun points northern hemisphere for half year and southern hemisphere for the second half year. As a result, the season of the Earth changes. The season of the northern hemisphere is opposite to that of the southern hemisphere.</p>
<h4>Interesting Facts</h4>
<p>
<li>Animals find the winter hard because it is difficult for them to find food.
</li>
<li>Plants lose their leaves in autumn in response to decreasing length of the day.
</li>
</p>

</p>
    
        <DemoCarousel/>
        
            </div>
           
         );

    }
}
 
export default Home;