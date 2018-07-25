import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'

import Home from './Home'
import Users from './Users'

class App extends Component {
  render() {
    return (
    	<Router>
    		<div className="border">
		      <div className="container">
						<Route exact path="/" component={Home} />
						<Route path="/users/:id" component={Users} />
		      </div>
		     </div>
	    </Router>
    )
  }
}

export default App
