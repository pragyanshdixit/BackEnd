const registerRouteHandler=(req,res)=>{
res.write(
    `
    <html>
                <head>
                    <title>Home Page</title>
                </head>
                <body>
                    <h1>Registeration Form</h1>
                    <div>
                        <form action ="/userInfo" method="POST">
                        <div>
                        <label for="username">Username :</label>
                        <input type="text" id="username" placeholder="Write your username" name="username"/>
                        </div>
                        <div>
                        <label for="desc">Description :</label>
                        <input type="text" id="desc" placeholder="description" name="desc"/>
                        </div>
                        <div>
                        <input type="submit"/>
                        

                    
                </body>
         </html>
    `
)
return res.end();
}
export default registerRouteHandler;