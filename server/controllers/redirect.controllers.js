import Link from "../models/Link.js";

class RedirectControllers {
    async code(req, res){
        try {
            const link = await Link.findOne({code: req.params.code})

            if (link) {
                link.clicks++
                await link.save()
                return res.redirect(link.from)
            }

            res.status(404).json({message: "Ссылка не найдена"})
        } catch (e) {
            res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
        }
    }
}

export default new RedirectControllers()