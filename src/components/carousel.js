import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel'
 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://miro.medium.com/max/3840/1*oxzfllcH_OqAppRptmWa8A.jpeg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Spring</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://s1.1zoom.me/big0/312/Summer_Coast_Sea_Sky_508163.jpg"
                alt="Third slide"
              />
          
              <Carousel.Caption>
                <h3>Summer</h3>
             
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.britannica.com/88/137188-050-8C779D64/Boston-Public-Garden.jpg"
                alt="Third slide"
              />
          
              <Carousel.Caption>
                <h3>Autumn</h3>
              
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQURKjKxQmHE6kBzm2Xs2P1HBONKdLn2txosw&usqp=CAU"
                alt="Third slide"
              />
          
              <Carousel.Caption>
                <h3>Winter</h3>
              
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
    }
};
 
export default DemoCarousel;