import {Router} from 'express'
import redirectControllers from '../controllers/redirect.controllers.js'

const router = Router()

router.get('/:code', redirectControllers.code)

export default router