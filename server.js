const http = require("http")
const app = require("express")

const server = http.createServer(app);

const PORT = process.env.PORT || 4000;

server.listen(PORT, console.log(`server listening on port ${PORT}`))