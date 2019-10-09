const http = require("http")
const port = 3001;

http.createServer((request, response) => {
    response.end("Test");
}).listen(port);