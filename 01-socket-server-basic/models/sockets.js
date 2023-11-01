

class Sockets {
  constructor(io) {
    this.io = io
    this.socketEvents()
  }

  socketEvents() {
    //on connection
    this.io.on('connection', (socket) => {
      // escuchar evento
      socket.on('message-to-server', (data) => {
        this.io.emit('messages', data)
      });

    });

  }

}


module.exports = Sockets