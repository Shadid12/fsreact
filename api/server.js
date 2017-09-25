const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const mongoose = require('mongoose')



// connection to DB
mongoose.connect('mongodb://root:toor@ds149268.mlab.com:49268/shadid')

app.get('/', function(req, res){
  res.send('good vibes')
})

//

io.on('connection', function(socket){
  console.log('a user connected')
  socket.on('message', function(msg){
  	io.emit('message', msg)
  })
})

http.listen(3001, function(){
  console.log('listening on *:3001')
})