import {Router} from 'express'

import linkControllers from '../controllers/link.controllers.js'

const router = Router()

router.post('/generate', linkControllers.generate)
router.get('/', linkControllers.getAll)
router.get('/:id', linkControllers.getById)

export default router