import React from 'react'

class ChatRoom extends React.Component {
	render() {
		return(
			<div>
			<ul id="messages"></ul>
		    <form action="">
		      <input id="m" autocomplete="off" /><button>Send</button>
		    </form>
		    </div>
		)
	}
}

export default ChatRoom