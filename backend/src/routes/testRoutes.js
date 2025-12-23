import express from 'express'
import { dashboard } from '../controllers/testController.js'
import { protect } from '../middlewares/authMiddleware.js'
import { authorizerole } from '../middlewares/roleMiddleware.js'

const router = express.Router()

//any logged in user
router.get('/dashboard', protect, dashboard)

//only freelancer
router.get('/freelancer-dashboard', protect, authorizerole("freelancer"), dashboard)
//only admin
router.get('/admin-dashboard', protect, authorizerole("admin"), dashboard)

export default router;