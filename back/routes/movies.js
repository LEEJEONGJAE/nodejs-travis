var express = require('express');
var router = express.Router();
var movies = require('../movies.json');

router.get('/', function(req, res, next){
    console.log('===movie index===');
    res.send(movies);
})

router.get('/:id', function(req, res, next){
    var id = parseInt(req.params.id, 10);
    console.log('===movie show['+id+']===');
    var movie = movies.filter(function(movie){
        return movie.id === id
    })
    console.dir(movie);
    res.send(movie);
})

module.exports = router;