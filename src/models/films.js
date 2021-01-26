export const createTableFilms = (sequelize,type) => {
    return sequelize.define('tbl_film',{
        id:{ type: type.INTEGER, primaryKey: true, autoIncrement:true },
        title: type.STRING,
        description: type.STRING,
        score: type.INTEGER,
        director: type.STRING
    })
}
