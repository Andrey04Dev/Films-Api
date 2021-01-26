import express from 'express'
import apiRouter from './routes/api'
import './db/db'

//Initialization 
const app =  express()
//Settings
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Routes
app.use('/api', apiRouter)


app.listen(3000,()=>{
    console.log('Server is opening on PORT:', 3000)
})