import React, {Component} from "react";
import {
  HashRouter,
  NavLink
} from "react-router-dom";
import logo from "./imgs/logo.png";
import headerImg from "./imgs/flowers.jpg";
import menuIcon from "./imgs/menu.png"; {/*from smashicons at flaticon.com */}

class NavBar extends Component {
	render() {
		return (
				<HashRouter>
				<nav>
					<div id="header-banner"> 							{/* img overlay http://jsfiddle.net/sqJtr/ */}
						<figure className="header-img"> 	{/* How to crop imgs : https://medium.com/@elad/how-to-crop-images-with-css-b8471d402b1 */}
							<img src={headerImg}></img>
						</figure>
						<img src={logo} className="logo"></img>
					</div>

					    <img src={menuIcon} className="nav-menu-toggle" onClick={menuToggle}></img> {/* responsive navbar https://medium.freecodecamp.org/how-to-build-a-responsive-navbar-with-a-toggle-menu-using-flexbox-3438e1d08783 */}
				    	
					<div className="flex-container"> {/* DELETE flex-container class if it all works fine */}
						<ul className="nav-menu">
						  <li className="nav-menu-item"><NavLink to="/">Home</NavLink></li>
						  <li className="nav-menu-item"><NavLink to="/projects">Projects</NavLink></li>
						  <li className="nav-menu-item"><NavLink to="/publications">Publications & Graphics</NavLink></li>
						  <li className="nav-menu-item"><a href="about.asp">Professional</a></li>
						</ul>
					</div>

				</nav>
				</HashRouter>
			)
	}



}

function menuToggle (){
	const navs = document.querySelectorAll('.nav-menu');
	navs.forEach(nav => nav.classList.toggle('nav-menu-show'));
}

export default NavBar;