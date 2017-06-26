import React from "react";//no need to import render

export class Header extends React.Component {
	render() {
		return(
		  <nav className = "navbar navbar-default">
		    <div className = "container">
		      <div className = "navbar-header">
		        <ul className = "nav navbar-nav">
		          <li><a href = "#">Link</a></li>
		        </ul>
		      </div>
		    </div>
		  </nav>
		);
	}
}