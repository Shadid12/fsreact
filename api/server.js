const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.get('/', function(req, res){
  res.send('good vibes')
})

io.on('connection', function(socket){
  console.log('a user connected')
  socket.on('message', function(msg){
  	console.log(msg)
  })
})

http.listen(3001, function(){
  console.log('listening on *:3001')
})