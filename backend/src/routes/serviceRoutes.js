import express from 'express'
import { createService, getALLService, updateService, deleteService, getSingleService } from '../controllers/serviceController.js'

import {protect} from '../middlewares/authMiddleware.js'
import {authorizerole} from '../middlewares/roleMiddleware.js'

const router = express.Router()

//public
router.get('/', getALLService)

router.get('/:id', getSingleService)

//freelancer only
router.post('/', protect, authorizerole("freelancer"), createService)

//owner only
router.put('/:id', protect, updateService)
router.delete('/:id', protect, deleteService)

export default router