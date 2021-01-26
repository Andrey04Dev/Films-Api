import e, { Router } from 'express'
import bcrypt from 'bcryptjs'
import { tableUsers } from '../../db/db'
import { check, validationResult } from 'express-validator'
import moment from 'moment'
import jwt from 'jwt-simple'

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

router.post('/login', async(req,res)=>{
    const user =  await tableUsers.findOne({where: {email:req.body.email}})
    if (user) {
        const match =  bcrypt.compareSync(req.body.password, user.password)
        if (match) {
            res.json({sucess : createToken(user)})
        } else {
            res.json({error:'There are mistake with el user o password'})
        }
    } else {
        res.json({error:'There are mistake with el user o password'})
    }
})

const createToken = (user)=>{
    const payload = {
        userId: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(5,'minutes').unix()
    }

    return jwt.encode(payload,'frase secreta')
}
export default router