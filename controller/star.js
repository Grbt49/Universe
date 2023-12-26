const starc=require('../models/star');

exports.getstarx=(req,res)=>{
    star.find()
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

exports.getstarxbyid=(req,res)=>{
    const id=req.params.id;
    starc.find({l_id:id})
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