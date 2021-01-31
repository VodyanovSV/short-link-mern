import {validationResult} from "express-validator";
import authServises from '../servises/auth.servises.js'

class AuthControllers {
    async register(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при регистрации'
            })
        }

        const candidate = {email: req.body.email, password: req.body.password}
        const isRegistered = await authServises.register(candidate)

        if (isRegistered) {
            res.status(201).json({message: "Пользователь зарегистрирован"})
        } else {
            res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
        }
    }

    async login(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при входе в систему'
            })
        }

        const candidate = {email: req.body.email, password: req.body.password}
        const enter = await authServises.login(candidate)

        if (enter.isEnter) {
            res.json({token: enter.token, userId: enter.id})
        } else {
            res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
        }
    }
}

export default new AuthControllers()