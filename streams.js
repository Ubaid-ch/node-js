const fs = require("fs")

const readStream = fs.createReadStream("./blog/blog1.txt", {encoding:"utf-8"})
const writeStream = fs.createWriteStream("./blog/blog2.txt", {encoding:"utf-8"})

// readStream.on("data", (chunk)=>
// {
//     console.log("---new chunk---")
//     console.log(chunk)
//     writeStream.write("\nNew chunk\n")
//     writeStream.write(chunk)
// })

readStream.pipe(writeStream);