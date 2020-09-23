import React from 'react';
import ReactDOM from 'react-dom';
import Footer from "./components/footer";
import App from "./components/app";
import "./assets/estilos/nav.css";
import DemoCarousel from "./components/carousel";








ReactDOM.render(
  <React.StrictMode>
   <App/>
   <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);


