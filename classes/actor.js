const Movie = require('./movie.js');

class Actor {
    constructor(name) {
        this.name = name;
    }
}

// let actor1 = new Actor("Leo")
// console.log(actor1)

// let actorName = "Leonardo DiCaprio"
//         let actor = new Actor(actorName);
//         let apple = "name"
//         let taco = actor
// console.log("actor.name",actor.name)
// console.log("apple", apple)
// console.log("taco[apple]",taco[apple])

let movie = new Movie("There Will Be Blood", 158, 8.2);
        let daniel = new Actor("Daniel Day-Lewis");
        let paul = new Actor("Paul Dano");
        movie.addActor(daniel);
        movie.addActor(paul);
        console.log(movie.cast)

module.exports = Actor;