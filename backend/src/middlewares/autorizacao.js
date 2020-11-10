const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = ( req, res, next ) => {
    const { authorization } = req.headers;

    if(!authorization){
        res.status(401).send({ erro : "Token não informado." });
    }

    const [ Bearer, token ] = authorization.split(" ");

    if(!token){
        res.status(401).send({ erro : "Token mal formatado." })
    }

    try {
        const retorno = jwt.verify(token, authConfig.secret);

        req.user_id = retorno.user_id;
        req.user_name = retorno.user_name;
        req.user_access = retorno.user_access;
        
        return next();
    } catch (error) {
        res.status(401).send({ erro : "Token inválido." })
    }

    return null;
}