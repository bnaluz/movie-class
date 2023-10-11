const Movie = require('./movie.js');

class Horror extends Movie {
  constructor(title, duration, rating, scareLevel) {
    super(title, duration, rating);
    this.scareLevel = scareLevel;
  }

  addScare() {
    return (this.scareLevel += 1);
  }
}

let movie = new Horror('movie', 150, 10, 9);
console.log(movie.addScare());

module.exports = { Horror };
