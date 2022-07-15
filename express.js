const express = require("express")

const app = express();

app.listen(3000)

app.get("/", (req, res)=>{
    res.sendFile("./html/home.html",{ root : __dirname })
})

app.get("/about", (req, res)=>{
    res.sendFile("./html/about.html",{ root : __dirname })
})

// redirects

app.get("/about-me", (req, res) => {
    res.redirect("./html/about.html",{ root : __dirname })
})

// 404 page

app.use((req, res) => {
    res.status(404).sendFile("./html/404.html",{ root : __dirname })
})