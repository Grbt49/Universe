const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const galaxySchema=new Schema({
    name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('galaxy',galaxySchema,'galaxys');