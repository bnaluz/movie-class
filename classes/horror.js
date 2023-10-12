const Movie = require('./movie.js');

class Horror extends Movie {
  constructor(title, duration, rating, scareLevel) {
    super(title, duration, rating);
    this.scareLevel = scareLevel;
  }

  addScare() {
    this.scareLevel += 1;
  }
}


// let cabinInTheWoods = new Horror("Cabin in The Woods", 100, 7, 0);
// let i = 10;
// while (i < 15){
//   cabinInTheWoods.addScare()
//   i++
// };
// console.log(cabinInTheWoods.scareLevel)
// console.log(cabinInTheWoods.addScare())
// console.log(cabinInTheWoods.scareLevel)
let movie = new Horror('movie', 150, 10, 9);

module.exports = { Horror };
