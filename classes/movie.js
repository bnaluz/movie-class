class Movie {
  constructor(title, duration, rating) {
    (this.title = title), (this.duration = duration), (this.rating = rating);
  }

  isLong() {
    if (this.duration > 150) {
      return true;
    } else {
      return false;
    }
  }

  updateRating(rating) {
    this.rating = rating;
  }
}

//OUR OWN EXAMPLES TO TEST OUR LOGIC ---

// let long = new Movie('title', 151, 5.4);

// long.updateRating(9.0);

// console.log(long.rating);

// let movieInstance = new Movie('the matrix', 142, 9.3);

// console.log(movieInstance.title);

module.exports = Movie;
