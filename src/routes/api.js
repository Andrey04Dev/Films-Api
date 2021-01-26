import { Router } from 'express'
import apiFilmsRouter from './api/films'
import apiUsersRouter from './api/users'

const router =  Router()

router.use('/films', apiFilmsRouter)
router.use('/users',apiUsersRouter)

export default router