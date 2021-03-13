import Link from '../models/Link.js'
import shortid from 'shortid'
import config from 'config'

class LinkControllers {
    async generate(req, res) {
        try {
			const baseUrl = config.get('baseUrl')
            const {from} = req.body

            const code = shortid.generate()

            const existing = await Link.findOne({from})

            if (existing) {
                return res.json({link: existing})
            }

            const to = baseUrl + '/t/' + code
            const link = new Link({
                from, to, code, owner: req.user.userID
            })
            await link.save()
            res.status(201).json({link})
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

