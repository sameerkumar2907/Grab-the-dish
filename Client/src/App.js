import React from "react"
import Navbar from "./Navbar"
import About from "./About"
import Home from "./Home"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.css';
import { Switch, Route } from "react-router-dom"


function App() {  
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/form" component={Form} /> */}
        {/* <Route exact path="/listen" component={Listen} /> */}
        <Route exact path="/about" component={About} />
        {/* <Route component={Error} /> */}
      </Switch>
      {/* <Switch>
        
      </Switch> */}
    </div>
  );
}

export default App;
