export const dashboard = (req, res)=>{
        res.status(200).json({
            message:"Welcome to dashboard",
            user: req.user,
        })
}