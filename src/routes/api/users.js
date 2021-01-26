import { Router } from 'express'
import bcrypt from 'bcryptjs'
import { tableUsers } from '../../db/db'

const router =  Router()

router.post('/register', async(req,res)=>{
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    const user = await tableUsers.create(req.body);
    res.json(user)
})

export default router