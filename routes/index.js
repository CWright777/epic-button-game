module.exports = function Routes(app,server){
  var io = require('socket.io').listen(server)
  app.get('/', function(req,res){
    res.render('index')
  })
  var number = 0;
  io.sockets.on('connection', function(socket){
    socket.on("epic_clicked",function(){
      number += 1
      io.emit('current_number',{response: number}) 
    })
    socket.on('reset_clicked', function(){
      number = 0
      io.emit('current_number',{response: number}) 
    })
  })
}
