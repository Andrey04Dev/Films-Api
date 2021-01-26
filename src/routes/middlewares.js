import jwt from 'jwt-simple'
import moment from 'moment'

const checkToken = (req,res,next)=>{

    if (!req.headers['user-token']) {
        return  res.json({error: 'Need to include the user-token on the header'})
    }else{
        const userToken =  req.headers['user-token']
        let payload = {}
        try {
            payload = jwt.decode(userToken,'frase secreta')
        } catch (error) {
            return res.json({error: 'The token is incorrect'})
        }
        if (payload.expiredAt < moment().unix()) {
            return res.json({error: 'The token was expired'})
        }
        req.usuarioId = payload.usuarioId
    }
    
    next();
}

export default checkToken