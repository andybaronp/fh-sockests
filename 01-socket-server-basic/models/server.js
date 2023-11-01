// server express
const express = require('express');
const http = require('http')
const socketIo = require('socket.io')
const path = require('path');
const Sockets = require('./sockets');
const cors = require('cors');
class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;


    //http server
    this.server = http.createServer(this.app);

    // COnfiguracion socket
    // socket server
    this.io = socketIo(this.server, { /* options */ });

  }

  // cofigurar socket

  configSockets() {
    new Sockets(this.io);
  }

  //middleware
  middleware() {
    this.app.use(express.static(path.resolve(__dirname, '../public')));

    this.app.use(cors());
  }
  executer() {
    // inicialir this.middleware
    this.middleware();

    this.configSockets()



    // inicializar server
    this.server.listen(this.port, () => {
      console.log('Server corriendo en puerto ' + this.port);
    });
  }
}

module.exports = Server