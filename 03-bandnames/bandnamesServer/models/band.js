
const crypto = require("crypto");

class Band {

  constructor(name) {
    this.id = crypto.randomBytes(16).toString("hex")
    this.name = name;
    this.votes = 0;

  }


}


module.exports = Band