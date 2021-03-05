import {Router} from 'express'
import auth from '../middleware/auth.middleware.js'
import linkControllers from '../controllers/link.controllers.js'

const router = Router()

router.post('/generate', auth, linkControllers.generate)
router.get('/', auth, linkControllers.getAll)
router.get('/:id', auth, linkControllers.getById)

export default router