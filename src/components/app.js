import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Contact from "./contact";
  import Nosotros from "./nosotros";
  import Home from "./home";
  

function App(){
    return(
<Router>

<div>
<div>

<div className="opacidad">
<header>
  <nav className="navbar navbar-expand-md navbar-light ">

    <div className="logo">
 <h1>Seasons</h1>
</div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link to="/">Home</Link> 
        </li>
        <li className="nav-item active">
<Link to="/nosotros">About</Link>
        </li>
        <li className="nav-item active">
          <Link to="/contact">Conctact</Link>
        </li>
      </ul>

</div>
  </nav>
</header>
</div>
           </div>
          

 <Switch>
     <Route path= "/contact" exact>
<Contact/>

     </Route>
     <Route path= "/nosotros" exact>
<Nosotros/>

     </Route>
     <Route path= "/" exact>
<Home/>

     </Route>
 </Switch>

</div>

</Router>
    );
}

export default App;