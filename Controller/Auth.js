//import model
const User = require("../Models/User");
//import bcrypt
const bcrypt = require("bcrypt");

//ab dekho functionality
exports.signup = async(req,res) => {
    try{
        //fetch data
        const{name,email,password,role} = req.body;
        //is user already exist
        const alreadyExisting = await User.findOne({email});
        if(alreadyExisting){
            return res.status(500).json({
                success: false,
                message:"User Already Exist"
            })
        }

        //hash password
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password,10);
        }
        catch(err){
            return res.status(500).json({
                success:false,
                message:"Error in Password Encryption"
            })
        }

        //insert in db
        const user = await User.create({name,email,password,role});

        return res.status(200).json({
            success:true,
            message:"User Created Successfully"
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"User can't be created, Please try again later"
        })
    }
}