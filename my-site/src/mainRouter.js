import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import NavBar from "./navBar";
import Home from "./home";
 
class MainRouter extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <NavBar/>

          <div className="content">
            <Route path="/" component={Home}/>
            
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default MainRouter;