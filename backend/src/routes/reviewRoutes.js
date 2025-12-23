import express from 'express'
import { createReview } from '../controllers/reviewController.js'
import {protect} from '../middlewares/authMiddleware.js'
import {authorizerole} from '../middlewares/roleMiddleware.js'

const router = express.Router()

router.post('/:orderId', protect, authorizerole("client"), createReview)

export default router