const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const starSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('star',starSchema,'stars');