const mongoose=require("mongoose");

const {Schema}=mongoose;

const personSchema=new Schema (
    {name:{
        type:String,
        required:true
    },
    lastName:String,
    email:{
        type:String,
        required:true
    },
    phone:Number,
    adresse:String,
     age:Number,

favoriteFoods:[{
    type: String
    }]
}       

);

module.exports=Person= mongoose.model("person", personSchema);

