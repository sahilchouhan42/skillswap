import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    service:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Service",
        required: true,
    },
    client:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
    },
    freelancer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
    },
    price:{
        type:Number,
        required: true,
    },
    status:{
        type: String, 
        enum: ["pending", "accepted", "completed"],
        default: "pending",
    },
},
{timestamps: true}
)

const Order = mongoose.model("Order", orderSchema)

export default Order