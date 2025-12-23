import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

export const protect =async (req, res, next)=>{
    try {
        let token;
         //token check
         if(
            req.headers.authorization && req.headers.authorization.startsWith("Bearer")
         ){
            token = req.headers.authorization.split(' ')[1]
         }

         if(!token){
            return res.status(401).json({message: "Not authorized, no token"})
         }

         //verify token
         const decode = jwt.verify(token, process.env.JWT_SECRET)

         //get user
         req.user = await User.findById(decode.id).select('-password')

         if(!req.user){
            return res.status(401).json({message: "User not found"})
         }

         next()
    } catch (error) {
        console.log(error)
     return res.status(401).json({message: "Not authorized, token failed"})   
    }
}