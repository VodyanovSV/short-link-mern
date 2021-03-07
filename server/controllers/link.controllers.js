import Link from '../models/Link.js'

class LinkControllers {
    async generate(req, res) {
        try {

        } catch (e) {
            res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
        }
    }

    async getAll(req, res) {
        try {

        } catch (e) {
            res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
        }
    }

    async getById(req, res) {
        try {

        } catch (e) {
            res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
        }
    }
}

export default new LinkControllers()

