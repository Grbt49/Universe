const solar=require('../models/solar');

exports.getsolar=(req,res)=>{
    solar.find()
    .then(response=>{
        res.status(200).json(
            {
              message:"solar fetched successfully",
                Solar:response
            })
    })
    .catch(err=>{
res.status(500).json({error:err})
    })
}
exports.getsolarxbyid=(req,res)=>{
    const id=req.params.id;
    solar.find({l_id:id})
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