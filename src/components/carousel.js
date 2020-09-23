import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://plantasyflores.online/wp-content/uploads/2017/08/sunflower-1627193_1920-copia.jpg" />
                    <p className="legend">Summer</p>
                </div>
                <div>
                    <img src="https://www.jardineriaon.com/wp-content/uploads/2019/03/Flores-de-narcisos-blancos-abiertas-totalmente.png" />
                    <p className="legend">Spring </p>
                </div>
                <div>
                    <img src="https://www.ecured.cu/images/1/1f/Aster_escocia_2.jpg" />
                    <p className="legend">Autumn</p>
                </div>
                <div>
                    <img src="https://paramijardin.s3.fr-par.scw.cloud/2017/10/IMG_20171026_170713544-e1509224989426-800x449.jpg" />
                    <p className="legend">Winter</p>
                </div>
            </Carousel>
        );
    }
};
 
export default DemoCarousel;