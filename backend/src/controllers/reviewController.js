import Review from '../models/reviewModel.js'
import Order from '../models/orderModel.js'
import Service from '../models/serviceModel.js'

//create review

export const createReview = async (req, res)=>{
    try {
        const {rating, comment} = req.body
        const order = await Order.findById(req.params.orderId)

        if(!order){
            return res.status(404).json({message: "Order not found"})
        }

        //review on completed order
        if(order.status!=="completed"){
            return res.status(400).json({message: "Order not completed yet"})
        }

        if(order.client.toString()!==req.user._id.toString()){
            return res.status(403).json({message:"Not authorized"})
        }

        const review = await Review.create({
            order: order._id,
            service: order.service,
            freelancer:order.freelancer,
            client: req.user._id,
            rating, 
            comment,
        })

        //update service rating
        const service = await Service.findById(order.service);
        service.numReviews+=1;
        service.rating = (service.rating *(service.numReviews - 1)+rating)/service.numReviews

        await service.save()

        res.status(201).json({
            message: "Review added successfully",
            review: review
        })
    } catch (error) {
        if(error.code===11000){
            return res.status(400).json({message: "Review already given"})
        }
        res.status(500).json({message: "Server error"})
    }
}