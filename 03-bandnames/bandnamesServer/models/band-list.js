const Band = require("./band");


class BandList {

  constructor() {
    this.bands = [
      new Band('Metallica'),
      new Band('Megadeth'),
      new Band('Iron Maiden'),
      new Band('Queen'),
    ];
  }


  // Add a band to the band list
  addBand(name) {
    const newBand = new Band(name);
    this.bands.push(newBand);
    return this.bands;
  }

  // Remove a band from the band list
  removeBand(id) {
    this.bands = this.bands.filter(band => band.id !== id);
  }

  getBands() {
    return this.bands;
  }

  // Increase the vote for a band
  increaseVote(id) {
    const band = this.bands.find(band => band.id === id);
    if (band) {
      band.votes += 1;
    }
  }

  // changeBandName
  changeName(id, name) {

    const band = this.bands.find(band => band.id === id);
    if (band) {
      band.name = name;
    }
  }
}

module.exports = BandList