export const createTableUsers = (sequelize, type) =>{
    return sequelize.define('tbl_user',{
        id:{type: type.INTEGER, autoIncrement:true, primaryKey: true},
        username: type.STRING,
        email:type.STRING,
        password: type.STRING(150)
    })
}