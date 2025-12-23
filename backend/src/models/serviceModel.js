import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true,
    },
    description:{
        type:String,
        required: true
    },
    price:{
        type: Number,
        required: true,
    },
    category:{
        type:String,
        required: true,
    },
    freelancer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }, 
    rating:{
        type: Number, 
        default: 0,
    },
    numReviews:{
        type: Number, 
        default: 0,
    }
}, 
{timestamps: true}
)

const Service = mongoose.model("Service", serviceSchema)    
export default Service