const http = require("http")
const fs = require("fs")
const { homedir } = require("os")
const { isAbsolute } = require("path")

const server= http.createServer((req, res) => {
    // console.log("req made")
    console.log(req.url, req.method)

    // setting header type
    res.setHeader("Content-Type", "text/html")
//     res.write("<h1>AoA Ubaid</h1>")
//     res.write("<p>kesy ho</p>")
//     res.end()

// sending html file
let path = "./html/"
switch(req.url){
    case "/":
        path += "home.html"
        res.statusCode= 200;
        break;
    case "/about":
        path += "about.html"
        res.statusCode= 200;
        break;
    default:
        path += "404.html" 
        res.statusCode= 404;
        break;       
}

 fs.readFile(path, (err, data) => {
    if(err){
        console.log("err")
        res.end()
    }
    // res.write(data)
    // res.end()

    res.end(data)
 })

})

server.listen(3000, "localhost", ()=>{
    console.log("listening for request on port 30000")
})