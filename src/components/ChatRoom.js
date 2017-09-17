import React from 'react'
import { socketConnect } from 'socket.io-react'

class ChatRoom extends React.Component {
	render() {
		return(
			<div>
				<ul id="messages"></ul>
			    <form action="">
			      <input id="m" autoComplete="off" /><button>Send</button>
			    </form>
		    </div>
		)
	}
}

export default socketConnect(ChatRoom)