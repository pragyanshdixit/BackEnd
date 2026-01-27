const homeRouteHandler=(req,res)=>{
    res.write(
            `<html>
                <head>
                    <title>Home Page</title>
                </head>
                <body>
                    <h1>Hi welcome to our Project!!!!</h1>
                    <a href="/register"> Click here to register yourself.....</a>
                </body>

.            </html>`
        )
        res.end();
}

export default homeRouteHandler;