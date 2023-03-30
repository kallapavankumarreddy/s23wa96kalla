var express = require('express');
var router = express.Router();
let x=Math.floor(Math.random());
let y
/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.x!=undefined){
        x=req.query.x;

    }
    let r=Math.atan(x);
    let t=Math.exp(x);
    let n=Math.expm1(x);
    
  res.render('computation', { x:x,atan:r, exp:t, expm1:n});
});

module.exports = router;
