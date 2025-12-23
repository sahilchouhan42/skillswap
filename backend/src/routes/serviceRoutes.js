import express from 'express'
import { createService, getALLService, updateService, deleteService } from '../controllers/serviceController.js'

import {protect} from '../middlewares/authMiddleware.js'
import {authorizerole} from '../middlewares/roleMiddleware.js'

const router = express.Router()

//public
router.get('/', getALLService)

//freelancer only
router.post('/', protect, authorizerole("freelancer"), createService)

//owner only
router.put('/:id', protect, updateService)
router.delete('/:id', protect, deleteService)

export default router