import { Router } from "express";
import { registerGet, registerPost, registerPut } from '../controllers/index.controller'

const router:Router = Router()

router.get('/', registerGet)
router.post('/', registerPost)
router.put('/', registerPut)

export default router