import homeRouteHandler from "./routes/homeRouteHandler.js";
import registerRouteHandler from "./routes/registerRouteHandler.js";
import userInfoRouteHandler from "./routes/userInfoRouteHandler.js";

const routesHandler=((req,res)=>{
    if(req.url=="/"){
        homeRouteHandler(req,res);
    }
    if(req.url=='/register'){
        registerRouteHandler(req,res);
    }
    if(req.url=="/userInfo" && req.method=="POST"){
        userInfoRouteHandler(req,res);
    }
}
);

export default routesHandler;