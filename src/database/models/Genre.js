module.exports = (sequelize, dataTypes) => {
    /*defino el modelo*/
    const alias = "Genre";
    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false,
            
        },
        ranking: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique: true
        },
        active: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        }
    }
    const config = {
        tableName : "genres", //como en el diagrama
        timestamps : false,
        underscored: true,
    }
    const Genre = sequelize.define(alias, cols, config); 
    return Genre
}
