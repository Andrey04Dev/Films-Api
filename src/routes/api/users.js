import e, { Router } from 'express'
import bcrypt from 'bcryptjs'
import { tableUsers } from '../../db/db'
import { check, validationResult } from 'express-validator'

const router =  Router()
const checkArray =[
    check('username','Username is required').not().isEmpty(),
    check('email','The email is required').isEmail(),
    check('password','The password is required').not().isEmpty()
]
router.post('/register', checkArray, async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({Errors:errors.array()})
    }
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    const user = await tableUsers.create(req.body);
    res.json(user)
})

export default router