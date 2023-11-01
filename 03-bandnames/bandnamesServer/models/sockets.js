const BandList = require("./band-list");


class Sockets {

    constructor(io) {

        this.io = io;
        this.bandList = new BandList();
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', (socket) => {

            // emitir al cliente todas las bandas
            socket.emit('currentBands', this.bandList.getBands());

            //Vote
            socket.on('vote-band', (id) => {
                this.bandList.increaseVote(id);
                this.io.emit('currentBands', this.bandList.getBands());

            })

            // Change name
            socket.on('change-band-name', (payload) => {
                this.bandList.changeName(payload.id, payload.name)
                this.io.emit('currentBands', this.bandList.getBands());

            })

            //removeBand
            socket.on('remove-band', (id) => {
                this.bandList.removeBand(id)
                this.io.emit('currentBands', this.bandList.getBands());
            })

            // Add Band
            socket.on('add-band', (name) => {
                this.bandList.addBand(name)
                this.io.emit('currentBands', this.bandList.getBands());
            })
        });
    }


}


module.exports = Sockets;