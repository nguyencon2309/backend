
const val = require('morgan')
const route = require("./routers")
// const accountController= require('./app/controllers/AccountController')
const express = require("express")
const http = require("http")
const app=express()
const cors = require("cors")


// app.listen(3000,"192.168.146.1");
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

// app.listen(port, () => {
//     console.log(`listening at ${port}`);
// });

const server = http.createServer(app)
server.listen(8080,"0.0.0.0");
const db=require('./app/config/db');
//connect
db.connect();
// console.log("connect")
// //http logger
app.use(val('combined'))










 route(app);

// app.listen(port,() => console.log(`app listening at http://localhost:`+port))
