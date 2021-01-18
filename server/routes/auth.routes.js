import {Router} from 'express'
import {check} from 'express-validator'
import authControllers from '../controllers/auth.controllers.js'

const router = Router()

router.post('/register',
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Минимальная длина пароля 6 символов').isLength({min: 6})
    ],
    authControllers.register
)

router.post('/login',
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Введите email').exists().isLength({min: 6})
    ],
    authControllers.login)

export default router
