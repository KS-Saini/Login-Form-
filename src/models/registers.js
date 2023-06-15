const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    firstname: {
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    password:{
        type:Number,
        required:true
    },
    cpassword:{
        type:Number,
        required:true
    },
});

const Register = new mongoose.model("Resgister", employeeSchema);

module.exports = Register;