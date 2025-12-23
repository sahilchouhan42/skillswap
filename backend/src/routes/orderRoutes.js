import express from 'express'
import { placeOrder, getClientOrders, getFreelancerOrders, updateOrderStatus } from '../controllers/orderController.js'

import {protect} from '../middlewares/authMiddleware.js'
import {authorizerole} from '../middlewares/roleMiddleware.js'

const router = express.Router()

//cline place order
router.post('/:serviceId', protect, authorizerole("client"), placeOrder)

//cleint orders
router.get('/client/my-orders', protect, authorizerole("client"), getClientOrders)

//freelancer orders
router.get('/freelancer/my-orders', protect, authorizerole("freelancer"), getFreelancerOrders)

//freelancer update order status
// router.put('/:id/status', protect, authorizerole("freelancer"), updateOrderStatus)

// freelancer update order status
router.put(
  "/:id/status",
  protect,
  authorizerole("freelancer"),
  updateOrderStatus
);



export default router