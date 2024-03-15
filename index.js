const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const user = require("./Routes/User");
//mounting
app.use("/api/v1",user);

//dbconnect
 const dbConnect = require("./config/Database");
    dbConnect();

app.listen(PORT,()=>{
    console.log(`App is started at ${PORT}`);
})

app.get("/", (req,res)=>{
    res.send("<h1>This is home page</h1>");
})