import Service from "../models/serviceModel.js";

//create Service (freelancer only)
export const createService = async(req, res)=>{
    try {
        const {title, description, price, category} = req.body

        if(!title || !description || !price || !category){
            return res.status(400).json({message: "All fields required"})
        }

        const service = await Service.create({
            title,
            description,
            price,
            category, 
            freelancer: req.user._id,
        })

        res.status(201).json({message: "service created successfully", service: service})
    } catch (error) {
        console.log(`Error in createService-------->${error}`)
        res.status(500).json({message:"server error"})
    }
}

//get all service public
export const getALLService = async (req, res)=>{
    try {
        const services = await Service.find().populate(
            "freelancer", 
            'name email'
        )

        res.status(201).json({services})
    } catch (error) {
        console.log(`Error is getALLService------->${error}`)
        res.status(500).json({message: "server error"})
    }
}

export const updateService = async (req, res)=>{
    try {
        const service = await Service.findById(req.params.id)

        if(!service){
            return res.status(404).json({message: "service not found"})
        }

        //owner check
        if(service.freelancer.toString()!==req.user._id.toString()){
            return res.status(403).json({message: "Not authorized"})
        }

        const updatedService = await Service.findByIdAndUpdate(
            req.params.id, 
            req.body,
            {new: true}
        )

        res.status(201).json({message: "Service Updated", updatedService})
    } catch (error) {
        console.log(`error in updatedServices------>${error}`)
        res.status(500).json({message: "Server Error"})
    }
}

//delete service
export const deleteService = async (req, res)=>{
    try {
        const service = await Service.findById(req.params.id)

        if(!service){
            return res.status(404).json({message: "service not found"})
        }

        if(service.freelancer.toString()!==req.user._id.toString()){
            return res.status(403).json({message:'not authorized'})
        }

        await service.deleteOne()

        res.status(201).json({message: "service delted successfully"})
    } catch (error) {
        console.log(`Error in delete service ------>${error}`)
        res.status(500).json({message: "Server error"})
    }
}