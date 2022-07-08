const fs = require("fs")


// Reading files


// fs.readFile('./blog/post.txt', (err, data) =>{
// if(err){
//     console.log(err)
// }
// console.log(data.toString())
// })

// Writting file
// if a file exist it rewrites, or creates a new one

// fs.writeFile("./blog/post.txt", "Hello Ubaid ullah", () =>{
//     console.log("file written")
// })

// fs.writeFile("./blog/comment.txt", "Hello Ubaid ullah ch", () =>{
//     console.log("file rewritten")
// })

// directories
if(!fs.existsSync('./assets')){
    fs.mkdir("./assets", (err) => {
    if(err){
    console.log(err)
    }
    console.log("folder created")
})}
else(
    fs.rmdir("./assets", (err) =>
    {
        if(err){
            console.log(err)
        }
        console.log("folder deleted")
    })
)

// deleting files

if(!fs.existsSync("./blog/deleteme.txt")){
    fs.unlink("./blog/deleteme.txt", (err) =>
    {
        if(err){
            console.log(err)
        }
        console.log("deleted")
    })
}