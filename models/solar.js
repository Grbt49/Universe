const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const solarSchema=new Schema({
    name:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Solar',solarSchema,'solar system');