

class Movie {
  constructor(title, duration, rating, cast = []) {
    (this.title = title), (this.duration = duration), (this.rating = rating), (this.cast = cast);
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

  addActor(actor) {
    this.cast.push(actor)
  }
  static actorInMovie(movie, actor) {
    // console.log("movie.cast, actor", movie.cast, actor)
    for(let i = 0; i < movie.cast.length; i++) {
      if(movie.cast[i]["name"] === actor) {
        return true
      } else {
        return false
      }
    }
    // return movie.cast.includes(actor)
  }
}

// let movie = new Movie("There Will Be Blood", 158, 8.2);
// movie.addActor("Leo")
// console.log("movie.cast", movie.cast)
// // console.log(movie.actorInMovie("There Will Be Blood", "Leo"))
// Movie.actorInMovie("There Will Be Blood", "Leo")

//OUR OWN EXAMPLES TO TEST OUR LOGIC ---

// let long = new Movie('title', 151, 5.4);

// long.updateRating(9.0);

// console.log(long.rating);

// let movieInstance = new Movie('the matrix', 142, 9.3);

// console.log(movieInstance.title);

module.exports = Movie;
