const db = require('../database/models');


module.exports = {
    list : (req, res ) => {
        db.Genre.findAll() //alias
            .then((genres) => {
                return res.render('genresList', {genres})
            })
            .catch(error => console.log(error))
    },
    detail : (req, res ) => {
        db.Genre.findByPk(req.params.id) //ruta parametrizada
            .then((genre) => {
                return res.render('genresDetail', {genre})
            })

    }
}