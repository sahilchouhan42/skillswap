import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    order:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required:true,
        unique: true,
    },
    service:{
        type:mongoose.Schema.Types.ObjectId,
        red: "Service",
        required: true,
    },
    freelancer:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    client:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    rating:{
        type: Number,
        min: 1,
        max: 5,
        required: true,
    },
    comment:{
        type: String,
        trim: true,
    },
    
}, 
{timestamps: true})

const Review = mongoose.model("Review", reviewSchema)

export default Review