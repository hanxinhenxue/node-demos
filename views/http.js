let http = require("http")
let queryString = require("querystring")

http.createServer((req, res) => {
    let postData = ""
    req.setEncoding("utf8")
    req.on('data', trunk => {
        postData += trunk
    })
    req.on('end', () => {
        res.end(postData)
    })
}).listen(8080)
console.log("服务器启动完成");
