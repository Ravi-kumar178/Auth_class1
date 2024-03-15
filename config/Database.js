const mongoose = require("mongoose");

require("dotenv").config();
const dbConnect = () => {
    const URL = process.env.DATABASE_URL;
    console.log(URL);
    if(!URL){
        console.log("No Database is present");
        process.exit(1);
    }

    mongoose.connect(URL,{
        useNewUrlParser:true,
        useUnifiedTopology: true
    })
    .then(()=>{console.log("DataBase is connected successfully")})
    .catch((err)=>{console.log(err);
                   process.exit(1)})
}

module.exports = dbConnect;