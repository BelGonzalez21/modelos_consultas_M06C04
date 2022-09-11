const db = require('../database/models'); //trae todos los modelos
const { Op } = require('sequelize')
module.exports={
    list: (req, res) => {
        db.Movie.findAll()  //alias
        .then((movies) => {
            return res.render('moviesList', {
                movies //del then
            })
        })
        .catch(error => console.log(error))
    },
    detail : (req, res) => {
        db.Movie.findByPk(req.params.id)//de rutas parametrizadas
        .then((movie) => {
            return res.render('moviesDetail', {
                movie //del then
            })
        })
        .catch(error => console.log(error))
    },
    new : (req, res) => {
        db.Movie.findAll({
            order : [
                ['release_date', 'DESC']
            ],
            limit : 5
        })
            .then((movies) => {
                return res.render('newestMovies', {
                    movies
                })
            })
            .catch(error => console.log(error));
    },
    recomended : (req, res) => {
        db.Movie.findAll({
            where : {
                rating:{
                    [Op.gte] : 8 //operadores -gte: greatestThanEqual
                },
                awards : {
                    [Op.gte] : 3
                }
            },
            order : [
                ['rating', 'DESC'],
                ['awards', 'DESC']
            ],
            limit : 5
        })
            .then((movies) => {
                return res.render('recommendedMovies', {
                    movies
                })
            })
            .catch(error => console.log(error));
    },
}