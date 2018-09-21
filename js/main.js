import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";

class Navigation extends component {


	render() {
		<HashRouter>
		<nav>
			<div id="header-banner"> 							{/*img overlay http://jsfiddle.net/sqJtr/ */}
				<figure class="header-img"> 	{/*How to crop imgs : https://medium.com/@elad/how-to-crop-images-with-css-b8471d402b1 */}
					<img src="./imgs/flowers.jpg">
				</figure>
				<img src="./imgs/logo.png" class="logo">
				</div>

			    <i class="nav-menu-toggle">dojob</i> {/*responsive navbar https://medium.freecodecamp.org/how-to-build-a-responsive-navbar-with-a-toggle-menu-using-flexbox-3438e1d08783 */}
		    	
				<div class="flex-container"> {/*DELETE flex-container class if it all works fine*/}
					<ul = class="nav-menu">
					  <li class="nav-menu-item"><a href="default.asp">Home</a></li>
					  <li class="nav-menu-item"><a href="news.asp">Projects</a></li>
					  <li class="nav-menu-item"><a href="contact.asp">Publications & Graphics</a></li>
					  <li class="nav-menu-item"><a href="about.asp">Professional</a></li>
					</ul>
				</div>
			</div>
		</nav>
		</HashRouter>
	}
}
