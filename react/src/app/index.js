import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
	render() {
		return (//For any component, you can only return ONE root element (descendant elements are ok)
		  <div className = "container">
		   <div className = "row">
		     <div className = "col-xs-10 col-xs-offset-1">
		       <Header/>
		       <h1>Some Text And More</h1>
		     </div>
		     <div className = "col-xs-10 col-xs-offset-1">
		       <Home/>
		       <h1>Some Text And More</h1>
		     </div>
		   </div>  
		  </div>
		);
	}
}

render(<App/>, window.document.getElementById("app"));
//render(<ComponentName/>, etc);