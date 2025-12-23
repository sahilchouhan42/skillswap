import Order from '../models/orderModel.js';
import Service from '../models/serviceModel.js'

//place order
export const placeOrder = async (req, res) => {
    try {
        const service = await Service.findById(req.params.serviceId);

        if (!service) {
            return res.status(404).json({ message: "Service not found", error: error.message })

        }

        if (service.freelancer.toString() === req.user._id.toString()) {
            return res.status(400).json({ message: "You cannot order your own service" })
        }

        const order = await Order.create({
            service: service._id,
            client: req.user._id,
            freelancer: service.freelancer,
            price: service.price,
        })

        res.status(201).json({ message: "Order placed successfuly", order: order })
    } catch (error) {
        console.log(`Error in placeOrder--------->${error.message}`)
        res.status(500).json({ message: "Server error" })
    }
}

//client: my order
export const getClientOrders = async (req, res) => {
    try {
        const orders = await Order.find({ client: req.user._id })
            .populate("service", "title price")
            .populate('freelancer', 'name email');

        res.status(200).json({ orders })

    } catch (error) {
        console.log(`Error in getClientOrders------>${error.message}`)
        res.status(500).json({ message: "server error" })
    }
}

//freelancer: received order
export const getFreelancerOrders = async (req, res) => {
    try {
        const orders = await Order.find({ freelancer: req.user._id })
            .populate("service", "title price")
            .populate("client", "name email")

        res.status(200).json({ orders })
    } catch (error) {
        console.log(`Error in getFreelancerOrders-------->${error.message}`)
        res.status(500).json({ message: "Server error" })
    }
}

// FREELANCER: UPDATE ORDER STATUS
export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    if (order.freelancer.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    order.status = status;
    await order.save();

    res.status(200).json({
      message: "Order status updated",
      order,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};