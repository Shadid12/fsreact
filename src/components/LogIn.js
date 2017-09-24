import React from 'react'

class LogIn extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			username: ''
		}

		this.handleChange = this.handleChange.bind(this)
    	this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange = (e) => {
		this.setState({username: e.target.value})
	}

	handleSubmit = (e) => {
		console.log(this.state.username)
		this.setState({username: ''})
	}

	render(){
		return(
		<div>
			Username: 
			<input  autoComplete="off" value={this.state.username} onChange={this.handleChange} />
			<button onClick={this.handleSubmit}>Login</button>
		</div>
		)
	}
}

export default LogIn