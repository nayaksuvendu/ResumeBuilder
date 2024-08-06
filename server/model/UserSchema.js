const bcrypt = require('bcryptjs');
const dotenv = require('dotenv')
dotenv.config();
const mongoose= require('mongoose');
// const{Schema}= mongoose;

const mySchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:[true,'Name is required'],
        minLength:[5,"Name must be min 5 charecter"],
        maxLength:[20,"Name must be Max 20 char"],
        trim:true,

    },
    email:{
        type:String,
        required:[true,"email must required"],
        unique:true,
        lowercase:true,
         
    },
    password:{
        type:String,
        required:[true,'password must required'],
        minLength:[5,"Name must be min 5 charecter"],
        select:false, // psw not seen to admin
        // match:[/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        //         "please enter valid password"]
    },
    avatar:{
        public_id:{
          type: String,
        },
        secure_url:{
           type:String
        }
    },
    forgetPasswordToken: String,
    forgetPasswordExpiry: Date,
},
{timestamps:true}
);

// Hashes password before saving to the database
mySchema.pre("save",async function(next){
    if(!this.isModified('password')){
        return next();
    }
    this.password= await bcrypt.hash(this.password,10);
});

const userSchema = mongoose.model('users',mySchema) // specified collection name 
  
  module.exports = userSchema;

