const Movie = require('./movie.js');

class Action extends Movie {
    constructor(title, duration, rating, explosionCount) {
        super(title, duration, rating)
        this.explosionCount = explosionCount;
    }
}

module.exports = {Action};