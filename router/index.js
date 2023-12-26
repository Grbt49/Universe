const express=require('express');
const rout=express.Router();

const galaxyc=require('../controller/galaxy');
const solarc=require('../controller/solar');
const starc=require('../controller/star');


rout.get('/solar',solarc.getsolar);
rout.get('/star',starc.getstarx);
rout.get('/galaxy',galaxyc.getgalaxyx);
rout.get('/solar/:id',solarc.getsolarxbyid);
rout.get('/star/:id',starc.getstarxbyid);
rout.get('/galaxy/:id',galaxyc.getgalaxyxbyid);

module.exports=rout;