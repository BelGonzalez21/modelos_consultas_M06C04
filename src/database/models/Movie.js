module.exports = (sequelize, dataTypes) => {
    /*defino el modelo*/
    const alias = "Movie";
    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull: false,
        },
        rating: {
            type: dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull: false,
        },
        awards: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        length: {
            type: dataTypes.INTEGER,
            allowNull: true,
        },
        genre_id: {
            type: dataTypes.INTEGER,
            allowNull: true,
        }
    };
    const config = {
        tableName : "movies", //como en el diagrama
        timestamps : false, //si la tabla no tiene que tener, se coloca false
        underscored : true,
    }
    const Movie = sequelize.define(alias, cols, config); 
    return Movie
}
