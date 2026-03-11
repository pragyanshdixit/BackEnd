import jwt from "jsonwebtoken";

function authMiddleware(req, res, next) {
    const token=req.headers.authorization;
    if(!token){
        return res.status(401).json({
            message:"No Token Provided"
        })
    }else{
        const verified=jwt.verify(token,"secretekey");
        res.user=verified;
        next();
    }
}
export default authMiddleware;