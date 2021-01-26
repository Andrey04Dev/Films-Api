import { Sequelize } from 'sequelize'
import { createTableFilms } from '../models/films'
import { createTableUsers } from '../models/user'


const sequelize =  new Sequelize('bd_films','root', 'pirulo04041993',{
    host: 'localhost',
    dialect: 'mysql'
})

export const tableFilms = createTableFilms(sequelize, Sequelize);
export const tableUsers =  createTableUsers(sequelize, Sequelize);

sequelize.sync({alter:true})
    .then(()=>{
        console.log('Table films was created')
    })
    .catch((err)=>{
        console.log('There are some erros', err)
    })

