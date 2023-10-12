const Movie = require('./movie.js');

class Comedy extends Movie {
    constructor(title, duration, rating, laughsPerMinute) {
        super(title, duration, rating)
        this.laughsPerMinute = laughsPerMinute;
    }

}

module.exports = Comedy;