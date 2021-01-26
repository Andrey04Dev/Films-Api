import { Router } from 'express'
import apiFilmsRouter from './api/films'
import apiUsersRouter from './api/users'
import checkToken from './middlewares'

const router =  Router()

router.use('/films', checkToken, apiFilmsRouter)
router.use('/users',apiUsersRouter)

export default router