import React, { Component } from 'react'
import ChatRoom from './components/ChatRoom'
import LogIn from './components/LogIn'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Router>
	      	<div>
	      		<ul>
			        <li><Link to="/login">Login</Link></li>
			    </ul>
	      		<ChatRoom />
	      		<Route exact path="/login" component={LogIn}/>
	      	</div>
        </Router>
      </div>
    );
  }
}

export default App
