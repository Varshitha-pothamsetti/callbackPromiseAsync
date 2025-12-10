// import http from 'http';
// const server = http.createServer((req, res) => {
//     console.log(req.method);
//     if(req.url == "/users") {
//         res.writeHead(200, {"Content-Type": "application/json"});
//         res.end(JSON.stringify({name: "thub"}))
//     }
//     else{
//         res.writeHead(200, {"content-type": "text/plain"});
//         res.end("Hello this is from backend")
//     }
// });
// server.listen(4000, () => {
//     console.log(`server running at port ${4000}`)
// });

// MVC ARCTITECTURE
import express from 'express';
import studentRouter from './Routers/studentRouters.js';

const app = express();

app.use(express.json());
app.use('/', studentRouter);

const PORT = 7000;
app.listen(PORT, () => {
    console.log(`Server running at port number ${PORT}`);
});