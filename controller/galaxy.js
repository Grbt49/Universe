
const galaxyc=require('../models/galaxy');

exports.getgalaxyx=(req,res)=>{
    galaxy.find()
    .then(response=>{
        res.status(200).json(
            {
              message:"galaxy fetched successfully",
                locations:response
            })
    })
    .catch(err=>{
res.status(500).json({error:err})
    })
}
exports.getgalaxyxbyid=(req,res)=>{
    const id=req.params.id;
    galaxyc.find({l_id:id})
    .then(response=>{
        res.status(200).json(
            {
              message:"star fetched successfully",
                locations:response
            })
    })
    .catch(err=>{
res.status(500).json({error:err})
    })
}