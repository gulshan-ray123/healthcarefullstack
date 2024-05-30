const mongoose = require("mongoose");
const plm=require("passport-local-mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/healthcare");

const userSchema= mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{String,
    password: String
    }
});
userSchema.plugin(plm);
module.exports= mongoose.model("user", userSchema);