import http from "http";
import routesHandler from "./routesHandler.js";
const server=http.createServer(
    (req,res)=>{
        routesHandler(req,res);
    }
);
    

server.listen(3000);