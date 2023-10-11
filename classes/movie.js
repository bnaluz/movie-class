class Movie {
  constructor(title, duration, rating) {
    (this.title = title), (this.duration = duration), (this.rating = rating);
  }
}

// let movieInstance = new Movie('the matrix', 142, 9.3);

// console.log(movieInstance.title);

module.exports = Movie;
