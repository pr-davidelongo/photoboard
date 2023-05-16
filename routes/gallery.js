const express = require('express');
const router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {

  const {f,p1,p2} = req.query
  /* let parsedUrl = url.parse(req.url);
  let parsedQs = querystring.parse(parsedUrl.query); */

  if (req.session.usr_id >0){
    res.render('gallery', { title: 'Gallery - PhotoBoard', session : req.session });
  }else{
    // res.render('login', { title: 'WalletApp', session : req.session });
    res.redirect("/login");
  }

});

module.exports = router;
