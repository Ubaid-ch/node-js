const http = require("http")

const server= http.createServer((req, res) => {
    // console.log("req made")
    console.log(req.url, req.method)
    res.setHeader("Content-Type", "text/html")
    res.write("<h1>AoA Ubaid</h1>")
    res.write("<p>kesy ho</p>")
    res.end()
})

server.listen(3000, "localhost", ()=>{
    console.log("listening for request on port 30000")
})