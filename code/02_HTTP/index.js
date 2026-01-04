const http = require("node:http")

const server = http.createServer( function (req, res) {
    console.log("----------------- STARTED HERE -----------------");
    console.log(`Incoming request at [${Date.now()}]`);
    console.log(req.headers);

    //..
    
    switch (req.url){
        case '/':
            res.writeHead(200);
            return res.end(`Homepage`);
        case '/contact-us':
            res.writeHead(200);
            return res.end(`Contact me at prashantpriyadarshi@gmail.com`);
        case '/about':
            res.writeHead(200);
            return res.end("I am a software engineer");
        default:
            res.writeHead(404);
            return res.end("You're lost");
    }
    console.log("----------------- ENDED HERE -----------------");
})

server.listen(8000, () => console.log("server is running on port 8000")) 