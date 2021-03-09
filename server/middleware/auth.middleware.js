import jwt from 'jsonwebtoken'
import config from 'config'

const authMiddleware = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(401).json({message: 'Нет авторизации'})
        }

        const decoded = jwt.decode(token, config.get('jwtSecret'))
        req.user = decoded
        next()
    } catch (e) {
        console.log('here')
        res.status(401).json({message: 'Нет авторизации'})
    }
}

export default authMiddleware